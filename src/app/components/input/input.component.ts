import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  inputValue: string = "";
  @Input() text!: string;

  title: string = "Check if Palindrome";
  constructor() { }

  ngOnInit(): void {
  }

  changeEvent(event: any){
    this.inputValue = event.target.value;
  }


  checkIfPalindrome(inputValue: string){ Boolean

    const cleanedInput = inputValue.replace(/[_\W0-9]/g, '').toLowerCase()

    const reversedInput = cleanedInput
    .split('')
    .reverse()
    .join('') 
    
    return reversedInput === cleanedInput
  }

}
