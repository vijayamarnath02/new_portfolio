import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { ResumeDownloadDialogComponent } from '../resume-download-dialog/resume-download-dialog.component';

@Component({
  selector: 'app-chatboat',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './chatboat.component.html',
  styleUrl: './chatboat.component.css'
})
export class ChatboatComponent {
  faDownload = faDownload;
  showPopup = false;

  constructor(private dialog: MatDialog) {
    setTimeout(() => {
      this.showPopup = true;
    }, 5000); // show popup after 5 seconds
  }

  openResumeDialog() {
    this.dialog.open(ResumeDownloadDialogComponent);
    this.showPopup = false; // optionally close popup when opened
  }

  hidePopup() {
    this.showPopup = false;
  }
}
