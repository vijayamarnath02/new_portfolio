import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { EMAIL, GITHUB, LINKEDIN, PHONE } from '../../../constents';
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

  heroStats = [
    { value: '40%', label: 'Deployment Time', direction: '↓' },
    { value: '35%', label: 'HTTP API Calls', direction: '↓' },
    { value: '25%', label: 'Bundle Size', direction: '↓' },
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
