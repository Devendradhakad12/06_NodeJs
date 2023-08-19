const {sum,mul,PI} = require('./02_Module_export')

let s = sum(2,3)
console.log(s)
let m = mul(2,3)
console.log(m)
  
console.log(PI)

//  import folder 
const info = require('./Fruits')
console.log(info)