export interface User {

    //information comptes
  id: number;
  fullName: string;
  username: string;
  email: string;
  userPassword: string;
  city: string;
  address: string;
  phoneNumber: string;
  birthday: Date;
  role: string;

  //information artisan
  profession: string;
  experienceYears: number;
  photo_profil: string;
  biography: string;

}
