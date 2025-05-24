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
  isDialogOpen = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      if (!this.isDialogOpen) {
        this.showPopup = true;
      }
    }, 5000);
  }

  openResumeDialog() {
    this.isDialogOpen = true;
    this.showPopup = false;

    // Trigger file download
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf';
    link.download = 'My_Resume.pdf';
    link.click();

    // Delay opening the dialog to allow the download to begin
    setTimeout(() => {
      const dialogRef = this.dialog.open(ResumeDownloadDialogComponent, {
        width: '90vw',
        height: '90vh',
      });

      dialogRef.afterClosed().subscribe(() => {
        this.isDialogOpen = false;
      });
    }, 600); // short delay (in ms) to avoid blocking download
  }


  hidePopup() {
    this.showPopup = false;
  }
}
