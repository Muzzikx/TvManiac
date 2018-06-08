import {Directive} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {usernameAvailableValidator} from './username-available.validator';

@Directive({
  selector: '[tmUsernameAvailable]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: UsernameAvailableDirective,
    multi: true,
  }],
})
export class UsernameAvailableDirective implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return usernameAvailableValidator(control);
  }

}
