import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { PrescriptionComponent } from './prescription/prescription.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,LoginComponent,AdminComponent,UserComponent,PrescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hospital';
}