import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  users: any[] = [];
  constructor(private demoService: DemoService) { }
  ngOnInit(): void {
    this.demoService.getData().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }
}

