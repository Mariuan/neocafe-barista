export const phoneValidate = (phone) => {
    const str = /^((\+996|996|0)+([0-9]){9})$/;
    const regTest = new  RegExp(str);
    if (regTest.test(phone)) return true;
    else return false;
}

export const birthdayValidate = (date) => {
    var regexVar = new RegExp("([0-9]{2})\/([0-9]{2})\/([0-9]{4})");
    if (regexVar.test(date)) return true;
    else return false;
}