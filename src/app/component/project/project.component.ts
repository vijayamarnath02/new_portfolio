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
      description: 'Enterprise multi-module approval workflow platform built on Angular Micro Frontend architecture with Module Federation, role-based approvals, dynamic forms, and real-time status tracking.',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Angular 17', 'Module Federation', 'RxJS', 'Akita', 'TypeScript', 'Node.js', 'Ionic'],
      category: 'Angular',
      demoUrl: null,
      githubUrl: null,
      note: 'Production work at Purpleslate — code not publicly available',
      download: false,
      featured: true,
      scope: 'Enterprise Platform',
      impact: '6 production micro frontends'
    },
    {
      id: 2,
      title: 'NC - Data Analytics Module',
      description: 'React.js and Node.js analytics module that handles CSV upload, validation, reporting dashboards, and Elasticsearch-powered data exploration for business reporting.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React.js', 'Node.js', 'Express.js', 'Elasticsearch', 'Kubernetes', 'Grafana'],
      category: 'React',
      demoUrl: null,
      githubUrl: null,
      note: 'Internal Purpleslate module — code not publicly available',
      download: false,
      featured: true,
      scope: 'Analytics Module',
      impact: 'CSV ingestion to dashboard reporting'
    },
    {
      id: 3,
      title: 'Full-Stack E-Commerce Platform',
      description: 'End-to-end commerce application with Angular frontend, Node.js and Express backend, MongoDB data models, JWT auth, and role-based product workflows.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Mongoose', 'Ionic'],
      category: 'MEAN Stack',
      demoUrl: null,
      githubUrl: null,
      note: null,
      download: false,
      featured: false,
      scope: 'Self-Initiated Build',
      impact: 'Auth, CRUD, and role-based flows'
    },
    {
      id: 4,
      title: 'Ionic Angular Task Manager',
      description: 'Cross-platform task manager built with Ionic Angular and Capacitor, featuring offline-friendly flows, JWT-authenticated sync, reminders, and responsive mobile UX.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Ionic', 'Angular', 'Capacitor', 'Node.js', 'Express.js', 'MongoDB', 'RxJS'],
      category: 'Ionic',
      demoUrl: null,
      githubUrl: null,
      note: null,
      download: false,
      featured: false,
      scope: 'Mobile Product',
      impact: 'Android and iOS from one codebase'
    },
    {
      id: 5,
      title: 'Personal Portfolio Website',
      description: 'Responsive Angular portfolio showcasing experience, projects, and technical strengths with a performance-first UI and deployment automation on Netlify.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Netlify', 'Lighthouse'],
      category: 'Angular',
      demoUrl: 'https://vijayamarnath.netlify.app',
      githubUrl: null,
      note: null,
      download: false,
      featured: false,
      scope: 'Personal Brand',
      impact: '95+ Lighthouse performance target'
    },
  ];

  filteredProjects: any[] = [];
  uniqueTechnologies: string[] = ['Angular', 'React', 'MEAN Stack', 'Ionic'];

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
