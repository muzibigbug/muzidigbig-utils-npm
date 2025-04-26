/** 
 * 7. 获取当前生效的css
 * targetEle --> 事件源dom
 * property --> 要获取的样式
 * 返回值：有单位会带单位
 */
function getStyle(targetEle, property) {
    return targetEle.currentStyle ? targetEle.currentStyle[property] : window.getComputedStyle(targetEle, null)[property];
}

export default getStyle;