import {
  BadRequestException,
  HttpException,
  HttpStatus,
  ValidationError,
} from '@nestjs/common';
import { execSync } from 'child_process';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { createHash } from 'crypto';
import { OrderLine } from '../interfaces';
import { Item as FreedompayItem } from '../interfaces/Freedompay/Item.interface';
import { mongoose, uuidv5 } from '../plugins/index';

export const generateRandomString = (length: number): string => {
  let randomString = '';
  const possibleChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    randomString += possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length),
    );
  }
  return randomString;
};

export const toObjectId = (id: string) => {
  try {
    return new mongoose.Types.ObjectId(id);
  } catch (error) {
    return error;
  }
};

export const patchSubDocumentMongo = (key: string, obj: any) => {
  const toPatch = {};
  Object.keys(obj).forEach((k) => {
    toPatch[`${key}.$.${k}`] = obj[k];
  });
  return toPatch;
};

export const isObjectId = (id: string): boolean => {
  const { ObjectId } = mongoose.Types;
  const objectIdValid = (id) =>
    ObjectId.isValid(id)
      ? String(new ObjectId(id) === id)
        ? true
        : false
      : false;
  const isValidByRegex = /^[0-9a-fA-F]{24}$/.test(id);
  const isvalidByMongoose = objectIdValid(id);

  return isvalidByMongoose && isValidByRegex;
};

export const isEmail = (emailAdress) => {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailAdress.match(regexEmail) ? true : false;
};

export const isNcrID = (ncrId) => {
  const regexncrId = /^\d{20}/;
  return regexncrId.test(ncrId);
};

export const isFullName = (fullName) => {
  return fullName.search(/\s/) !== -1;
};

export function buildQueryParams(queryParams: any) {
  let queryString = '';
  if (queryParams) {
    const queryKeys = Object.keys(queryParams);
    queryKeys.forEach((key, index) => {
      if (index === 0) {
        queryString += `?${key}=${queryParams[key]}`;
        return;
      }
      queryString += `&${key}=${queryParams[key]}`;
    });
  }

  return queryString;
}
export function normalizeText(text: string) {
  return text.toLowerCase().trim().replace(/\s/g, '');
}
export const generateUUID = () => {
  const randomStr = generateRandomString(32);
  const requestId = uuidv5(randomStr, uuidv5.URL);
  return requestId;
};

export const generateMaskedNumberFromLast4 = (last4: string) =>
  `${new Array(12).join('X')}${last4}`;

export const removeCommasfromAmount = (amount: number): number =>
  Number(amount.toFixed(2).toString().replace('.', ''));

export const getLatestVersionFromSpecificApp = (appTagName: string) =>
  `git tag --list --sort=-version:refname "${appTagName}*" | head -n 1 `;

export const validateTypeFileFromMimeType = (
  validFileTypes: string[],
  fileType: string,
): boolean => validFileTypes.includes(fileType.split('/')[1]);

export const validateCertificateFile = (validFileTypes: string[], file) => {
  if (!file) {
    const err = {
      statusCode: HttpStatus.BAD_REQUEST,
      message: `Missing File`,
      error: 'Bad Request',
    };
    throw new BadRequestException(err);
  }
  const isValidFile = validateTypeFileFromMimeType(
    validFileTypes,
    file.mimetype,
  );
  if (!isValidFile) {
    const err = {
      statusCode: HttpStatus.BAD_REQUEST,
      message: `Invalid File type, only ${validFileTypes.join(
        ',',
      )} are allowed`,
      error: 'Bad Request',
    };
    throw new BadRequestException(err);
  }
  const isMaxSize = file.size / 1000 > 5000;
  if (isMaxSize) {
    const err = {
      statusCode: HttpStatus.BAD_REQUEST,
      message: `File size exceeded, max 5mb`,
      error: 'Bad Request',
    };
    throw new BadRequestException(err);
  }
};

export const validateDtoInstance = async (instance: any, plainValue: any) => {
  const dto = plainToInstance(instance, plainValue, {
    excludeExtraneousValues: true,
  });

  // Validate
  const errors: ValidationError[] = await validate(dto);
  if (errors.length > 0) {
    //Get the errors and push to custom array
    const validationErrors = errors.map((obj) =>
      Object.values(obj.constraints),
    );
    const message = `Validation failed with following Errors: ${validationErrors}`;
    return new HttpException(message, HttpStatus.BAD_REQUEST);
  }
};

export const validateDto = async (instance: any, plainValue: any) => {
  return plainToInstance(instance, plainValue, {
    excludeExtraneousValues: true,
  });
};

