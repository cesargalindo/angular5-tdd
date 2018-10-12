/* tslint:disable:no-unused-variable */
import {TestBed, async, fakeAsync, tick, ComponentFixture} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {AuthService} from '../auth.service';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    authService = TestBed.get(AuthService);

    //  get the "a" element by CSS selector (e.g., by class name)
    el = fixture.debugElement.query(By.css('a'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('login button hidden when the user is authenticated', () => {
  //   // To being with Angular has not done any change detection so the content is blank.
  //   expect(el.nativeElement.textContent.trim()).toBe('');

  //   // Trigger change detection and this lets the template update to the initial value which is Login since by
  //   // default we are not authenticated
  //   fixture.detectChanges();
  //   expect(el.nativeElement.textContent.trim()).toBe('Login');

  //   // Change the authetication state to true
  //   spyOn(authService, 'isAuthenticated').and.returnValue(true);

  //   // The label is still Login! We need changeDetection to run and for angular to update the template.
  //   expect(el.nativeElement.textContent.trim()).toBe('Login');

  //   // Which we can trigger via fixture.detectChange()
  //   fixture.detectChanges();

  //   // Now the label is Logout
  //   expect(el.nativeElement.textContent.trim()).toBe('Logout');
  // });

  it('Button label via fakeAsync() and tick()', fakeAsync(() => {
    expect(el.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');

    spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));

    component.ngOnInit();
    // Simulates the passage of time until all pending asynchronous activities complete
    tick();
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  }));


});
