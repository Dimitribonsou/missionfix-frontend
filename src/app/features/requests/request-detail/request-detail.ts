import { Component } from '@angular/core';
import { RequestService } from '../../../core/services/request.service';
import { ButtonModule } from 'primeng/button';
declare var window: any;
@Component({
  selector: 'app-request-detail',
  imports: [ButtonModule],
  templateUrl: './request-detail.html',
  styleUrl: './request-detail.scss'
})
export  class RequestDetail {
 //injection du service requestService
  constructor(private requestService: RequestService) { }
  //declaration des variables
  id: number = 0;
  title: string = '';
  subtitle: string = '';
  description: string = '';
  imageUrl: string = '';
  category: string = '';

  ngOnInit() {
    //recuperation de l'annonce par son id
    this.id = Number(window.location.href.split('/').pop());
    // this.id = this.requestService.getAnnouncementById(this.id)!.id;
    this.title = this.requestService.getAnnouncementById(this.id)!.title;
    this.subtitle = this.requestService.getAnnouncementById(this.id)!.subtitle;
    this.description = this.requestService.getAnnouncementById(this.id)!.description;
    this.imageUrl = this.requestService.getAnnouncementById(this.id)!.imageUrl;
    this.category = this.requestService.getAnnouncementById(this.id)!.category;
  }
  goBack() {
    window.history.back();
  }
}
