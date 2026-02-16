import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-veggie-shell-component',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './veggie-shell-component.component.html',
  styleUrls: ['./veggie-shell-component.component.scss']
})
export class VeggieShellComponentComponent {

}
