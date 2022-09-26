var weight = [35,38,42,45,43,34,36,41,48,32];
var average = 0;
var sum = 0;

function setup() {
  createCanvas(400,400);
  for (var i=0; i<weight.lenght; i++){
    sum=sum+ weight[i]
  }
  average= sum/weight.lenght;
  console.log(average)
}

function draw() 

{
  background(30);
}
 