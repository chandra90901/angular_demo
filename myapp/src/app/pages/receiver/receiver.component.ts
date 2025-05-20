import { Component, OnInit } from '@angular/core';
import { HooksService } from '../../services/hooks.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receiver',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {
  message: string = '';
  constructor(private sender: HooksService) { }
  ngOnInit() {
    this.sender.currentMessage.subscribe(msg => {
      this.message = msg;
    });
  }
}
