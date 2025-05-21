import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DemoService } from '../../services/demo.service';
import { debounceTime, filter, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-debounce-time',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './debounce-time.component.html',
  styleUrl: './debounce-time.component.scss'
})
export class DebounceTimeComponent implements OnInit {
  searchControl = new FormControl('');
  users: any[] = [];

  constructor(private demoService: DemoService) { }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      filter((value): value is string => value !== null && value.trim().length > 0),
      debounceTime(300),
      switchMap(value => this.demoService.debounceTimesearch(value))
    ).subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }

}
