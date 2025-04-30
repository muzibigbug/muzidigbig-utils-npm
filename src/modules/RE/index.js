/**
 * JS使用正则匹配字符串中文
 * @param {*} mobile 
 * @returns Object
 * checkChinese("Hello 世界,I am happy to learn JavaScript!")
 * {
    "chArr": [
        "世",
        "界"
    ],
    "chLength": 2
}
 */
function checkChinese(str) {
    var reg = /[\u4e00-\u9fa5\uf900-\ufa2d]/g;  //匹配中文的字符   g表示全局匹配
    var res = str.match(reg);
    return { chArr: res, chLength: res.length }
}


export {
    checkChinese
}