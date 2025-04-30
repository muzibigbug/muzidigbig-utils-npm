/**
 * 节流函数
 * @param {function} func 
 * @param {number} limit 
 * @returns {function}
 */
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function (...args) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

/**
 * 创建一个使用requestAnimationFrame实现的节流函数
 * 
 * 该函数确保回调在每个动画帧内最多执行一次，适用于滚动、调整大小等高频事件处理
 * 
 * @template T - 任意函数类型
 * @param {function} fn - 需要节流的原始函数
 * @returns {function} 节流处理后的函数
 * 
 */

export function requestAnimationFrameThrottle(fn) {
    let locked = false;
    return function (...args) {
        if (locked) return;

        locked = true;
        window.requestAnimationFrame(() => {
            fn.apply(this, args);
            locked = false;
        });
    };
}


export {
    throttle,
    requestAnimationFrameThrottle,
};