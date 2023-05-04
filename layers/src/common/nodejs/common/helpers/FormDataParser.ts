/**
 * Converts a JSON object into a Form-data compatible object.
 * @param obj The Json Object to be parsed
 * @param parent The property name from the parent
 * @returns {Object} The Object result after parsing.
 */
function jsonToformData(obj: any, parent = '') {
  let name = '';
  let auxObj = {};
  for (const p in obj) {
    if (['string', 'number', 'boolean'].includes(typeof obj[p])) {
      if (parent) {
        name = `${parent}[${p}]`;
      } else name = `${p}`;
      auxObj[name] = String(obj[p]);
    } else {
      if (parent)
        auxObj = {
          ...auxObj,
          ...jsonToformData(obj[p], `${parent}[${p}]`),
        };
      else auxObj = { ...auxObj, ...jsonToformData(obj[p], p) };
    }
  }
  return auxObj;
}
export { jsonToformData };
