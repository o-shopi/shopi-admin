import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/presentation/shared/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  isModalOpen: boolean;

  ngOnInit() {}

  goSearch(user, password): void {
    if (user.value === 'lojista@shopi.com.br' && password.value === '123456') {
      this.authService.setUserSession('1');
      this.router.navigate(['menu']);
    } else {
      this.isModalOpen = true;
      Swal.fire('Erro!', 'Email ou senha inválidos', 'error').then(() => {
        this.isModalOpen = false;
      });
    }
  }
}
