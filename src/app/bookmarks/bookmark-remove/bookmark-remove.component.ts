import {Component, Input, OnInit} from '@angular/core';
import {BookmarksService} from '../bookmarks.service';
import {Bookmark} from '../bookmarks.models';

@Component({
  selector: 'tm-bookmark-remove',
  templateUrl: './bookmark-remove.component.html',
  styleUrls: ['./bookmark-remove.component.scss']
})
export class BookmarkRemoveComponent implements OnInit {
  @Input() show: Bookmark;

  constructor(private bs: BookmarksService<Bookmark>) {
  }

  ngOnInit() {
  }

  isNotBookmarked(): boolean {
    return !this.bs.has(this.show.id);
  }

  removeBookmark() {
    this.bs.remove(this.show.id);
  }

}
