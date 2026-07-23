import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAward, faBriefcase, faCalendar, faGraduationCap, faDownload } from '@fortawesome/free-solid-svg-icons';
import { RESUME_ASSET_URL, RESUME_DOWNLOAD_NAME, getExperienceText } from '../../../constents';

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
  resumeUrl = RESUME_ASSET_URL;
  resumeDownloadName = RESUME_DOWNLOAD_NAME;

  highlights = [
    { icon: '🏢', text: 'Enterprise product delivery across approval and ERP systems' },
    { icon: '📍', text: 'Based in Chennai, India' },
    { icon: '💼', text: 'Open to Remote, Hybrid, or On-site roles' },
    { icon: '📱', text: 'Available for freelance Ionic mobile projects' },
  ];

  careerMarkers = [
    { phase: 'Current', title: 'Purpleslate', detail: 'Angular micro frontends, approval workflows, mobile views' },
    { phase: 'Before', title: 'Digitalsoft Group', detail: 'MEAN stack ERP delivery with Angular CLI and Node.js' },
    { phase: 'Foundation', title: 'Mallow + Freelance', detail: 'Full-stack training, hybrid mobile apps, end-to-end ownership' },
  ];

  expertisePillars = [
    {
      title: 'Enterprise Frontend',
      copy: 'Angular apps with reactive forms, shared components, role-based workflows, and micro frontend delivery.',
    },
    {
      title: 'Backend Integration',
      copy: 'Node.js and Express APIs, business workflow integration, auth flows, and production-focused debugging.',
    },
    {
      title: 'Mobile Delivery',
      copy: 'Ionic + Angular apps with responsive UX, device capabilities, and client-facing freelance execution.',
    },
  ];

  get experienceText(): string {
    return getExperienceText();
  }
}
