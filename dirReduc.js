function dirReduc(arr){
var horizontal=0, vertical=0, position=[], answer=[] // position
for(var i=0; i<arr.length; i++)
switch(arr[i]){
  case 'NORTH': vertical++; position.push(['N',horizontal]); break;
  case 'SOUTH': vertical--; position.push(['S',horizontal]); break;
  case 'EAST': horizontal++; position.push(['E',vertical]); break;
  case 'WEST': horizontal--; position.push(['W',vertical]); break;}
console.log(position)
var tablica = []
for(i=0; i<position.length; i++){
if(position[i][0] === ('N' || 'S')) tablica.push(position[i][1])
else tablica.push(position[i][1])

}
// for(; vertical>0; vertical--) answer.push('NORTH')
// for(; vertical<0; vertical++) answer.push('SOUTH')
// for(; horizontal>0; horizontal--) answer.push('EAST')
// for(; horizontal<0; horizontal++) answer.push('WEST')

// return answer
}