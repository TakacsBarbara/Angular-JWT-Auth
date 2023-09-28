import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password: any = control.get('password');
    const confirmPassword: any = control.get('confirm_password');

    if (password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }

    return null;
  };
}

export function passwordIsCorrect(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password: any = control.get('password');
      const minLength = 8;
  
      if (password.length < minLength) {
          return { minLength: true };
      }
  
      if (!/[A-Z]/.test(password)) {
          return { uppercaseCharacter: true };
      }
  
      if (!/\d/.test(password)) {
          return { number: true };
      }
  
      return null;
    };
}
