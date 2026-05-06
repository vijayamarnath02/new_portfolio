import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

interface Achievement {
  icon: string;
  value: number;
  suffix: string;
  direction: string;
  label: string;
  description: string;
  currentValue: number;
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  hasAnimated = false;

  achievements: Achievement[] = [
    {
      icon: '🚀',
      value: 40,
      suffix: '%',
      direction: '↓',
      label: 'Deployment Lead Time',
      description: 'Micro Frontend Architecture',
      currentValue: 0
    },
    {
      icon: '⚡',
      value: 35,
      suffix: '%',
      direction: '↓',
      label: 'Redundant HTTP Calls',
      description: 'RxJS + Caching',
      currentValue: 0
    },
    {
      icon: '📦',
      value: 25,
      suffix: '%',
      direction: '↓',
      label: 'Initial Bundle Size',
      description: 'Lazy Loading + Code Splitting',
      currentValue: 0
    },
    {
      icon: '🔄',
      value: 60,
      suffix: '%',
      direction: '↓',
      label: 'Unnecessary Re-renders',
      description: 'OnPush + trackBy',
      currentValue: 0
    }
  ];

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId) || this.hasAnimated) return;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.75) {
      this.hasAnimated = true;
      this.animateCountUp();
    }
  }

  private animateCountUp(): void {
    const duration = 1500; // ms
    const fps = 60;
    const totalFrames = duration / (1000 / fps);

    this.achievements.forEach(achievement => {
      let frame = 0;
      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        achievement.currentValue = Math.round(eased * achievement.value);

        if (frame >= totalFrames) {
          achievement.currentValue = achievement.value;
          clearInterval(interval);
        }
      }, 1000 / fps);
    });
  }
}
