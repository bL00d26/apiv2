import {} from '../plugins';

function _getLoggerForStatusCode(statusCode: number) {
  if (statusCode >= 500) {
    return console.error.bind(console);
  }
  if (statusCode >= 400) {
    return console.warn.bind(console);
  }

  return console.log.bind(console);
}

export function logRequest(req, res, next) {
  const now = new Date().toISOString();
  const { method, originalUrl, httpVersion } = req;
  const userAgent = req.get('user-agent') || '-';
  console.info(
    `${now} - ${method} ${originalUrl}; HTTP/${httpVersion}; ${userAgent} ${req.body}`,
  );

  const cleanup = () => {
    res.removeListener('finish', logFn);
    res.removeListener('close', abortFn);
    res.removeListener('error', errorFn);
  };

  const logFn = () => {
    cleanup();
    const logger = _getLoggerForStatusCode(res.statusCode);
    logger(
      `:: ${now} - ${res.statusCode} ${res.statusMessage}; ${
        res.get('Content-Length') || 0
      }b sent`,
    );
  };

  const abortFn = () => {
    cleanup();
    console.warn('Request aborted by the client');
  };

  const errorFn = (err) => {
    cleanup();
    console.error(`Request pipeline error: ${err}`);
  };

  res.on('finish', logFn); // successful pipeline (regardless of its response)
  res.on('close', abortFn); // aborted pipeline
  res.on('error', errorFn); // pipeline internal error

  next();
}
