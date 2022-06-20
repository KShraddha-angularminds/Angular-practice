import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forBiddenNameValidator(forBiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forBidden = forBiddenName.test(control.value);
    return forBidden ? { forBiddenName: { value: control.value } } : null;
  };
}
