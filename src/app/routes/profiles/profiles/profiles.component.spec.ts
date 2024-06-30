import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PageHeaderComponent } from '@shared';

import { ProfilesProfilesComponent } from './profiles.component';

describe('ProfilesProfilesComponent', () => {
  let component: ProfilesProfilesComponent;
  let fixture: ComponentFixture<ProfilesProfilesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, PageHeaderComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
