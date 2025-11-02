import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path:'',
      title: 'Home',
      loadComponent:()=>import('./features/auth/login/login').then((r)=> r.Login)
    },
    {
      path: 'register',
      title: 'register Page',
      loadComponent: ()=> import('./features/auth/register/register').then((e)=> e.Register)
    },
    {
      path:'login',
      title: 'Login Page',
      loadComponent:()=>import('./features/auth/login/login').then((r)=> r.Login)
    },
    {
      path:'forget-password',
      title: 'Forget Password',
      loadComponent:()=>import('./features/auth/forget-password/forget-password').then((f)=> f.ForgetPassword)
    },
    {
        path: 'request-list',
        title: 'Request List',
        loadComponent: () => import('./features/requests/request-list/request-list').then((r) => r.RequestList)
    },
    {
        path: 'request-detail/:id',
        title: 'Request Details',
        loadComponent: () => import('./features/requests/request-detail/request-detail').then((r) => r.RequestDetail)
    },
    {
        path: 'artisan',
        title: 'Artisan',
        loadComponent: () => import('./features/artisans/artisan-list/artisan-list').then((a) => a.ArtisanList)
    },
    {
        path: 'artisan-profile/:id',
        title: 'Artisan Profile',
        loadComponent: () => import('./features/artisans/artisan-profile/artisan-profile').then((a) => a.ArtisanProfile)
    },
    {
        path: '**',
        title: 'Not Found',
        loadComponent: () => import('./features/not-found/not-found').then((n) => n.NotFound)
    }
];
