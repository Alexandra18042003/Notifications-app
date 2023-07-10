import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Announcement } from '../announcement';
import { AnnouncementComponent } from '../announcement/announcement.component';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss']
})
export class AddAnnouncementFormComponent {

  title: string;
  author: string;
  imageUrl: string;
  message: string;
  selectedCategory: string;

  categories: Category[] = [{
    id: '1', name: 'Course'
  },
  {
    id: '2', name: 'General'
  },
  {
    id: '3', name: 'Laboratory'
  }
  ];

  constructor(private announcementService: AnnouncementService, private router: Router) { }



  addAnnouncement() {
    console.log(this.selectedCategory);
    let announcement: Announcement = {
      id: undefined,
      title: this.title,
      author: this.author,
      message: this.message,
      categoryId: this.selectedCategory,
      imageUrl: this.imageUrl
    };
    this.announcementService.addAnnouncement(announcement);
    this.router.navigateByUrl('');
  }

}
