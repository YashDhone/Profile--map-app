import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppComponent } from './app.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileMapComponent } from './components/profile-map/profile-map.component';
import { ProfileService } from './services/profile.service';

// Import Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent,
    ProfileMapComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    MatToolbarModule, // Import the MatToolbarModule here
    BrowserAnimationsModule // Required for Angular Material
  ],
  providers: [ProfileService],
  bootstrap: [bootstrapApplication]
})
export class AppModule {}
