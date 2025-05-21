import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-merge-map',
  imports: [CommonModule],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss'
})
export class MergeMapComponent implements OnInit {
  users: any[] = [];
  constructor(private demoService: DemoService) { }
  ngOnInit(): void {
    this.demoService.getmergeMapUsers().subscribe({
      next: (data) => {
        this.users.push(data);
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }
}
