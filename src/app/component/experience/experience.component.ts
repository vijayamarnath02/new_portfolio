import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getExperienceDuration } from '../../../constents';

interface Experience {
  title: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  type: string;
  project: string;
  description: string;
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
      duration: getExperienceDuration(new Date(2024, 8, 14)),
      location: 'Chennai',
      type: 'Full-time',
      project: 'Import-Export Business Approver',
      description: 'Enterprise multi-module application managing approval workflows for import/export operations — role-based approvals, dynamic form processing, document verification, and real-time status tracking, built on Angular Micro Frontend architecture.',
      tech: ['Angular 17', 'TypeScript', 'RxJS', 'Akita Store', 'Module Federation', 'Angular Material', 'REST APIs', 'JWT', 'RBAC', 'Reactive Forms', 'SCSS'],
      highlights: [
        'Architected 6+ independently deployable Micro Frontend modules using Module Federation, cutting deployment lead time by ~40%',
        'Engineered 15+ complex Reactive Forms with multi-level validations and nested FormGroups/FormArrays',
        'Reduced redundant HTTP calls by ~35% via RxJS operators (shareReplay, switchMap) and store-level caching',
        'Built 20+ reusable shared components, accelerating feature delivery by ~30%',
        'Implemented lazy loading and code splitting, reducing initial bundle size by ~25%',
        'Engineered global HTTP Interceptors for unified API handling, JWT injection, retry logic, and error logging',
        'Applied Route Guards and RBAC for secure approval workflows',
        'Tuned change detection with OnPush + trackBy, eliminating ~60% of unnecessary re-renders',
        'Conducted code reviews and mentored peers on Angular best practices in Agile/Scrum',
      ],
      current: true,
    },
    {
      title: 'Freelance Ionic + Angular Developer',
      company: 'Self-Employed',
      period: 'Sep 2024 – Present',
      duration: getExperienceDuration(new Date(2024, 8, 1)),
      location: 'Remote',
      type: 'Freelance',
      project: '',
      description: 'Designing and developing cross-platform hybrid mobile applications for freelance clients using Ionic Framework + Angular.',
      tech: ['Ionic', 'Angular', 'TypeScript', 'Capacitor', 'RxJS', 'REST APIs', 'SCSS'],
      highlights: [
        'Built end-to-end hybrid mobile applications running on Android and iOS from a single Angular codebase',
        'Designed mobile-first responsive UIs with Ionic components and native-feel animations',
        'Integrated REST APIs with secure auth flows and offline data handling',
        'Implemented native device features (camera, geolocation, storage, push notifications) via Capacitor',
        'Managed full project lifecycle independently — requirements gathering through deployment',
      ],
      current: true,
    },
    {
      title: 'Technical Engineer Intern',
      company: 'Purpleslate',
      period: 'Jun 2024 – Sep 2024',
      duration: '4 mos',
      location: 'Chennai',
      type: 'Internship',
      project: 'Deployment Timeline Manager',
      description: 'Built a full-stack deployment timeline management tool for agile teams.',
      tech: ['Node.js', 'Express.js', 'React.js', 'Tailwind CSS', 'REST APIs', 'Nodemailer', 'Rollup', 'npm'],
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
      title: 'MEAN Stack Developer',
      company: 'Digitalsoft Group',
      period: 'Oct 2023 – Apr 2024',
      duration: '7 mos',
      location: 'Madurai, Tamil Nadu, India',
      type: 'Full-time',
      project: 'ERP Software',
      description: 'Contributed to an ERP software application as part of an on-site MEAN stack team, building business-facing modules with Angular CLI on the frontend and Node.js-powered APIs on the backend.',
      tech: ['Angular CLI', 'Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'HTML', 'CSS'],
      highlights: [
        'Built and enhanced ERP software modules for day-to-day business operations using Angular CLI and Angular',
        'Developed backend features and REST API integrations in Node.js to support ERP workflows and data exchange',
        'Implemented forms, validation flows, and UI improvements for internal business users across multiple modules',
        'Collaborated with the on-site team on bug fixing, feature delivery, and release-ready builds',
      ],
      current: false,
    },
    {
      title: 'Full-Stack Developer (MEAN Stack Trainee)',
      company: 'Mallow Technologies Private Limited',
      period: 'Sep 2022 – Feb 2023',
      duration: '6 mos',
      location: 'Karur',
      type: 'Training',
      project: '',
      description: 'Full-stack development trainee role focused on building MEAN Stack web applications.',
      tech: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Angular Material', 'REST APIs', 'RxJS'],
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
