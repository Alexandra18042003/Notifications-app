import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {

  @Input() id: string;
  @Input() message: string;
  @Input() title: string;
  @Input() author: string;
  @Input() categoryId: string;

  //TO DO: ar trebui sa transmitem tot anuntul din home component, nu 5 inputuri
  //de folosit output - cand am eliminat un anunt sa se faca automat refresh la lista de anunturi ,
  // trimite catre home component sa si dea refresh la lista de anunturi

  constructor(private announcementService: AnnouncementService) { }

  deleteAnnouncement(id: string) {
    this.announcementService.deleteAnnouncement(id);
  }
}
