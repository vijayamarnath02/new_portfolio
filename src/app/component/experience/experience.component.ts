import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  project: string;
  tech: string[];
  highlights: string[];
  current: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Angular Developer | MEAN Stack',
      company: 'Purpleslate',
      period: 'Sep 2024 – Present',
      location: 'Chennai',
      type: 'Full-time',
      project: 'Import-Export Business Approver',
      tech: ['Angular 17', 'TypeScript', 'RxJS', 'Akita Store', 'Module Federation', 'JWT', 'RBAC', 'SCSS'],
      highlights: [
        'Architected 6+ independently deployable Micro Frontend modules using Module Federation, cutting deployment lead time by ~40%',
        'Engineered 15+ complex Reactive Forms with multi-level validations and nested FormGroups/FormArrays',
        'Reduced redundant HTTP calls by ~35% via RxJS operators (shareReplay, switchMap) and store-level caching',
        'Built 20+ reusable shared components, accelerating feature delivery by ~30%',
        'Implemented lazy loading and code splitting, reducing initial bundle size by ~25%',
        'Tuned change detection with OnPush + trackBy, eliminating ~60% of unnecessary re-renders',
      ],
      current: true,
    },
    {
      title: 'Freelance Ionic + Angular Developer',
      company: 'Self-Employed',
      period: 'Sep 2024 – Present',
      location: 'Remote',
      type: 'Freelance',
      project: '',
      tech: ['Ionic', 'Angular', 'TypeScript', 'Capacitor', 'RxJS', 'REST APIs', 'SCSS'],
      highlights: [
        'Built end-to-end hybrid mobile applications running on Android and iOS from a single Angular codebase',
        'Designed mobile-first responsive UIs with Ionic components and native-feel animations',
        'Integrated REST APIs with secure auth flows and offline data handling',
        'Implemented native device features (camera, geolocation, push notifications) via Capacitor',
        'Managed full project lifecycle — requirements gathering through deployment',
      ],
      current: true,
    },
    {
      title: 'Technical Engineer Intern',
      company: 'Purpleslate',
      period: 'Jun 2024 – Sep 2024',
      location: 'Chennai',
      type: 'Internship',
      project: 'Deployment Timeline Manager',
      tech: ['Node.js', 'Express.js', 'React.js', 'Tailwind CSS', 'Nodemailer', 'Rollup', 'npm'],
      highlights: [
        'Designed and built RESTful APIs using Node.js + Express for managing deployment records',
        'Architected backend middleware layer with body-parser and CORS',
        'Integrated Nodemailer for automated email notifications',
        'Converted custom UI components into a reusable npm package with Rollup build setup',
        'Reduced deployment reporting effort by 50%',
      ],
      current: false,
    },
    {
      title: 'Full-Stack Developer (MEAN Stack Trainee)',
      company: 'Mallow Technologies Private Limited',
      period: 'Sep 2022 – Feb 2023',
      location: 'Karur',
      type: 'Training',
      project: '',
      tech: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Angular Material', 'RxJS'],
      highlights: [
        'Built Employee Management System (full MEAN Stack) — end-to-end with MongoDB schemas, Express APIs, Angular Material UI',
        'Developed Product Catalog with third-party API integration, token-based auth, and optimized RxJS data streams',
      ],
      current: false,
    },
  ];

  getBadgeClass(type: string): string {
    return 'badge-' + type.toLowerCase().replace(' ', '-').replace('/', '-');
  }
}
