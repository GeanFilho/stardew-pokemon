import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';

const SPRITES = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule, MatTabsModule, MatChipsModule, MatExpansionModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly nexus = 'https://www.nexusmods.com/stardewvalley/mods/50344';

  art = (id: number) => `${SPRITES}/other/official-artwork/${id}.png`;
  // Sprites animados do Black/White só vão até o #649 e olham pra esquerda.
  gif = (id: number) => `${SPRITES}/versions/generation-v/black-white/animated/${id}.gif`;

  // ponytail: delay/duração fixos por Pokémon, gerar aleatório se a faixa ficar repetitiva
  walkers = [
    { id: 25, name: 'Pikachu', dur: 22, delay: 0 },
    { id: 1, name: 'Bulbasaur', dur: 30, delay: -8 },
    { id: 133, name: 'Eevee', dur: 26, delay: -15 },
    { id: 7, name: 'Squirtle', dur: 34, delay: -22 },
    { id: 4, name: 'Charmander', dur: 28, delay: -4 },
    { id: 74, name: 'Geodude', dur: 40, delay: -30 },
  ];

  features = [
    { icon: 'catching_pokemon', title: 'Capture pelo Vale', text: 'Pokémon aparecem em habitats diferentes do Vale e arredores. Mire e arremesse a Poké Ball.' },
    { icon: 'agriculture', title: 'Ajudantes na fazenda', text: 'Parceiros adequados ajudam com plantações, animais, coleta, pesca, mineração, pomares e covos.' },
    { icon: 'sports_martial_arts', title: 'Treine e batalhe', text: 'Escolha golpes, fortaleça o vínculo, evolua e enfrente os moradores e os Pokémon deles.' },
    { icon: 'egg', title: 'Crie no celeiro', text: 'Pokémon compatíveis fazem breeding no Barn. Inclui formas shiny com animação própria.' },
    { icon: 'auto_stories', title: 'Diário do Parceiro', text: 'Gerencie a party, golpes, políticas de trabalho, progresso e busque Pokémon.' },
    { icon: 'groups', title: 'Multiplayer', text: 'Cada fazendeiro tem a própria party, parceiro ativo, progresso e armazenamento.' },
  ];

  // ponytail: guia temático (lógica dos tipos) sobre a lista oficial de tarefas do mod; trocar por dados do mod se o autor publicar a tabela
  types = [
    { name: 'Grama', color: '#5fbd58', icon: 'eco', mons: [1, 43, 928], tasks: ['Plantações', 'Pomares'],
      text: 'Quem entende de planta cuida da plantação. A família Smoliv (Smoliv, Dolliv, Arboliva) chegou na última atualização do mod, com evolução no nível 25 e 35.' },
    { name: 'Água', color: '#539ddf', icon: 'water_drop', mons: [7, 54, 279], tasks: ['Pesca', 'Covos'],
      text: 'Nadadores ficam de olho nos covos e acompanham você na pesca. O Pelipper, que dá nome ao mod, é Água/Voador.' },
    { name: 'Pedra e Terra', color: '#b8a36b', icon: 'landscape', mons: [74, 50, 95], tasks: ['Mineração'],
      text: 'Cavadores e Pokémon de pedra são a escolha natural para descer nas Minas e quebrar rocha.' },
    { name: 'Fogo', color: '#f08030', icon: 'local_fire_department', mons: [4, 58, 77], tasks: ['Batalhas', 'Minas'],
      text: 'Bons atacantes para escoltar você nas Minas e encarar as batalhas contra os moradores.' },
    { name: 'Inseto', color: '#a8b820', icon: 'bug_report', mons: [10, 415, 46], tasks: ['Coleta', 'Pomares'],
      text: 'Pequenos e curiosos: combinam com forrageamento pelo mato e com as árvores frutíferas.' },
    { name: 'Normal', color: '#a8a878', icon: 'pets', mons: [133, 241, 52], tasks: ['Animais'],
      text: 'Pokémon tranquilos que convivem bem com as vacas, galinhas e cabras do celeiro e do galinheiro.' },
    { name: 'Elétrico', color: '#e8c020', icon: 'bolt', mons: [25, 179, 81], tasks: ['Batalhas', 'Companhia'],
      text: 'O parceiro clássico pra andar ao seu lado pela cidade e mandar bem nos duelos.' },
  ];

  steps = [
    { icon: 'download', title: 'Instale', text: 'Stardew Valley 1.6, SMAPI 4.0+ e SpaceCore 1.28.4+. Generic Mod Config Menu é opcional.' },
    { icon: 'cottage', title: 'Saia de casa', text: 'A Marnie te ajuda a escolher como começar a jornada.' },
    { icon: 'sports_baseball', title: 'Segure G', text: 'Mire e solte para arremessar a Poké Ball. No controle, segure o gatilho esquerdo.' },
    { icon: 'menu_book', title: 'Aperte P', text: 'Abre o Diário do Parceiro. O manda, troca ou recolhe o parceiro; [ e ] trocam de membro.' },
    { icon: 'egg_alt', title: 'Aperte B no celeiro', text: 'Abre o menu de breeding dentro do Barn (RB no controle).' },
  ];

  faq = [
    { q: 'Funciona no meu save atual?', a: 'Sim. O mod funciona em saves novos ou existentes.' },
    { q: 'Dá pra jogar com amigos?', a: 'Sim. O host controla os encontros selvagens; os outros jogadores capturam, treinam, batalham, criam e trocam normalmente.' },
    { q: 'Funciona no controle?', a: 'Sim. Gatilho esquerdo para arremessar, R3 seleciona o próximo membro e L3 manda ou recolhe o parceiro.' },
    { q: 'É compatível com Stardew Valley Expanded?', a: 'Sim. SVE, East Scarp e Ridgeside Village são opcionais e adicionam encontros regionais e parceiros de moradores.' },
    { q: 'Tem no celular ou console?', a: 'Não. É um mod de PC (SMAPI).' },
  ];
}
