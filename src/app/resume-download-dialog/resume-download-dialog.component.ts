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
  resumeUrl = 'assets/VIJAY_AMARNATH_M_V_RESUME.pdf';
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
    link.href = this.resumeUrl;
    link.target = '_blank'; // optional
    link.download = 'Vijay_Amarnath_M_V_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  reloadPage() {
    window.location.reload();
  }
}
