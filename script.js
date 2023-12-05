const fname = document.getElementById("name")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const age = document.getElementById("age")
const role = document.getElementById("role")
const country = document.getElementById("country")
const phone = document.getElementById("phonenumber")
var comment = document.getElementById("comment")
const password1 = document.getElementById("pass1")
const password2 = document.getElementById("pass2")
var gender = document.getElementsByName("recommed")
const checkbox = document.getElementById("inp1")
const form = document.getElementById("form")
// const uppercase = [A - Z];
var a = 0


form.addEventListener('submit', e => {
    e.preventDefault();
    validateForm();
    // if (a == 8) {
    // dispaly();
    // }
    // else {
    // a = 0
    // }
})
const validateForm = () => {

    let username = fname.value.trim();
    let lastname = lname.value.trim();
    let emailValue = email.value.trim();
    let ageValue = age.value.trim();
    let phonenum = phone.value.trim();
    let cmnt = comment.value.trim();
    let pass1value = password1.value.trim();
    let pass2value = password2.value.trim();
    // let country;
    let result = "";

    // name:

    if (username === "") {
        setError(fname, 'Enter the First Name')
        // return false;
    }
    else {
        setSuccess(fname)
        const firstNameValue = fname.value
        localStorage.setItem('first-name', firstNameValue)
        // console.log('username::',username);
        // console.log(username);
    }
    if (lastname === "") {
        setError(lname, 'Enter the Last Name')
        // return false;
    }
    else {
        setSuccess(lname)
        const lastNameValue = lname.value
        localStorage.setItem('last-name', lastNameValue)

    }
    // email

    if (emailValue === "") {
        setError(email, 'email field cannot be blank')
        // return false;
    }
    else if (!isEmail(emailValue)) {
        setError(email, 'enter the valid email address')
        // return false;
    }
    else {
        setSuccess(email)
        const emailValue = email.value
        localStorage.setItem('email-value', emailValue)
    }

    // age
    if (ageValue === "") {
        setError(age, "enter the age")
        // return false;
    }
    else {
        setSuccess(age)
         ageValue = age.value
        localStorage.setItem('age-value', ageValue)
    }
    // role
    let roleValue;
    if (role === "") {
        setError(role, 'select the option')
        // return false;
    }
    else {
        setSuccess(role)
    }
    roleValue = role.value
    localStorage.setItem('role-value', roleValue)
    // console.log(form.role);
    if (form.role.value == "") {
        setError(role, 'select the profession')
    }
    else {
        setSuccess(role)
    }
   
    // console.log(country);
    // if (form.country.value == "") {
    //     setError(country, 'select the country')
    //     // return false;
    // }
    // else {
    //     // country = form.country.value
    //     setSuccess(country)
      
    // }
    // console.log(country);

    let countryValue 
    // country
    if (country.value === "") {
        setError(country, 'select the country')
        // return false;
    }
    else {
        setSuccess(country)
         countryValue = country.value
        localStorage.setItem('country-value', countryValue)
    }
    console.log(countryValue);
    //phone number
    if (phonenum === "") {
        setError(phone, 'enter the nubmer')
        // return false;
    }
    else if (phonenum.length > 10) {
        setError(phone, 'enter 10 digits number')
    }
    else {
        setSuccess(phone)
        const phoneValue = phone.value
        localStorage.setItem('phone-value', phoneValue)
    }
    // cmnt
    if (cmnt === "") {
        setError(comment, 'kindly give suggestion')
        // return false;
    }
    else {
        setSuccess(comment)
        const commentValue = comment.value
        localStorage.setItem('comment-value', commentValue)
    }
    // country
    // if (country === "") {
    //     setError(country, 'kindly select the country')
    // }
    // else {
    //     setSuccess(country)
    // }
    // password1
    var passlen1 = pass1value.length < 5
    var passlen2 = pass2value.length < 5
    var passlen3 = pass1value.length > 12
    var passlen4 = pass2value.length > 12


    if (pass1value === "") {
        setError(password1, 'enter the password')
        // return false;
    }
    else if (passlen1) {
        setError(password1, 'enter atleast 5 digits')
        // return false;
    }
    else if (passlen3) {
        setError(password1, 'passowrd must contains 12 characters')
        // return false;
    }
    else if (pass2value !== pass1value) {
        setError(password1, 'enter the confirm password')
        // return false;
    }
    // else if (pass1value !== uppercase) {
    //     setError(password1, 'enter a captail digit')
    // }
    else {
        setSuccess(password1)
        const fisrtpass = password1.value
        localStorage.setItem('pass1-value', fisrtpass)
    }
    // pass2
    if (pass2value === "") {
        setError(password2, 'enter the password')
        // return false;
    }
    else if (passlen2) {
        setError(password2, 'enter atleast 5 digits')
        // return false;
    }
    else if (passlen4) {
        setError(password2, 'passowrd must contains 12 characters')
        // return false;
    }
    else if (pass2value !== pass1value) {
        setError(password2, 'enter the same password')
        // return false;
    }
    else {
        setSuccess(password2)
        const secondpass = password2.value
        localStorage.setItem('pass2-value', secondpass)
    }



    //----------------------------------
    // var getSelectedValue = document.querySelector('input[name="recomemend"]:checked');
    // if (getSelectedValue != null) {
    //     document.getElementById("disp").innerHTML = ""
    //     document.write(gender)
    // }
    // else {
    //     document.getElementById("disp").innerHTML = "radio button is not checked" 
    // }
    var ele = document.getElementsByName("recomemend")
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            result = ele[i].value
            // console.log(result);
            // document.write(result)
            break;
        }

    }
    localStorage.setItem("gender-value", result)


    // var getSelectedValue = document.querySelector('input[name="inp1"]:checked');
    // if (getSelectedValue != null) {
    //     document.getElementById("displ").innerHTML = ""
    // }
    // else {
    //     document.getElementById("displ").innerHTML = "select atleast one course"
    // }

    var elem = document.getElementsByName("inp1")
    var resultnew="";
    for (i = 0; i < elem.length; i++) {
        if (elem[i].checked) {

            if (resultnew.length == 0) {
                resultnew = elem[i].value
            }
            else {
                resultnew += "," + elem[i].value
            }

            // break;

        }
    }
    // console.log(resultnew);
    // console.log(country);
    localStorage.setItem('inp-value', resultnew)


    // console.log('gender::',emailValue);
    // console.log('gender::',ageValue);
    // console.log('gender::',phonenum);
    // console.log('gender::',cmnt);
    // console.log('gender::',username);
    // console.log('gender::',lastname);
    // console.log('gender::',roleValue);
    // console.log('gender::',roleValue);

    if (username != "" && lastname != "" && emailValue != "" && ageValue != "" && roleValue != "" &&  countryValue  != "" && phonenum != "" && cmnt != "" && pass1value != "" && pass2value != "" && result != "" && resultnew != "") {
        window.location.href = 'next.html'
    }

    return false;
}


//-------------------------------------------

const setError = (input, messgae) => {

    const formControl = input.parentElement;
    console.log(formControl);
    const small = formControl.querySelector("small")
    formControl.classList = 'form-control error'

    small.innerText = messgae;
}
const setSuccess = (input) => {
    // a+=1
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


