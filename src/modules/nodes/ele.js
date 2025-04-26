/**
 * 获取body
 * document.body --> Google
 * document.documentElement --> <=IE8
 */
const bodyEle = () => {
    return document.body || document.documentElement;
}

/** 
 * 8. 创建一个带文本的节点
 * tagName --> 标签
 * txt --> 文本内容
 */
const createEleTxt = (tagName, txt) => {
    var node = document.createElement(tagName);
    var oTxt = document.createTextNode(txt);
    node.appendChild(oTxt);
    return node;
}

/** 
 * 9. 目标元素之后插入一个元素
 * newElement --> 新元素
 * targetElement --> 目标元素
 */
const insertAfter = (newElement, targetElement) => {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

/** 
 * 10. 替换文本
 * ele --> dom
 * txt --> 文本内容
 */
function replaceText(ele, txt) {
    return ele.innerText ? ele.innerText = txt : ele.textContext = txt;
}


export {
    bodyEle,
    createEleTxt,
    insertAfter,
    replaceText
}