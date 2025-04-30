/**
 * 获取浏览器URL中查询字符串中的参数
 * @param {string} url 浏览器URL
 * @param {string[]} [params] 指定要获取的参数名称数组
 * @returns {object} 参数对象
 * 
 * getQueryObject('http://www.muzidigbig.com?id=1022&name=muzidigbig&age=1', ['name', 'age']); // 输出: { name: "muzidigbig", age: "1" }
 * getQueryObject('http://www.muzidigbig.com?id=1022&name=muzidigbig&age=1'); // 输出: { id: "1022", name: "muzidigbig", age: "1" }
 */
function getQueryObject(url = window.location.href, params = []) {
    var args = url.split('?');
    if (args[0] === url) {
        return null;
    }
    var arr = args[1].split('&');
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var arg = arr[i].split('=');
        if (arg.length === 2) {
            obj[arg[0].trim()] = arg[1].trim();
        }
    }
    if (params.length > 0) {
        var result = {};
        for (var j = 0; j < params.length; j++) {
            if (obj[params[j]] !== undefined) {
                result[params[j]] = obj[params[j]];
            }
        }
        return result;
    }
    return obj;
}


export { getQueryObject };