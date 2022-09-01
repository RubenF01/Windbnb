export interface Stay {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number | null;
  photo: string;
}

export interface DrawerFilter {
  isOpen: boolean;
  onClose: () => void;
}

export interface FilterSlice {
  activeFilter: string;
  adultCount: number;
  childCount: number;
  selectedCity: string;
  changeFilter: (filter: string) => void;
  addAdult: () => void;
  removeAdult: () => void;
  addChild: () => void;
  removeChild: () => void;
  setSelectedCity: (city: string) => void;
}

export interface StaySlice {
  stays: Stay[];
  filteredStays: Stay[];
  setFilteredStays: (stays: Stay[]) => void;
}