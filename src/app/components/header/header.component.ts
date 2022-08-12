import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title: string = 'Please enter something in the text box to see if it is a true Palinedrome!';
  constructor() { }

  ngOnInit(): void {
  }


}
