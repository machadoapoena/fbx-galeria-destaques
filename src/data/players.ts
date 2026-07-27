import { Player, TournamentHighlight } from '../types';

export const PLAYERS: Player[] = [
  {
    id: '1',
    name: 'Leonardo Martins Tomazette',
    photo: 'https://i.imgur.com/Jd0uP3Y.jpeg',
    highlight: TournamentHighlight.CHAMPION,
    title: 'Nenhum',
    rating: 2019,
    birthDate: '19/04/2009',
    city: 'Brasília - DF',
    cbxId: '52483',
    fideId: '22733140',
    trajectory: 'Em 2015, retomou a prática nas aulas de sua escola e, no ano seguinte, iniciou sua trajetória competitiva, conquistando o vice-campeonato na etapa Cavalo do FIX e, posteriormente, o título da etapa Rei. Desde então, vem evoluindo constantemente, destacando-se com a conquista do Campeonato Brasiliense de 2025 (disputado em 2026). Dono de um estilo de jogo agressivo, tem como objetivo continuar evoluindo e se divertindo no xadrez. Em sua formação, contou com a orientação de Wellington, Jean e do Mestre FIDE Adriano Valle, que tiveram papel fundamental em seu desenvolvimento como enxadrista.',
    discovery: 'Meus padrinhos me ensinaram os movimentos das peças quando eu tinha 4 anos.',
    idol: 'Bobby Fischer, pela sua determinação implacável, combatividade em todas as posições e contribuição imensurável para a teoria das aberturas modernas.',
    goals: 'Continuar evoluindo e me divertir.',
    achievements: [
      'Campeão Brasileiro Absoluto de Xadrez (2025)',
      'FIX 2026 - Etapa Rei'
    ],
    tournamentId: 'fbx-cbc-2025',
    supporters: [
      { name: 'Xadrez Nova Geração', type: 'school', logoUrl: 'https://i.imgur.com/UqzSV7l.png' },
      { name: 'Xadrez do Valle', type: 'academy', logoUrl: 'https://i.imgur.com/MXfocTe.png' }
    ]
  },
  {
    id: '2',
    name: 'Carlos Eduardo de Souza Damasceno Martins',
    photo: 'https://fbx.org.br/wp-content/uploads/2026/07/Cadsapture.jpg',
    highlight: TournamentHighlight.RUNNER_UP,
    title: 'Nenhum',
    rating: 1895,
    birthDate: '14/12/2004',
    city: 'Brasília - DF',
    cbxId: '67044',
    fideId: '22794131',
    trajectory: 'Iniciou sua trajetória competitiva aos 14 anos, quando disputou seu primeiro torneio em Brasília. Desde então, vem se dedicando intensamente ao xadrez, conquistando resultados expressivos, como o vice-campeonato do Campeonato Brasileiro Escolar Sub-18 de 2021 e o vice-campeonato do Campeonato Brasiliense Absoluto de 2025. Além das competições, encontrou no ensino do xadrez uma grande vocação, compartilhando seus conhecimentos com novos enxadristas. Seu objetivo é continuar evoluindo como jogador e contribuir para o desenvolvimento do esporte, contando com a importante influência de seu treinador Luis Paulo Supi, além do apoio de seus alunos, familiares e da comunidade enxadrística de Brasília.',
    discovery: 'Meu pai me ensinou a jogar quando eu tinha uns 4 anos e joguei de forma casual até os 14, quando o pai dos meus melhores amigos me levou para um torneio de xadrez.',
    idol: 'Luis Paulo Supi, que provou ao mundo que o gênero é irrelevante no tabuleiro, competindo e vencendo os melhores jogadores do planeta de igual para igual.',
    goals: 'Pretendo continuar melhorando no xadrez cada vez mais, e conseguir compartilhar os meus conhecimentos no jogo.',
    achievements: [
      'Vice Campeão do Campeonato Brasiliense Absoluto de 2025',
      'Vice Campeão do Campeonato Brasileiro de Xadrez Escolar 2021 Sub 18 Masculino'
    ],
    tournamentId: 'fbx-cbc-2025',
    supporters: [
      { name: 'Colégio Catarinense', type: 'school', logoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=120&h=120' },
      { name: 'Clube de Xadrez de Florianópolis', type: 'club' }
    ]
  },
  {
    id: '3',
    name: 'Paulo Sousa',
    photo: 'https://fbx.org.br/wp-content/uploads/2026/07/Cadsapture-1.jpg',
    highlight: TournamentHighlight.THIRD_PLACE,
    title: 'NM (Mestre Nacional)',
    rating: 1875,
    birthDate: '21/06/2009',
    city: 'Brasília - DF',
    cbxId: '73027',
    fideId: '44726503',
    trajectory: 'O Mestre Nacional Paulo Sousa vem construindo uma trajetória de destaque no xadrez brasileiro desde 2021, acumulando importantes resultados em competições estaduais, nacionais e internacionais. Entre suas principais conquistas estão o título de Campeão Brasileiro Escolar de 2023, o vice-campeonato do Rápido da FENAJ no mesmo ano e a obtenção do título de Mestre Nacional durante o Campeonato Sul-Americano Sub-14. Com um estilo de jogo universal, Paulo tem como objetivo evoluir continuamente e alcançar o título de Grande Mestre (GM). Em sua caminhada, destaca a importância do apoio de seu pai, que o acompanhou em torneios por todo o Brasil, proporcionando experiências fundamentais para sua formação como enxadrista.',
    discovery: 'No canal Xadrez Brasil no YouTube, na Análise das 1000 maiores partidas do mundo do Xadrez.',
    idol: 'Magnus Carlsen, pela sua habilidade de extrair vitórias em posições aparentemente equilibradas e sua versatilidade psicológica.',
    goals: 'Ser um jogador melhor, evoluir a cada dia. Me tornar um GM.',
    achievements: [
      'Campeão Brasileiro Escolar Belo Horizonte-MG 2023',
      'Vice-campeão Rápido Fenaj Natal-RN 2023',
      'Campeão JEDF sub-14 e 7⁰ colocado no JEBS 2022',
      '3⁰ Lugar no JEDF on-line 2021em plena Pandemia'
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
