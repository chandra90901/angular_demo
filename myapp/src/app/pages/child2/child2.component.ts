import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss'
})
export class Child2Component {
  @Output() dataToParent = new EventEmitter<string>();

  sendData() {
    const data = "Hello Parent!";
    this.dataToParent.emit(data);
  }
}
