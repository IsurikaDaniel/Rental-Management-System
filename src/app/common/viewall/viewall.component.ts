import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewall',
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './viewall.component.html',
  styleUrl: './viewall.component.css'
})
export class ViewallComponent {

  public hardwareItemsList:any = [];
  // public searchByService: string = '';

  constructor(private http:HttpClient){
     this.loadTable();  
  }

  loadTable(){
    this.http.get("http://localhost:8080/hardwareItems/get-all").subscribe(data=>{
      console.log(data);
      this.hardwareItemsList=data;
      
    })
  }

  deletehardwareItemsId(id:any){
    console.log(id);

    this.http.delete(`http://localhost:8080/hardwareItems/delete-by-id/${id}`).subscribe(data=>{
      alert("hardwareItems deleted !!!!");
      this.loadTable();
    })
    
}

public hardwareItemsTemp:any={}
  updatehardwareItems(hardwareItems:any){
    console.log(hardwareItems);
    this.hardwareItemsTemp=hardwareItems;
    
  }

  savehardwareItems(){
    this.http.put("http://localhost:8080/hardwareItems/update-hardwareItems",this.hardwareItemsTemp).subscribe(data=>{
      alert("hardwareItems Updated!!!!!")
    })
  }

    // Search appointments by Patient ID
    // searchAppointmentsByService(): void {
    //   if (this.searchByService.trim() === '') {
    //     alert('Please enter a valid Patient ID.');
    //     return;
    //   }
  
    //   const apiUrl = `http://localhost:8080/appointment/search-by-patientId/${this.searchByService}`;
  
    //   this.http.get(apiUrl).subscribe(
    //     (data: any) => {
    //       console.log(data);
    //       this.appointmentList = Array.isArray(data) ? data : [data]; // Ensure data is an array
    //     },
    //     (error) => {
    //       console.error('Error searching appointments:', error);
    //       alert('No appointments found for the given Patient ID.');
    //     }
    //   );
    // }
}
