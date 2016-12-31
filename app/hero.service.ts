import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROS } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
       return Promise.resolve(HEROS);
    }

    getHeroesSlowly(): Promise<Hero[]>{
        return new Promise(resolve => {
        setTimeout(() => resolve(HEROS), 2000);
        });
    }
}