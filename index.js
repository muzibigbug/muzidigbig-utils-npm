//人口文件


//引入模块
import { sayHello } from './src/modules/sayHello.js';
import * as array from './src/modules/array/index.js';
import * as browser from './src/modules/browser/index.js';
import * as cache from './src/modules/cache/index.js';
import * as common from './src/modules/common/index.js';
import * as clone from './src/modules/clone/index.js';
import * as _event from './src/modules/event/index.js';
import * as _JSON from './src/modules/JSON/index.js';
import * as nodes from './src/modules/nodes/index.js';
import * as number from './src/modules/number/index.js';


//向外暴露成员 export不支持...这种动态的写法
export {
    sayHello,
    array,
    browser,
    cache,
    common,
    clone,
    _event,
    _JSON,
    nodes,
    number,
}

export default {
    sayHello,
    array,
    browser,
    cache,
    common,
    clone,
    _event,
    _JSON,
    nodes,
    number,
}