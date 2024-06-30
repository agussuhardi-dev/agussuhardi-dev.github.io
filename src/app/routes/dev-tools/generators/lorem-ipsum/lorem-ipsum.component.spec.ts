import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PageHeaderComponent } from '@shared';

import { DevToolsGeneratorsLoremIpsumComponent } from './lorem-ipsum.component';

describe('DevToolsGeneratorsLoremIpsumComponent', () => {
  let component: DevToolsGeneratorsLoremIpsumComponent;
  let fixture: ComponentFixture<DevToolsGeneratorsLoremIpsumComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, PageHeaderComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevToolsGeneratorsLoremIpsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
