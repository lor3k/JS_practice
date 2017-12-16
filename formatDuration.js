function formatDuration(num){
var y = Math.floor(num/(365*24*60*60))
var d = Math.floor((num-y*365*24*60*60)/(24*60*60))
var h = Math.floor((num-y*365*24*60*60-d*24*60*60)/(60*60))
var m = Math.floor((num-y*365*24*60*60-d*24*60*60-h*60*60)/60)
var s = num%60
  
var date = [y,d,h,m,s]
var names = ['year', 'day', 'hour', 'minute', 'second']

    for(var k=3, separation=[], andExist = false; k >=0 ; k--)
    if(date[k+1] !== 0 && andExist === true)
        separation[k] = ', '
    else if (date[k+1]!==0 && andExist === false){
        separation[k] = ' and '
        andExist = true}
    else
        separation[k] = ''
    separation.unshift('')

var stingifyDate = date.reduce(function(previousValue, currentValue, index){
    switch (currentValue) {
            case 0: d = ''; break;
            case 1: d = date[index]+' '+names[index]; break;
            default: d = date[index]+' '+names[index]+'s'}
        return (previousValue + separation[index] + d)
        },'')
return stingifyDate.charAt(0) === ',' ? stingifyDate.substring(2) : stingifyDate.charAt(0) === ' ' ? stingifyDate.substring(5) : stingifyDate
}