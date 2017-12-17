/*
 * https://www.codingame.com/ide/puzzle/power-of-thor-episode-1
 *
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialX = parseInt(inputs[2]); // Thor's starting X position
var initialY = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    var xDistance = lightX - initialX
    var yDistance = lightY - initialY
    var answer = []
    
    for(;xDistance !== lightX || yDistance !== lightY;){
    if (xDistance > 0 && yDistance > 0)
        {answer.push('SE'); initialX++; initialY++}
    else if (xDistance > 0 && yDistance < 0)
        {answer.push('NE'); initialX++; initialY--}
    else if (xDistance < 0 && yDistance > 0)
        {answer.push('SW'); initialX--; initialY++}
    else if (xDistance < 0 && yDistance < 0)
        {answer.push('NW'); initialX--; initialY--}
    else if (xDistance > 0 && yDistance === 0)
        {answer.push('E'); initialX++}
    else if (xDistance < 0 && yDistance === 0)
        {answer.push('W'); initialX--}
    else if (xDistance === 0 && yDistance > 0)
        {answer.push('S'); initialY++}
    else if (xDistance === 0 && yDistance < 0)
        {answer.push('N'); initialY--}   
    else {console.log('fail')}
    }
    print(answer.join(' '))
}