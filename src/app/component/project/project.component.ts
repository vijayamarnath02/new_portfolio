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
      title: "E-Commerce Dashboard",
      description: "A responsive admin dashboard for an e-commerce platform with real-time analytics, inventory management, and order processing.",
      image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Angular", "TypeScript", "NgRx", "Chart.js", "Angular Material"],
      category: "angular",
      demoUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/example/project1",
      download: false
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application that allows users to create, organize, and track tasks with features like drag-and-drop, filters, and due dates.",
      image: "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Angular", "TypeScript", "RxJS", "Firebase", "Bootstrap"],
      category: "angular",
      demoUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/example/project2", download: false
    },

    {
      id: 3,
      title: "Weather Forecast App",
      description: "A weather application that provides current conditions and forecasts for locations worldwide using modern UI components and animations.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Angular", "Ionic", "TypeScript", "OpenWeatherMap API", "SCSS"],
      category: "angular",
      demoUrl: "../../../assetes/app-debug.apk",
      githubUrl: "https://github.com/vijayamarnath02/Weather_App",
      download: true
    },
    {
      id: 4,
      title: "Personal Finance Tracker",
      description: "A full-stack application that helps users track income, expenses, and savings with interactive charts and budget planning tools.",
      image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Angular", "Node.js", "Express", "MongoDB", "D3.js"],
      category: "fullstack",
      demoUrl: "https://example.com/demo4",
      githubUrl: "https://github.com/example/project4",
      download: false
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "A web application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine types.",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["TypeScript", "React", "Redux", "Spoonacular API"],
      category: "typescript",
      demoUrl: "https://example.com/demo5",
      githubUrl: "https://github.com/example/project5",
      download: false
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "An application that allows users to track workouts, set fitness goals, and monitor progress with visualizations and reminders.",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Angular", "TypeScript", "NgRx", "Chart.js", "Firebase"],
      category: "angular",
      demoUrl: "https://example.com/demo6",
      githubUrl: "https://github.com/example/project6",
      download: false
    }
  ];
  filteredProjects: any = [];
  uniqueTechnologies: string[] = ['Angular', 'TypeScript', 'Node.js', 'React'];

  ngOnInit(): void {

    this.filterProjects('All');
  }


  filterProjects(tech: string): void {
    this.selectedTech = tech;
    if (tech === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project =>
        project.technologies.includes(tech)
      );
    }
  }
}
