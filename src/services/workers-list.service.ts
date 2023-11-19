import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkersListService {

  constructor(private http: HttpClient) { }

  getFreeWorkers() {
    return this.http.get<any[]>('http://localhost:3000/coc/getAllWorkers');
  }
}
