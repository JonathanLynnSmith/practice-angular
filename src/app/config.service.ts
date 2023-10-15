import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadConfig();
  }

  loadConfig() {
    return this.http.get('/assets/config.json').toPromise()
      .then((data) => {
        this.config = data;
      });
  }

  getConfig() {
    return this.config;
  }
}
