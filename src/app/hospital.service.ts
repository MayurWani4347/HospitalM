import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class HospitalService {
  private baseUrl = 'http://localhost:8083/api/hospitals';

  constructor(private http: HttpClient) {}

  getHospitals(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addHospital(hospital: { name: string; location: string }): Observable<any> {
    return this.http.post<any>(this.baseUrl, hospital);
  }
}