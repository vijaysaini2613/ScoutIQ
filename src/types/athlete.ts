export interface Athlete {
  id: string;
  name: string;
  sport: 'Cricket' | 'Football' | 'Basketball';
  position: string;
  age: number;
  stats: {
    speed: number;
    stamina: number;
    accuracy: number;
  };
}