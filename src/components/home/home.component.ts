import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data1Service } from 'src/services/data1.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private data1Service: Data1Service) {}

  ngOnInit(): void {
    this.data1Service.getJSON().subscribe((data) => {
      console.log(data.travel);
    });
  }
}
