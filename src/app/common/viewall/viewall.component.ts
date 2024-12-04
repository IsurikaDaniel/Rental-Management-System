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
  // public searchByID: string = '';

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

    // Search item by Patient ID
    // searchietemsById(): void {
    //   if (this.searchByid.trim() === '') {
    //     alert('Please enter a valid ID.');
    //     return;
    //   }
  
    //   const apiUrl = `http://localhost:8080/hardwareItems/search-by-Id/${this.searchByid}`;
  
    //   this.http.get(apiUrl).subscribe(
    //     (data: any) => {
    //       console.log(data);
    //       this.ItemList = Array.isArray(data) ? data : [data]; // Ensure data is an array
    //     },
    //     (error) => {
    //       console.error('Error searching item:', error);
    //       alert('No items found for the given Patient ID.');
    //     }
    //   );
    // }
}
