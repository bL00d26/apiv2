import { parseString, Builder } from 'xml2js';

/**
 * Converts an XML string into an JSON Object format.
 * @param xml The xml that will be parsed to JSON.
 * @returns {Object} The xml result after parsing.
 */
function xmlToJson(xml: string) {
  try {
    let json = {};
    parseString(
      xml,
      { trim: true, explicitArray: false },
      (err: any, result: any) => {
        if (err) throw err;
        json = result;
      },
    );
    return json;
  } catch (error) {
    return error;
  }
}

/**
 * Converts a JSON object into an XML String format.
 * @param obj The object that you want to convert to XML. The attributes for a tag must be included in a '$' prop.
 * @returns {String} The xml result after parsing.
 * @example
 * // returns ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?><root xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Envelope><soap:Body><Submit xmlns="http://freeway.freedompay.com/"><request>This is the request</request></Submit></soap:Body></soap:Envelope></root>')
 * jsonToXml({'soap:Envelope': {'soap:Body': {Submit: {$: {xmlns: 'http://freeway.freedompay.com/',},request: 'This is the request',},},},$: {'xmlns:soap': 'http://schemas.xmlsoap.org/soap/envelope/','xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance','xmlns:xsd': 'http://www.w3.org/2001/XMLSchema'}});
 */
function jsonToXml(obj: any) {
  try {
    const builder = new Builder();
    const xml = builder.buildObject(obj);
    return xml;
  } catch (error) {
    return error;
  }
}

export { xmlToJson, jsonToXml };
