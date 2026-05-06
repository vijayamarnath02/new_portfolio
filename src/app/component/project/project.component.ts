import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-project',
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  selectedTech = 'All';

  projects = [
    {
      id: 1,
      title: 'Import-Export Business Approver',
      description: 'Enterprise multi-module approval workflow application built on Angular Micro Frontend architecture with Module Federation. Features role-based approvals, dynamic forms, and real-time status tracking.',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Angular 17', 'Module Federation', 'RxJS', 'Akita', 'TypeScript', 'RBAC'],
      category: 'Angular',
      demoUrl: null,
      githubUrl: null,
      note: 'Production work at Purpleslate — code not publicly available',
      download: false,
      featured: true
    },
    {
      id: 2,
      title: 'Deployment Timeline Manager',
      description: 'Full-stack tool for tracking deployment timelines and statuses across agile teams. Includes automated email notifications via Nodemailer and a reusable npm component package built with Rollup.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Node.js', 'Express', 'React', 'Tailwind CSS', 'Nodemailer'],
      category: 'Node.js',
      demoUrl: null,
      githubUrl: null,
      note: null,
      download: false,
      featured: false
    },
    {
      id: 3,
      title: 'Employee Management System',
      description: 'End-to-end employee records and attendance management system with full CRUD operations, MongoDB schema design, Angular Material UI, and reactive form validation.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
      category: 'MEAN Stack',
      demoUrl: null,
      githubUrl: null,
      note: null,
      download: false,
      featured: false
    },
    {
      id: 4,
      title: 'Ionic Hybrid Mobile App',
      description: 'Cross-platform hybrid mobile application built for a freelance client. Runs on both Android and iOS from a single Angular codebase, with native device features integrated via Capacitor.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Ionic', 'Angular', 'Capacitor', 'TypeScript', 'RxJS'],
      category: 'Ionic',
      demoUrl: null,
      githubUrl: null,
      note: null,
      download: false,
      featured: false
    },
    {
      id: 5,
      title: 'Product Catalog Integration',
      description: 'Product catalog with third-party API integration, token-based authentication, and resilient data streams using RxJS operators. Features optimized loading states and smooth UX.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Angular', 'RxJS', 'REST API', 'JWT', 'TypeScript'],
      category: 'Angular',
      demoUrl: null,
      githubUrl: null,
      note: null,
      download: false,
      featured: false
    },
    {
      id: 6,
      title: 'Weather Forecast App',
      description: 'A weather application built with Ionic + Angular providing current conditions and forecasts for locations worldwide using the OpenWeatherMap API, with smooth animations and cross-platform support.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Ionic', 'Angular', 'TypeScript', 'OpenWeatherMap API', 'SCSS'],
      category: 'Ionic',
      demoUrl: '../../../assetes/app-debug.apk',
      githubUrl: 'https://github.com/vijayamarnath02/Weather_App',
      note: null,
      download: true,
      featured: false
    },
  ];

  filteredProjects: any[] = [];
  uniqueTechnologies: string[] = ['Angular', 'Node.js', 'MEAN Stack', 'Ionic'];

  ngOnInit(): void {
    this.filterProjects('All');
  }

  filterProjects(tech: string): void {
    this.selectedTech = tech;
    if (tech === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project =>
        project.category === tech
      );
    }
  }
}
