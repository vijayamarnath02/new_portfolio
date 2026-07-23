import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFileDownload, faRedoAlt, faSync, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { RESUME_ASSET_URL, RESUME_DOWNLOAD_NAME } from '../../constents';
@Component({
  selector: 'app-resume-download-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule, FontAwesomeModule],
  templateUrl: './resume-download-dialog.component.html',
  styleUrl: './resume-download-dialog.component.css'


})
export class ResumeDownloadDialogComponent {
  resumeUrl = RESUME_ASSET_URL;
  resumeDownloadName = RESUME_DOWNLOAD_NAME;
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
    link.download = this.resumeDownloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  reloadPage() {
    window.location.reload();
  }
}
