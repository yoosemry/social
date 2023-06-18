const fullName = document.querySelector('#fullname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm');
const submitForm = document.querySelector('#submitForm');

// Get users from local storage
const getUsersFromLocal = function(){
    let users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

// Get user information
const getUserInfoFromLocal = function(){
    let userInformation = localStorage.getItem('userInformation');
    return userInformation ? JSON.parse(userInformation) : null;
}

const userInformation = getUserInfoFromLocal();

if(userInformation){
    window.location.href = '/';
}

const addUsersToLocal = function(data){
    const users = getUsersFromLocal();
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
}

submitForm.addEventListener('submit', function(event){

    event.preventDefault();
    
    if(password.value !== confirm.value){
        alert("Password dosen't match");
        return;
    }

    if(password.value.length < 8 && confirm.value.length < 8){
        alert('Password Must Be 8 Characters')
        return;
    }


const checkFullName = fullName.value.split(' ').length <= 1;

 if(checkFullName){
    alert('Complete Fullname');
    return;
 }         

 const allUsers = getUsersFromLocal();

 

 const checkemail = allUsers.find(function(emails){
    return emails.email === email.value
 });

        if(checkemail){
            alert('Already Created This Email');
            return;
        }
        
            const registrationData = {
                fullName: fullName.value,
                email: email.value,
                password: password.value
            };

          
    
            const userInfo = {
                username: email.value,
                lastName: fullName.value.split(' ')[1]
            };
    
            addUsersToLocal(registrationData);
            localStorage.setItem('userInformation', JSON.stringify(userInfo));
            window.location.href = '/';
        
        

   
});

