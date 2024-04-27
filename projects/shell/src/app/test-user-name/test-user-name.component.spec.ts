import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUserNameComponent } from './test-user-name.component';

describe('TestUserNameComponent', () => {
  let component: TestUserNameComponent;
  let fixture: ComponentFixture<TestUserNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestUserNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
