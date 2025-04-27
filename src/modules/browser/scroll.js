/**
 * 获取页面滚进去的距离
 * @returns {number} 滚动条的高度
 * 
 * window.pageYOffset --> 火狐/谷歌/ie9+以上支持的
 * window.scrollY --> 只读
 */
const scrollTop = () => {
    return document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || window.scrollY || 0;
}
/**
 * 浏览器滚动条宽度的计算方式
 */
const scrollLeft = () => {
    var clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
    return window.innerWidth - clientWidth;
}

/**
 * 获取当前页面滚动距离
 * @param {dom} el 
 * @returns {object} { x: 0, y: 215 }
 * 
 * getScrollPosition() // { x: 0, y: 215 }
 */
const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
})

/**
 * 平滑滚动至页面顶部
 */
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop

    if (c > 0) {
        window.requestAnimationFrame(scrollToTop)
        window.scrollTo(0, c - c / 8)
    }
}
// 将元素滚动到顶部最简单的方法是使用scrollIntoView。设置block为start可以滚动到顶部；设置behavior为smooth可以开启平滑滚动。
const scrollToTop2 = (element) =>
    element.scrollIntoView({ behavior: "smooth", block: "start" });

/**
 * 滚动到底部
 * @param {*} element
 */
const scrollToBottom = (element) =>
    element.scrollIntoView({ behavior: "smooth", block: "end" });



export {
    scrollTop,
    scrollLeft,
    getScrollPosition,
    scrollToTop,
    scrollToTop2,
    scrollToBottom
}