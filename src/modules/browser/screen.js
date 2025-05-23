/**
 * 进入全屏
 * @returns {void} undefined
 */
const fullScreen = () => {
    let el = document.documentElement
    let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen
    if (rfs) {
        rfs.call(el)
    } else if (typeof window.ActiveXObject !== "undefined") {
        let wscript = new ActiveXObject("WScript.Shell")
        if (wscript != null) {
            wscript.SendKeys("{F11}")
        }
    }
}

/**
 * 退出全屏
 * @returns {void} undefined
 */
const exitScreen = () => {
    let el = document
    let cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen
    if (cfs) {
        cfs.call(el)
    } else if (typeof window.ActiveXObject !== "undefined") {
        let wscript = new ActiveXObject("WScript.Shell")
        if (wscript != null) {
            wscript.SendKeys("{F11}")
        }
    }
}



export {
    fullScreen,
    exitScreen
}