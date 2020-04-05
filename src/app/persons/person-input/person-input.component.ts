import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {
  enteredName: string;
  @Output() personAdded = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  onCreate(input: HTMLInputElement) {
    console.log(input.value);
  }

  onCreate2() {
    console.log(this.enteredName);
    this.enteredName = '';
    this.personAdded.emit(this.enteredName);
  }
}
