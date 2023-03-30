import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';


@Component({
  selector: 'app-viewpatients',
  templateUrl: './viewpatients.component.html',
  styleUrls: ['./viewpatients.component.css']
})
export class ViewpatientsComponent {
  constructor(private api: ApiService,private router:Router) { 
    this.admittedPatientList();
  }

  calculateAge(dateOfBirth: string): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  goToVent(identifierValue: string) {
    this.router.navigate(['/vent'], { queryParams: { identifier: identifierValue } });
  }
  
  
  admittedPatientList = () => {
    this.api.viewPatients().subscribe((data) => { 
      console.log(data);
      this.patientList=data; });
  }

  patientList: any = [];

  ngOnInit(): void {
    
  
  }

}

