import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="hero">
      <p class="tag">Mod para Stardew Valley 1.6</p>
      <h1>Pelipper Town</h1>
      <p class="lead">Pokémon na sua fazenda: capture, treine, batalhe e crie Pokémon pelo Vale.</p>
      <a class="btn" href="https://www.nexusmods.com/stardewvalley/mods/50344" target="_blank" rel="noopener">
        Baixar no Nexus Mods
      </a>
    </header>

    <main>
      <section>
        <h2>O que o mod faz</h2>
        <ul class="cards">
          @for (f of features; track f.title) {
            <li><h3>{{ f.title }}</h3><p>{{ f.text }}</p></li>
          }
        </ul>
      </section>

      <section>
        <h2>Requisitos</h2>
        <ul>
          <li>Stardew Valley 1.6</li>
          <li>SMAPI 4.0+</li>
          <li>SpaceCore 1.28.4+</li>
        </ul>
        <p>Funciona em saves novos ou já existentes, solo ou multiplayer.</p>
      </section>

      <section>
        <h2>Outros mods Pokémon</h2>
        <ul class="cards">
          @for (m of others; track m.name) {
            <li><h3><a [href]="m.url" target="_blank" rel="noopener">{{ m.name }}</a></h3><p>{{ m.text }}</p></li>
          }
        </ul>
      </section>
    </main>

    <footer>Fan page não oficial. Stardew Valley © ConcernedApe · Pokémon © Nintendo/Game Freak.</footer>
  `,
  styles: `
    :host { display: block; font-family: system-ui, sans-serif; color: #3b2a1a; background: #fdf6e3; min-height: 100vh; }
    .hero { text-align: center; padding: 5rem 1rem; background: linear-gradient(#7ec8e3, #b8e994); }
    .tag { text-transform: uppercase; letter-spacing: .1em; font-size: .8rem; }
    h1 { font-size: clamp(2.5rem, 8vw, 4.5rem); margin: .5rem 0; color: #c0392b; text-shadow: 3px 3px 0 #ffd23f; }
    .lead { font-size: 1.2rem; max-width: 40ch; margin: 0 auto 2rem; }
    .btn { display: inline-block; padding: .9rem 1.6rem; background: #c0392b; color: #fff; border-radius: 8px; text-decoration: none; font-weight: 700; border: 3px solid #3b2a1a; }
    .btn:hover, .btn:focus-visible { background: #a93226; }
    main { max-width: 960px; margin: 0 auto; padding: 2rem 1rem; }
    section { margin-bottom: 3rem; }
    .cards { list-style: none; padding: 0; display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
    .cards li { background: #fff; border: 3px solid #8b5a2b; border-radius: 10px; padding: 1rem; }
    .cards h3 { margin-top: 0; }
    a { color: #c0392b; }
    footer { text-align: center; padding: 2rem 1rem; font-size: .85rem; opacity: .7; }
  `,
})
export class App {
  // ponytail: conteúdo estático inline, mover pra JSON/CMS se crescer
  features = [
    { title: 'Capture', text: 'Encontre Pokémon pelo Vale e capture arremessando.' },
    { title: 'Treine e batalhe', text: 'Suba de nível, aprenda golpes oficiais e lute.' },
    { title: 'Crie no celeiro', text: 'Faça breeding dos seus Pokémon no Barn da fazenda.' },
    { title: 'Shinies', text: 'Animações normais e shiny, com retratos próprios.' },
  ];

  others = [
    { name: 'Pokémon Eggventure - Day Care', url: 'https://www.nexusmods.com/stardewvalley/mods/49098', text: 'Choque ovos de mais de 1.100 espécies e cace shinies.' },
    { name: 'StardewPoke (em desenvolvimento)', url: 'https://forums.stardewvalley.net/threads/looking-for-devs-stardewpoke-%E2%80%94-a-pok%C3%A9mon-mod-for-stardew-valley-smapi-c-pok%C3%A9mon-showdown-engine.53080/', text: 'Batalhas com a engine do Pokémon Showdown. Ainda não jogável.' },
  ];
}
