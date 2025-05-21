import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-take',
  imports: [CommonModule],
  templateUrl: './take.component.html',
  styleUrl: './take.component.scss'
})
export class TakeComponent implements OnInit {
  users: any[] = [];
  constructor(private demoService: DemoService) { }
  ngOnInit(): void {
    this.demoService.gettakeOnce().subscribe(data => {
      this.users = data;
    });
  }
}
