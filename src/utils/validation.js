
export function formValidation({ email, password }) {
  const errorMessages = {
    email: [],
    password: [],
  };

  const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (email && !emailRegEx.test(email)) {
    errorMessages.email.push('Be valid email.');
  }

  if (email && email.length > 35) {
    errorMessages.email.push('Have less than 35 characters');
  }

  if (password && !/\d/.test(password)) {
    errorMessages.password.push('Numbers');
  }

  if (password && (password.length > 10 || password.length < 6)) {
    errorMessages.password.push('Between 6 and 10 characters');
  }

  return errorMessages;
}
