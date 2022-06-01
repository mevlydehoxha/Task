import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Slick } from 'ngx-slickjs';
import { api_path } from '../../contants';
import { RootObject } from './home.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  config: Slick.Config={
    infinite:true,
    slidesToShow:2,
    dots:false,
    autoplay:false,
  }

  root={
    slider:{
      description:''
    }
  } as RootObject

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.http.get<RootObject>(api_path).subscribe(result => {
      this.root=result;
    })
  }
}
