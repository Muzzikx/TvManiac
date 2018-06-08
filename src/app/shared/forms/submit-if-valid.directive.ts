import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';

@Directive({
  selector: '[tmSubmitIfValid]'
})
export class SubmitIfValidDirective {
  @Output('tmSubmitIfValid') submit = new EventEmitter<void>();

  constructor(private form: NgForm) {
  }

  @HostListener('click')
  handleClick() {
    this.markAsTouched();
    this.submitIfValid();
  }

  private markAsTouched() {
    Object.keys(this.form.controls)
      .forEach(controlName => {
        this.form.controls[controlName].markAsTouched();
      });
  }

  private submitIfValid() {
    if (this.form.valid) {
      this.submit.emit();
    }
  }

}
