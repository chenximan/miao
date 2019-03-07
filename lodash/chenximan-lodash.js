var chenximan = {
  chunk: function(array, size = 1) {
    var length = array.length
    var i = 0
    var result = []
    var j = 0
    while(i < length - size) {
      var subArray = []
      while(j < size) {
        subArray.push(array[i + j])
        j++
      }
      result.push(subArray)
      i += size
      j = 0
    }
    var subArray = []
    for (;i < length;i++) {
      subArray.push(array[i])
    }
    result.push(subArray)
    return result
  },

  compact: function(array) {
    var result = []
    var length = array.length
    for (let i = 0;i < length;i++) {
      if (array[i] === 0 || array[i] === false || array[i] === null || array[i] === "" ||array[i] === undefined || array[i] != array[i]) {
        continue
      } else{
        result.push(array[i])
      }
    }
    return result
  },
}