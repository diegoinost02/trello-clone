import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: string = 'bg-success-700 hover:bg-success-800 focus:ring-success-300';

  get colors() {
    return {
      'bg-success-700 hover:bg-success-800 focus:ring-success-300': this.color === 'success',
      'bg-primary-700 hover:bg-primary-800 focus:ring-primary-300': this.color == 'primary',
      'bg-red-700 hover:bg-red-800 focus:ring-red-300': this.color == 'danger',
    };
  }
}