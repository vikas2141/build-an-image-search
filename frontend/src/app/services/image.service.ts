import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _http: HttpClient) { }

  getImage(pageUrls) {
    let URL = "http://localhost:8888/image";
    return this._http.get(URL, {
      params: {
        pageUrls: pageUrls
      }
    })
  }

}
