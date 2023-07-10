import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Announcement } from '../announcement';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'                                              //poate fi injectat in toata aplicatia, 'module': poate fi injectat intr un anumit modul, 'any' in anumite module, mai multe instante
})
export class AnnouncementService {

  baseURL = "http://localhost:7064/api/Announcements";

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }


  serviceCall() {
    console.log("Service was called");
  }

  getAnnouncements(): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>(this.baseURL, this.httpOptions);
  }

  addAnnouncement(announcement: Announcement) {
    console.log(announcement)
    return this.httpClient.post<Announcement>(this.baseURL, announcement, this.httpOptions).subscribe(
      response => { return response; });
  }

  editAnnouncement(id: string, announcement: Announcement) {
    console.log(announcement)
    return this.httpClient.put<Announcement>(this.baseURL + '/update/' + id, announcement, this.httpOptions).subscribe(
      response => { return response; });
  }


  deleteAnnouncement(id: string) {
    this.httpClient.delete(this.baseURL + '/' + id, this.httpOptions).subscribe(response => { return response; })
  }
}
