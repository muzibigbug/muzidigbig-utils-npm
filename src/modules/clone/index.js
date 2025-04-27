/** 
 * 浅拷贝
 *  var obj1 = {
        'name' : 'zhangsan',
        'age' :  '18',
        'language' : [1,[2,3],[4,5]],
    };
    var obj2 = shallowCopy(obj1);

    Object.assign({}, obj1);
*/
function shallowClone(initalObj) {
    var result = {};
    for (var prop in initalObj) {
        if (initalObj.hasOwnProperty(prop)) {
            result[prop] = initalObj[prop];
        }
    }
    return result;
}

/** 
 * 深拷贝
*      var obj1 = {
        name:{username:'muzi'},
        age:22,
        arr:[1,2,3,4],
        say:function() {
            console.log(this.name.username);
        }
    }
    var obj2 = deepClone(obj1);


    JSON.parse(JSON.stringify(obj1)); // undefined和函数无法赋值
*/
function deepClone(initalObj) {
    // 要判断 initalObj 是对象还是数组
    if (Array.isArray(initalObj)) {
        // 数组
        var result = [];
        for (let i = 0; i < initalObj.length; i++) {
            result.push(deepClone(initalObj[i]))
        }
    } else if (typeof initalObj == "object") {
        // 对象
        var result = {};
        for (var key in initalObj) {
            // 递归之后的原来的值
            result[key] = deepClone(initalObj[key]);
        }
    } else {
        // 基本类型
        var result = initalObj;
    }
    return result;
}
function deep(obj) {
    // 判断数据类型是否是数组/对象 进行新数据声明
    // 新建一个新的地址
    if (!(obj instanceof Object) || !(obj instanceof Array)) { return obj }
    var targetObj = obj instanceof Array ? [] : {};
    // 循环 obj
    for (const key in obj) {
        // 忽略从原型继承的属性，不进行拷贝
        if (obj.hasOwnProperty(key)) {
            const value = obj[key]; //对应的value
            // 判断 value 是否是数组对象？
            if (value instanceof Array || value instanceof Object) {
                // 递归复制新的地址数据
                targetObj[key] = deep(value)
            } else {
                targetObj[key] = value
            }
        }
    }

    return targetObj
}
/**
 * 一般用于深拷贝后端接口数据；不适用于函数、undefined和symbol 类型
 * @param {array | object} obj 
 * @returns {array | object}
 * 
 * 可能存在一下问题：
 *  1.undefined、function、symbol 在转换后直接被忽略了
 *  2.正则表达式转换成对象，日期转换成字符串
 *  3.NaN、Infinity 直接变成 null
 */
function deepCopyByJSON(obj) {
    return JSON.parse(JSON.stringify(obj))
}


export {
    shallowClone,
    deepClone,
    deep,
    deepCopyByJSON
}