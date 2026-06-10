# Relatorio geral do projeto

Auditoria feita no projeto `portfolio-diego-suque` para mapear estrutura, identificar arquivos mortos e limpar duplicacoes relacionadas principalmente a pagina `/front-end`.

## Estrutura de rotas

Rotas existentes em `src/app`:

- `/`  
  Arquivo: `src/app/page.tsx`  
  Usa: `Navbar`, `Hero`, `FeaturedWork`, `Footer`.

- `/sobre`  
  Arquivo: `src/app/sobre/page.tsx`  
  Usa: `PageShell`, `CaseSection`.

- `/contato`  
  Arquivo: `src/app/contato/page.tsx`  
  Usa: `PageShell`.

- `/front-end`  
  Arquivo: `src/app/front-end/page.tsx`  
  Usa: `PageShell`, `FrontendScrollStory`.

- `/portfolio`  
  Arquivo: `src/app/portfolio/page.tsx`  
  Usa: `PageShell`, `WorkCard`, dados de `src/data/works.ts`.

- `/portfolio/vanir`  
  Arquivo: `src/app/portfolio/vanir/page.tsx`  
  Usa: `PageShell`, `SafeImage`, imagens em `public/images/cases/vanir`, video `public/videos/vanir-dashboard-overview.mp4`.

- `/portfolio/heimdall`  
  Arquivo: `src/app/portfolio/heimdall/page.tsx`  
  Usa: `PageShell`, `SafeImage`, imagens em `public/images/heimdall`.

- `/portfolio/parkingpix`  
  Arquivo: `src/app/portfolio/parkingpix/page.tsx`  
  Usa: `PageShell`, `SafeImage`, imagens em `public/images/parkingpix`.

- `/_not-found`  
  Arquivo: `src/app/not-found.tsx`.

- `/icon.png`  
  Arquivo: `src/app/icon.png`.

Arquivos globais:

- `src/app/layout.tsx`: layout raiz do App Router.
- `src/app/globals.css`: tokens globais, estilos base, `btn-soft-3d` e animacao `vanir-marquee`.

## Estrutura de componentes

Componentes mantidos em `src/components`:

- `hero.tsx`  
  Usado na home. Usa imagens `public/images/portfolio/dev-hero-3.png` e `public/images/portfolio/suque-hero.png`.

- `navbar.tsx`  
  Usado diretamente na home e indiretamente via `PageShell`. Usa `public/images/portfolio/logo-suque.png`.

- `footer.tsx`  
  Usado diretamente na home e indiretamente via `PageShell`.

- `page-shell.tsx`  
  Wrapper global usado por paginas internas. Renderiza `Navbar` e `Footer`.

- `featured-work.tsx`  
  Usado na home. Renderiza cards a partir de `src/data/works.ts`.

- `work-card.tsx`  
  Usado em `FeaturedWork` e na rota `/portfolio`. Usa `SafeImage`.

- `safe-image.tsx`  
  Usado por `Hero`, `Navbar`, `WorkCard` e paginas de cases.

- `case-section.tsx`  
  Usado em `/sobre`.

- `frontend-scroll-story.tsx`  
  Componente ativo da pagina `/front-end`. Controla a experiencia atual de scroll, canvas, frames e fallback em video.

Componentes removidos:

- `src/components/frontend-section.tsx`  
  Removido porque nao era importado por nenhuma rota ou componente ativo.

- `src/components/frontend-avatar-scroll.tsx`  
  Removido porque era usado apenas por `frontend-section.tsx`, tambem removido.

- `src/components/case-hero.tsx`  
  Removido porque declarava `CaseHero`, mas nao era importado em nenhum lugar do projeto.

## Pagina `/front-end`

Arquivo que renderiza a rota:

- `src/app/front-end/page.tsx`

Estrutura atual:

```tsx
<PageShell>
  <div className="... bg-white ...">
    <FrontendScrollStory />
  </div>
</PageShell>
```

