/* 
    34 判断当前设备是Andoird还是iOS
*/
const isIOS = () => {
    let u = navigator.userAgent,
        app = navigator.appVersion
    let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1
    let isIOS = !!u.match(/\(i[^]+( U)? CPU.+Mac OS X/)

    if (isIOS) {
        return 0
    } else if (isAndroid) {
        return 1
    } else {
        return 2
    }
}

/* 
    检测设备
 */
const isMobile = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    ) ? "Mobile" : "Desktop";

// 判断当前处于什么环境(浏览器环境 | 设备终端)
const browserType = () => {
    const userAgent = navigator.userAgent;
    const appVersion = navigator.appVersion;
    const version = {
        isIos: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios 终端 
        //isMobile: !!userAgent.macth(/(iPhone|iPod|iPad|Android|ios)/i), // 是否移动终端
        isMobile: !!userAgent.match(/AppleWebKit.*Mobile.*/), // 是否移动终端
        isAndroid: userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1, // android 终端端或者uc 浏览器
        // isAndroid: !!appVersion.match(/android/gi),
        isIphone: !!userAgent.indexOf('iPhone') > -1, // 是否为iPhone或则QQHD浏览器
        // isIphone:  !!appVersion.match(/iphone/gi);
        iPad: userAgent.indexOf('iPad') > -1, // 是否是iPad
        isWebApp: userAgent.indexOf('Safari') === -1, // 是否为Webapp，没有头部和底部
        isTrident: userAgent.indexOf('Trident') > -1, //IE内核
        isPresto: userAgent.indexOf('Presto') > -1, // opera 内核
        isWebKit: userAgent.indexOf('AppleWebkit') > -1, // 苹果谷歌内核
        isGecko: userAgent.indexOf('Gecko') > -1 && userAgent.indexOf('KHTML') === -1, //火狐内核
        isWechat: !!userAgent.match(/micromessenger/gi),
        isWeiBo: !!userAgent.match(/weibo/gi),
        isQQ: !!userAgent.match(/qq/gi),
    }
    const language = (navigator.browserLanguage || navigator.language).toLowerCase();
    return {
        version, language
    }
}

export {
    isIOS,
    isMobile,
    browserType
}