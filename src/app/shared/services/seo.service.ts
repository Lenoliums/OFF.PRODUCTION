import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map, mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(data => {
      if (data['title']) {
        this.titleService.setTitle(data['title']);
        this.metaService.updateTag({ property: 'og:title', content: data['title'] });
      }
      if (data['description']) {
        this.metaService.updateTag({ name: 'description', content: data['description'] });
        this.metaService.updateTag({ property: 'og:description', content: data['description'] });
      }
      if (data['keywords']) {
        this.metaService.updateTag({ name: 'keywords', content: data['keywords'] });
      }
      const fullUrl = window.location.origin + this.router.url;
      this.metaService.updateTag({ property: 'og:url', content: fullUrl });
    });
  }
}
