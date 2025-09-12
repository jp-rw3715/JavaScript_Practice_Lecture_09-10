//  1: Mobile Number Validation (India Standard)

{
  function validateMobile(mobile) {
    let regex = /^[6-9]\d{9}$/;
    return regex.test(mobile);
  }
  console.log(validateMobile("9876543210")); // true
  console.log(validateMobile("1234567890")); // false
}

//  2: Email Validation (Simple)

{
  function validateEmail(email) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    return regex.test(email);
  }
  console.log(validateEmail("test@example.com")); // true
  console.log(validateEmail("invalid@.com")); // false
}
