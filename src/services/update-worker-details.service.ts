import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateWorkerDetailsService {

  private apiUrl = 'http://localhost:3000/coc';

  constructor(private http: HttpClient) { }

  updateWorkerDetails(workerId: string, newWorkContext: string, newWorkEnd: string): Observable<any> {
    const updateDetailsUrl = `${this.apiUrl}/updateWorkerDetails/${workerId}`;

    const requestBody = {
      newWorkContext,
      newWorkEnd
    };

    return this.http.put<any>(updateDetailsUrl, requestBody);
  }
}
