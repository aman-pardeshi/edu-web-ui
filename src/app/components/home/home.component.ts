import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ApplicationService } from 'src/app/application.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    SelectButtonModule,
    CommonModule,
    FormsModule,
    ToggleButtonModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  selectedCountry: number = 0;
  countryOptions: any[] = [
    { name: 'UK', value: 0 },
    { name: 'USA', value: 1 },
    { name: 'Canada', value: 2 },
    { name: 'Germany', value: 3 },
    { name: 'Ireland', value: 4 },
  ];
  universities: any[] = [];

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.fetchUniversities();
  }

  fetchUniversities() {
    this.applicationService.getAllUniversities().subscribe((response) => {
      this.universities = response;
      console.log(this.universities)
    });
  }
}
