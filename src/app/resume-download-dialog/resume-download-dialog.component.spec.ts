import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDownloadDialogComponent } from './resume-download-dialog.component';

describe('ResumeDownloadDialogComponent', () => {
  let component: ResumeDownloadDialogComponent;
  let fixture: ComponentFixture<ResumeDownloadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeDownloadDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeDownloadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
