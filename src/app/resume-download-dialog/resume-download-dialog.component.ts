import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFileDownload, faRedoAlt, faSync, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-resume-download-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule, FontAwesomeModule],
  templateUrl: './resume-download-dialog.component.html',
  styleUrl: './resume-download-dialog.component.css'


})
export class ResumeDownloadDialogComponent {
  resumeUrl = 'assets/resume.pdf';
  faThumbsUp = faThumbsUp;
  faFileDownload = faFileDownload;
  faRedoAlt = faRedoAlt;
  faSync = faSync;

  constructor(private dialogRef: MatDialogRef<ResumeDownloadDialogComponent>) { }

  close() {
    this.dialogRef.close();
  }
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf'; // replace with actual file path
    link.download = 'My_Resume.pdf';
    link.click();
  }

  reloadPage() {
    window.location.reload();
  }
}
