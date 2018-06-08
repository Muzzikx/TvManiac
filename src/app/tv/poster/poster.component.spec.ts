import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PosterComponent} from './poster.component';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {Show} from '@models';

describe('PosterComponent', () => {
  let fixtures: ComponentFixture<PosterComponent>;
  let component: PosterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PosterComponent],
    }).compileComponents();

    fixtures = TestBed.createComponent(PosterComponent);
    component = fixtures.componentInstance;
  });

  it('does not display img if show is not defined', () => {
    const img = fixtures.debugElement.query(By.css('img'));
    expect(img).toBeNull();
  });

  it('shows img when show is defined', () => {
    const show: Partial<Show> = {id: 123, name: 'My Show'};

    component.show = show as Show;
    fixtures.detectChanges();

    const img = fixtures.debugElement.query(By.css('img'));
    expect(img).not.toBeNull();
  });

  it('displays fallback image if needed', () => {
    const show: Partial<Show> = {id: 123, image: null};

    component.show = show as Show;
    component.ngOnChanges();
    fixtures.detectChanges();

    const img = fixtures.debugElement.query(By.css('img'));
    expect(img.properties.src).toContain('fillmurray');
  });

  it('displays fallback image if provided', () => {
    const show: Partial<Show> = {id: 123, image: {medium: 'http://img.jpg', original: ''}};

    component.show = show as Show;
    component.ngOnChanges();
    fixtures.detectChanges();

    const img = fixtures.debugElement.query(By.css('img'));
    expect(img.properties.src).toBe('http://img.jpg');
  });
});
