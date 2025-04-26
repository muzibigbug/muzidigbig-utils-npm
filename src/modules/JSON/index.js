// json 对象去空格
function trimObj(obj) {
    if (!Array.isArray(obj) && typeof obj != 'object' || !obj && typeof (obj) != "undefined" && obj != 0) return obj;
    return Object.keys(obj).reduce(function (acc, key) {
        acc[key.trim()] = typeof obj[key] == 'string' ? obj[key].trim() : trimObj(obj[key]);
        return acc;
    }, Array.isArray(obj) ? [] : {});
}


export { trimObj };