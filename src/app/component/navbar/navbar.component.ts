import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faSun = faSun;
  faMoon = faMoon;
  isDarkMode = false;
  animate: 'positive' | 'negative' | null = null;
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.animate = this.isDarkMode ? 'positive' : 'negative';
    document.body.classList.toggle('dark-theme', this.isDarkMode);
    setTimeout(() => {
      this.animate = null;
    }, 600);
  }
}
