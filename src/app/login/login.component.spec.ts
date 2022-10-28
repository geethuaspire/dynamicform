import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

   const fixture = TestBed.createComponent(LoginComponent);
   const login = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('Component successfully created', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should login only if username and password exist', () => {
   
   // const fixture = TestBed.createComponent(LoginComponent);
    //const login = fixture.componentInstance;
    component.onSubmit();


  });
});
