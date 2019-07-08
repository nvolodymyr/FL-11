const MAIN_VISITORS_EMAIL='user@gmail.com';
const MAIN_ADMIN_EMAIL='admin@gmail.com';
const MAIN_VISITORS_EMAIL_PASSWORD='UserPass';
const MAIN_ADMIN_PASSWORD='AdminPass';
const MIN_COUNT_FOR_EMAIL=6;
const MIN_COUNT_FOR_PASSWORD=5;

const INPUT_EMAIL = prompt('Enter your email', '');
if(INPUT_EMAIL===MAIN_VISITORS_EMAIL){
 const INPUT_PASSWORD=prompt('Enter your password', '');
  if(INPUT_PASSWORD===MAIN_VISITORS_EMAIL_PASSWORD){
   let changePassword = confirm('Do you want to change your password?');
   if(changePassword){
    let validationPassword = prompt('Enter your Password', '');
       if (validationPassword === MAIN_VISITORS_EMAIL_PASSWORD) {
        let firstNewPassword = prompt('Enter new password', '');
        if (firstNewPassword.length < MIN_COUNT_FOR_PASSWORD) {
            alert('It’s too short password. Sorry.');
        } else if (firstNewPassword === null || firstNewPassword === '') {
         alert(`Canceled`);
        } else {
            let secondNewPassword = prompt('Enter new password again', '');
             if(firstNewPassword !== secondNewPassword){
                 alert(`Passwords do not match`);
            }else{
            alert('You have successfully changed your password');
            }
        }
    } else if (validationPassword === null || validationPassword === '') {
     alert(`Canceled`);
    } else {
        alert('Wrong password');
    }
} else if (changePassword === false) {
    alert('You have failed the change');
}
} else {
alert('Wrong Password');
}

 } else if(INPUT_EMAIL===MAIN_ADMIN_EMAIL){
  const INPUT_PASSWORD=prompt('Enter your password', '');
  if(INPUT_PASSWORD===MAIN_ADMIN_PASSWORD){
   let changePassword = confirm('Do you want to change your password?');
   if(changePassword){
    let validationPassword = prompt('Enter your Password', '');
       if (validationPassword === MAIN_VISITORS_EMAIL_PASSWORD) {
        let firstNewPassword = prompt('Enter new password', '');
        if (firstNewPassword.length < MIN_COUNT_FOR_PASSWORD) {
            alert('It’s too short password. Sorry.');
        } else if (firstNewPassword === null || firstNewPassword === '') {
            alert('Canceled');
        } else {
            let secondNewPassword = prompt('Enter new password again', '');
             if(firstNewPassword !== secondNewPassword){
              alert(`Passwords do not match`);
            }else{
            alert('You have successfully changed your password');
            }
        }
    } else if (validationPassword === null || validationPassword === '') {
     alert(`Canceled`);
    } else {
        alert(`Wrong password`);
    }
} else if (changePassword === false) {
    alert('You have failed the change');
}
} else {
alert('Wrong Password');
}
    }else if(INPUT_EMAIL===null||INPUT_EMAIL===''){
  alert(`Canceled`);
 } else if(INPUT_EMAIL.length<MIN_COUNT_FOR_EMAIL){
  alert(`I don't know any emails having name length less than 6 symbols`);
 } else {
  alert(`I don't know you....`);
 }






