import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import {  Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register implements  OnInit {

  registerFrom: any =  FormGroup;

  showPassword: boolean = false;

  roleOptions = [
    { value: 'artisan', label: 'Artisan' },
    { value: 'admin', label: 'Administrateur' },
    { value: 'client', label: 'Client' }
  ];

  cities = [
    { value: 'douala', label: 'Douala' },
    { value: 'yaounde', label: 'Yaoundé' },
    { value: 'bafoussam', label: 'Bafoussam' }
  ];

  neighborhoods = [
    { value: 'bonapriso', label: 'Bonapriso' },
    { value: 'bonanjo', label: 'Bonanjo' },
    { value: 'akwa', label: 'Akwa' }
  ];


  constructor(
    private readonly formbuilder: FormBuilder,
    private readonly registerservice: UserService,
    private readonly router: Router
  ){}

  ngOnInit() {

    this.registerFrom = this.formbuilder.group({

      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(6)]],
      fullName: ['', [Validators.required]],
      city: ['', [Validators.required]],
      address: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      role: ['', [Validators.required]]

    })

  }

  onSubmit(){

    if (this.registerFrom.valid) {
      console.log('Formulaire valide:', this.registerFrom.value);

      this.registerservice.registerUser(this.registerFrom.value).subscribe({
        next: (res) =>{
          console.log('Utilisateur enregistré avec succès:', res);
          this.router.navigate(['/login']);
        },
        error: (err)=>{
          console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', err);
        }
      })

    } else {
      this.markAllFieldsAsTouched();
    }

  }

  onReset(){

    this.registerFrom.reset();

  }

  private markAllFieldsAsTouched(): void {
    Object.keys(this.registerFrom.controls).forEach(key => {
      this.registerFrom.get(key)?.markAsTouched();
    });
  }

   togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
