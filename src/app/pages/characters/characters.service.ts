import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})

export class CharactersService {
    async getCharacters() {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        const data = await response.json();
        return data;
    }
}