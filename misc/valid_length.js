const isValidLength = (phoneNumber) => {
const validLength = 11;
if (phoneNumber.length == validLength) {
    return true;
} else {
    return false;
}
}

module.exports = isValidLength;