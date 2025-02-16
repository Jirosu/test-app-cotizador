import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../../../features/auth/services/auth.service';

import { Menubar } from 'primeng/menubar';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { catchError, EMPTY } from 'rxjs';

@Component({
  selector: 'shared-navbar',
  standalone: true,
  imports: [
    Menubar,
    DrawerModule,
    ButtonModule,
    RouterModule,
    Toast
  ],
  providers: [ MessageService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  visible: boolean = false;

  constructor( private messageServ: MessageService, private _authService: AuthService, private _router: Router ) {}

  logout() {
    this.visible = false;
    this._authService.logout()
      // .pipe(
      //   catchError((error) => {
      //      if (error.status === 401) {
      //         this.messageServ.add({
      //           severity: 'error',
      //           summary: 'Error.',
      //           detail: 'Error al intentar cerrar su sesión.',
      //           key: 'toast-login',
      //           life: 2500
      //         });
      //       } else {
      //         this.messageServ.add({
      //           severity: 'error',
      //           summary: 'Error al cerrar su sesión.',
      //           detail: `${error.error.message}`,
      //           key: 'toast-login',
      //           life: 2500
      //         });
      //       }
      //       console.error(error);
      //       return EMPTY;
      //   })
      // )
      .subscribe( response => {
        console.log({response});
        
        this.messageServ.add({
          severity: 'info',
          summary: 'Cesión cerrada.',
          detail: `${response.body}` /*'Su sesión fue cerrada correctamente.'*/,
          key: 'toast-navbar',
          life: 2500
        });
        
        
        setTimeout(()=> {
          this._router.navigateByUrl('/');
        }, 1500)

      } );
    
  }
}
