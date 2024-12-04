import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewrentitmes',
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './viewrentitmes.component.html',
  styleUrl: './viewrentitmes.component.css'
})
export class ViewrentitmesComponent {
  public rental:any={
    rentalDate:"",
    returnDate:"",
    totalCost:"",
    dueDate:"",
    fine:""
  };

  constructor(private http:HttpClient){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  public addRental() {
    console.log("Sending rental data:", this.rental);
    this.http.post("http://localhost:8080/rental/add-rental", this.rental).subscribe(
      (res: any) => {
        console.log(res);
        if (res.status === "200") {
          Swal.fire({
            title: "success",
            text: `rental Added!`,
            icon: "success"
          });
        } else {
          Swal.fire({
            title: "error",
            text: `Can't add rental `,
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
