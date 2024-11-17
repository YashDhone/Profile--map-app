import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profiles: Profile[] = [
    {
      id: 1,
      name: 'John Doe',
      photoUrl: 'assets/images/john_doe.jpg',
      description: 'Software Developer at XYZ',
      address: {
        lat: 37.7749,
        lng: -122.4194,
        formattedAddress: 'San Francisco, CA, USA',
      },
    },
    // Add more profiles here
  ];

  getProfiles(): Observable<Profile[]> {
    return of(this.profiles);
  }

  getProfile(id: number): Observable<Profile | undefined> {
    return of(this.profiles.find((profile) => profile.id === id));
  }
}
