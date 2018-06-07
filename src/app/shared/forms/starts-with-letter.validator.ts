import {AbstractControl, ValidationErrors} from '@angular/forms';

export function startsWithLetterValidator(upper = false) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const rule = upper ? /^[A-Z].*/ : /^[a-zA-Z].*/;
    return rule.test(control.value) ? null : {startsWithLetter: control.value[0]};
  };
}
