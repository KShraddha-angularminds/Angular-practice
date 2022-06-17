import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { todoInterface } from './todoInterface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  _url: string = 'http://localhost:8080/posts?sortBy=desc&limit=20&page=1';
  getTodoList() {
    let header = new HttpHeaders().set(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjkwNTUyYzRjMzY3YjQwOGViNDQzYTEiLCJpYXQiOjE2NTU0NTk1MjUsImV4cCI6MTY1NTU0NTkyNSwidHlwZSI6ImFjY2VzcyJ9.bgiE5V-k7jxkMsfx9cVQmGblZaX_XfiDXluAeeaHI2w'
    );
    return this.http.get(this._url, {
      headers: header,
    });
  }
}
