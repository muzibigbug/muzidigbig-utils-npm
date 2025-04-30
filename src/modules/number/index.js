/** 
 * 12. min~max之间的随机整数
 * min --> 最小值
 * max --> 最大值
 */
function randomNum(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

/**
 * 
 * 判断NaN更可靠的方法是，利用NaN为唯一不等于自身的值的这个特点
 */
function myIsNaN(value) {
    return value !== value;
}

/**
 * 数据千分位, 并四舍五入保留指定小数位
 * @param {number} num - 要格式化的数字
 * @param {number} decimalPlaces - 小数位数，默认为0
 * @returns {string} - 格式化后的字符串
 * 
 * console.log(thousandth(1234567.8912, 2)); // 输出: "1,234,567.89"
 */
function thousandth(num, decimalPlaces = 0) {
    // 四舍五入到指定小数位
    const roundedNum = num.toFixed(decimalPlaces);
    // 添加千分位分隔符
    return roundedNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


export {
    randomNum,
    myIsNaN,
    thousandth
}