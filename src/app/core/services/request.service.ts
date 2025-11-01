import { Injectable } from '@angular/core';
import { Request } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  ANNOUNCEMENTS: Request[] = [
  {
    id: 1,
    title: 'Réparation de plomberie urgente',
    subtitle: 'Yaoundé - Bastos',
    description: 'Besoin d’un plombier expérimenté pour réparer une fuite d’eau dans la salle de bain.',
    imageUrl: 'https://media.istockphoto.com/id/1440019701/fr/photo/gros-plan-dun-plombier-r%C3%A9parant-un-%C3%A9vier-avec-outil-dans-la-salle-de-bain.jpg?s=1024x1024&w=is&k=20&c=DCyYhD6fmmKXVEdGsgsuK-mxXh7j52uhnK70cl8T5o0=',
    category: 'Plomberie',
  },
  {
    id: 2,
    title: 'Peinture appartement 3 pièces',
    subtitle: 'Douala - Bonapriso',
    description: 'Recherche peintre pour rafraîchir les murs d’un appartement de 80m².',
    imageUrl: 'https://media.istockphoto.com/id/1183183783/fr/photo/lartiste-f%C3%A9minine-travaille-sur-la-peinture-%C3%A0-lhuile-abstraite-le-pinceau-mobile.jpg?s=1024x1024&w=is&k=20&c=3Ucf1QKNIa5RJKQivwkC6crXWvdq6othonB4tPa6Fu4=',
    category: 'Peinture',
  },
  {
    id: 3,
    title: 'Montage de meubles IKEA',
    subtitle: 'Paris - 15e arrondissement',
    description: 'Cherche bricoleur pour monter plusieurs meubles IKEA (commode, étagère, table).',
    imageUrl: 'https://media.istockphoto.com/id/1171643487/fr/photo/femmes-adultes-moyennes-appr%C3%A9ciant-la-r%C3%A9novation-%C3%A0-la-maison.jpg?s=1024x1024&w=is&k=20&c=vS32VqB2UBy3FRb-nZVv5ns_b740XUO_9p7tvn8UIns=',
    category: 'Bricolage',
  },
  {
    id: 4,
    title: 'Nettoyage de bureau',
    subtitle: 'Douala - Akwa',
    description: 'Entreprise cherche prestataire pour nettoyage hebdomadaire de bureaux (3h/semaine).',
    imageUrl: 'https://media.istockphoto.com/id/1294313698/fr/photo/homme-d%C3%A9sinfectant-un-bureau.jpg?s=1024x1024&w=is&k=20&c=8bMy4Fzumm_OZw9uREmlcaJC0C2mIbxPlaB-QshlHDk=',
    category: 'Nettoyage',
  },
  {
    id: 5,
    title: 'Installation d’éclairage LED',
    subtitle: 'Yaoundé - Mendong',
    description: 'Cherche électricien pour installer des bandes LED et des luminaires encastrés.',
    imageUrl: 'https://media.istockphoto.com/id/1469656864/fr/photo/ling%C3%A9nieur-%C3%A9lectricien-utilise-un-multim%C3%A8tre-pour-tester-linstallation-%C3%A9lectrique-et-le.jpg?s=1024x1024&w=is&k=20&c=hzyiszFXq7mvFYm1b7s9oL5NPeBnibx6RzpLDnU0GUQ=',
    category: 'Électricité',
  }
];

  constructor() { }
  //methode permettant d'afficher la liste des annonces
  getAnnouncements(): Request[] {
    return this.ANNOUNCEMENTS;
  }
  //methode permettant d'afficher une seule annonce
  getAnnouncementById(id: number): Request | undefined {
    return this.ANNOUNCEMENTS.find(announcement => announcement.id === id);
  }
}
