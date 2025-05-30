import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../../services/demo.service';
import { User } from '../../../model/users';

@Component({
  selector: 'app-merge-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss'
})
export class MergeMapComponent implements OnInit {
  users: User[] = [];

  constructor(private demoService: DemoService) { }

  ngOnInit(): void {

    this.demoService.getmergeMapUsers().subscribe({
      next: (user) => {
        this.users = user;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }
}
