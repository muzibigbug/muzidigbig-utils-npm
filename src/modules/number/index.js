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


export {
    randomNum,
    myIsNaN
}