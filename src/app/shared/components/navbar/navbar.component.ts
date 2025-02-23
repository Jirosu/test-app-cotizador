import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../../../features/auth/services/auth.service';
import { UserNameClaim } from '../../../core/models/token-claim.interface';

import { Menubar } from 'primeng/menubar';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { catchError, map, of } from 'rxjs';

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
export class NavbarComponent implements OnInit {

  visible: boolean = false;
  userNameClaim: UserNameClaim = {} as UserNameClaim;

  constructor( 
    private messageServ: MessageService, 
    private _authService: AuthService, 
    private _router: Router 
  ) {}

  ngOnInit(): void {
    this.getUserClaim();
  }

  getUserClaim() {
    this._authService.getClaimsUsername().subscribe( claim => {
      if(claim.value  === undefined) {
        this.userNameClaim.type = '';
        this.userNameClaim.value = '';
        return;
      }
      this.userNameClaim = claim;
    })
  }

  getUserName() {
    if(this.userNameClaim.value === undefined) {
      return '';
    }
    return this.userNameClaim.value;
  }

  logout() {
    this.visible = false;
    this._authService.logout()
    // .pipe(      
    //   catchError((err) => {
    //       this._router.navigateByUrl('/');
    //       return of(false);
    //   })
    // )  
    .subscribe( response => {
      
      this.messageServ.add({
        severity: 'info',
        summary: 'Sesión cerrada.',
        detail: `Sesión cerrada correctamente`,
        key: 'toast-navbar',
        life: 2500
      });
              
      setTimeout(()=> {
        this._router.navigateByUrl('/');
      }, 1500)

    } );
    
  }
}
