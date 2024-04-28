import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'common-lib';

@Component({
  selector: 'app-user-name',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-name.component.html',
  styleUrl: './user-name.component.scss',
})
export class UserNameComponent {
  userName$: Observable<string> = this.userService.userName$;

  constructor(private userService: UserService) {}
}
