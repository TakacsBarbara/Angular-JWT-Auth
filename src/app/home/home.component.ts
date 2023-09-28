import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = '';
  datas: any = {
    email: '',
    phone_number: '',
    address: '',
    position: ''
  };

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('jwt');

    const httpOptions = {
      withCredentials: true,
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };

    this.http.get('http://127.0.0.1:8000/api/me', httpOptions).subscribe({
      next: (res: any) => {
        this.message = `Üdv, ${res.user.name}!`;
        this.datas = res.user;
        Emitters.authEmitter.emit(true);
      },
      error: (err: any) => {
        this.message = 'Kérem jelentkezzen be!';
        Emitters.authEmitter.emit(false);
      }
    });
  }

}
