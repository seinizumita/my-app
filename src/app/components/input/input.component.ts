import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {


  @Input() text!: string;
  @Output() btnClick = new EventEmitter();

  title: string = "Check if Palindrome";
  constructor() { }

  ngOnInit(): void {
  }
  checkIfPalindrome(){
    console.log('hello');
    
    // const cleanedInput = input.replace(/[_\W]+/g, '').toLowerCase()

    // const reversedInput = cleanedInput
    // .split('')
    // .reverse()
    // .join('')

    // return reversedInput === cleanedInput

  }

}
