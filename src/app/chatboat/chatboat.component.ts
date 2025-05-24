import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { ResumeDownloadDialogComponent } from '../resume-download-dialog/resume-download-dialog.component';
@Component({
  selector: 'app-chatboat',
  imports: [CommonModule, MatButtonModule, FontAwesomeModule],
  templateUrl: './chatboat.component.html',
  styleUrl: './chatboat.component.css'
})
export class ChatboatComponent {
  faDownload = faDownload;
  constructor(private dialog: MatDialog) { }

  openResumeDialog() {
    this.dialog.open(ResumeDownloadDialogComponent);
  }
}
