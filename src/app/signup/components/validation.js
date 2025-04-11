export function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export function validatePhonenumber (Phnumber){
    if(Phnumber.length != 10 || Phnumber == null)
    {
        return false;
    }
    return true;
}

export function validateSex(sex){
    if (sex != "male" || sex != "female" || sex != "other"){
        return "Invalid sex"
    }
}

export function validatePassword(password){
    if(password.length < 8){
        return false
    }
}
