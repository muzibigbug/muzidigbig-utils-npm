/**
 * 返回指定属性 JSON字符串 
 * @param {object | array} obj 
 * @param {array} attrs 
 * @returns object
 * 
 * var obj = {
        "name": "muzidigbig",
        "age": "18",
        "lists": [
          {"name": "xxx1", "age": "28"},
          {"name": "xxx2", "age": "29"},
          {"name": "xxx3", "age": "30"}
        ]
      };
 * returnJsonStrAttrs(obj,['name']) => {name: 'muzidigbig'}
 */
const returnJsonStrAttrs = (obj, attrs = []) => {
    if (!Array.isArray(obj)) {
        return attrs.length > 0 ? JSON.stringify(obj, attrs) : obj;
    } else {
        return attrs.length > 0 ? attrs.map(index => obj[index]).filter(item => item !== undefined) : obj;

    }
}

// 深拷贝浅拷贝请看 => src/modules/clone/index.js

export {
    returnJsonStrAttrs
};