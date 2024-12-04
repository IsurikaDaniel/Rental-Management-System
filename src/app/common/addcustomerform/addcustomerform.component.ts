import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 import Swal from 'sweetalert2';
@Component({
  selector: 'app-addcustomerform',
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './addcustomerform.component.html',
  styleUrl: './addcustomerform.component.css'
})
export class AddcustomerformComponent{
  public customer:any={
    name:"",
    city:"",
    contact:""
  };

  constructor(private http:HttpClient){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  public addCustomer() {
    console.log("Sending Customer data:", this.customer);
    this.http.post("http://localhost:8080/CustomerOrder/add-Customer", this.customer).subscribe(
      (res: any) => {
        console.log(res);
        if (res.status === "200") {
          Swal.fire({
            title: "success",
            text: `Customer Added!`,
            icon: "success"
          });
        } else {
          Swal.fire({
            title: "error",
            text: `Can't add Customer `,
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
