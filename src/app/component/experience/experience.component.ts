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
      title: 'Technology Engineer | Full Stack',
      company: 'Purpleslate Private Limited',
      period: 'Jun 2024 – Present',
      duration: getExperienceDuration(new Date(2024, 5, 1)),
      location: 'Chennai, India',
      type: 'Intern to Full-time',
      project: 'Import-Export Business Approver and NC Data Analytics Module',
      description: 'Full Stack Developer track covering Angular micro frontends, React analytics dashboards, Node.js API services, and Ionic-based mobile views. Joined as an intern in June 2024 and converted to full-time in September 2024.',
      tech: ['Angular 17', 'React.js', 'Node.js', 'Express.js', 'TypeScript', 'RxJS', 'Akita Store', 'Module Federation', 'Angular Material', 'REST APIs', 'JWT', 'RBAC', 'Reactive Forms', 'SCSS'],
      highlights: [
        'Delivered 6 independently deployable Angular micro frontends using Module Federation, improving deployment velocity by 40% across approval workflows',
        'Built 30+ API flows with Node.js and Express, including JWT auth, centralized error handling, and MongoDB-backed business logic',
        'Reduced redundant HTTP traffic by 35% and improved load times from 3.2s to 1.9s through RxJS caching and request orchestration',
        'Created 20+ reusable Angular Material and Ionic UI components, plus lazy-loaded modules that reduced bundle size by 25%',
        'Developed a React.js and Node.js analytics module for CSV upload, validation, reporting dashboards, and Elasticsearch-powered search',
        'Worked with Docker, Kubernetes, and Grafana for deployment and service monitoring while collaborating with backend, QA, and DevOps teams',
      ],
      current: true,
    },
    {
      title: 'Technology Engineer Intern',
      company: 'Purpleslate Private Limited',
      period: 'Jun 2024 – Sep 2024',
      duration: '4 mos',
      location: 'Chennai, India',
      type: 'Internship',
      project: 'Engineering Onboarding and Delivery Support',
      description: 'Started on the product engineering team supporting feature delivery, UI implementation, and API integration before moving into a full-time technology engineer role.',
      tech: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'Ionic', 'REST APIs', 'Git'],
      highlights: [
        'Contributed to Angular, Node.js, and Ionic tasks within an enterprise workflow product environment',
        'Supported UI implementation, bug fixing, and API integration work during sprint-based product delivery',
        'Built familiarity with production standards, code reviews, and release practices that led to full-time conversion',
      ],
      current: false,
    },
    {
      title: 'Self-Initiated Full Stack Projects',
      company: 'Independent',
      period: '2024 – Present',
      duration: 'Ongoing',
      location: 'Remote',
      type: 'Project Work',
      project: 'Task Manager, E-Commerce Platform, and Personal Portfolio',
      description: 'Portfolio projects used to deepen MEAN and MERN fundamentals through hands-on product builds, mobile UX work, and deployment automation.',
      tech: ['Angular', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Ionic', 'JWT', 'Netlify'],
      highlights: [
        'Built a task management mobile app with Ionic Angular, offline-friendly flows, and Node.js plus MongoDB sync',
        'Created a full-stack commerce platform with Angular, Express, MongoDB, JWT auth, route guards, and role-based management',
        'Designed and deployed a personal Angular portfolio with Lighthouse-focused performance and GitHub-triggered CI/CD',
      ],
      current: false,
    },
  ];

  getBadgeClass(type: string): string {
    return 'badge-' + type.toLowerCase().replace(/[ /]+/g, '-');
  }
}
