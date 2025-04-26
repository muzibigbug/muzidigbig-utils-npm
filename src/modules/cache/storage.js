/**
 * @description 异步缓存
 * @param {string} key 需要缓存的 key
 * @param {any} value 需要缓存的 value   通过JSON.stringify序列化的对象
 * @param {number} time 需要缓存的 时间   单位分钟，超过缓存时间清除此缓存, 不传默认0需要手动清除或端的自动清除
 */

/**
 * @description 同步缓存
 */
export const setStorageSync = (key, value, time) => {
  time = time ? time * 60 * 1000 + Date.now() : 0;
  let obj = {
    value,
    time,
  };
  window.localStorage.setItem(key, JSON.stringify(obj));
};
// 同步获取缓存
export const getStorageSync = (key) => {
  let res = window.localStorage.getItem(key);
  res = JSON.parse(res);
  let curTime = Date.now();
  if (res?.time && curTime > res?.time) {
    // 已过期
    window.localStorage.removeItem(key);
    return null;
  } else {
    return res?.value || null;
  }
};

export const clearStorage = (key) => {
  if(key){
    window.localStorage.removeItem(key);
  }else{
    window.localStorage.clear();//清除所有缓存
  }
};
// 同步删除缓存
export const removeStorageSync = (key) => {
  window.localStorage.removeItem(key);
};

/**
 * @description 同步缓存
 */
export const setSessionStorageSync = (key, value, time) => {
  time = time ? time * 60 * 1000 + Date.now() : 0;
  let obj = {
    value,
    time,
  };
  window.sessionStorage.setItem(key, JSON.stringify(obj));
};

// 同步获取缓存
export const getSessionStorageSync = (key) => {
  let res = window.sessionStorage.getItem(key);
  res = JSON.parse(res);
  let curTime = Date.now();
  if (res?.time && curTime > res?.time) {
    // 已过期
    window.sessionStorage.removeItem(key);
    return null;
  } else {
    return res?.value || null;
  }
};

export const clearSessionStorage = (key) => {
  if(key){
    window.sessionStorage.removeItem(key);
  }else{
    window.sessionStorage.clear();//清除所有缓存
  }
};
// 同步删除缓存
export const removeSessionStorageSync = (key) => {
  window.sessionStorage.removeItem(key);
};
