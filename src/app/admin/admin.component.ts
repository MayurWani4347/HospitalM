// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { PrescriptionService } from '../prescription.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent  {
  hospitals: any[] = [];
  name = '';
  location = '';

  constructor(private hospitalService: HospitalService) {
    this.loadHospitals();
  }

  loadHospitals() {
    this.hospitalService.getHospitals().subscribe(hospitals => (this.hospitals = hospitals));
  }

  addHospital() {
    this.hospitalService.addHospital({ name: this.name, location: this.location }).subscribe(() => {
      this.loadHospitals();
      this.name = '';
      this.location = '';
    });
  }
}