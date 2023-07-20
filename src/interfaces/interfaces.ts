export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    // Add more properties if needed
  }
  
  export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    // Add more properties if needed
  }
  
  export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
  }