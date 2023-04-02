import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from './DM/post';
import { calcFibonacci, fiboRe } from './funcions/fibonacci';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  response$ : Observable<IPost[]> = new Observable<IPost[]>();
  ngOnInit(): void {
    this.response$  = this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  }
  title = 'day1';

  constructor(private http: HttpClient) { 
    for(let i = 1; i< 10; i++){
      // console.log('#'+i+': '+calcFibonacci(i));
      console.log('#'+i+': '+fiboRe(i));
    }
  }

}

