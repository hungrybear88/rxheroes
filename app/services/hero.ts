import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Hero} from '../models';

@Injectable()
export class HeroService {
    constructor (private http: Http) {}
    api_url: string = 'http://localhost:3001/heroes/';
    getHeroes(): Observable<Hero[]> {
        return this.http.get(this.api_url)
        .map(res => res.json());
    }

    getHero(id): Observable<Hero> {
        return this.http.get(this.api_url + id)
        .map(res => res.json());
    }

    saveHero(hero) {
        if (hero.id === 0) {
            return this.http.post(this.api_url, hero)
            .map(res => res.json());
        } else {
            return this.http.put(this.api_url + hero.id, hero)
            .map(res => res.json());
        }
    }

    deleteHero(hero) {
        return this.http.delete(this.api_url + hero.id)
        .map(res => hero);
    }
}