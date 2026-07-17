export enum TournamentHighlight {
  CHAMPION = 'CHAMPION',
  RUNNER_UP = 'RUNNER_UP',
  THIRD_PLACE = 'THIRD_PLACE',
  STANDARD = 'STANDARD'
}

export interface Supporter {
  name: string;
  type: 'school' | 'academy' | 'club';
  logoUrl?: string; // URL da imagem com a logo da escola/empresa apoiadora
}

export interface Player {
  id: string;
  name: string;
  photo: string;
  highlight: TournamentHighlight;
  trajectory: string;
  discovery: string;
  idol: string;
  goals: string;
  achievements: string[];
  cbxId: string;
  fideId: string;
  title: string;
  rating: number;
  birthDate: string;
  city: string;
  tournamentId: string;
  supporters?: Supporter[];
}
