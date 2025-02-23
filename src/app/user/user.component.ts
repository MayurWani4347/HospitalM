import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { PrescriptionService } from '../prescription.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [CommonModule,RouterModule,FormsModule,RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
hospitals: any[] = [];

constructor(private hospitalService: HospitalService, private router: Router) {
  this.hospitalService.getHospitals().subscribe(hospitals => (this.hospitals = hospitals));
}

selectHospital(hospitalId: number) {
  this.router.navigate(['/prescription', hospitalId]);
}
}


