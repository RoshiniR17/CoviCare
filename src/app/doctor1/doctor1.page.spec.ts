import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Doctor1Page } from './doctor1.page';

describe('Doctor1Page', () => {
  let component: Doctor1Page;
  let fixture: ComponentFixture<Doctor1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Doctor1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Doctor1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
