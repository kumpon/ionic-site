export function noop() {}
;
export function clamp(min, n, max) {
  return Math.max(min, Math.min(n, max));
}
export function extend(dst) {
  return _baseExtend(dst, [].slice.call(arguments, 1), false);
}
export function merge(dst) {
  return _baseExtend(dst, [].slice.call(arguments, 1), true);
}
function _baseExtend(dst, objs, deep) {
  for (var i = 0,
      ii = objs.length; i < ii; ++i) {
    var obj = objs[i];
    if (!obj || !isObject(obj) && !isFunction(obj))
      continue;
    var keys = Object.keys(obj);
    for (var j = 0,
        jj = keys.length; j < jj; j++) {
      var key = keys[j];
      var src = obj[key];
      if (deep && isObject(src)) {
        if (!isObject(dst[key]))
          dst[key] = isArray(src) ? [] : {};
        _baseExtend(dst[key], [src], true);
      } else {
        dst[key] = src;
      }
    }
  }
  return dst;
}
export function defaults(dest) {
  for (let i = arguments.length - 1; i >= 1; i--) {
    let source = arguments[i] || {};
    for (let key in source) {
      if (source.hasOwnProperty(key) && !dest.hasOwnProperty(key)) {
        dest[key] = source[key];
      }
    }
  }
  return dest;
}
export const isString = (val) => typeof val === 'string';
export const isNumber = (val) => typeof val === 'number';
export const isFunction = (val) => typeof val === 'function';
export const isDefined = (val) => typeof val !== 'undefined';
export const isUndefined = (val) => typeof val === 'undefined';
export const isBlank = (val) => val === undefined || val === null;
export const isObject = (val) => typeof val === 'object';
export const isArray = Array.isArray;
export function pascalCaseToDashCase(str = '') {
  return str.charAt(0).toLowerCase() + str.substring(1).replace(/[A-Z]/g, (match) => {
    return '-' + match.toLowerCase();
  });
}
let uid = 0;
export function nextUid() {
  return ++uid;
}
export class Log {
  static log(...args) {
    console.log.apply(console, args);
  }
  static info(...args) {
    console.info.apply(console, args);
  }
  static warn(...args) {
    console.warn.apply(console, args);
  }
  static error(...args) {
    console.error.apply(console, args);
  }
}
export const array = {
  find(arr, cb) {
    for (let i = 0,
        ii = arr.length; i < ii; i++) {
      if (cb(arr[i], i))
        return arr[i];
    }
  },
  remove(arr, itemOrIndex) {
    let index = -1;
    if (isNumber(itemOrIndex)) {
      index = itemOrIndex;
    } else {
      index = arr.indexOf(itemOrIndex);
    }
    if (index < 0) {
      return false;
    }
    arr.splice(index, 1);
    return true;
  }
};
export function getQuerystring(url, key) {
  var queryParams = {};
  if (url) {
    const startIndex = url.indexOf('?');
    if (startIndex !== -1) {
      const queries = url.slice(startIndex + 1).split('&');
      if (queries.length) {
        queries.forEach((param) => {
          var split = param.split('=');
          queryParams[split[0]] = split[1];
        });
      }
    }
    if (key) {
      return queryParams[key] || '';
    }
  }
  return queryParams;
}
