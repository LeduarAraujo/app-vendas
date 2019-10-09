import { Component } from '@angular/core';

import { HttpParams, HttpClient, HttpResponse } from '@angular/common/http';

import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vedinha Feliz';
}
