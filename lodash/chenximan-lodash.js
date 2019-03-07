var chenximan = {
  identity: value => value,
  isArray: value => Object.prototype.toString.call(value) === '[object Array]',
  isObject: value => {
    if(typeof value === 'function') return true
    return (Array.isArray(value) || Object.prototype.toString.call(value) === '[object Object]')
  },
}