Componente principal ativo:

- `src/components/frontend-scroll-story.tsx`

Esse componente e o unico componente usado pela rota `/front-end`.

Componentes antigos verificados:

- `FrontendSection`: removido. Nao era importado por nenhuma rota ativa.
- `FrontendAvatarScroll`: removido. Era dependencia apenas de `FrontendSection`.
- `FrontendScrollStory`: mantido. E o componente ativo da pagina.

Onde fica a copy:

- A copy da pagina fica no array `steps` dentro de `src/components/frontend-scroll-story.tsx`.
- Cada item controla `title`, `text`, `cta`, intervalo de frames e posicionamento do avatar.

Onde ficam os frames ativos:

- Pasta ativa: `public/avatar-canva-frames`
- Quantidade atual: 100 arquivos.
- O componente usa:

```tsx
const FRAMES_FOLDER = "avatar-canva-frames";
const START_FRAME = 1;
const END_FRAME = 100;
```

Video fallback usado:

- `public/videos/frontend-avatar-canva.mp4`

O componente usa:

```tsx
const FALLBACK_VIDEO = "frontend-avatar-canva.mp4";
```

Como a animacao funciona:

- O canvas fica como background atras da copy.
- O scroll atualiza apenas `targetProgressRef`.
- O loop `requestAnimationFrame` interpola `currentProgressRef` em direcao a `targetProgressRef`.
- O frame renderizado e calculado a partir do progresso suavizado.
- `drawFrame()` so redesenha quando o frame ou a etapa mudam.
- `devicePixelRatio` e limitado a 2.
- O listener de scroll usa `{ passive: true }`.
- O RAF e cancelado no cleanup.

Assets em uso pela pagina `/front-end`:

- `public/avatar-canva-frames/frame_0001.webp` ate `frame_0100.webp`
- `public/videos/frontend-avatar-canva.mp4`

## Assets publicos

Pastas mantidas em `public`:

- `public/avatar-canva-frames`  
  Mantida. E a pasta ativa dos frames da pagina `/front-end`.

- `public/images`  
  Mantida. Contem imagens usadas pela home, portfolio e cases.

- `public/videos`  
  Mantida. Contem videos ainda referenciados.

Videos mantidos:

- `public/videos/frontend-avatar-canva.mp4`  
  Usado como fallback da pagina `/front-end`.

- `public/videos/vanir-dashboard-overview.mp4`  
  Usado no case Vanir.

Pastas de imagens mantidas:

- `public/images/portfolio`  
  Usada por `Hero` e `Navbar`.

- `public/images/vanir`  
  Usada em `src/data/works.ts` e `src/data/cases.ts`.

- `public/images/cases/vanir`  
  Usada diretamente em `src/app/portfolio/vanir/page.tsx` e tambem referenciada em `src/data/cases.ts`.

- `public/images/heimdall`  
  Usada por `src/data/works.ts` e `src/app/portfolio/heimdall/page.tsx`.

- `public/images/parkingpix`  
  Usada por `src/data/works.ts` e `src/app/portfolio/parkingpix/page.tsx`.

Contagem final em `public`:

- `avatar-canva-frames`: 100 arquivos.
- `images`: 46 arquivos.
- `videos`: 2 arquivos.

## Arquivos removidos

Componentes removidos:

- `src/components/frontend-section.tsx`  
  Motivo: componente antigo da experiencia front-end, nao importado por nenhuma rota ativa.

- `src/components/frontend-avatar-scroll.tsx`  
  Motivo: componente antigo da experiencia front-end, usado apenas por `frontend-section.tsx`.

- `src/components/case-hero.tsx`  
  Motivo: componente sem import em todo o projeto.

Video removido:

- `public/videos/frontend-avatar-scroll.mp4`  
  Motivo: video antigo referenciado apenas por `FrontendAvatarScroll`, componente removido.

Pastas de frames removidas:

