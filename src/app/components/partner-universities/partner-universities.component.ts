import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ApplicationService } from 'src/app/application.service';

@Component({
  selector: 'app-partner-universities',
  standalone: true,
  imports: [CommonModule, ToggleButtonModule, FormsModule, ReactiveFormsModule, SelectButtonModule],
  templateUrl: './partner-universities.component.html',
  styleUrl: './partner-universities.component.scss',
})
export class PartnerUniversitiesComponent implements OnInit {
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
      console.log(this.universities);
    });
  }
}
