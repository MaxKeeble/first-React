export const validators = {
  required: value => (value ? undefined : 'This field is required'),
  isNumber: value => (isNaN(+value) ? 'Please, enter a number' : undefined),


  minValue(min) {
    return ((value) => +value < min ? ('Value must be not less than ' + min) : undefined);
  },
  maxValue(max) {
    return ((value) => +value > max ? ('Value must be not greater than ' + max) : undefined);
  },

  minLength(min) {
    return (value => value.length < min ? ('Text must be not less than ' + min + ' characters') : undefined);
  },
  maxLength(max) {
    return (value => value.length > max ? ('Text must be not greater than ' + max + ' characters') : undefined);
  }


};

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);