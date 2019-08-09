/*
We want to make a row of bricks that is "X"(given) inches long. 
We have a number of small bricks (2 inch each) and big bricks (5 inches each).
 Write a program that returns True if it is possible to make the "X" inches wall by using the given bricks.
*/


var readline=require('readline');
var num=readline.createInterface(process.stdin,process.stdout);
num.question("input lenght of wall: ",function(answer){
    if(answer%2==0&&answer>0){
        console.log("wall can made");
    }
    else if(answer%2==1&&answer>0&&answer!=1&&answer!=3){
        console.log("wall can made");
    }
    else{
        console.log("wall can't made");
    }
    num.close();
});