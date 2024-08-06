export const validate = (values) => {
    const errors = {};
  
    if (!values.name) {
      errors.name = "This field is required";
    }
    if (!values.email) {
      errors.email = "This field is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.description) {
      errors.description = "This field is required";
    } else if (values.description.split(" ").length > 250) {
      errors.description = "Description cannot exceed 250 words";
    }
    // if (!values.password) {
    //   errors.password = "This field is required";
    // }
  
    return errors;
  };