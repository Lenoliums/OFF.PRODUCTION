import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-menu/navBar.component';
import { BehaviorSubject } from 'rxjs';
import { DataSourceService } from 'src/app/services/datasource.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterModule, NavBarComponent],
    providers: [DataSourceService]
})

export class HeaderComponent implements OnInit {

    protected isNavBarOpen$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    protected isSocialsOpen: boolean = false;
    protected readonly phoneNumber: string = "+7(999)-999-99-99";

    private bgScrollEventListener = () => {};

    @ViewChild('mediaContainer', {read: ElementRef}) mediaContainer?:ElementRef<HTMLDivElement>;
    @ViewChild('bgRect', {read: ElementRef}) bgRect?:ElementRef<HTMLDivElement>;

    private mediaContainerEventListener = ()=>{};
    

    constructor(private renderer: Renderer2, protected dataService: DataSourceService) {
     }
    
    openSocials(){
        this.isSocialsOpen = true;
        this.mediaContainerEventListener = this.renderer.listen(this.mediaContainer?.nativeElement, 'mouseleave', (evt) => {
            this.closeSocials()
          });
    }
    closeSocials(){
        this.isSocialsOpen = false;
        this.mediaContainerEventListener();
    }

    ngOnInit() {
        this.bgScrollEventListener = this.renderer.listen(window, 'scroll', (evt) => {
            this.bgRect?.nativeElement.classList.add('h-86');
            this.bgScrollEventListener();
          });
    }
}