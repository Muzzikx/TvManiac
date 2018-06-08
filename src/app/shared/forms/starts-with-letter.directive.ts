import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {startsWithLetterValidator} from './starts-with-letter.validator';

@Directive({
  selector: '[tmStartsWithLetter]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: StartsWithLetterDirective,
    multi: true,
  }],
})
export class StartsWithLetterDirective implements Validator {
  @Input('tmStartsWithLetter') upper = false;

  validate(control: AbstractControl): ValidationErrors | null {
    return startsWithLetterValidator(this.upper)(control);
  }

}
