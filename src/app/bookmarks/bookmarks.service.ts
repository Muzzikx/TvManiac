import {Injectable} from '@angular/core';
import {Bookmark, BookmarkId} from './bookmarks.models';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService<T extends Bookmark> {
  private items: T[] = [];

  constructor() {
  }

  getAll(): T[] {
    return [...this.items];
  }

  add(item: T): void {
    this.items.push(item);
  }

  remove(id: BookmarkId): void {
    this.items = this.items.filter(value => value.id !== id);
  }

  has(id: BookmarkId): boolean {
    return this.items.some(value => value.id === id);
  }
}
