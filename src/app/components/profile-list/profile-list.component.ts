import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/profile.model';
import { ProfileMapComponent } from "../profile-map/profile-map.component";
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { profile } from 'console';

@Component({
  selector: 'app-profile-list',
  standalone:true,
  imports: [ProfileMapComponent,CommonModule,NgFor,MatCardModule],
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
  
})
export class ProfileListComponent{// Sample list of profiles (could be fetched from a service in a real app)
  profiles = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 234 567 890',
      address: '123 Main St, Cityville, Country',
      imageUrl: 'https://via.placeholder.com/100',
      bio: 'Full Stack Developer with a passion for technology.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1 987 654 321',
      address: '456 Elm St, Townville, Country',
      imageUrl: 'https://via.placeholder.com/100',
      bio: 'UX/UI Designer who loves creating beautiful and functional designs.'
    },
    {
      id: 3,
      name: 'Robert Brown',
      email: 'robert.brown@example.com',
      phone: '+1 555 123 456',
      address: '789 Oak St, Villagetown, Country',
      imageUrl: 'https://via.placeholder.com/100',
      bio: 'Data Scientist with a knack for deep learning and AI.'
    }
  ];
  }

