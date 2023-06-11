import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  email: string = '';
  emailExists: boolean = false;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  comprobarMails() {
    this.authService.checkEmailExists(this.email).subscribe((exists) => {
      if (exists) {
        console.log('Enviar enlace de restablecimiento a:', this.email);
      } else {
        console.log('El correo electrónico no existe.');
      }
    });
  }

  volver() {
    this.navCtrl.back();
  }
}
