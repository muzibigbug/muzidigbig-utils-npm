/**
 * 事件监听/移除(多个)
 * ele --> 事件源
 * type --> 事件类型不带on
 * fun --> 事件函数
 * useCapture --> 事件是否在捕获或冒泡阶段执行
 * 		addEvent(document.getElementById('h2'),'click', fun, false)
 */
function addEvent(ele, type, fun, useCapture = false) {
    if (ele.addEventListener) {
        ele.addEventListener(type, fun, useCapture);
    } else {
        ele.attachEvent('on' + type, fun);
    }
}

function removeEvent(ele, type, fun, useCapture = false) {
    if (ele.removeEventListener) {
        ele.removeEventListener(type, fun, useCapture);
    } else {
        ele.detachEvent('on' + type, fun);
    }
}
/** 
 * 阻止事件的默认行为
 */
function preventDefault(event) {
    if (window.event) {
        // IE中阻止函数默认动作的方式
        window.event.returnValue = false;
    } else {
        event.preventDefault();
    }
    // 另一种写法：return false;
}

/** 
 * 阻止事件冒泡/事件传播
 */
function stopBubble(event) {
    if (event && event.stopPropagation) {
        event.stopPropagation();
    } else {
        //ie
        window.event.cancelBubble = true;
    }
}
/**
 * 阻止冒泡的另一种方式
 * 自己点击自己被处理
 */
function stopBubble2(event) {
    var e = event || window.event;
    var targetEle = e.target || e.srcElement;
    return targetEle == e.currentTarget;
}

export {
    addEvent,
    removeEvent,
    preventDefault,
    stopBubble,
    stopBubble2
}