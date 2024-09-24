import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../Shared/header/header.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {}