- `public/avatar-final-frames`  
  Motivo: pasta antiga de frames do avatar; sem referencia no codigo atual. Tinha 100 arquivos.

- `public/avatar-final-frames-transparent`  
  Motivo: pasta antiga de frames do avatar; sem referencia no codigo atual. Tinha 100 arquivos.

- `public/avatar-frames`  
  Motivo: pasta antiga de frames do avatar; sem referencia no codigo atual. Tinha 120 arquivos.

- `public/avatar-frames-png`  
  Motivo: pasta antiga de frames PNG do avatar; sem referencia no codigo atual. Tinha 120 arquivos.

- `public/avatar-walk-frames`  
  Motivo: pasta antiga de frames do avatar; sem referencia no codigo atual. Tinha 100 arquivos.

Documentacao removida:

- `RELATORIO-FRONT-END.md`  
  Motivo: relatorio anterior ficou desatualizado apos a pagina `/front-end` passar a usar `avatar-canva-frames` e `frontend-avatar-canva.mp4`. Foi substituido por este relatorio geral.

## Arquivos mantidos por seguranca

- `src/data/cases.ts`  
  Parece nao ser importado diretamente por rotas ativas no estado atual, mas foi mantido porque e arquivo de dados de case e a regra do projeto pede para nao apagar arquivos de cases sem certeza absoluta.

- `public/images/cases/vanir`  
  Mantida porque o case Vanir usa varias imagens diretamente.

- `public/images/vanir`  
  Mantida porque `src/data/works.ts` e `src/data/cases.ts` referenciam previews do Vanir.

- `public/images/heimdall`  
  Mantida porque `/portfolio/heimdall` e os cards de portfolio usam esses assets.

- `public/images/parkingpix`  
  Mantida porque `/portfolio/parkingpix` e os cards de portfolio usam esses assets.

- `public/images/portfolio`  
  Mantida porque home e navbar usam imagens dessa pasta.

- `public/videos/vanir-dashboard-overview.mp4`  
  Mantido porque e usado em `/portfolio/vanir`.

- `src/app/globals.css`  
  Mantido. Nao referencia assets mortos; contem estilos globais ativos.

- Arquivos de configuracao (`package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `next-env.d.ts`)  
  Mantidos. Fazem parte da configuracao do projeto.

## Validacao

Comandos rodados apos a limpeza:

```bash
npm run lint
```

Resultado:

- Passou com 0 erros.
- Permanece 1 warning em `src/app/layout.tsx`: `inter` esta declarado e nao usado.

```bash
npm run build
```

Resultado:

- Passou com sucesso.
- Next.js compilou e gerou as rotas estaticas:
  - `/`
  - `/_not-found`
  - `/contato`
  - `/front-end`
  - `/icon.png`
  - `/portfolio`
  - `/portfolio/heimdall`
  - `/portfolio/parkingpix`
  - `/portfolio/vanir`
  - `/sobre`

## Observacoes para proximos ajustes

- Revisar manualmente o warning de lint em `src/app/layout.tsx`: a variavel `inter` esta declarada, mas nao usada.

- `src/data/cases.ts` pode ser uma estrutura antiga de dados de case. Como nao ha certeza absoluta e ele contem dados de Vanir, foi mantido.

- O worktree ja tinha alteracoes fora da limpeza, incluindo `src/app/globals.css`, `src/app/portfolio/parkingpix/page.tsx`, `src/components/frontend-scroll-story.tsx`, `next-env.d.ts`, `public/avatar-canva-frames` e `public/videos/frontend-avatar-canva.mp4`. Esses arquivos foram preservados.

- A pagina `/front-end` depende agora exclusivamente de `FrontendScrollStory`, `public/avatar-canva-frames` e `public/videos/frontend-avatar-canva.mp4`.

- Caso queira reduzir ainda mais o projeto depois, o proximo passo seguro seria revisar `src/data/cases.ts` com contexto de produto, porque a busca nao encontrou import direto dele. Nao removi por seguranca.
