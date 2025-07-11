import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.scss'],
  imports: [RouterModule, CommonModule],
  standalone: true,
})
export class ContactButtonComponent implements OnInit {
  showButton = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkUrl(this.router.url);

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.checkUrl(event.urlAfterRedirects);
      });
  }

  private checkUrl(url: string) {
    this.showButton = url !== '/order';
  }
}
