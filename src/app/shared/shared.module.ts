import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { StartsWithLetterDirective } from './forms/starts-with-letter.directive';
import { UsernameAvailableDirective } from './forms/username-available.directive';
import { SubmitIfValidDirective } from './forms/submit-if-valid.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoaderComponent, StartsWithLetterDirective, UsernameAvailableDirective, SubmitIfValidDirective],
  exports: [LoaderComponent, StartsWithLetterDirective, UsernameAvailableDirective, SubmitIfValidDirective]
})
export class SharedModule { }
