import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../../services/demo.service';
import { CommonModule } from '@angular/common';
import { User } from '../../../model/users';

@Component({
  selector: 'app-filter',
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  users: User[] = [];
  constructor(private demoService: DemoService) { }
  ngOnInit(): void {
    const kayword = 'cha'
    this.demoService.getFilterData(kayword).subscribe({
      next: (data) => {
        console.log('Filtered users:', data);
        this.users = data;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }
}
