import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BookmarkAddComponent} from './bookmark-add.component';
import {BookmarksService} from '../bookmarks.service';
import {By} from '@angular/platform-browser';

describe('Using spies', () => {
  let fixture: ComponentFixture<BookmarkAddComponent>;
  let component: BookmarkAddComponent;
  let service: BookmarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkAddComponent],
      providers: [{
        provide: BookmarksService,
        useValue: {
          add: jasmine.createSpy('add()'),
          has: jasmine.createSpy('has()'),
        }
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(BookmarkAddComponent);
    component = fixture.componentInstance;
    service = TestBed.get(BookmarksService);
  });

  it('runs add() method of BookmarksService with a value from"s id', () => {
    component.show = {id: 123};
    const item = fixture.debugElement.query(By.css('button'));

    item.triggerEventHandler('click', new MouseEvent('click'));/*can be {} as a MouseEvent*/
    fixture.detectChanges();

    expect(service.add).toHaveBeenCalledTimes(1);
    expect(service.add).toHaveBeenCalledWith(component.show);
  });
});
