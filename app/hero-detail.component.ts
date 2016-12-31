import {Component, Input} from '@angular/core';
import {Hero} from './Hero';

@Component({
    selector: 'my-hero-detail',
        template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details:</h2>
                <div>
                    <label>id: </label>{{hero.id}}
                </div>
                <div>
                     <input [(ngModel)]="hero.name" placeholder="name"/>
                </div>
        </div>
    `
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;

}