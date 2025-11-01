import { Component } from '@angular/core';
import { Card } from '../../../shared/components/card/card';
import { RequestService } from '../../../core/services/request.service';
import { Request } from '../../../core/models/request.model';
@Component({
  selector: 'app-request-list',
  imports: [Card],
  templateUrl: './request-list.html',
  styleUrl: './request-list.scss'
})
export class RequestList {
   announcements: Request[] = [];
// Exemple de données simulées (mock)
constructor(private requestService: RequestService) {  
  this.announcements = this.requestService.getAnnouncements();
}
}
