var chenximan = {
  chunk: function(ary,size) {
    let n = Math.floor(ary.length / size)
    if(size === 0 || n === 0)
      return ary
    let result = []
    let count = -1
    for(let i=1; i<=n; i++) {
      count++
      result.push([])
      for(let j=i*size-size; j<i*size; j++) {
        result[count].push(ary[j])
      }
    }
    let last = ary.length % size
    for(let i=1; i<=last; i++) {
      count++
      result.push([])
      result[count].unshift(ary[ary.length-i])
    }
    return result
  },
  compact: function(ary) {
    let result = []
    for(let i=0; i<ary.length; i++) {
      if(ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  },
  isArray: value => Object.prototype.toString.call(value) === "[object Array]",
},