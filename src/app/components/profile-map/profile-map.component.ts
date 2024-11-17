import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-profile-map',
  standalone:true,
  imports :[ProfileMapComponent,GoogleMap,MapMarker,CommonModule,MapInfoWindow],
  templateUrl: './profile-map.component.html',
  styleUrls: ['./profile-map.component.css']
})
export class ProfileMapComponent{
  // Center of the map (latitude and longitude)
  center: google.maps.LatLngLiteral = { lat: 40.7128, lng: -74.0060 }; // Example coordinates (New York City)

  // Zoom level for the map
  zoom = 5;

  // Sample list of profiles with location
  profiles = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 234 567 890',
      address: '123 Main St, Cityville, Country',
      lat: 40.7128,
      lng: -74.0060, // Example coordinates for New York City
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1 987 654 321',
      address: '456 Elm St, Townville, Country',
      lat: 34.0522,
      lng: -118.2437, // Example coordinates for Los Angeles
    },
    {
      id: 3,
      name: 'Robert Brown',
      email: 'robert.brown@example.com',
      phone: '+1 555 123 456',
      address: '789 Oak St, Villagetown, Country',
      lat: 37.7749,
      lng: -122.4194, // Example coordinates for San Francisco
    }
  ];
}
