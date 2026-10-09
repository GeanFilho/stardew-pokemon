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
  art = (id: number) => `${SPRITES}/other/official-artwork/${id}.png`;
  // Sprites animados do Black/White só vão até o #649 e olham pra esquerda.
  gif = (id: number) => `${SPRITES}/versions/generation-v/black-white/animated/${id}.gif`;

  // Morador do Vale + parceiro Pokémon atravessando a tela.
  // ponytail: duração/atraso fixos, sortear se a faixa ficar repetitiva
  walkers = [
    { npc: 'Abigail', mon: 25, dur: 30, delay: 0 },
    { npc: 'Marnie', mon: 241, dur: 38, delay: -12 },
    { npc: 'Willy', mon: 279, dur: 34, delay: -24 },
    { npc: 'Haley', mon: 133, dur: 32, delay: -6 },
    { npc: 'Sebastian', mon: 92, dur: 40, delay: -30 },
    { npc: 'Leah', mon: 1, dur: 36, delay: -18 },
  ];

  features = [
    { icon: 'catching_pokemon', title: 'Captura', text: 'Pokémon aparecem em habitats diferentes do Vale e arredores. A captura é por arremesso: você mira e lança a Poké Ball.' },
    { icon: 'agriculture', title: 'Trabalho na fazenda', text: 'Parceiros adequados ajudam com plantações, animais, coleta, pesca, mineração, pomares e covos.' },
    { icon: 'sports_martial_arts', title: 'Treino e batalhas', text: 'Dá pra escolher golpes, criar vínculo, evoluir e batalhar com os moradores e os Pokémon deles, além de missões novas.' },
    { icon: 'egg', title: 'Criação no celeiro', text: 'Pokémon compatíveis fazem breeding dentro do Barn. Há formas shiny, com animação e retrato próprios.' },
    { icon: 'auto_stories', title: 'Diário do Parceiro', text: 'Um menu próprio pra party, golpes, políticas de trabalho, progresso e busca de Pokémon.' },
    { icon: 'groups', title: 'Multiplayer', text: 'Cada fazendeiro tem a própria party, parceiro ativo, progresso e armazenamento. O host controla os encontros selvagens.' },
  ];

  // ponytail: guia temático (lógica dos tipos) sobre a lista oficial de tarefas do mod; trocar por dados do mod se o autor publicar a tabela
  types = [
    { name: 'Grama', color: '#7ed36f', icon: 'eco', mons: [1, 43, 928], tasks: ['Plantações', 'Pomares'],
      text: 'Faz sentido colocar quem entende de planta na plantação. A família Smoliv (Smoliv, Dolliv, Arboliva) entrou na atualização mais recente, com evoluções nos níveis 25 e 35.' },
    { name: 'Água', color: '#6fb3f0', icon: 'water_drop', mons: [7, 54, 279], tasks: ['Pesca', 'Covos'],
      text: 'Nadadores combinam com os covos e com a pesca. O Pelipper, que dá nome ao mod, é Água/Voador. O trocadilho é com Pelican Town.' },
    { name: 'Pedra e Terra', color: '#d2bd84', icon: 'landscape', mons: [74, 50, 95], tasks: ['Mineração'],
      text: 'Cavadores e Pokémon de pedra são a escolha natural pra descer nas Minas e quebrar rocha.' },
    { name: 'Fogo', color: '#f5a05a', icon: 'local_fire_department', mons: [4, 58, 77], tasks: ['Batalhas', 'Minas'],
      text: 'Atacantes fortes pra acompanhar você nas Minas e nas batalhas contra os moradores.' },
    { name: 'Inseto', color: '#c4d43c', icon: 'bug_report', mons: [10, 415, 46], tasks: ['Coleta', 'Pomares'],
      text: 'Pequenos e curiosos, combinam com o forrageamento pelo mato e com as árvores frutíferas.' },
    { name: 'Normal', color: '#c8c8a0', icon: 'pets', mons: [133, 241, 52], tasks: ['Animais'],
      text: 'Pokémon tranquilos que convivem bem com vacas, galinhas e cabras. Uma Miltank no rancho da Marnie parece até óbvia.' },
    { name: 'Elétrico', color: '#f2d43a', icon: 'bolt', mons: [25, 179, 81], tasks: ['Batalhas', 'Companhia'],
      text: 'O parceiro clássico pra andar do seu lado pela cidade e resolver os duelos.' },
    { name: 'Fantasma', color: '#a58ad8', icon: 'nightlight', mons: [92, 94, 200], tasks: ['Batalhas', 'Minas'],
      text: 'Combina com o clima noturno do Vale, e com a Abigail e o Sebastian, que já curtem um mistério.' },
  ];

  controls = [
    { key: 'G', text: 'Segure pra mirar e solte pra arremessar a Poké Ball (gatilho esquerdo no controle).' },
    { key: 'P', text: 'Abre o Diário do Parceiro.' },
    { key: 'O', text: 'Manda, troca ou recolhe o parceiro selecionado (L3 no controle).' },
    { key: '[ ]', text: 'Trocam o membro selecionado da party (R3 no controle).' },
    { key: 'B', text: 'Dentro do Barn, abre o menu de breeding (RB no controle).' },
    { key: 'F5', text: 'Liga ou desliga o sistema de companheiros.' },
  ];

  faq = [
    { q: 'Quem fez?', a: 'AlexanderVerde. O mod é gratuito e distribuído no Nexus Mods e no CurseForge.' },
    { q: 'O que precisa pra rodar?', a: 'Stardew Valley 1.6, SMAPI 4.0+ e SpaceCore 1.28.4+. Generic Mod Config Menu é opcional e libera ajustes de encontros, captura, combate, tarefas e acessibilidade.' },
    { q: 'Funciona num save já existente?', a: 'Sim, em saves novos ou existentes. Ao sair de casa, a Marnie apresenta as opções de começo.' },
    { q: 'Combina com Stardew Valley Expanded?', a: 'Sim. SVE, East Scarp e Ridgeside Village são opcionais e adicionam encontros regionais e moradores com parceiros.' },
    { q: 'Tem em celular ou console?', a: 'Não. É um mod de PC feito em SMAPI.' },
  ];

  others = [
    { name: 'Pokémon Eggventure - Day Care', text: 'Foco em chocar ovos: mais de 1.100 espécies, caça a shiny e vários estágios de evolução.', url: 'https://www.nexusmods.com/stardewvalley/mods/49098' },
    { name: 'Pokémon Eggventure - Livestocks', text: 'Coloca os 151 Pokémon originais como criação da fazenda. Ainda na versão 1.0.', url: 'https://www.gamingbible.com/news/platform/pc/free-stardew-valley-expansion-adds-151-pokemon-806453-20260717' },
    { name: 'Pokémon Ranch', text: 'Mais leve: só troca a textura dos animais. Vaca vira Miltank, ovelha vira Mareep.', url: '' },
    { name: 'StardewPoke', text: 'Projeto em desenvolvimento que usa a engine de batalha do Pokémon Showdown. Ainda não jogável.', url: 'https://forums.stardewvalley.net/threads/looking-for-devs-stardewpoke-%E2%80%94-a-pok%C3%A9mon-mod-for-stardew-valley-smapi-c-pok%C3%A9mon-showdown-engine.53080/' },
  ];

  sources = [
    { name: 'Pelipper Town no Nexus Mods', url: 'https://www.nexusmods.com/stardewvalley/mods/50344' },
    { name: 'Pelipper Town no CurseForge', url: 'https://www.curseforge.com/stardewvalley/mods/pelipper-town' },
    { name: 'Gaming Bible: Stardew Valley ganha Pokémon com mod gratuito', url: 'https://www.gamingbible.com/news/platform/pc/stardew-valley-pokemon-mod-305841-20260828' },
  ];
}
