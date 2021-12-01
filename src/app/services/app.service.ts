import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

const User = [
  {
    email: 'dnyakundi@gmail.com',
    username: 'Admin',
    name: 'David Nyakundi',
    picture: 'https://i.pravatar.cc/150?img=59',
    createdAt: '2017-05-15',
  },
];
@Injectable({
  providedIn: 'root',
})
export class AppService {
  public user: any = null;
  constructor(private router: Router, private toastr: ToastrService) {}

  logout() {
    localStorage.removeItem('token');
    this.user = null;
    this.router.navigate(['/login']);
  }

  async loginByAuth({ email, password }) {
    try {
      const token = 'sfsadsghhjyyeyhfjksdhfsjs';
      this.getProfile();
      localStorage.setItem('token', token);
      this.router.navigate(['/']);
    } catch (error) {
      this.toastr.error(error.response.data.message);
    }
  }
  async getProfile() {
    try {
      this.user = User[0];
      console.log ('Users details',this.user);
    } catch (error) {
      this.logout();
      throw error;
    }
  }
}
