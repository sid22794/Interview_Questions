/*
A shop was selling 4 chocolates for ₹1 and if you return three wrappers you get 1 chocolate free.
 If so, how many chocolates can you get for Rs. N. Write a program with input as N which will be entered.
*/
var readline=require('readline');
var num=readline.createInterface(process.stdin,process.stdout);
num.question("input your money: ",function(answer){
    var choco=0;
    var extra=0;
    while(answer){
        choco+=5;
        extra++;
        if(extra>=3){
            choco++;
            extra-=3;
        }
        answer--;
    }
    console.log("you get "+choco+" number of chocolates");
    num.close();
});