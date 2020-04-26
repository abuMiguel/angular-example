import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  api = 'http://localhost:8000/api';
  username: string;
  defaultMember: Member = {
    id: 0,
    firstName: '',
    lastName: '',
    jobTitle: '',
    team: '',
    status: ''
  };
  selectedMember = this.defaultMember;

  constructor(private http: HttpClient) { }

  resetSelectedMember(): void {
    this.selectedMember = this.defaultMember;
  }

  getMembers() {
    return this.http.get(`${this.api}/members`)
      .pipe(catchError(this.handleError));
  }

  setUsername(name: string): void {
    this.username = name;
  }

  addOrEditMember(memberForm: Member, action: string) {
    let body: string = JSON.stringify(memberForm);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(`${this.api}/${action}Member`, body, { headers: headers, observe: 'response', responseType: 'text' })
      .pipe(catchError(this.handleError));
  }

  deleteMember() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http
      .delete(`${this.api}/deleteMember/${this.selectedMember.id}`,
        { headers: headers, observe: 'response', responseType: 'text' })
      .pipe(catchError(this.handleError));
  }

  getTeams() {
    return this.http.get(`${this.api}/teams`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return [];
  }
}

export interface Member {
  id: number;
  firstName: string;
  lastName: string;
  jobTitle: string;
  team: string;
  status: string;
}
