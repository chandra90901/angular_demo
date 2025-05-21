import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tap',
  imports: [CommonModule],
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.scss'
})
export class TapComponent implements OnInit {
  users: any[] = [];
  constructor(private demoService: DemoService) { }
  ngOnInit(): void {
    this.demoService.getTap().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }
}

