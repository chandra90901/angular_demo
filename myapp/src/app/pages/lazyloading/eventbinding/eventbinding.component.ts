import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  standalone: true,
  templateUrl: './eventbinding.component.html',
  styleUrl: './eventbinding.component.scss'
})
export class EventbindingComponent {
  constructor() {
    console.log('DatabindingComponentTwo (lazy) loaded!');
  }
  get(): void {
    alert("hello Angular")
  }
}
