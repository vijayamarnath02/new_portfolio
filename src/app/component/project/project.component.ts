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
      description: 'Enterprise multi-module application managing approval workflows for import-export operations — role-based approvals, dynamic form processing, document verification, and real-time status tracking, built on Angular Micro Frontend architecture.',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Angular 17', 'Module Federation', 'RxJS', 'Akita', 'TypeScript', 'RBAC'],
      category: 'Angular',
      demoUrl: null,
      githubUrl: null,
      note: 'Production work at Purpleslate — code not publicly available',
      download: false
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
      download: false
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
      download: false
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
      download: false
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      description: 'A weather application built with Ionic + Angular providing current conditions and forecasts for locations worldwide using the OpenWeatherMap API, with smooth animations and cross-platform support.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Ionic', 'Angular', 'TypeScript', 'OpenWeatherMap API', 'SCSS'],
      category: 'Ionic',
      demoUrl: '../../../assetes/app-debug.apk',
      githubUrl: 'https://github.com/vijayamarnath02/Weather_App',
      note: null,
      download: true
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
