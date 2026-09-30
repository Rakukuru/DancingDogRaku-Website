import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';

export const routes: Routes = [
    {
        path: '', //<your-domain>
        component: MainPage,
        title: 'Welcome to my website!'
    },
    {
        path: 'experience',
        loadComponent: () => import('./pages/experience-page/experience-page').then(mod => mod.ExperiencePage), //Lazy Load Experience Page
        title: 'Experience'
    },
    {
        path: 'sonas',
        loadComponent: () => import('./pages/sonas-page/sonas-page').then(mod => mod.SonasPage), //Lazy Load Sonas Page
        title: 'My sonas!'
    },
        {
        path: '**',
        component: MainPage,
        title: 'Welcome to my website!'
    }
]
