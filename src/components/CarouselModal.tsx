import React, { useEffect, useRef } from 'react';
import { Player, TournamentHighlight } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, ChevronLeft, ChevronRight, Trophy, Crown, Medal, Award,
  BookOpen, Compass, Sparkles, HelpCircle, Calendar, MapPin, 
  Hash, Globe, ExternalLink
} from 'lucide-react';

interface CarouselModalProps {
  players: Player[];
  selectedPlayerId: string;
  onClose?: () => void;
  onSelectPlayer: (id: string) => void;
  tournamentId?: string;
  tournamentLogo?: string;
}

const calculateAge = (birthDateStr: string): string => {
  if (!birthDateStr) return '';
  const parts = birthDateStr.split('/');
  if (parts.length !== 3) return birthDateStr;
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);
  
  const today = new Date();
  let age = today.getFullYear() - year;
  const monthDiff = today.getMonth() - month;
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < day)) {
    age--;
  }
  return `${age} anos`;
};

const getIdolNameOnly = (idolStr: string): string => {
  if (!idolStr) return '';
  const commaIdx = idolStr.indexOf(',');
  if (commaIdx !== -1) {
    return idolStr.substring(0, commaIdx).trim();
  }
  const dotIdx = idolStr.indexOf('.');
  if (dotIdx !== -1) {
    return idolStr.substring(0, dotIdx).trim();
  }
  return idolStr.trim();
};

