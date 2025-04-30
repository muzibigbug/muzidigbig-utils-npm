import debounce from './debounce.js';
import {
    throttle,
    requestAnimationFrameThrottle,
} from './throttle.js';
import autoScale from './autoScale.js';
import {
    downloadEvt,
    downloadByBlob,
    download
} from './downloadEvt.js';

/**
 * 对象去空格
 * @param {object | array} obj 
 * @returns 
 */
function trimObj(obj) {
    if (!Array.isArray(obj) && typeof obj != 'object' || !obj && typeof (obj) != "undefined" && obj != 0) return obj;
    return Object.keys(obj).reduce(function (acc, key) {
        acc[key.trim()] = typeof obj[key] == 'string' ? obj[key].trim() : trimObj(obj[key]);
        return acc;
    }, Array.isArray(obj) ? [] : {});
}

/** 
 * 鉴别原型属性
 */
function hasPrototype(obj, name) {
    return name in obj && !obj.hasOwnProperty(name);
}

/**
 * 数据类型判断
 * 
 * console.log(dataType(undefined)); // Undefined
 */
function dataType(typeObj) {
    // typeObj 类型实例
    // return 构造函数类型
    // Object.prototype.toString.call(数据)  // 最后返回由"[object"+" "+"class"]"三个部分组成的字符串
    return Object.prototype.toString.call(typeObj).slice(Object.prototype.toString.call(typeObj).indexOf(' ') + 1, Object.prototype.toString.call(typeObj).length - 1);
}

/** 
 * 深冻结函数
 * {name:'muzi',addre:{city1:'wuhan',city2:'上海'}}
 *      
*/
function deepFreeze(obj) {
    // 取回定义在obj上的属性名
    var propNames = Object.getOwnPropertyNames(obj);
    // 在冻结自身之前冻结属性
    propNames.forEach(function (name) {
        var prop = obj[name];
        // 如果prop是个对象，冻结它
        if (typeof prop == 'object' && prop !== null)
            deepFreeze(prop);
    });
    // Object.freeze 冻结自身(no-op if already frozen), 返回值是其参数本身(即源对象也被改动了)
    return Object.freeze(obj);
}

// 对象深度冻结（对象里的所有属性都不能更改）
function deepFreeze2(obj) {
    Reflect.ownKeys(obj).forEach(key => {
        // 对象里还有对象
        typeof obj[key] === 'object' && (obj[key] = constan(obj[key]))
    })
    return Object.freeze(obj); // Object.freeze()  不会进行set get
}

export {
    debounce,
    throttle,
    requestAnimationFrameThrottle,
    autoScale,
    downloadEvt,
    downloadByBlob,
    download,
    hasPrototype,
    deepFreeze,
    dataType,
    deepFreeze2,
    trimObj,
}