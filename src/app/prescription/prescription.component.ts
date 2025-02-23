import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { PrescriptionService } from '../prescription.service';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prescription',
  imports: [FormsModule],
  templateUrl: './prescription.component.html',
  styleUrl: './prescription.component.css'
})
export class PrescriptionComponent {
  doctorName = '';
  diagnosis = '';
  medicineDetails = '';
  prescriptionDate = new Date().toISOString().substring(0, 10);
  hospitalId!: number;

  constructor(
    private prescriptionService: PrescriptionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.hospitalId = +this.route.snapshot.paramMap.get('id')!;
  }

  createPrescription() {
    const prescription = {
      doctorName: this.doctorName,
      diagnosis: this.diagnosis,
      medicineDetails: this.medicineDetails,
      prescriptionDate: this.prescriptionDate,
      hospital: { id: this.hospitalId },
      user: { id: 2 }, // Replace with logged-in user ID
    };
    this.prescriptionService.createPrescription(prescription).subscribe(() => this.router.navigate(['/user']));
  }
}
