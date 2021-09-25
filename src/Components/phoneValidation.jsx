export const validate = (phone) => {
    const str = /^((\+996|996|0)+([0-9]){9})$/;
    const regTest = new  RegExp(str);
    if (regTest.test(phone)) return true;
    else return false;
}