import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAward, faBriefcase, faCalendar, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about',
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  faBriefcase = faBriefcase;
  faAward = faAward;
  faCalendar = faCalendar;
  faGraduationCap = faGraduationCap;

}
