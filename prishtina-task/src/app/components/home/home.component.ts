import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Slick } from 'ngx-slickjs';
import { api_path } from '../../contants';

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
  sliders:any=[];
  data:any=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.http.get(api_path).subscribe(res => {
      this.data=res;
      this.sliders=this.data.slider.slides;
    })
  }
}
