/**
 * 
 * @param {string} name cookie名字
 * @param {any} value cookie值
 * @param {number} day cookie保存的时间
 */
const setCookie = (name, value, day) => {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + day);
    document.cookie = name + "=" + value + ";expires" + oDate;
}

/**
 * 
 * @param {string} name cookie的名字
 * @returns 
 */
const getCookie = (name) => {
    var str = document.cookie;
    var arr = str.split(';');
    for (var i = 0; i < arr.length; i++) {
        var arr1 = arr[0].split("=");
        if (arr1[0] == name) {
            return arr1[1];
        }
    }
}

const getAllCookie = () => {
    var str = document.cookie;
    var arr = str.split(';');
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var arr1 = arr[i].split("=");
        obj[arr1[0]] = arr1[1];
    }
    return obj;
}
const getCookieValue = (name) => {
    var str = document.cookie;
    var arr = str.split(';');
    for (var i = 0; i < arr.length; i++) {
        var arr1 = arr[i].split("=");
        if (arr1[0] == name) {
            return arr1[1];
        }
    }
}
const getCookieName = (name) => {
    var str = document.cookie;
    var arr = str.split(';');
    for (var i = 0; i < arr.length; i++) {
        var arr1 = arr[i].split("=");
        if (arr1[0] == name) {
            return arr1[0];
        }
    }
}

const removeCookie = (name) => {
    setCookie(name, null, -1);
}
const removeAllCookie = () => {
    var str = document.cookie;
    var arr = str.split(';');
    for (var i = 0; i < arr.length; i++) {
        var arr1 = arr[0].split("=");
        removeCookie(arr1[0]);
    }
}


export {
    setCookie,
    getCookie,
    getAllCookie,
    getCookieValue,
    getCookieName,
    removeCookie,
    removeAllCookie
}
