import { Component, OnInit } from '@angular/core';
import { HooksService } from '../../services/hooks.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sender',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {
  constructor(private sender: HooksService,
    private router: Router) { }
  ngOnInit(): void {
  }
  send() {
    this.sender.sendMessage('Hello sender');
    this.router.navigate(['/receiver']);
  }
}
