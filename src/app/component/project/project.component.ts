import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects = [
    {
      title: 'E-Commerce Dashboard',
      image: 'assets/images/ecommerce-dashboard.png',
      tags: ['Angular', 'TypeScript', 'NgRx', 'Chart.js', 'Angular Material'],
      description:
        'A responsive admin dashboard for an e-commerce platform with real-time analytics, inventory management, and order processing.',
      demoLink: 'https://example.com/demo',
      codeLink: 'https://github.com/username/project'
    }
  ];
}
