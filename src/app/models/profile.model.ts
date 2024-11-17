export interface Profile {
    id: number;
    name: string;
    photoUrl: string;
    description: string;
    address: {
      lat: number;
      lng: number;
      formattedAddress: string;
    };
  }
  