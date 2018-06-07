import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookmarkAddComponent} from './bookmark-add/bookmark-add.component';
import { BookmarkRemoveComponent } from './bookmark-remove/bookmark-remove.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookmarkAddComponent, BookmarkRemoveComponent],
  exports: [BookmarkAddComponent, BookmarkRemoveComponent]
})
export class BookmarksModule {
}
