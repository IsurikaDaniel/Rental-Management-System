import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { AdmindashbordComponent } from './common/admindashbord/admindashbord.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SidebarComponent,AdmindashbordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RentalManagmentFrontend';
}
