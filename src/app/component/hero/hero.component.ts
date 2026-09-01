import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { EMAIL, GITHUB, LINKEDIN, PHONE, RESUME_ASSET_URL, RESUME_DOWNLOAD_NAME, getExperienceText } from '../../../constents';

@Component({
  selector: 'app-hero',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faDownload = faDownload;

  experienceText = getExperienceText();
  resumeUrl = RESUME_ASSET_URL;
  resumeDownloadName = RESUME_DOWNLOAD_NAME;

  heroStats = [
    { value: '2+', label: 'Years in Full-Stack Delivery', direction: '' },
    { value: '6', label: 'Production MFEs Shipped', direction: '' },
    { value: '30+', label: 'API Flows and Endpoints', direction: '' },
    { value: '40%', label: 'Faster Deployment Flow', direction: '' },
  ];

  heroProofPoints = [
    'Angular micro frontends in production',
    'React + Node analytics module delivery',
    'Docker, Kubernetes, and Grafana exposure',
  ];

  deliverySignals = [
    { label: 'Frontend', value: 'Angular + React' },
    { label: 'Backend', value: 'Node.js + Express + MongoDB' },
    { label: 'Operating Style', value: 'Shipping business-critical product work' },
  ];

  roleFocus = [
    {
      kicker: 'MEAN Core',
      title: 'Enterprise Angular and API delivery',
      copy: 'Built approval workflows, reusable UI systems, and TypeScript-first business modules across production teams.',
    },
    {
      kicker: 'MERN Breadth',
      title: 'React dashboards and analytics modules',
      copy: 'Delivered React-based reporting experiences backed by Node.js services, CSV ingestion, and scalable data flows.',
    },
    {
      kicker: 'Delivery Mindset',
      title: 'Performance, release velocity, and maintainability',
      copy: 'Worked with Module Federation, Docker, Kubernetes, and Grafana to support stable releases and measurable improvements.',
    },
  ];

  userData = {
    linkedin: LINKEDIN,
    github: GITHUB,
    phone: PHONE,
    email: EMAIL
  }

  navigateTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
