/**
 * @param {array} arr 数组
 * @returns {array} 乱序后的数组
 */
function randomArr(arr) {
    var randomArr = arr.sort(function (a, b) {
        return Math.random() - 0.5;
    });
    return randomArr;
}

/**
 * 清空数组，会修改原数组
 * @param {array} arr 
 */
const clearOriginaArr = (arr) => {
    arr.length = 0;
}

/**
 * 清空数组，不会修改原数组
 * @param {array} arr 
 * @returns {array} []
 */
const clearNoOriginaArr = (arr) => {
    return arr.filter(() => false);
}

/**
 * 获取数组中的最大值
 * @param {array} arr 
 * @returns {number} 最大值
 * 
 * var bb = [1,2,4,5,6,88,43.6,"98.5","2.6"]
 * maxArr(bb) => 98.5
 */
const maxArr = (arr) => {
    arr = arr.filter(item => +item)
    return Math.max(...arr)
}

/**
 * 封装去重方法; 后出现不会覆盖前面; 不会改变原数组
 * @param {array} arr 
 * @param {sstring} uniqueKey 
 * @returns {array} 去重后的数组
 * 
 * removeDup(arr,'id')
 * [{id:1,name:'m'},{id:2,name:'mu'},{id:4,name:'muz'},{id:2,name:'muzi'}] => [{id:1,name:'m'},{id:2,name:'mu'},{id:4,name:'muz'}]
 */
function removeDup(arr, uniqueKey) {
    let map = new Map()
    for (let i of arr) {
        if (!map.has(i[uniqueKey])) {
            map.set(i[uniqueKey], i)
        }
    }
    arr = [...map.values()];
    return arr;
}
function removeDup2(arr, uniqueKey) {
    var result = [];
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (!obj[arr[i][uniqueKey]]) {
            result.push(arr[i]);
            obj[arr[i][uniqueKey]] = true;
        }
    }
    return result;
}

/**
 * 封装去重方法; 后出现会覆盖前面; 不会改变原数组
 * @param {array} arr 
 * @param {string} uniqueKey 
 * @returns {array} 去重后的数组
 * 
 * removeDup(arr,'id')
 * [{id:1,name:'m'},{id:2,name:'mu'},{id:4,name:'muz'},{id:2,name:'muzi'}] => [{id:1,name:'m'},{id:2,name:'muzi'},{id:4,name:'muz'}]
 */
function removeDupReplaceBefore(arr, uniqueKey) {
    let map = new Map()
    for (let i of arr) {
        if (!map.has(i[uniqueKey])) {
            map.set(i[uniqueKey], i)
        } else {
            map.set(i[uniqueKey], i)
        }
    }
    arr = [...map.values()];
    return arr;
}

/**
 * 统计元素出现的次数
 * @param {array} arr 文本数组
 * @returns {object} 统计后的对象
 * 
 * ["apple","orange","apple","orange","pear","orange"] => {apple:2,orange:3,pear:1}
 */
const countArrayElements = (arr) => {
    var obj = {};
    for (var i = 0, l = arr.length; i < l; i++) {
        var item = arr[i];
        obj[item] = (obj[item] + 1) || 1;
    }
    return obj;
}
const countArrayElements2 = (arr) => {
    return arr.reduce(function (prev, next) {
        prev[next] = (prev[next] + 1) || 1;
        return prev;
    }, {});
}

/**
 * 以指定key为key统计数组对象的数量
 * @param {array} arr 
 * @param {string} field 
 * @returns {array} 统计后的数组
 * 
 * [{id:1,name:'m'},{id:2,name:'mu'},{id:4,name:'muz'},{id:2,name:'muzi'}] => [{id:1,count:1},{id:2,count:2},{id:4,count:1}]
 */
const countByFieldAsArray = (arr, field) => {
    return arr.reduce((acc, item) => {
        const fieldValue = item[field];
        const existingItem = acc.find(obj => obj[field] === fieldValue);
        if (existingItem) {
            existingItem.count += 1;
        } else {
            acc.push({ [field]: fieldValue, count: 1 });
        }
        return acc;
    }, []);
};

/**
 * 一维对象数组变对象
 * @param {array} arr 数组对象
 * @returns {object} 对象
 * 
 * [{1:'liming'},{2:'xiaohong'},{3:'xiaoming'}] => {1:'liming',2:'xiaohong',3:'xiaoming'}}
 */
const arrayItemObjToObj = (arr) => {
    let obj = arr.reduce((total, item) => {
        return Object.assign(total, item)
    }, {});
    return obj;
}

/**
 * 扁平化数组
 * @param {array} arr 
 * @returns {array} 扁平化后的数组
 * 
 * ['mu', 'zi', ['dig', ['big', 'love']]] => ['mu', 'zi', 'dig', 'big', 'love']
 */
const flatten = (arr) => {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(flatten(arr[i]));
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

const flatten2 = (arr) => {
    return arr.reduce(function (prev, cur) {
        return prev.concat(Array.isArray(cur) ? flatten2(cur) : cur);
    }, []);
};




export {
    randomArr,
    clearOriginaArr,
    clearNoOriginaArr,
    maxArr,
    removeDup,
    removeDup2,
    removeDupReplaceBefore,
    countArrayElements,
    countArrayElements2,
    countByFieldAsArray,
    arrayItemObjToObj,
    flatten,
    flatten2,
}