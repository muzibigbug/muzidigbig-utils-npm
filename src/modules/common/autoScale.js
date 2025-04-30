import { debounce } from './debounce.js'

/**
 * scale 大屏适配
 * @param {*} selector 
 * @param {object} options 
 * 
缺点：
1.因为是根据 ui 稿等比缩放，当大屏跟 ui 稿的比例不一样时，会出现周边留白情况（transform:scale(缩放倍数);的X、Y值一样）
2.当缩放比例过大时候，字体会有一点点模糊
3.当缩放比例过大时候，事件热区会偏移
4.在超大尺寸和异形屏下有失真模糊 变形等问题

优点：
1.代码量最少，模糊失真很小（除特殊）
 */
function autoScale(selector, options) {
    const el = document.querySelector(selector)
    // 设计稿尺寸，默认是 1920 x 1080
    const { width = 1920, height = 1080 } = options

    el.style.transformOrigin = 'top left'
    el.style.transition = 'all 0.2s'
    function init() {
        const scaleX = window.innerWidth / width
        const scaleY = window.innerHeight / height
        const scale = Math.min(scaleX, scaleY)

        const left = (innerWidth - width * scale) / 2
        const top = (innerHeight - height * scale) / 2
        el.style.transform = `translate(${left}px, ${top}px) scale(${scale}, ${scale})`
    }

    init()
    addEventListener('resize', debounce(init, 200))

}

export default autoScale