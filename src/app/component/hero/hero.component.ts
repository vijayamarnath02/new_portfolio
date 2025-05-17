import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
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
  userData = {
    linkedin: LINKEDIN,
    github: GITHUB,
    phone: PHONE,
    email: EMAIL
  }

}
