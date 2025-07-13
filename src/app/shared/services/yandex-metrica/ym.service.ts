import { Injectable } from '@angular/core';

@Injectable()
export class YmService {
  private ym(type: 'hit', url?: string): void;
  private ym(type: 'reachGoal', target: string): void;
  private ym(...args: any): void {
    const idCounter: number | undefined = window.ym?.a[0][0];
    if (idCounter) {
      window.ym(idCounter, ...args);
    }
  }

  hit(): void {
    this.ym('hit');
  }

  reachGoal(target: string): void {
    this.ym('reachGoal', target);
  }
}
