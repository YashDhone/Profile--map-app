import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { GoogleMapsModule } from '@angular/google-maps';
import { ProfileMapComponent } from "./components/profile-map/profile-map.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, ProfileListComponent, CommonModule, MatCardModule, GoogleMapsModule, ProfileMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'profile-map-app';
}
