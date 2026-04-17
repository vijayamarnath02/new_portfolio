import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAward, faBriefcase, faCalendar, faGraduationCap, faDownload } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about',
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  faBriefcase = faBriefcase;
  faAward = faAward;
  faCalendar = faCalendar;
  faGraduationCap = faGraduationCap;
  faDownload = faDownload;

  get experienceText(): string {
    const start = new Date(2024, 8, 16); // Sep 16, 2024
    const now = new Date();
    const totalMonths =
      (now.getFullYear() - start.getFullYear()) * 12 +
      (now.getMonth() - start.getMonth());
    return (totalMonths / 12).toFixed(1) + '+';
  }
}
