// digression: difference between let and var
for(var i=0 ; i<5 ; i++){}
console.log(i)

for(let j=0 ; j<5 ; j++){}
console.log(j)
/*
Exception: ReferenceError: j is not defined
@Scratchpad/3:31:1
*/
