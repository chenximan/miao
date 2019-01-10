function after(n, func) {
    if (typeof func != 'function') {
      throw new TypeError('Expected a function')
    }
    return function(...args) {
      if (--n < 1) {
        return func.apply(this, args)
      }
    }
  }
  
  export default after