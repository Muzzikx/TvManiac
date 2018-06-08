import {AbstractControl, ValidationErrors} from '@angular/forms';
import {from, Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';

export function usernameAvailableValidator(control: AbstractControl): Observable<ValidationErrors | null> {
  if (!control.value) {
    return null;
  }

  const url = 'https://jsonplaceholder.typicode.com/users';
  return from(
    fetch(url)
      .then(res => res.json())
  )
    .pipe(
      delay(1000),
      map(users => users.some(user => user.username === control.value)),
      map(userExist => userExist ? { usernameAvailable: true} : null)
    );
}