export const generateDueDateForInvoice = (
  pickupDate: string,
  isDev: boolean,
): number => {
  const date = new Date(pickupDate);
  const additionalDays = isDev ? 1 : 30;
  const overdueDate = date.setDate(date.getDate() + additionalDays);
  const unixDate = overdueDate / 1000;
  return unixDate;
};

export const prepareTransactionParams = (
  TableName: string,
  AppInstallationID: string,
) => ({
  TableName,
  Key: {
    AppInstallationID,
  },
  ConsistentRead: true,
});

export const findCredentials = (AppInstallation: any, ApiKey: string) =>
  AppInstallation.Parameters.apiKeys.find(
    (apikey) => apikey._id.toString() === ApiKey,
  ).credentials;

export const generateTestConnection = (url: string, env: string) => {
  const originalConnectionUrl = new URL(url);
  const connectionPath = originalConnectionUrl.pathname.split('/').slice(1)[0];
  const testPath = `${connectionPath.replace(/env/g, '')}test`;

  //const testPath = `${connectionPath.replace(env, '')}test`;
  const testConnectionUrl = url.replace(connectionPath, testPath);
  return testConnectionUrl;
};

export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const getAppVersion = (tagName: string) =>
  execSync(getLatestVersionFromSpecificApp(tagName)).toString().trim() ??
  `@${tagName}v0.0.0`;

/**
 * Returns a hashed version of the user email to be used on freedompay transactions.
 * @param {String} email The email to be hashed
 * @returns {String} the hashed email
 */
export function hashPurchaserCode(email: string | undefined) {
  if (email) {
    const hash = createHash('sha256');
    hash.update(email);
    return hash.digest('hex');
  }
  return '';
}

/**
 * Builds an array of items for freedompay payment requests.
 * @param {IOrderline[]} items The items to be transformed into freedompay's item format.
 * @returns The array of items in freedompay's items format.
 */
export function buildFreedompayItems(
  items: OrderLine[],
): FreedompayItem[] | [] {
  if (items?.length > 0) {
    const itemsByRequest: FreedompayItem[] = [];
    // Save orderline ids
    let orderLineIds = items.map((item: OrderLine) => item.productId.value);
    const newOrderLines: OrderLine[] = [];
    // Eliminate duplicates
    orderLineIds = Array.from(new Set(orderLineIds));
    orderLineIds.map((id: string) => {
      const result = items.filter(
        (item: OrderLine) => item.productId.value === id,
      );
      if (result) {
        const newResult = JSON.parse(JSON.stringify(result));
        newResult.map((product: OrderLine, index: number) => {
          if (index === 0) {
            product.quantity.value = result.length;
            newOrderLines.push(product);
          }
          return product;
        });
      }
      return id;
    });
    newOrderLines.map((item: OrderLine) => {
      const { productId, comments, description, unitPrice, quantity } = item;
      const totalAmount = (unitPrice * quantity.value).toFixed(2);
      itemsByRequest.push({
        productSKU: productId.value,
        productName: comments,
        productDescription: description,
        saleCode: 'S',
        unitPrice: unitPrice,
        quantity: quantity.value,
        totalAmount: parseFloat(totalAmount).toFixed(2),
        taxIncludedFlag: 'N',
        discountFlag: 'N',
      });
      return item;
    });
    return itemsByRequest.filter(
      (item: FreedompayItem) =>
        item.unitPrice !== 0 || parseFloat(item.totalAmount) !== 0,
    );
  }
  return [];
}

/**
 * Compares and gets the diff from two different dates in various formats.
 * @param {String} newDate -- The new Date to be used for comparison.
 * @param {String} previousDate -- The previous Date to be used for comparison.
 * @returns {Object} An object containing multiple results from comparison.
 */
export function getTimeDiffsForPayments(newDate: string, previousDate: string) {
  const newDateMilis = new Date(newDate).getTime();
  const previousDateMilis = new Date(previousDate).getTime();
  const diffInMilis = newDateMilis - previousDateMilis;

  const diffInHours = Math.round(diffInMilis / 3600000);
  const diffInDays = Math.round(diffInHours / 24);
  const today = Date.now();
  const diffInMilisFromToday = newDateMilis - today;

  const diffInHoursFromToday = Math.round(diffInMilisFromToday / 3600000);
  const diffInDaysFromToday = Math.round(diffInHoursFromToday / 24);

  return {
    diffInHours,
    diffInDays,
    newDateMilis,
    diffInDaysFromToday,
  };
}
