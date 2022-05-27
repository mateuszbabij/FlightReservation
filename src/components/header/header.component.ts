import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data1Service } from 'src/services/data1.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  weathers: any;
  // locationService: any;
  constructor(private api: Data1Service) {}
  today = new Date();
  ngOnInit(): void {
    this.api.sendGetRequest().subscribe((Data) => {
      this.weathers = Data;
      console.log(Data);
    });
  }
}
