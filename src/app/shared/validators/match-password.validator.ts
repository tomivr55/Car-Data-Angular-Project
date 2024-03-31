import { ValidatorFn } from '@angular/forms';

export function matchPassValidator(
  passwordControlName: string,
  rePasswordControlName: string
): ValidatorFn {
  return (control) => {
    const password = control.get(passwordControlName);
    const rePassword = control.get(rePasswordControlName);

    const matching = password?.value == rePassword?.value;
    return matching ? null : { matchPassValidator: true };
  };
}
