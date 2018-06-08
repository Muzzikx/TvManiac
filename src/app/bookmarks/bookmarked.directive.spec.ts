import {BookmarkedDirective} from './bookmarked.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Bookmark} from '@models';
import {Component, Provider} from '@angular/core';
import {BookmarksService} from './bookmarks.service';
import {By} from '@angular/platform-browser';

@Component({
  template: '<div [tmBookmarked]="item" class="abc"></div>'
})
class DummyComponent {
  item: Bookmark;
}

describe('BookmarkedDirective', () => {
  let fixture: ComponentFixture<DummyComponent>;
  let component: DummyComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkedDirective, DummyComponent],
      providers: [
        <Provider>{
          provide: BookmarksService,
          useValue: {
            has: id => id === 123
          },
        }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
  });

  it('compiled', () => {
    expect(component).toBeTruthy();
  });

  it('adds "bookmarked" class is item is bookmarked', () => {
    component.item = {id: 123};
    fixture.detectChanges();

    const host = fixture.debugElement.query(By.css('div'));

    expect(host.classes.bookmarked).toBe(true);
  });

  it('does not add "bookmarked" class is item is not bookmarked', () => {
    component.item = {id: 123414523};
    fixture.detectChanges();

    const host = fixture.debugElement.query(By.css('div'));

    expect(host.classes.bookmarked).not.toBe(true);
  });

  describe('"transparent" class', () => {
    it('does not  initially and "transparent" class', () => {
      const host = fixture.debugElement.query(By.css('div'));
      expect(host.classes.bookmarked).toBeFalsy();
    });

    it('adds "transparent" class when host image is clicked', () => {
      const host = fixture.debugElement.query(By.css('div'));
      component.item = {id: 1};

      host.triggerEventHandler('click', {target: {tagName: 'IMG'}});
      fixture.detectChanges();

      expect(host.classes.transparent).toBeTruthy();
    });
  });
});
