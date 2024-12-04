import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-additmsform',
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './additmsform.component.html',
  styleUrl: './additmsform.component.css'
})
export class AdditmsformComponent {
  public HardwareItems:any={
    name:"",
    availability:"",
    finePerDay:"",
    rentalPerDay:""
  };

  constructor(private http:HttpClient){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  public addHardwareItems() {
    console.log("Sending Customer data:", this.HardwareItems);
    this.http.post("http://localhost:8080/hardwareItems/add-hardwareItems", this.HardwareItems).subscribe(
      (res: any) => {
        console.log(res);
        if (res.status === "200") {
          Swal.fire({
            title: "success",
            text: `Hardware Items Added!`,
            icon: "success"
          });
        } else {
          Swal.fire({
            title: "error",
            text: `Can't add Hardware Items `,
            icon: "error"
          });
        }
      },
      (error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error",
          text: `Could not connect to the server. Please try again later.`,
          icon: "error"
        });
      }
    );
  }
  
}
