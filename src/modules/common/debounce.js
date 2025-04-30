/**
 * 防抖函数
 * @param {function} func 
 * @param {number} delay 
 * @returns {function}
 */
function debounce(func, delay = 100) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}


export default debounce;