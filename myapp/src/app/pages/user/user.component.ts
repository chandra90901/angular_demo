import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';
import { CommonModule } from '@angular/common';
import { Userinfo } from '../../model/users';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  userInfos: Userinfo[] = [];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.userInfos = data;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }

}

