import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'notifications-app';
  selectedCategory: Category;
  announcement: Announcement[];
  filteredAnnouncements: Announcement[];

  constructor(private announcementService: AnnouncementService) { }//private a declarat o variabila announcementService pt clasa- sintetic sugar 

  ngOnInit(): void {
    this.announcementService.serviceCall();
    this.announcementService.getAnnouncements().subscribe(data => {
      this.announcement = data;
      this.filteredAnnouncements = this.announcement;
    });                                                                                                       //am luat observable si dam subscribe sa vedem cand vin datele

  };                                                                                                  //ia vectorul de announcement din serviciul announcement.service


  filterAnnouncementBasedOnCategory(category: Category): void {
    if (!category) {
      this.filteredAnnouncements = this.announcement;
    }
    this.filteredAnnouncements = this.announcement.filter(a => a.categoryId === category.id)
    console.log("Am ajuns in app comp cu categoria: " + category?.name);
  }

}
