import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public capitalize(word): void{
    return word.charAt(0).toUpperCase() + word.substring(1);
  }
}
