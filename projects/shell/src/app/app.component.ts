import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CounterService, UserService } from 'common-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'shell';

  constructor(
    private userService: UserService,
    public counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.userService.setUserName('John Doe');
  }
}