export const CarouselModal: React.FC<CarouselModalProps> = ({
  players,
  selectedPlayerId,
  onClose,
  onSelectPlayer,
  tournamentId,
  tournamentLogo,
}) => {
  const currentIndex = players.findIndex(p => p.id === selectedPlayerId);
  const activePlayer = players[currentIndex === -1 ? 0 : currentIndex];

  // Key navigation for the carousel modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose]);

  const handleNext = () => {
    if (players.length === 0) return;
    const nextIndex = (currentIndex + 1) % players.length;
    onSelectPlayer(players[nextIndex].id);
  };

  const handlePrev = () => {
    if (players.length === 0) return;
    const prevIndex = (currentIndex - 1 + players.length) % players.length;
    onSelectPlayer(players[prevIndex].id);
  };

  // Click outside to close helper
  const modalRef = useRef<HTMLDivElement>(null);
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (onClose && modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // Badge configurations based on Bento Grid design (Black, White, and Amber theme)
  const getHighlightConfig = (highlight: TournamentHighlight) => {
    switch (highlight) {
      case TournamentHighlight.CHAMPION:
        return {
          label: '1º Lugar - Campeão',
          badgeClass: 'bg-amber-500 border-amber-500 text-black font-black shadow-lg shadow-amber-500/10',
          dotClass: 'bg-black',
          icon: <Crown className="w-3.5 h-3.5 text-black" />
        };
      case TournamentHighlight.RUNNER_UP:
        return {
          label: '2º Lugar - Vice',
          badgeClass: 'bg-white border-white text-black font-bold',
          dotClass: 'bg-black',
          icon: <Trophy className="w-3.5 h-3.5 text-black" />
        };
      case TournamentHighlight.THIRD_PLACE:
        return {
          label: '3º Lugar',
          badgeClass: 'bg-zinc-900 border-amber-500/30 text-amber-400 font-bold',
          dotClass: 'bg-amber-500',
          icon: <Medal className="w-3.5 h-3.5 text-amber-400" />
        };
      case TournamentHighlight.STANDARD:
      default:
        return {
          label: 'Participante',
          badgeClass: 'bg-zinc-950 border-zinc-800 text-zinc-400 font-semibold',
          dotClass: 'bg-zinc-700',
          icon: <Award className="w-3.5 h-3.5 text-zinc-500" />
        };
    }
  };

  const badgeConfig = getHighlightConfig(activePlayer.highlight);

  const tournamentNames: Record<string, string> = {
    'fbx-cbc-2025': 'Campeonato Brasiliense Absoluto 2025',
    'aberto-curitiba': 'ABERTO DE CURITIBA DE XADREZ',
  };
  const tournamentTitle = (tournamentId && tournamentNames[tournamentId]) || 'TABULEIRO DE HONRA';

  return (
    <div
      id="carousel-modal-overlay"
      className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-8 pt-6 md:pt-12 bg-white/90 backdrop-blur-md overflow-y-auto"
      onClick={handleBackdropClick}
    >
      {/* Background Context (Decorative Subtle Checkered Grid) */}
      <div className="absolute inset-0 opacity-15 flex flex-col p-8 pointer-events-none overflow-hidden">
        <div className="h-12 border-b border-zinc-200 flex justify-between items-center mb-4">
          <span className="font-bold text-zinc-400 text-xs tracking-widest">{tournamentTitle}</span>
          <span className="text-zinc-400 text-xs tracking-widest">QUADRO EXPOSITOR</span>
        </div>
        <div className="space-y-4">
          <div className="h-12 bg-zinc-100 rounded-xl w-full"></div>
          <div className="h-12 bg-zinc-100 rounded-xl w-3/4"></div>
          <div className="h-12 bg-zinc-100 rounded-xl w-full"></div>
          <div className="h-12 bg-zinc-100 rounded-xl w-5/6"></div>
        </div>
      </div>

      <div
        ref={modalRef}
        id="carousel-modal-container"
        className="relative w-full max-w-5xl bg-zinc-950 text-zinc-100 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_40px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden z-10 my-4 max-h-[92vh]"
      >


        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 md:px-8 py-5 border-b border-zinc-900 bg-zinc-950/50">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
                <span>{activePlayer.name}</span>
                <span className="text-zinc-400 font-mono text-lg font-bold">({activePlayer.rating})</span>
              </h1>
              <div className="flex items-center gap-2.5 mt-2 flex-wrap">
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-black text-white border border-white/80 text-[10px] font-extrabold font-mono uppercase tracking-wider">
                  {activePlayer.title}
                </span>
                <span className="text-zinc-500 text-xs tracking-widest uppercase font-semibold">
                  {activePlayer.city}
                </span>
              </div>
            </div>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="self-end sm:self-center w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-900 text-zinc-400 hover:text-white transition-all shadow-inner"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Content Bento Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 p-6 md:p-8 overflow-y-auto max-h-[calc(92vh-140px)]">
          {/* Bento Box 1: Photo & Image Carousel Slider (col-span-4) */}
          <div className="col-span-1 md:col-span-4 bg-zinc-950 rounded-2xl relative overflow-hidden group border border-zinc-900 flex flex-col justify-between p-4 min-h-[300px]">
            {/* Subtle Chess Piece Backdrop Pattern */}
            <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none select-none">
              <span className="text-9xl text-amber-500/10">♔</span>
            </div>

            {/* Carousel Picture Box */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-2xl border border-zinc-900 bg-black flex-1 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activePlayer.id}
                  src={activePlayer.photo}
                  alt={activePlayer.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Quick info over photo */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/90 backdrop-blur-md rounded-lg p-2.5 border border-zinc-900 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Rating FIDE</p>
                  <p className="text-sm font-mono font-bold text-amber-500">{activePlayer.rating} ELO</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Idade</p>
                  <p className="text-xs text-zinc-300 font-semibold">{calculateAge(activePlayer.birthDate)}</p>
                </div>
              </div>
            </div>

            {/* Direct Picture controls inside Box 1 */}
            <div className="mt-3 flex items-center justify-between">
              <button
                onClick={handlePrev}
                className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg transition-all border border-zinc-800 text-xs font-semibold flex items-center gap-1 hover:border-amber-500/25"
              >
                <ChevronLeft className="w-4 h-4 text-amber-500" />
                <span>Anterior</span>
              </button>

              <div className="flex gap-1">
                {players.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => onSelectPlayer(p.id)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      p.id === activePlayer.id ? 'w-4 bg-amber-500' : 'w-1.5 bg-zinc-800 hover:bg-zinc-700'
                    }`}
                    title={p.name}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg transition-all border border-zinc-800 text-xs font-semibold flex items-center gap-1 hover:border-amber-500/25"
              >
                <span>Próximo</span>
                <ChevronRight className="w-4 h-4 text-amber-500" />
              </button>
            </div>
          </div>

          {/* Bento Box 2: Middle Column - Trajectory & Q&A (col-span-5) */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-4">
            {/* Trajectory Card */}
            <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-900 flex-1 flex flex-col justify-between transition-all duration-300 hover:bg-zinc-900/40 hover:border-amber-500/30 hover:scale-[1.015] transform-gpu">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-amber-500" />
                  <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Trajetória</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed text-sm">
                  {activePlayer.trajectory}
                </p>
              </div>
            </div>
            
            {/* Stacked: Discovery and Idol */}
            <div className="flex flex-col gap-4">
              <div className="bg-zinc-900/30 p-5 rounded-2xl border border-zinc-900 flex flex-col justify-between transition-all duration-300 hover:bg-zinc-900/40 hover:border-amber-500/30 hover:scale-[1.015] transform-gpu">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Compass className="w-3.5 h-3.5 text-amber-500/80" />
                    <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Descoberta</h3>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed italic">
                    "{activePlayer.discovery}"
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900/30 p-5 rounded-2xl border border-zinc-900 flex flex-col justify-center min-h-[105px] transition-all duration-300 hover:bg-zinc-900/40 hover:border-amber-500/30 hover:scale-[1.015] transform-gpu">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500/80" />
                    <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Maior Ídolo</h3>
                  </div>
                  <div className="flex justify-center items-center py-2">
                    <p className="font-calligraphy text-3xl md:text-4xl text-amber-400 font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(245,158,11,0.15)] text-center">
                      {getIdolNameOnly(activePlayer.idol)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Box 3: Right Column - Goals, Achievements & Official IDs (col-span-3) */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
            {/* Objectives / Goals Card (Amber-accented elegant block) */}
            <div className="bg-amber-500/5 p-5 rounded-2xl border border-amber-500/20 transition-all duration-300 hover:bg-amber-500/10 hover:border-amber-500/40 hover:scale-[1.015] transform-gpu">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                <h3 className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Objetivos</h3>
              </div>
              <p className="text-xs text-zinc-200 italic leading-relaxed">
                "{activePlayer.goals}"
              </p>
            </div>

            {/* Achievements Card */}
            <div className="bg-zinc-900/30 p-5 rounded-2xl border border-zinc-900 flex-1 transition-all duration-300 hover:bg-zinc-900/40 hover:border-amber-500/30 hover:scale-[1.015] transform-gpu">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Principais Conquistas</h3>
              </div>
              <ul className="space-y-3">
                {activePlayer.achievements.map((achievement, idx) => (
                   <li key={idx} className="flex gap-2.5 items-start text-xs text-zinc-300">
                     <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0 animate-pulse"></div>
                     <span className="leading-tight">{achievement}</span>
                   </li>
                ))}
              </ul>
            </div>

            {/* Official Registration IDs Card */}
            <div className="bg-black p-4 rounded-2xl border border-zinc-900 grid grid-cols-2 gap-2 mt-auto">
              <a 
                href={`https://www.cbx.org.br/jogador/${activePlayer.cbxId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-900 hover:bg-zinc-900/40 hover:border-amber-500/30 hover:scale-[1.025] transform-gpu transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider flex items-center gap-1 group-hover:text-zinc-400 transition-colors">
                    <Hash className="w-3 h-3 text-zinc-600 group-hover:text-amber-500/80 transition-colors" />
                    <span>ID CBX</span>
                  </p>
                  <p className="font-mono text-xs text-zinc-300 font-bold mt-1 group-hover:text-amber-400 transition-colors">{activePlayer.cbxId}</p>
                </div>
                <div className="flex justify-end mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-2.5 h-2.5 text-amber-500/80" />
                </div>
              </a>
              <a 
                href={`https://ratings.fide.com/profile/${activePlayer.fideId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-900 hover:bg-zinc-900/40 hover:border-amber-500/30 hover:scale-[1.025] transform-gpu transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider flex items-center gap-1 group-hover:text-zinc-400 transition-colors">
                    <Globe className="w-3 h-3 text-zinc-600 group-hover:text-amber-500/80 transition-colors" />
                    <span>ID FIDE</span>
                  </p>
                  <p className="font-mono text-xs text-zinc-300 font-bold mt-1 group-hover:text-amber-400 transition-colors">{activePlayer.fideId}</p>
                </div>
                <div className="flex justify-end mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-2.5 h-2.5 text-amber-500/80" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="px-6 md:px-8 py-4 bg-black flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-zinc-900">
          <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
            Exibindo {String(currentIndex + 1).padStart(2, '0')} de {String(players.length).padStart(2, '0')} Participantes
          </div>
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="px-5 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-full text-xs font-bold transition-all border border-zinc-800 uppercase tracking-wider hover:border-amber-500/20"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-black rounded-full text-xs font-black transition-all uppercase tracking-wider shadow-lg shadow-amber-500/10"
            >
              Próximo Jogador
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

