import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { THEME } from '../../../constents';
@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  faSun = faSun;
  faMoon = faMoon;
  isDarkMode = localStorage.getItem(THEME) === "dark" ? false : true;
  animate: 'positive' | 'negative' | null = null;
  ngOnInit(): void {
    this.toggleTheme();
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.animate = this.isDarkMode ? 'positive' : 'negative';
    var theme = this.isDarkMode ? "dark" : "light"
    localStorage.setItem(THEME, theme);
    document.body.classList.toggle('dark-theme', this.isDarkMode);
    setTimeout(() => {
      this.animate = null;
    }, 600);
  }
}
