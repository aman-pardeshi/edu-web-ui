import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ApplicationService } from 'src/app/application.service';
import { LoaderComponent } from '../Shared/loader/loader.component';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule,
    DropdownModule,
    ButtonModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    LoaderComponent,
    TableModule
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent implements OnInit {
  reportTypes: any[] = [];
  nationalityList: any[] = [];
  statusList: any[] = [];
  categorization: any[] = [];
  reportSearchForm: FormGroup;

  reportValues: any[] = [];

  constructor(
    private applicationService: ApplicationService,
    private formsBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.reportTypes = [
      { label: 'Report 1', value: 'M' },
      { label: 'Report 2', value: 'F' },
    ];

    this.statusList.push(
      { label: 'Pending', value: 'M' },
      { label: 'Approved', value: 'M' },
      { label: 'Rejected', value: 'M' },
      { label: 'Refunded', value: 'M' }
    );

    this.categorization.push(
      { label: 'Red Applications', value: 'M' },
      { label: 'Blue Applications', value: 'M' },
      { label: 'Green Applications', value: 'M' }
    );

    this.applicationService.getNationalityList().subscribe((response) => {
      this.nationalityList = response;
    });
  }

  initForm() {
    this.reportSearchForm = this.formsBuilder.group({
      reportType: ['', Validators.required],
      nationality: [''],
      status: [''],
      categorization: [''],
      startDate: [''],
      endDate: [''],
    });
  }

  onSearch() {
    this.spinner.show();

    const searchParams = {};

    this.applicationService.getReport(searchParams).subscribe((response) => {
      this.reportValues = response.data;
      this.spinner.hide();
    });
  }
}
