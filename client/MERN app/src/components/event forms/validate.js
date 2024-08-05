export const validateForm = (isOneDayEvent) => (values) => {
  const errors = {};

  // required field validation
  if (!values.name) {
    errors.name = "This field is required";
  }
  if (!values.description) {
    errors.description = "This field is required";
  } else if (values.description.split(" ").length > 250) {
    errors.description = "Description cannot exceed 250 words";
  }
  if (!values.startDate) {
    errors.startDate = "This field is required";
  }
  if (isOneDayEvent && !values.endDate) {
    errors.endDate = "This field is required";
  } else if (
    isOneDayEvent &&
    values.startDate &&
    values.endDate &&
    values.startDate > values.endDate
  ) {
    errors.endDate = "End date/time cannot be earlier than start date/time";
  }
  if (!values.location) {
    errors.location = "This field is required";
  }
  if (!values.registrationLink) {
    errors.registrationLink = "This field is required";
  } else if (!/^https?:\/\/\S+/.test(values.registrationLink)) {
    errors.registrationLink = "Enter a valid URL";
  }
  // if (!values.socialLinks) {
  //   errors.socialLinks = "This field is required";
  // } else {
  //   const links = values.socialLinks.split(",");
  //   links.forEach((link, index) => {
  //     if (!/^https?:\/\/\S+/.test(link.trim())) {
  //       errors.socialLinks = `Enter valid URLs for social links (error at position ${
  //         index + 1
  //       })`;
  //     }
  //   });
  // }
  if (!values.field) {
    errors.field = "This field is required";
  }
  if (!values.eventType) {
    errors.eventType = "This field is required";
  }

  return errors;
};
