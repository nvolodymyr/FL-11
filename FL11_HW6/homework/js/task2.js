const FIRSTSIDE=+prompt('Enter first side', '');
const SECONDSIDE=+prompt('Enter second side', '');
const THIRDSIDE=+prompt('Enter third side', '');

if (FIRSTSIDE + SECONDSIDE > THIRDSIDE && FIRSTSIDE + THIRDSIDE > SECONDSIDE && SECONDSIDE + THIRDSIDE > FIRSTSIDE) {
 console.log('Triangle  exist...');
 
     if (FIRSTSIDE === SECONDSIDE && SECONDSIDE === THIRDSIDE && THIRDSIDE === FIRSTSIDE) {
         console.log('Eequivalent triangle...');
     } else if (FIRSTSIDE === SECONDSIDE || FIRSTSIDE === THIRDSIDE || SECONDSIDE === THIRDSIDE) {
         console.log('Isosceles triangle');
     } else if (FIRSTSIDE !== SECONDSIDE && SECONDSIDE !== THIRDSIDE && THIRDSIDE !== FIRSTSIDE) {
         console.log('Normal triangle');
     }else {
     console.log('Triangle doesn’t exist');
     }
 }