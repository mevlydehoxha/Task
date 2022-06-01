import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Slick } from 'ngx-slickjs';

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
    this.http.get('http://prishtinatask.scoopandspoon.at/api/page.php').subscribe(res => {
      this.data=res;
      this.sliders=this.data.slider.slides;
    })
  }
}
