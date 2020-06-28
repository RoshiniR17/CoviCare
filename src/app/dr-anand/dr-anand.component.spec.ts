import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrAnandComponent } from './dr-anand.component';

describe('DrAnandComponent', () => {
  let component: DrAnandComponent;
  let fixture: ComponentFixture<DrAnandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrAnandComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrAnandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
