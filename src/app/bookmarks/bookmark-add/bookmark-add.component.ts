import {Component, Input, OnInit} from '@angular/core';
import {BookmarksService} from '../bookmarks.service';
import {Bookmark} from '../bookmarks.models';

@Component({
  selector: 'tm-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.scss']
})
export class BookmarkAddComponent implements OnInit {
  @Input() show: Bookmark;

  constructor(private bs: BookmarksService<Bookmark>) {
  }

  ngOnInit() {
  }

  isBookmarked(): boolean {
    return this.bs.has(this.show.id);
  }

  saveBookmark() {
    this.bs.add(this.show);
  }
}
