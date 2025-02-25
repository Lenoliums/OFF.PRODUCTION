import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PatnersMarqueeComponent } from './components/partners-marquee/patners-marquee.component';


@Component({
    selector: 'main-page',
    templateUrl: 'main-page.component.html',
    styleUrls: ['main-page.component.scss'],
    standalone: true,
    imports: [PatnersMarqueeComponent]
})

export class MainPageComponent implements OnInit {
    @ViewChild('logo', {read: ElementRef}) logoContainer?:ElementRef<HTMLDivElement>;

    private logoScrollEventListener = ()=> {}

    constructor(private renderer: Renderer2) { }

    ngOnInit() { 
        // this.logoScrollEventListener = this.renderer.listen(window, 'scroll', (evt) => {
        //     this.logoContainer?.nativeElement.classList.add('main-logo-container-scrolled');
        //     this.logoScrollEventListener();
        //   });
    }
}