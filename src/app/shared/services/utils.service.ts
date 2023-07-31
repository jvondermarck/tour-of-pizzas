import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public static getIdFromUrl(url: string): number {
    const urlArray = url.split('/');
    const id = urlArray[urlArray.length - 1];
    return Number(id);
  }

}
