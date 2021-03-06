
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix===undefined) return []
  let array =[]
  let sub = []
  matrix.map((str, index)=>{
    sub = []
    str.map((item)=>{
      sub.push(item)
    })
    if(index%2===0) sub.map((item)=>array.push(item))
    else sub.reverse().map((item)=>array.push(item))
  })
  return array
}
