import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  title: string;
  author: string;
  imageUrl: string;
  message: string;
  selectedCategory: string;
  id: string = "";
  constructor(private router: ActivatedRoute, private annService: AnnouncementService) {

    this.router.params.subscribe(params => {

      this.id = params['id'];
    });
  }
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

  editAnnouncement() {
    let announcement: Announcement = {
      id: this.id,
      title: this.title,
      author: this.author,
      message: this.message,
      categoryId: this.selectedCategory,
      imageUrl: this.imageUrl
    };
    this.annService.editAnnouncement(this.id, announcement);

  }



}
