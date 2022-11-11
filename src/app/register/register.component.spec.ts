
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';
import { mockData } from '../mock/register.mock';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let mockdta = mockData;
  let service:RegisterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ 
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{path:'login', component:LoginComponent}])
      ],
      providers:[ RegisterService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(RegisterService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('unit test for subscribe method in register component',fakeAsync(()=>{
    let spy = spyOn(service,'postData').and.returnValue(of(mockdta))
    component.onSubmit();
    tick();
    expect(spy).toHaveBeenCalled();
  }));
 
});
