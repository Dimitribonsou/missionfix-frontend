import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
//declarer window pour le rendre accessible
declare var window: any;
@Component({
  selector: 'app-card',
  imports: [CardModule, ButtonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() title!: string;
  @Input() id!: number;
  @Input() subtitle!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() buttonLabel: string = 'Détails';

  Details(id: number) {
    window.location.href = '/request-detail/' + id;
    console.log(id);
  }
}
