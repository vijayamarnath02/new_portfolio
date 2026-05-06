import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-skils',
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './skils.component.html',
  styleUrl: './skils.component.css'
})
export class SkilsComponent implements OnInit {
  skillCategories: { title: string; skills: { name: string; icon: string }[] }[] = [];

  ngOnInit() {
    this.skillCategories = [
      {
        title: 'Frontend (Production-grade)', skills: [
          { name: 'Angular 14-17', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
          { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
          { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
          { name: 'RxJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg' },
          { name: 'NgRx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ngrx/ngrx-original.svg' },
          { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
          { name: 'SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
          { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
          { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
          { name: 'Angular Material', icon: '' },
          { name: 'Akita Store', icon: 'https://opensource.salesforce.com/akita/img/akita.svg' },
          { name: 'Module Federation', icon: '' },
        ]
      },
      {
        title: 'Backend', skills: [
          { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
          { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
          { name: 'REST API Design', icon: '' },
          { name: 'JWT Auth', icon: '' },
          { name: 'Nodemailer', icon: '' },
        ]
      },
      {
        title: 'Database', skills: [
          { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
          { name: 'Mongoose ODM', icon: '' },
          { name: 'Aggregation', icon: '' },
        ]
      },
      {
        title: 'Mobile (Freelance)', skills: [
          { name: 'Ionic Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg' },
          { name: 'Capacitor', icon: '' },
          { name: 'Hybrid Mobile Apps', icon: '' },
          { name: 'Cross-Platform UI', icon: '' },
        ]
      },
      {
        title: 'Architecture & Tools', skills: [
          { name: 'Micro Frontend', icon: '' },
          { name: 'RBAC', icon: '' },
          { name: 'HTTP Interceptors', icon: '' },
          { name: 'Route Guards', icon: '' },
          { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
          { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
          { name: 'Agile/Scrum', icon: '' },
        ]
      },
    ];
  }
}
