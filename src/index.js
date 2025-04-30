//人口文件


//引入模块
import { sayHello } from './modules/sayHello.js';
import * as _array from './modules/array/index.js';
import * as _browser from './modules/browser/index.js';
import * as _cache from './modules/cache/index.js';
import * as _clone from './modules/clone/index.js';
import * as _common from './modules/common/index.js';
import * as _event from './modules/event/index.js';
import * as _JSON from './modules/JSON/index.js';
import * as _nodes from './modules/nodes/index.js';
import * as _number from './modules/number/index.js';
import * as _RE from './modules/RE/index.js';
import * as _string from './modules/string/index.js';
import * as _datetime from './modules/datetime/index.js';


//向外暴露成员 export不支持...这种动态的写法
export {
    sayHello,
    _array,
    _browser,
    _cache,
    _clone,
    _common,
    _event,
    _JSON,
    _nodes,
    _number,
    _RE,
    _string,
    _datetime,
}

export default {
    sayHello,
    _array,
    _browser,
    _cache,
    _clone,
    _common,
    _event,
    _JSON,
    _nodes,
    _number,
    _RE,
    _string,
    _datetime,
}