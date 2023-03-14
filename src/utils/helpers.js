import validator from 'validator';

const isValidEmail = (email) => {
  return validator.isEmail(email);
}

const isValidPassword = (password) => {
  return validator.isLength(password, { min: 6, max: 30 });
}
