import { Component } from '@angular/core';
import { ADDRESS, EMAIL, GITHUB, LINKEDIN, PHONE } from '../../../constents';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  userData = {
    linkedin: LINKEDIN,
    github: GITHUB,
    phone: PHONE,
    email: EMAIL,
    address: ADDRESS
  }

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faArrowRight = faArrowRight;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faWhatsapp = faWhatsapp;
}
