import React from 'react';
import { Player, TournamentHighlight } from '../types';
import { Trophy, Crown, Medal, Award, MapPin, TrendingUp } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
  onSelect: (player: Player) => void;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player, onSelect }) => {
  // Determine badge styling based on highlight (Monochrome / Black & White theme)
  const getHighlightConfig = (highlight: TournamentHighlight) => {
    switch (highlight) {
      case TournamentHighlight.CHAMPION:
        return {
          label: '1º Campeão',
          containerClass: 'bg-gradient-to-br from-black via-zinc-900 to-zinc-950 border-white text-white shadow-2xl hover:border-white shadow-white/5',
          badgeClass: 'bg-white text-black border border-white font-black',
          icon: <Crown className="w-4 h-4 text-white" />,
          glowClass: 'ring-2 ring-white'
        };
      case TournamentHighlight.RUNNER_UP:
        return {
          label: '2º Vice',
          containerClass: 'bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-400 hover:border-white shadow-lg',
          badgeClass: 'bg-zinc-800 border border-zinc-600 text-zinc-100',
          icon: <Trophy className="w-4 h-4 text-zinc-300" />,
          glowClass: 'ring-2 ring-zinc-400'
        };
      case TournamentHighlight.THIRD_PLACE:
        return {
          label: '3º Lugar',
          containerClass: 'bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-600 hover:border-zinc-400 shadow-md',
          badgeClass: 'bg-zinc-850 border border-zinc-700 text-zinc-300',
          icon: <Medal className="w-4 h-4 text-zinc-400" />,
          glowClass: 'ring-2 ring-zinc-600'
        };
      case TournamentHighlight.STANDARD:
      default:
        return {
          label: 'Participante',
          containerClass: 'bg-black hover:bg-zinc-950 border-zinc-800 hover:border-zinc-700 shadow-sm',
          badgeClass: 'bg-zinc-900 border border-zinc-800 text-zinc-400',
          icon: <Award className="w-4 h-4 text-zinc-500" />,
          glowClass: 'ring-1 ring-zinc-800'
        };
    }
  };

  const config = getHighlightConfig(player.highlight);

  return (
    <div
      id={`player-card-${player.id}`}
      onClick={() => onSelect(player)}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer ${config.containerClass}`}
    >
      {/* Accent strip */}
      {player.highlight !== TournamentHighlight.STANDARD && (
        <div className={`absolute top-0 left-0 right-0 h-1 ${
          player.highlight === TournamentHighlight.CHAMPION ? 'bg-white' :
          player.highlight === TournamentHighlight.RUNNER_UP ? 'bg-zinc-400' : 'bg-zinc-600'
        }`} />
      )}

      <div>
        {/* Photo and Badge container */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="relative">
            <img
              src={player.photo}
              alt={player.name}
              className={`w-16 h-16 rounded-full object-cover bg-zinc-950 transition-transform duration-300 group-hover:scale-105 ${config.glowClass}`}
              referrerPolicy="no-referrer"
            />
            <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-black p-1 shadow-md border border-zinc-800">
              {config.icon}
            </span>
          </div>

          <div className="text-right">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${config.badgeClass}`}>
              {config.label}
            </span>
            <div className="mt-1.5 flex items-center justify-end gap-1 text-xs text-zinc-450 font-mono">
              <TrendingUp className="w-3 h-3 text-white" />
              <span className="font-bold">{player.rating} ELO</span>
            </div>
          </div>
        </div>

        {/* Player Name and Title */}
        <div className="mb-3">
          <h3 className="font-sans font-bold text-lg text-white tracking-tight leading-snug group-hover:text-zinc-200 transition-colors">
            {player.name}
          </h3>
          <p className="text-xs font-semibold text-zinc-450 mt-0.5 uppercase tracking-wider">
            {player.title}
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-dashed border-zinc-850 flex justify-between items-center text-xs text-zinc-400">
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-zinc-500" />
          {player.city}
        </span>
        <span className="font-mono text-[10px] bg-zinc-950 px-2 py-0.5 rounded text-zinc-450 border border-zinc-800">
          CBX: {player.cbxId}
        </span>
      </div>
    </div>
  );
};

