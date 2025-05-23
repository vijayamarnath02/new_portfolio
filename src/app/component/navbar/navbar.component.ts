import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { THEME } from '../../../constents';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  faSun = faSun;
  faMoon = faMoon;
  isDarkMode: boolean = false;
  animate: 'positive' | 'negative' | null = null;
  menuOpen = false;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem(THEME);
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.animate = this.isDarkMode ? 'positive' : 'negative';
    localStorage.setItem(THEME, this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();

    setTimeout(() => {
      this.animate = null;
    }, 600);
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  private applyTheme(): void {
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }
}
