export const SPORTS = ["Basketball", "Badminton"];

export const SEASONS = ["Season 1", "Season 2", "Season 3", "Summer Camp"];

export const EMIRATES = [
  "Abu Dhabi","Dubai","Sharjah","Ajman","Umm Al Quwain",
  "Ras Al Khaimah","Fujairah"
];

export const PROGRAMS = [
  "ballsnbabies","midlevel","jr","all boys"
];

export const LOCATIONS = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `School Location ${i + 1}`
}));

export const DAYS = [
  "Monday","Tuesday","Wednesday","Thursday",
  "Friday","Saturday","Sunday"
];

export const HOURS = Array.from({ length: 15 }, (_, i) => `${6 + i}:00`);
