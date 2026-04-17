import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { EMAIL, GITHUB, LINKEDIN, PHONE } from '../../../constents';
@Component({
  selector: 'app-hero',
  imports: [FontAwesomeModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faDownload = faDownload;
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
  get experienceText(): string {
    const start = new Date(2024, 8, 16); // Sep 16, 2024
    const now = new Date();
    const totalMonths =
      (now.getFullYear() - start.getFullYear()) * 12 +
      (now.getMonth() - start.getMonth());
    return (totalMonths / 12).toFixed(1) + '+';
  }
}
