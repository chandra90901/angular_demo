import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../model/users';
import { DemoService } from '../../services/demo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.scss'
})
export class UserinfoComponent implements OnInit {
  users: User[] = [];
  editIndex: number | null = null;
  editableUser: User = this.getEmptyUser();

  constructor(private demoService: DemoService) { }

  ngOnInit(): void {
    this.demoService.getData().subscribe(data => {
      this.users = data;
    });
  }

  onEdit(index: number): void {
    this.editIndex = index;
    this.editableUser = { ...this.users[index] }; // Clone the user
  }

  onCancel(): void {
    this.editIndex = null;
    this.editableUser = this.getEmptyUser();
  }

  onSave(index: number): void {
    this.users[index] = { ...this.editableUser };
    this.onCancel();
  }

  onDelete(index: number): void {
    // if (confirm('Are you sure you want to delete this user?')) {
    //   this.users.splice(index, 1);
    // }
    this.users.splice(index, 1);
  }

  getEmptyUser(): User {
    return { id: 0, firstName: '', lastName: '', email: '', phone: '', username: '' };
  }
}
