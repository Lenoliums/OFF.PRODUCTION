import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-placeholder',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="prewie" [ngClass]="{ loading: loadingAnimation }">
      <span *ngFor="let letter of displayedLetters; let i = index" [style.animationDelay.ms]="i * 10">
        {{ letter }}
      </span>
    </div>
  `,
  styles: [`
    .prewie {
      font-family: 'Courier New', monospace;
      font-size: 2rem;
      color: white;
      white-space: nowrap;
      overflow: hidden;
      border-right: 0.15em solid orange;
      width: fit-content;
      user-select: none;
    }
    .prewie span {
      opacity: 0;
      animation: typingFadeIn 0.3s forwards;
      display: inline-block;
    }
    @keyframes typingFadeIn {
      to {
        opacity: 1;
      }
    }
    .prewie.loading {
      border-right: none;
      animation: pulse 0.5s infinite alternate;
    }
    @keyframes pulse {
      0% { opacity: 1; }
      100% { opacity: 0.5; }
    }
  `]
})
export class LoadingPlaceholderComponent {
  fullText = 'OFF.PRODUCTION';
  displayedLetters: string[] = [];
  loadingAnimation = false;

  @Output() typingFinished = new EventEmitter<void>();

  constructor() {
    this.startTypingEffect();
  }

  private startTypingEffect() {
    this.displayedLetters = [];
    let index = 0;
    const typingInterval = 100; // скорость добавления букв
    const lastLetterAnimationDuration = 300; // время анимации в мс

    const interval = setInterval(() => {
      if (index < this.fullText.length) {
        this.displayedLetters.push(this.fullText[index]);
        index++;
      } else {
        clearInterval(interval);
        // Ждём пока завершится анимация последней буквы
        setTimeout(() => {
          this.loadingAnimation = true;
          this.typingFinished.emit();
        }, lastLetterAnimationDuration);
      }
    }, typingInterval);
  }
}
