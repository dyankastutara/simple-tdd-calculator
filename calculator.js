var methods = {}

methods.add = (val1,val2)=>{
    return val1+val2
}
methods.subtract = (val1,val2)=>{
    return val1-val2
}
methods.multiple = (val1,val2)=>{
    return val1*val2
}
methods.devided = (val1,val2)=>{
    return val1/val2
}
methods.exponent = (val1,val2)=>{
    return Math.pow(val1, val2)
}
methods.root = (val1,val2)=>{
    return Math.pow(val1, 1/val2)
}
module.exports = methods
