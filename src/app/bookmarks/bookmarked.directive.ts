import {Directive, HostBinding, HostListener, Input} from '@angular/core';
import {BookmarksService} from './bookmarks.service';
import {Bookmark} from '@models';

@Directive({
  selector: '[tmBookmarked]',
  exportAs: 'bookmarked',
})
export class BookmarkedDirective {
  @Input('tmBookmarked') item: Bookmark; // tslint:disable-line:no-input-rename

  constructor(private bs: BookmarksService) {
    console.log('Hello from directive');
  }

  @HostBinding('class.transparent')
  transparent = false;

  @HostBinding('class.bookmarked')
  get isBookmarked(): boolean {
    return this.bs.has(this.item.id);
  }

  @HostListener('click', ['$event.target'])
  toggleTransparent(target: HTMLElement) {
    if (target.tagName === 'IMG') {
      this.transparent = !this.transparent;
    }
  }

}
