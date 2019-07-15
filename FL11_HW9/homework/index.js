let var1=1;
let var2=2;
let var3=3;
let var5=5;
let var8=8;
//0 tusk
let getNumbers = string => {
 let newArrayNumbers = [];

 for ( let i = 0; i < string.length; i++ ) {
   if (parseInt(string[i]) !== ' ' && parseInt(string[i])/parseInt(string[i]) === 1) {
    newArrayNumbers.push(parseInt(string[i]));
   }
 }
 return newArrayNumbers;
}
console.log(getNumbers('stridsdd3222323ng'));
console.log(getNumbers('n1um3ber95'));
console.log(getNumbers('srtring'));
//1 tusk
let findTypes=(...args) => {
  let objectTypes={},
  keys=[],value=[],
  screen='';
  for (let i = 0; i < args.length; i++) {
   if ( objectTypes[typeof args[i]] === undefined ) {
    objectTypes[typeof args[i]] = 1 
   } else {
    objectTypes[typeof args[i]] += 1    
   }
   
 }
 
 for (let property in objectTypes) {
  if (objectTypes.hasOwnProperty(property)) {
      keys.push(property)
    }
}
for (let property in objectTypes) {
  if (objectTypes.hasOwnProperty(property)) {
   value.push(objectTypes[property])
    }
    
}
for (let i = 0; i < keys.length; i++) {
 if ( i === 0 ){
  screen += '{'
 }
 if ( i < keys.length-1) {
  screen += `"${keys[i]}":${value[i]};`  
 } else if (i === keys.length-1) {
  screen += `"${keys[i]}":${value[i]}}` 
 }
}
return screen;

}

console.log(findTypes(null, var5, 'hello'));

//2 tusk
let executeforEach = (array, fn) => {
	for (let i = 0; i < array.length; i++) {
		fn(array[i]);
	}
}


executeforEach([1,var2,var3], (el) => { 
 console.log(`${el}`);
 } );
 //3 tusk
  let mapArray =(array,fn) => {
   let newAray=[];
  executeforEach(array,(el) => {
newAray.push(fn(el));
  });
  return newAray;
  }
  console.log(mapArray([var2, var5, var8], function(el) {
    return el + var3;
    }));
    //4 tusk

    let filterArray=(array,fn) => {
     let newAray=[];
     executeforEach(array,(el) => {
      if(fn(el)){
       newAray.push(el);
      }
     });
     return newAray;
     
    }
    console.log(filterArray([var2, var5, var8], function(el) {
      return el > var3;
      }) );
      //5 tusk
      let showFormattedDate=(date) => {
       let monthNames = ['Jan', 'Feb', 'Mar',
                         'Apr', 'May', 'Jun', 
                         'Jul', 'Aug', 'Sep', 
                         'Oct', 'Nov', 'Dec' ];
       return ' Date: ' + date.getDate() + 
       ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
   }
   console.log(showFormattedDate(new Date('2019-01-27T01:10:00')) );
   //6 tusk 
   let canConvertToDate = (date) => {
    date = new Date(date);
    date = '' + date;
    return date !== 'Invalid Date'
}
console.log(canConvertToDate('2016-13-18T00:00:00')); 
console.log(canConvertToDate('2016-03-18T00:00:00')); 
//7 tusk
let daysBetween = (firstDate, secondDate) => {
  let seconds = 1000;
 let minutes = 60;
 let day=1440;
  let result = Math.abs(firstDate - secondDate);
 let main=Math.round(result/(seconds*minutes*day));
 return main;
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')))
//8 tusk
let data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];
let getAmountOfAdultPeople=(array) => {
 const OLD_PEOPLE=18;
 const YEAR=365;
 return filterArray(array, (el) => {
  return daysBetween( new Date(), new Date(el[' birthday ']))>OLD_PEOPLE*YEAR;
}).length
}
console.log(getAmountOfAdultPeople(data));
//9 tusk
let keys = (obj) => {
  let keys = [];
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
        keys.push(property)
      }
  }
  return keys
}
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));
//10 tusk
let values = (obj) => {
  let values = [];
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
        values.push(obj[property])
      }
  }
  return values  
}

console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));
