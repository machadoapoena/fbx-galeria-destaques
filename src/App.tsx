import { useState, useEffect } from 'react';
import { PLAYERS } from './data/players';
import { CarouselModal } from './components/CarouselModal';
import { Search } from 'lucide-react';

export default function App() {
  // Get tournament ID from query params (defaults to 'fbx-cbc-2025' for a polished fallback experience)
  const urlParams = new URLSearchParams(window.location.search);
  const rawTournamentId = urlParams.get('tournament') || urlParams.get('tournamentId') || 'fbx-cbc-2025';
  const tournamentId = rawTournamentId.toLowerCase();
  
  // Custom tournament logo URL from query params
  const tournamentLogo = urlParams.get('logo') || urlParams.get('tournamentLogo') || 'https://i0.wp.com/fbx.org.br/wp-content/uploads/2022/05/Logo-FBX-1.png?resize=512%2C512';

  // Filter players by the tournament
  const tournamentPlayers = PLAYERS.filter(p => p.tournamentId.toLowerCase() === tournamentId);

  // Active player selected inside the modal
  const [activePlayerId, setActivePlayerId] = useState<string>('');

  // Automatically select the first player when the tournament changes
  useEffect(() => {
    if (tournamentPlayers.length > 0) {
      setActivePlayerId(tournamentPlayers[0].id);
    }
  }, [tournamentId, tournamentPlayers.length]);

  // If tournament has no players, render a beautiful orange, black and white warning page with a clean white background
  if (tournamentPlayers.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-50 text-zinc-900 flex items-center justify-center p-4 selection:bg-orange-500 selection:text-white relative overflow-hidden">
        {/* Decorative chess background overlay with higher contrast over the white background */}
        <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none">
          <div className="grid grid-cols-8 gap-0 w-full h-full">
            {Array.from({ length: 64 }).map((_, idx) => {
              const isDark = (Math.floor(idx / 8) + (idx % 8)) % 2 === 1;
              return (
                <div 
                  key={idx} 
                  className={`aspect-square ${isDark ? 'bg-black' : 'bg-transparent'}`}
                />
              );
            })}
          </div>
        </div>

        <div className="relative max-w-md w-full bg-white rounded-3xl border border-zinc-200/80 p-8 text-center space-y-6 z-10 shadow-2xl animate-fade-in">
          <div className="h-16 w-16 rounded-full bg-zinc-50 flex items-center justify-center mx-auto border border-orange-500/20 shadow-sm">
            <Search className="w-6 h-6 text-orange-500" />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold tracking-tight text-zinc-900">Torneio não Identificado</h1>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Não encontramos nenhum enxadrista associado ao identificador <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-orange-600 font-mono">"{rawTournamentId}"</code>.
            </p>
          </div>
          <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-150 text-left space-y-3">
            <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Torneios Disponíveis:</p>
            <div className="space-y-2">
              <a 
                href="?tournament=fbx-cbc-2025" 
                className="flex items-center justify-between p-2.5 bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-orange-500/35 rounded-xl text-xs font-semibold text-zinc-700 transition-all hover:text-orange-600 group"
              >
                <span>Campeonato Brasiliense Absoluto 2025</span>
                <span className="text-[9px] bg-zinc-100 px-2 py-0.5 rounded text-orange-600 font-mono group-hover:text-orange-500">fbx-cbc-2025</span>
              </a>
              <a 
                href="?tournament=aberto-curitiba" 
                className="flex items-center justify-between p-2.5 bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-orange-500/35 rounded-xl text-xs font-semibold text-zinc-700 transition-all hover:text-orange-600 group"
              >
                <span>Aberto de Curitiba</span>
                <span className="text-[9px] bg-zinc-100 px-2 py-0.5 rounded text-orange-600 font-mono group-hover:text-orange-500">aberto-curitiba</span>
              </a>
            </div>
          </div>
          <p className="text-[10px] text-zinc-400 leading-relaxed">
            Certifique-se de passar o identificador correto como parâmetro na URL (ex: <span className="font-mono text-orange-500">?tournament=nome-do-torneio</span>).
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 overflow-hidden relative">
      {/* Background chess watermark decoration */}
      <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none">
        <div className="grid grid-cols-8 gap-0 w-full h-full">
          {Array.from({ length: 64 }).map((_, idx) => {
            const isDark = (Math.floor(idx / 8) + (idx % 8)) % 2 === 1;
            return (
              <div 
                key={idx} 
                className={`aspect-square ${isDark ? 'bg-black' : 'bg-transparent'}`}
              />
            );
          })}
        </div>
      </div>

      <CarouselModal
        players={tournamentPlayers}
        selectedPlayerId={activePlayerId || (tournamentPlayers[0]?.id || '')}
        onSelectPlayer={(id) => setActivePlayerId(id)}
        tournamentId={tournamentId}
        tournamentLogo={tournamentLogo}
      />
    </div>
  );
}
