import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss'
})
export class SwitchMapComponent implements OnInit {
  searchControl = new FormControl('');
  users: any[] = [];
  loading = false;
  constructor(private demoService: DemoService) { }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      filter((val): val is string => val !== null && val.trim().length > 0),
      switchMap(val => this.demoService.searchSwitchUser(val))
    ).subscribe(users => {
      this.users = users;
      this.loading = false;
    });
  }
}

