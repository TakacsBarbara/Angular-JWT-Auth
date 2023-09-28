import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = '';

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/me', {withCredentials: true}).subscribe({
      next: (res: any) => {
        this.message = `Hello, ${res.name}`;
        Emitters.authEmitter.emit(true);
      },
      error: (err: any) => {
        this.message = 'Kérem jelentkezzen be!';
        Emitters.authEmitter.emit(false);
      }
    });
  }

}
