import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterService } from 'common-lib';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  constructor(public counterService: CounterService) {}
}
