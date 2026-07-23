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
    { value: '2.5+', label: 'Years Across MEAN', direction: '' },
    { value: '6', label: 'MFE Modules Shipped', direction: '' },
    { value: '30+', label: 'REST APIs Worked On', direction: '' },
    { value: '5', label: 'Business Roles Supported', direction: '' },
  ];

  heroProofPoints = [
    'Enterprise approval workflows',
    'ERP software delivery',
    'Hybrid mobile app builds',
  ];

  deliverySignals = [
    { label: 'Current Focus', value: 'Angular Micro Frontends' },
    { label: 'Backend Stack', value: 'Node.js + Express + MongoDB' },
    { label: 'Delivery Mode', value: 'Full-time + Freelance' },
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
