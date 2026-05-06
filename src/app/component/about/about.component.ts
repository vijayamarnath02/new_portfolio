import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAward, faBriefcase, faCalendar, faGraduationCap, faDownload } from '@fortawesome/free-solid-svg-icons';
import { getExperienceText, JOIN_DATE } from '../../../constents';

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
    { icon: '📍', text: 'Based in Chennai, India' },
    { icon: '💼', text: 'Open to Remote, Hybrid, or On-site roles' },
    { icon: '📱', text: 'Available for Freelance Mobile Projects' },
  ];

  /** Dynamic experience text — auto-calculates from JOIN_DATE (Sep 14, 2024) */
  get experienceText(): string {
    return getExperienceText();
  }
}
