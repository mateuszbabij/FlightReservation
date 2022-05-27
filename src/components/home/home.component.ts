import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITravel } from 'src/interfaces/travelInterface';
import DataJson from '../../assets/database.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Travels = DataJson.travel;
  constructor() {}

  ngOnInit(): void {
    console.log(this.Travels);
  }
}
