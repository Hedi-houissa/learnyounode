let index = 2 
let sum = 0
while (process.argv[index]){
 sum+= +process.argv[index]
 ++index
}
console.log (sum)
