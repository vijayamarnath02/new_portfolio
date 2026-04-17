import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
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
  isDarkMode = false;
  animate: 'positive' | 'negative' | null = null;
  activeSection = 'home';
  mobileMenuOpen = false;

  private readonly sections = ['about', 'skills', 'projects', 'contact'];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    const saved = localStorage.getItem(THEME);
    this.isDarkMode = saved
      ? saved === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.applyTheme();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const OFFSET = 100; // px from top — accounts for fixed navbar height
    let current = 'home';

    for (const id of this.sections) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= OFFSET) {
        current = id;
      }
    }

    this.activeSection = current;
  }

  navigateTo(sectionId: string): void {
    this.activeSection = sectionId;
    this.mobileMenuOpen = false;
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.animate = this.isDarkMode ? 'positive' : 'negative';
    localStorage.setItem(THEME, this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
    setTimeout(() => (this.animate = null), 600);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  private applyTheme(): void {
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }
}
