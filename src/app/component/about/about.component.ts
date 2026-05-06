import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAward, faBriefcase, faCalendar, faGraduationCap, faDownload } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  faBriefcase = faBriefcase;
  faAward = faAward;
  faCalendar = faCalendar;
  faGraduationCap = faGraduationCap;
  faDownload = faDownload;

  highlights = [
    { icon: '🎓', text: 'B.Tech, IT — Karpagam College of Engineering (2019–2023)' },
    { icon: '📍', text: 'Chennai, Tamil Nadu, India' },
    { icon: '💼', text: 'Open to Remote, Hybrid, or On-site roles' },
    { icon: '📱', text: 'Available for Freelance Mobile Projects' },
  ];

  get experienceText(): string {
    const start = new Date(2022, 8, 1); // Sep 2022 (overall experience)
    const now = new Date();
    const totalMonths =
      (now.getFullYear() - start.getFullYear()) * 12 +
      (now.getMonth() - start.getMonth());
    return (totalMonths / 12).toFixed(1) + '+';
  }
}
