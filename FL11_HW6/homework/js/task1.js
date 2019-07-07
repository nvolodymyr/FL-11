const A1 = +prompt('enter Х of the point А');
const A2 = +prompt('enter Y of the point А');
const B1 = +prompt('enter Х of the point B');
const B2 = +prompt('enter Y of the point B');
const C1 = +prompt('enter Х of the point C');
const C2 = +prompt('enter Y of the point А');
const HALF=2;
let mainX, mainY;
if(isNaN(A1) || isNaN(A2) || isNaN(B1) || isNaN(B2) || isNaN(C1) || isNaN(C2)){
 console.log('Sorry one of coordinate was not a number');
}else{
 mainX = (A1+B1)/ HALF;
 mainY = (A2+B2)/ HALF;
if(C1 === mainX && C2 === mainY){
 console.log(true);
}else{
 console.log(false);
}
}
