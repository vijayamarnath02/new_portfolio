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
    { icon: '🏢', text: 'Enterprise product delivery across approval workflows and analytics modules' },
    { icon: '📍', text: 'Based in Chennai, India' },
    { icon: '💼', text: 'Open to Full-Stack, Frontend, and Product Engineering roles' },
    { icon: '📦', text: 'Hands-on with Docker, Kubernetes, and Grafana-based monitoring' },
  ];

  careerMarkers = [
    { phase: 'Current', title: 'Purpleslate Product Delivery', detail: 'Angular micro frontends, role-based approvals, API services, and Ionic mobile views' },
    { phase: 'Breadth', title: 'React Analytics Work', detail: 'CSV ingestion flows, reporting dashboards, Elasticsearch search, and monitored deployments' },
    { phase: 'Growth', title: 'Cloud-Native Mindset', detail: 'Containerization, CI/CD collaboration, and production-focused performance tuning' },
  ];

  expertisePillars = [
    {
      title: 'Angular and React Frontend',
      copy: 'Enterprise UI work across Angular micro frontends, reusable component systems, reactive forms, and React-based reporting dashboards.',
    },
    {
      title: 'Node.js API Systems',
      copy: 'Node.js and Express services with JWT auth, workflow integration, CSV processing, and production-focused debugging.',
    },
    {
      title: 'Delivery and Operations',
      copy: 'Performance tuning, Docker and Kubernetes exposure, Grafana monitoring, and cross-team collaboration through release cycles.',
    },
  ];

  positioningSignals = [
    {
      kicker: 'Role Fit',
      title: 'Frontend-heavy full-stack developer',
      copy: 'Strongest in Angular and TypeScript, with React delivery experience for dashboards and analytics modules.',
    },
    {
      kicker: 'System Focus',
      title: 'Business workflows that need reliability',
      copy: 'Experience building approval journeys, data-heavy forms, API integrations, and role-based product experiences.',
    },
    {
      kicker: 'Team Value',
      title: 'Comfortable shipping inside product teams',
      copy: 'Used to code reviews, sprint delivery, shared ownership, and improving maintainability while features keep moving.',
    },
  ];

  get experienceText(): string {
    return getExperienceText();
  }
}
