export default function showErrorMessage(locationInput, errorMessage) {
  if (locationInput.validity.valueMissing) {
    errorMessage.textContent = "Location required";
  } else if (locationInput.validity.tooShort) {
    errorMessage.textContent = `Should be at least ${locationInput.minLength} characters`;
  } else if (locationInput.validity.tooLong) {
    errorMessage.textContent = `Should be less than ${locationInput.maxLength} characters`;
  }
}
