import { Routes } from '@angular/router';
import { PublicGuard } from './features/auth/guards/public.guard';
import { AuthGuard } from './features/auth/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent:() => import('./features/auth/pages/login/login.component').then(m => m.LoginComponent),
<<<<<<< HEAD
        canActivate: [PublicGuard],
=======
        // canActivate: [PublicGuard],
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
        title: 'Inicia sesión para ingresar al sistema | GlobalTec'
    },
    {
        path: 'cotizador',
        loadChildren: () => import('./features/cotizador/cotizador.routes').then(m => m.routes),
<<<<<<< HEAD
        canActivate: [AuthGuard]        
=======
        // canActivate: [AuthGuard]        
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
    },
    {
        path: '**',
        redirectTo: ''
    }
];
