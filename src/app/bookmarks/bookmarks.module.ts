import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookmarkAddComponent} from './bookmark-add/bookmark-add.component';
import { BookmarkRemoveComponent } from './bookmark-remove/bookmark-remove.component';
import { BookmarkedDirective } from './bookmarked.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookmarkAddComponent, BookmarkRemoveComponent, BookmarkedDirective],
  exports: [BookmarkAddComponent, BookmarkRemoveComponent, BookmarkedDirective]
})
export class BookmarksModule {
}
