import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-name',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-name.component.html',
  styleUrl: './user-name.component.scss',
})
export class UserNameComponent implements OnInit {
  @Input() name: string = '';
  userName$: Observable<string> = this.userService.userName$;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.setUserName(this.name);
  }
}
