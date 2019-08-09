/*
Find the third largest number in an array given an array of numbers with at least a size `5` without sorting.
*/



var mydata =[20,120,111,215,54,78];
var big=-9999999;
var big2=-9999999;
var big3=-99999999;
for(var i=0;i<mydata.length;i++){
    if(mydata[i]>big){
        big=mydata[i];
    }
}
for(var j=0;j<mydata.length;j++){
    if(mydata[j]>big2&&mydata[j]<big){
        big2=mydata[j];
    }
}
for(var k=0;k<mydata.length;k++){
    if(mydata[k]>big3&&big2>mydata[k]){
        big3=mydata[k];
    }
}
console.log("the third largest element is "+big3);

