/** 
 * 15. 数组乱序
 * var arr = [1, 5, 10, 21, 22, 25, 43, 55, 100];
 */
function randomArr(arr) {
    var randomArr = arr.sort(function (a, b) {
        return Math.random() - 0.5;
    });
    return randomArr;
}

export {
    randomArr
}