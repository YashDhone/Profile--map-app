import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  standalone:true,
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailsComponent {
  // Input property to receive profile data from a parent component
  @Input() profile: any;

  // Placeholder for a sample profile (if no profile is selected)
  defaultProfile = {
    id: 0,
    name: 'Select a profile',
    email: '',
    phone: '',
    address: '',
    description: 'Please select a profile to see the details.'
  };
}
