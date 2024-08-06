export const validateChangePassword = (values) => {
    const errors = {};
  
    if (!values.oldPassword) {
      errors.oldPassword = "This field is required";
    }
  
    if (!values.newPassword) {
      errors.newPassword = "This field is required";
    } else if (values.newPassword.length < 8) {
      errors.newPassword = "Password must be at least 8 characters";
    }
  
    if (!values.confirmPassword) {
      errors.confirmPassword = "This field is required";
    } else if (values.confirmPassword !== values.newPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };
  