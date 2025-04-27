/**
 * 获取浏览器URL中查询字符串中的参数
 * @param {string} url 浏览器URL
 * @returns {object} 参数对象
 * 
 * getParamsWithUrl('http://www.muzidigbig.com?id = 1022 & name = muzidigbig & age = 1 ');
 */
function getQueryObject(url = window.location.href) {
    var args = url.split('?');
    if (args[0] === url) {
        return null;
    }
    var arr = args[1].split('&');
    var obj = {};
    for (
        var i = 0; i < arr.length; i++) {
        var arg = arr[i].split('=');
        obj[arg[0].trim()] = arg[1].trim();
    }
    return obj;
}

export { getQueryObject };