import { Player, TournamentHighlight } from '../types';

export const PLAYERS: Player[] = [
  {
    id: '1',
    name: 'Leonardo Tomazette',
    photo: 'https://i.imgur.com/Jd0uP3Y.jpeg',
    highlight: TournamentHighlight.CHAMPION,
    title: 'Nenhum',
    rating: 2019,
    birthDate: '19/04/2009',
    city: 'Brasília - DF',
    cbxId: '52483',
    fideId: '22733140',
    trajectory: 'Iniciou sua jornada em torneios escolares e, com uma disciplina invejável, conquistou o título de mestre nacional aos 15 anos. É conhecido por suas análises teóricas profundas e precisão na transição para os finais de jogo, sendo atualmente um dos principais nomes do xadrez brasileiro.',
    discovery: 'Descobri o xadrez aos 7 anos, assistindo ao meu avô jogar partidas rápidas na praça central da minha cidade natal. Fiquei fascinado pela forma como pequenos pedaços de madeira podiam contar uma história de batalha tão rica.',
    idol: 'Garry Kasparov, pela sua determinação implacável, combatividade em todas as posições e contribuição imensurável para a teoria das aberturas modernas.',
    goals: 'Consolidar meu rating acima da marca de 2650 e representar a equipe nacional brasileira na próxima Olimpíada de Xadrez com chances reais de medalha por tabuleiro.',
    achievements: [
      'Campeão Brasileiro Absoluto de Xadrez (2025)',
      'Medalha de Ouro individual no Campeonato Pan-Americano de Equipes'
    ],
    tournamentId: 'fbx-cbc-2025',
    supporters: [
      { name: 'Xadrez Nova Geração', type: 'school', logoUrl: 'https://i.imgur.com/UqzSV7l.png' },
      { name: 'Xadrez do Valle', type: 'academy', logoUrl: 'https://i.imgur.com/MXfocTe.png' }
    ]
  },
  {
    id: '2',
    name: 'Mariana Souza Goulart',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=500&h=500',
    highlight: TournamentHighlight.RUNNER_UP,
    title: 'WIM (Mestre Internacional Feminina)',
    rating: 2285,
    birthDate: '28/08/2001',
    city: 'Florianópolis - SC',
    cbxId: '18554',
    fideId: '2138971',
    trajectory: 'Considerada uma das mentes mais brilhantes e táticas do xadrez feminino contemporâneo. Mariana subiu rapidamente nos rankings juvenis, acumulando títulos de categorias de base. Seu estilo é extremamente dinâmico, preferindo posições abertas e sacrifícios brilhantes.',
    discovery: 'Conheci o xadrez aos 9 anos na escola, quando a diretoria instalou tabuleiros de xadrez gigantes no pátio para o intervalo. Fui a primeira da minha turma a aprender a movimentar os cavalos.',
    idol: 'Judit Polgár, que provou ao mundo que o gênero é irrelevante no tabuleiro, competindo e vencendo os melhores jogadores do planeta de igual para igual.',
    goals: 'Alcançar as três normas necessárias para o título máximo de WGM (Grande Mestra Feminina) e desenvolver projetos sociais que ensinem xadrez para meninas carentes.',
    achievements: [
      'Vice-Campeã Brasileira Feminina Profissional (2025)',
      'Bicampeã Brasileira Universitária Invicta'
    ],
    tournamentId: 'fbx-cbc-2025',
    supporters: [
      { name: 'Colégio Catarinense', type: 'school', logoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=120&h=120' },
      { name: 'Clube de Xadrez de Florianópolis', type: 'club' }
    ]
  },
  {
    id: '3',
    name: 'Leonardo Tomazette',
    photo: 'https://drive.google.com/file/d/16BxLCdfuoGFVYcl6jVTYPkYG9uA21kk8/view?usp=sharing',
    highlight: TournamentHighlight.THIRD_PLACE,
    title: 'FM (Mestre FIDE)',
    rating: 2390,
    birthDate: '05/11/2004',
    city: 'Belo Horizonte - MG',
    cbxId: '21054',
    fideId: '2188443',
    trajectory: 'Um prodígio mineiro com foco absurdo. Carlos começou a se destacar nacionalmente aos 12 anos. Sua abordagem do jogo é hipermoderna e posicional. Ele adora jogar estruturas de peão isolado e possui uma técnica refinada de defesa sob pressão extrema.',
    discovery: 'Aos 6 anos, de forma totalmente inesperada. Meu pai tinha um computador antigo que continha um jogo clássico de xadrez in 3D. Fiquei obcecado em derrotar o nível mais fácil do computador.',
    idol: 'Magnus Carlsen, pela sua habilidade de extrair vitórias em posições aparentemente equilibradas e sua versatilidade psicológica.',
    goals: 'Obter a graduação definitiva de Mestre Internacional (IM) nos próximos dois anos e alcançar 2450 de rating internacional.',
    achievements: [
      '3º Lugar Geral no Magistral Aberto de Xadrez (2026)',
      'Campeão Pan-Americano da Juventude Sub-18'
    ],
    tournamentId: 'fbx-cbc-2025',
    supporters: [
      { name: 'Colégio Santo Antônio', type: 'school' },
      { name: 'Academia Mineira de Xadrez', type: 'academy' }
    ]
  },
  {
    id: '4',
    name: 'Beatriz Mendes Viana',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=500&h=500',
    highlight: TournamentHighlight.STANDARD,
    title: 'WFM (Mestra FIDE Feminina)',
    rating: 2150,
    birthDate: '19/02/2003',
    city: 'Curitiba - PR',
    cbxId: '24331',
    fideId: '2191560',
    trajectory: 'Beatriz destaca-se no cenário nacional principalmente em torneios rápidos e de blitz. Com raciocínio fulminante, é temida por sua velocidade nas decisões críticas e sua capacidade de criar complicações táticas inesperadas em apuros de tempo.',
    discovery: 'Aos 11 anos, durante um acampamento de férias de verão. Estava chovendo muito e o monitor organizou uma maratona de jogos de tabuleiro. Foi amor à primeira vista.',
    idol: 'Mikhail Tal, o "Mago de Riga". Adoro o seu lema de que o xadrez é, antes de tudo, uma arte de imaginação e emoção.',
    goals: 'Alcançar os 2250 pontos de rating FIDE e disputar uma vaga oficial para a equipe olímpica de xadrez rápido.',
    achievements: [
      'Campeã Brasileira Sub-20 de Xadrez Rápido (2024)',
      'Top 8 no Campeonato Pan-Americano Universitário de Blitz'
    ],
    tournamentId: 'aberto-curitiba',
    supporters: [
      { name: 'Colégio Positivo', type: 'school' },
      { name: 'Clube de Xadrez de Curitiba', type: 'club' }
    ]
  },
  {
    id: '5',
    name: 'Henrique Ramos Neves',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500&h=500',
    highlight: TournamentHighlight.STANDARD,
    title: 'MN (Mestre Nacional)',
    rating: 2245,
    birthDate: '14/07/1982',
    city: 'Recife - PE',
    cbxId: '10984',
    fideId: '2101124',
    trajectory: 'Um veterano respeitado no cenário nordestino, Henrique atua tanto como competidor quanto como treinador de jovens talentos. Seu estilo clássico e sua sólida defesa francesa são suas marcas registradas em torneios abertos pelo país.',
    discovery: 'Aos 14 anos, quando precisei passar por uma cirurgia no joelho e fiquei impedido de jogar futebol por meses. Meu irmão mais velho me deu um livro de táticas de xadrez para passar o tempo.',
    idol: 'Bobby Fischer, cujo gênio e espírito independente revolucionaram completamente a percepção do xadrez profissional no mundo ocidental.',
    goals: 'Difundir o ensino do xadrez como ferramenta pedagógica nas escolas e conquistar o campeonato nacional master (veteranos).',
    achievements: [
      'Medalha de Bronze no Campeonato Brasileiro de Veteranos (2024)',
      'Heptacampeão Estadual de Pernambuco Absoluto'
    ],
    tournamentId: 'aberto-curitiba',
    supporters: [
      { name: 'Colégio das Damas', type: 'school' },
      { name: 'Federação Pernambucana de Xadrez', type: 'club' }
    ]
  },
  {
    id: '6',
    name: 'Gabriela Rocha Santos',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=500&h=500',
    highlight: TournamentHighlight.STANDARD,
    title: 'Candidata a Mestra (CMW)',
    rating: 2015,
    birthDate: '09/09/2006',
    city: 'Salvador - BA',
    cbxId: '32009',
    fideId: '2214559',
    trajectory: 'Gabriela representa a nova geração promissora do xadrez do Nordeste brasileiro. Com apenas 19 anos, ela já bateu de frente com jogadoras consagradas e coleciona títulos nas categorias de base, mostrando uma compostura mental extraordinária nas partidas longas.',
    discovery: 'Descobri o esporte aos 8 anos de idade, através de um projeto social focado em esportes mentais promovido no centro comunitário do meu bairro.',
    idol: 'Hou Yifan, pela sua inteligência fora das curvas tanto no xadrez, onde se consagrou campeã mundial muito jovem, quanto em sua brilhante carreira acadêmica.',
    goals: 'Alcançar a titulação internacional de WIM e consolidar-me entre as 5 melhores enxadristas ativas do Brasil.',
    achievements: [
      'Campeã Brasileira Escolar Sub-18 (2024)',
      'Medalha de Ouro nos Jogos da Juventude Nacionais'
    ],
    tournamentId: 'aberto-curitiba',
    supporters: [
      { name: 'Colégio Antônio Vieira', type: 'school' },
      { name: 'Clube de Xadrez da Bahia', type: 'club' }
    ]
  }
];
