import { Component } from '@angular/core';
import { DemoService } from '../../services/demo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  users: any[] = [];
  constructor(private demoService: DemoService) { }
  async ngOnInit(): Promise<void> {
    try {
      const res = await this.demoService.getDataPromise();
      this.users = res;
      console.log('Users:', this.users);
    } catch (error) {
      console.error('Promise error:', error);
    }
  }
}
