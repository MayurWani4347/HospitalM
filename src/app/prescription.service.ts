import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PrescriptionService {
  private baseUrl = 'http://localhost:8083/api/prescriptions';

  constructor(private http: HttpClient) {}

  createPrescription(prescription: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, prescription);
  }

  getUserPrescriptions(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${userId}`);
  }
}