# Design System Audit - Portfolio Diego Suque

Este documento analisa o design system atual do portfolio a partir do codigo existente. O objetivo e servir como base para reconstruir a linguagem visual, componentes, tokens e templates no Figma sem alterar a implementacao atual.

## 1. Visao geral do portfolio

O projeto e um portfolio em Next.js App Router, TypeScript e Tailwind CSS. A experiencia combina um portfolio editorial de Product Design com uma frente de demonstracao tecnica em front-end. A direcao visual e limpa, premium, minimalista e madura, com predominancia de fundos brancos e cinzas claros, tipografia Inter em pesos fortes, sombras suaves/neumorficas e mockups grandes para apresentar produto.

A estrutura principal e composta por:

- Home com navbar fixa, hero interativo dividido entre Product Designer e coder, projetos em destaque e footer.
- Portfolio com lista de cases principais e uma grade de outros projetos em estruturacao.
- Case Vanir, com narrativa longa e mockups desktop de produto financeiro.
- Case Heimdall, com narrativa longa e mockups desktop voltados a KYC/compliance.
- Case ParkingPix, com narrativa longa e mockups mobile/editoriais.
- Front-end, com narrativa interativa baseada em scroll, canvas e sequencia de frames.
- Sobre, com blocos editoriais simples.
- Contato, com links externos em cards.
- Not found, pagina 404 simples.

Cases principais exibidos:

| Case | Rota | Tipo | Padrao visual |
| --- | --- | --- | --- |
| Vanir | `/portfolio/vanir` | Gateway PIX white label / operacao financeira | Mockups browser, secoes alternadas branco/cinza, cards de impacto e aprendizado |
| Heimdall | `/portfolio/heimdall` | KYC / compliance | Mockups browser, leitura de dados, cards operacionais |
| ParkingPix | `/portfolio/parkingpix` | Pagamento PIX mobile para estacionamento | Mockups mobile, fluxo de telas, cards de dores/impacto/aprendizado |

Padroes que se repetem:

- Navbar fixa com botoes soft 3D e logo em bloco escuro.
- Footer cinza claro com botao circular central para voltar ao topo.
- Containers centralizados com `max-w-[1180px]`, `max-w-[1240px]` e `max-w-[1320px]`.
- Paginas institucionais com eyebrow pequeno em uppercase, H1 grande e paragrafo introdutorio.
- Cases com hero em duas colunas, secoes alternando `bg-white` e `bg-[#F3F3F3]`, texto editorial a esquerda/direita e mockup visual na coluna oposta.
- Cards arredondados com borda cinza, fundo `#F7F7F7` ou branco e sombra suave.
- Botoes com gradiente claro, borda cinza media, raio pill e sombras internas/externas no hover.
- Motion com entrada por opacidade, deslocamento e blur.

## 2. Estrutura de paginas

### `/`

Arquivo: `src/app/page.tsx`

Funcao: pagina inicial do portfolio.

Blocos visuais:

- `Navbar`
- `Hero`
- `FeaturedWork`
- `Footer`

Layout:

- Main direto sem `PageShell`.
- Hero ocupa primeira dobra com imagem central interativa no desktop.
- Projetos em destaque em fundo cinza claro.

### `/portfolio`

Arquivo: `src/app/portfolio/page.tsx`

Funcao: indice de projetos.

Blocos visuais:

- Cabecalho editorial com eyebrow, H1 e descricao.
- Grid de `WorkCard` com Vanir, Heimdall e ParkingPix.
- Secao "Outros projetos" com cards simples para Caronte, Vale Pix, Prize Tech, Payco e Jobs.bet.

Layout:

- Usa `PageShell` default.
- Container principal `max-w-[1180px]`.
- Grid de cases em `md:grid-cols-3`.
- Outros projetos em `sm:grid-cols-2` e `lg:grid-cols-5`.

### `/portfolio/vanir`

Arquivo: `src/app/portfolio/vanir/page.tsx`

Funcao: case study detalhado do Vanir.

Blocos visuais:

- Hero com texto e `BrowserMockup` com tilt no desktop.
- Visao geral com `StaticBrowserMockup`.
- Contexto do produto com visual editorial de modulos de navegacao.
- Meu papel com mockup de processo.
- Pesquisa e estruturacao de UX com cards.
- Showcase em video do dashboard.
- Solucao, operacao em tempo real, busca/filtros/rastreabilidade, status/erros, white label e decisoes de design.
- Impacto com cards de metricas/beneficios e comparacao.
- Aprendizados com cards.
- Confidencialidade com CTA para voltar aos projetos.

Layout:

- Usa `PageShell variant="case"`.
- Article branco.
- Secoes em `px-5 md:px-8`, `py-24`, frequentemente `lg:min-h-[760px]`.
- Grid desktop alternando `lg:grid-cols-[0.92fr_1.08fr]` e `lg:grid-cols-[1.08fr_0.92fr]`.
- Texto editorial em `max-w-[540px]`.
- Mockups grandes, geralmente browser com chrome superior.

### `/portfolio/heimdall`

Arquivo: `src/app/portfolio/heimdall/page.tsx`

Funcao: case study detalhado do Heimdall.

Blocos visuais:

- Hero com texto e browser mockup de mapa relacional.
- Visao geral, contexto do produto, macro/detalhe, contexto operacional.
- Principais dores em cards.
- Desafio, meu papel, validacao, sinais de risco e decisoes de design.
- Impacto e aprendizados em cards.
- Confidencialidade com CTA.

Layout:

- Mesmo template geral dos cases desktop.
- Usa `StaticBrowserMockup` local com props para altura/aspecto, auto scroll e imagem.
- Alternancia entre `bg-white` e `bg-[#F3F3F3]`.
- Cards de 2 colunas em `sm:grid-cols-2`.

### `/portfolio/parkingpix`

Arquivo: `src/app/portfolio/parkingpix/page.tsx`

Funcao: case study mobile para experiencia de pagamento PIX em estacionamento.

Blocos visuais:

- Hero com texto e mockup mobile.
- Visao geral com tela mobile.
- Contexto do produto com imagem editorial de ticket.
- Fluxo mobile com tres telas.
- Contexto operacional, dores, desafio, papel, validacao de pagamento, confirmacao/status, decisoes, impacto, aprendizados e confidencialidade.

Layout:

- Mesmo sistema editorial dos outros cases.
- Mockups focados em aspect ratios mobile (`910/2278`, `910/2094`, `910/1990`).
- Max widths entre `190px` e `320px` para dispositivos.
- Fluxo com `sm:grid-cols-3`.

### `/front-end`

Arquivo: `src/app/front-end/page.tsx`

Funcao: pagina narrativa sobre design com base tecnica.

Blocos visuais:

- `PageShell`
- Wrapper branco que remove offsets do `PageShell`
- `FrontendScrollStory`

Layout:

- Secao com altura `190vh` no mobile e `220vh` no desktop.
- Bloco sticky com canvas de avatar/frames ou fallback em video.
- Conteudo textual sobreposto/alinhado a direita no desktop.

### `/sobre`

Arquivo: `src/app/sobre/page.tsx`

Funcao: pagina institucional sobre Diego Suque.

Blocos visuais:

- Cabecalho editorial padrao.
- Grid de blocos usando `CaseSection`: Atuacao, Experiencia, Ferramentas, Design + Front-end.

Layout:

- `PageShell` default.
- Container `max-w-[1180px]`.
- Grid `md:grid-cols-2`.

### `/contato`

Arquivo: `src/app/contato/page.tsx`

Funcao: pagina de contato e links externos.

Blocos visuais:

- Cabecalho editorial padrao.
- Lista de cards-link para LinkedIn, GitHub e Behance.

Layout:

- `PageShell` default.
- Lista centralizada `max-w-[820px]`.
- Cards horizontais com icone `ArrowUpRight`.

### `not-found`

Arquivo: `src/app/not-found.tsx`

Funcao: pagina 404.

Blocos visuais:

- Conteudo centralizado.
- Codigo 404, titulo, texto e link para home.

Observacao: usa classes `text-brand-red` e `hover:bg-brand-red`, mas essa cor nao aparece definida em `globals.css` pelo codigo auditado.

## 3. Componentes reutilizaveis

| Componente | Caminho | Usado em | Funcao | Props principais | Variacoes / responsivo |
| --- | --- | --- | --- | --- | --- |
| `Navbar` | `src/components/navbar.tsx` | Home e `PageShell` | Navegacao principal fixa | Sem props | Desktop com links, sociais e idioma; mobile com menu colapsavel |
| `Footer` | `src/components/footer.tsx` | Home e `PageShell` | Rodape com links e voltar ao topo | Sem props | Layout coluna no mobile e linha no `md` |
| `PageShell` | `src/components/page-shell.tsx` | Portfolio, cases, Sobre, Contato, Front-end | Estrutura global com Navbar, conteudo e Footer | `variant?: "default" | "case"` | Default usa fundo cinza e padding global; case usa fundo branco e menos padding superior |
| `Hero` | `src/components/hero.tsx` | Home | Hero interativo Product Designer / coder | Sem props | Mobile renderiza composicao simplificada; desktop usa Framer Motion e clipPath |
| `FeaturedWork` | `src/components/featured-work.tsx` | Home | Secao de projetos em destaque | Sem props | Grid 1 coluna, 2 colunas em `lg`, 3 em `xl` |
| `WorkCard` | `src/components/work-card.tsx` | Home, Portfolio | Card de projeto/case | `work: Work` | Vanir tem destaque visual no desktop; hover troca imagem e acende radial |
| `CaseSection` | `src/components/case-section.tsx` | Sobre | Card editorial de conteudo | `title`, `children` | Padding maior em `md` |
| `LanguageToggle` | `src/components/language-toggle.tsx` | Navbar | Alternador PT/EN/ES | Sem props | Slider interno muda posicao conforme idioma |
| `SafeImage` | `src/components/safe-image.tsx` | Hero, WorkCard, cases | Wrapper para `next/image` que oculta imagem se falhar | Herda `ImageProps` | Sem variacao visual propria |
| `FrontendScrollStory` | `src/components/frontend-scroll-story.tsx` | Front-end | Experiencia de scroll com canvas/avatar e texto | Sem props | Logica separada para mobile e desktop |

Componentes locais importantes nas paginas:

| Componente local | Caminho | Usado em | Funcao | Props / variacoes |
| --- | --- | --- | --- | --- |
| `BrowserMockup` | `src/app/portfolio/vanir/page.tsx` | Vanir hero | Mockup browser com tilt | Desktop com perspectiva; mobile simplificado |
| `StaticBrowserMockup` | `src/app/portfolio/vanir/page.tsx` | Vanir secoes | Browser mockup reutilizavel no case | `imageSrc`, `alt`, `address`, `autoScroll`, `scrollDistance`, `scrollDuration`, classes de imagem |
| `DashboardVideoShowcase` | `src/app/portfolio/vanir/page.tsx` | Vanir | Browser mockup com video | Sem props |
| `NavigationModulesVisual` | `src/app/portfolio/vanir/page.tsx` | Vanir | Composicao editorial de imagem de modulos | Sem props |
| `BrowserMockup` | `src/app/portfolio/heimdall/page.tsx` | Heimdall hero | Mockup browser com tilt | Similar ao Vanir, usando imagem Heimdall |
| `StaticBrowserMockup` | `src/app/portfolio/heimdall/page.tsx` | Heimdall secoes | Browser mockup com altura/aspect ratio configuravel | `frameClassName`, `autoScroll`, `imageWrapperClassName` |
| `HeroMobileMockup` | `src/app/portfolio/parkingpix/page.tsx` | ParkingPix hero | Tela mobile de destaque | Sem props |
| `MobileShowcase` | `src/app/portfolio/parkingpix/page.tsx` | ParkingPix secoes | Mockup mobile sem moldura externa pesada | `src`, `alt`, `aspectClassName`, `maxWidthClassName`, `imageClassName` |
| `EditorialImageShowcase` | `src/app/portfolio/parkingpix/page.tsx` | ParkingPix | Imagem editorial com borda/card | `src`, `alt`, classes de aspecto e largura |
| `FlowShowcase` | `src/app/portfolio/parkingpix/page.tsx` | ParkingPix | Sequencia de telas mobile | `images[]` com `src`, `alt`, `aspectClassName` |

### Detalhes dos componentes compartilhados

#### Navbar

- Altura: `104px`.
- Posicao: `fixed inset-x-0 top-0 z-50`.
- Fundo: `#E8E8E8`.
- Container: `max-w-[1320px]`, `px-6 md:px-10`.
- Logo: bloco `66x66`, raio `22px`, fundo `#080808`, borda `#1C1C1C`, sombra dupla clara.
- Links desktop: `.btn-soft-3d` com altura reduzida `46px`, padding horizontal `26px`.
- Icon buttons: `46x46`, circulares, gradiente claro e mesma linguagem soft 3D.
- Mobile: menu em card `rounded-[24px]`, borda `#E2E2E2`, fundo `#F2F2F2`, sombra neumorfica.

#### Footer

- Fundo: `#E8E8E8`.
- Borda superior: `#DDDDDD`.
- Botao voltar ao topo: circular `74x74`, centralizado no topo, estilo soft 3D.
- Container: `max-w-[960px]`, min height `86px`, `px-4 py-8`.
- Texto: `12px`, peso normal, `#8A8A8A`, hover `#333333`.

#### WorkCard

- Card externo: `rounded-[24px]`, fundo `#E8E8E8`, padding `10px`.
- Card interno: `rounded-[18px]`, fundo `#F2F2F2`, hover `#F5F5F5`.
- Area de imagem: aspect `16/9`, padding `7px`, sombra interna.
- Tipografia: categoria `10px` uppercase, titulo `25px` black, texto `14px`.
- Interacao: hover com translate vertical, troca de imagem, escala de imagem e radial glow seguindo mouse.
- Vanir: recebe destaque por ser case principal, com ordem e escala especiais em `xl`.

#### CaseSection

- Card editorial simples: `rounded-[24px]`, borda `#E2E2E2`, fundo `#F2F2F2`, sombra `8px 8px 18px #cfcfcf, -8px -8px 18px #ffffff`.
- Padding: `p-7 md:p-9`.
- Titulo: `28px`, `font-black`, tracking negativo.
- Conteudo: `16px`, line-height `1.7`, `#727272`.

#### LanguageToggle

- Container: `124x38`, grid de 3 colunas, raio pill.
- Fundo: `#E6E6E6`, borda `#D7D7D7`, sombra interna.
- Slider: `30px` de altura, largura de 1/3, gradiente claro, sombra pequena.
- Texto: `11px`, `font-black`, uppercase, tracking `0.08em`.

## 4. Tokens visuais

### Cores principais

| Nome sugerido | Valor | Uso |
| --- | --- | --- |
| `color.background.default` | `#FFFFFF` | Body, cases, secoes brancas |
| `color.background.app` | `#E8E8E8` | Navbar, footer, paginas default, featured work |
| `color.surface.soft` | `#F7F7F7` | Cards, mockups, browser chrome |
| `color.surface.muted` | `#F3F3F3` | Secoes alternadas de cases |
| `color.surface.card` | `#F2F2F2` | Cards e menu mobile |
| `color.text.primary` | `#303030` | Titulos e texto principal |
| `color.text.body` | `#727272` | Paragrafos principais |
| `color.text.secondary` | `#686868` | Paragrafos de cases |
| `color.text.muted` | `#777777` | Eyebrows, labels |
| `color.text.soft` | `#8A8A8A` | Footer, placeholders |
| `color.text.subtle` | `#9A9A9A` | Labels de cards |
| `color.button.text` | `#606060` | Botoes soft 3D |
| `color.border.default` | `#E2E2E2` | Cards e mockups |
| `color.border.soft` | `#DDDDDD` | Browser chrome, footer |
| `color.border.strong` | `#8F9092` | Botoes |
| `color.line` | `#D0D0D0` | Divisores |
| `color.logo.background` | `#080808` | Logo button |
| `color.logo.border` | `#1C1C1C` | Logo button |

Tokens globais definidos em `src/app/globals.css`:

| Token CSS | Valor |
| --- | --- |
| `--background` | `#ffffff` |
| `--foreground` | `#111111` |
| `--muted` | `#777777` |
| `--muted-soft` | `#9a9a9a` |
| `--border` | `#e5e5e5` |
| `--surface` | `#ffffff` |
| `--surface-soft` | `#f7f7f7` |
| `--black` | `#000000` |
| `--white` | `#ffffff` |

### Gradientes

| Nome sugerido | Valor | Uso |
| --- | --- | --- |
| `gradient.button.soft3d` | `linear-gradient(to top, #D8D9DB 0%, #fff 80%, #FDFDFD 100%)` | Botoes principais, nav, icones |
| `gradient.toggle.slider` | `linear-gradient(to top, #F2F2F2 0%, #fff 88%)` | Language toggle |
| `gradient.image.fade` | `from transparent via background/75 to background` | Fade inferior do hero |
| `gradient.hover.radial` | radial branco/cinza transparente | Glow do `WorkCard` |

### Sombras

| Nome sugerido | Valor / padrao | Uso |
| --- | --- | --- |
| `shadow.neomorphic.sm` | `7px 7px 16px #d0d0d0, -7px -7px 16px #ffffff` | Cards menores |
| `shadow.neomorphic.md` | `8px 8px 18px #cfcfcf, -8px -8px 18px #ffffff` | WorkCard, CaseSection, menu mobile |
| `shadow.neomorphic.lg` | `14px 14px 32px #c7c7c7, -14px -14px 32px #ffffff` | Vanir destacado |
| `shadow.button.hover` | Multicamadas claras + inset `#CECFD1` | Hover de botoes soft 3D |
| `shadow.button.active` | Multicamadas claras + inset `#999/#aaa` | Active/focus de botoes |
| `shadow.mockup` | `0 24px 70px rgba(48,48,48,0.12)` | Mockups browser |
| `shadow.mockup.hero` | `0 26px 70px rgba(48,48,48,0.14)` | Browser hero |
| `shadow.mockup.hover` | `0 34px 90px rgba(48,48,48,0.2)` | Browser hero hover |
| `shadow.card.editorial` | `0 24px 70px rgba(48,48,48,0.06/0.08)` | Cards de cases |
| `shadow.mobile.mockup` | `0 24px 45px rgba(0,0,0,0.14)` | ParkingPix mobile hero |

### Raios de borda

| Token sugerido | Valor | Uso |
| --- | --- | --- |
| `radius.sm` | `14px` | Imagem interna de WorkCard |
| `radius.md` | `18px` | Superficies internas e mobile menu links |
| `radius.lg` | `22px` | Logo, browser inner, cards pequenos |
| `radius.xl` | `24px` | WorkCard, CaseSection, menu mobile |
| `radius.2xl` | `26px` | Browser mobile |
| `radius.3xl` | `28px` | Front-end text card mobile, placeholders |
| `radius.4xl` | `30px` | Botoes pill, browser outer, editorial image |
| `radius.5xl` | `32px` | Cards de case e CTA/confidencialidade |
| `radius.6xl` | `34px` | Showcase de video |
| `radius.full` | `999px` | Botoes, language toggle, browser address bar |

### Espacamentos recorrentes

| Token sugerido | Valor | Uso |
| --- | --- | --- |
| `spacing.1` | `4px` | Padding toggle |
| `spacing.2` | `8px` | Gaps pequenos |
| `spacing.3` | `12px` | Padding browser outer, gaps |
| `spacing.4` | `16px` | Padding mobile |
| `spacing.5` | `20px` | Gaps/cards |
| `spacing.6` | `24px` | Cards, gaps |
| `spacing.7` | `28px` | Cards de case |
| `spacing.8` | `32px` | Padding CTA/confidencialidade |
| `spacing.9` | `36px` | Padding maior |
| `spacing.10` | `40px` | Navbar desktop horizontal |
| `spacing.12` | `48px` | Gaps de hero/case |
| `spacing.14` | `56px` | Gaps em case |
| `spacing.16` | `64px` | Distancia entre blocos |
| `spacing.20` | `80px` | Secao portfolio |
| `spacing.24` | `96px` | Padding vertical global e cases |
| `spacing.28` | `112px` | Sticky top front-end |
| `spacing.32` | `128px` | Padding vertical case desktop |

### Containers e larguras

| Token sugerido | Valor | Uso |
| --- | --- | --- |
| `layout.container.footer` | `960px` | Footer |
| `layout.container.narrow` | `920px` | Confidencialidade |
| `layout.container.page` | `1180px` | Portfolio/Sobre/Contato/FeaturedWork |
| `layout.container.case` | `1240px` | Cases e front-end |
| `layout.container.nav` | `1320px` | Navbar, hero desktop, front-end xl |
| `layout.text.case` | `540px` | Coluna textual de cases |
| `layout.text.hero.case` | `560px` | Texto hero case |
| `layout.text.intro` | `780px/840px` | Intro das paginas |
| `layout.text.frontend` | `590px/660px` | Texto front-end |

### Breakpoints usados

O projeto usa os breakpoints padrao do Tailwind:

| Prefixo | Largura Tailwind | Uso |
| --- | --- | --- |
| `sm` | `640px` | Ajustes de fontes, grids mobile e larguras |
| `md` | `768px` | Padding, grids de 2 colunas, footer horizontal |
| `lg` | `1024px` | Navbar desktop, hero desktop, grids de case |
| `xl` | `1280px` | Ajustes de hero, WorkCard destacado, containers maiores |
| `min-[390px]` | `390px` | CTAs do hero mobile em linha |

### Tipografia em tokens

| Estilo sugerido | Classes atuais | Uso |
| --- | --- | --- |
| `display.home.desktop` | `48/52 -> 88px`, `font-black`, `leading-[0.92]`, `tracking-[-0.055em]` | Titulos do hero home |
| `display.page` | `56px sm:74px lg:96px`, `font-black`, `leading-[0.92]`, `tracking-[-0.055em]` | H1 de Portfolio/Sobre/Contato |
| `display.case.hero` | `38px md:48px lg:54px`, `font-black`, `leading-[0.98]`, `tracking-[-0.045em]` | H1 de cases |
| `heading.case.section` | `36px md:44px lg:48px`, `font-bold`, `leading-[1]`, `tracking-[-0.035em]` | H2 de cases |
| `heading.card.large` | `25/26px md:28/30px`, `font-bold`, `leading-[1.05]`, `tracking-[-0.035em]` | Cards de impacto/aprendizado |
| `heading.card.small` | `22px`, `font-black`, `leading-none`, `tracking-[-0.04em]` | Outros projetos |
| `eyebrow.default` | `11px`, `font-black/bold`, uppercase, tracking `0.32/0.34em` | Eyebrows de paginas e featured |
| `eyebrow.card` | `10/12px`, uppercase, tracking `0.16/0.28em` | Cards e labels |
| `body.intro` | `18px sm:20px`, `leading-[1.7]`, `#727272` | Introducoes |
| `body.case` | `16px md:20px`, `leading-8 md:leading-9`, `#686868` | Texto principal de cases |
| `body.card` | `14px md:16px`, `leading-6/7` | Cards |
| `caption.footer` | `12px`, leading none, `#8A8A8A` | Footer |
| `button.label` | `14px`, `font-semibold`, `#606060` | Botoes soft 3D |

## 5. Tipografia

A tipografia global e Inter, configurada em `src/app/layout.tsx` via `next/font/google` e exposta como `--font-inter`. O body usa `font-family: var(--font-inter), Arial, Helvetica, sans-serif`.

Padroes:

- Titulos principais usam `font-black`, tracking negativo forte e line-height compacto. No Figma, devem virar estilos Display com variantes Page, Home e Case.
- Titulos de secao dos cases usam `font-bold`, nao `font-black`, com tracking negativo menor. Isso diferencia narrativa editorial de landing/page title.
- Eyebrows usam uppercase, peso alto, tracking largo e cinzas medios.
- Paragrafos usam cinza medio, line-height generoso e tamanhos entre 15px e 20px.
- Cards usam titulos entre 22px e 30px, com paragrafo menor de 14px/16px.
- CTAs usam 14px sem uppercase no padrao geral; alguns CTAs da pagina front-end usam 12px uppercase com tracking.

Estilos tipograficos recomendados no Figma:

| Nome Figma | Size | Weight | Line-height | Letter spacing | Color default |
| --- | --- | --- | --- | --- | --- |
| `Display/Page/LG` | 96 | Black | 0.92 | -5.5% aprox. | `Text/Primary` |
| `Display/Page/MD` | 74 | Black | 0.92 | -5.5% aprox. | `Text/Primary` |
| `Display/Page/SM` | 56 | Black | 0.92 | -5.5% aprox. | `Text/Primary` |
| `Display/Home/LG` | 88 | Black | 0.92 | -5.5% aprox. | `Text/Primary` |
| `Heading/Case/H1` | 54 | Black | 0.98 | -4.5% aprox. | `Text/Primary` |
| `Heading/Case/H2` | 48 | Bold | 1.0 | -3.5% aprox. | `Text/Primary` |
| `Heading/Card/LG` | 30 | Bold | 1.05 | -3.5% aprox. | `Text/Primary` |
| `Heading/Card/MD` | 26 | Bold | 1.05 | -3.5% aprox. | `Text/Primary` |
| `Body/Intro` | 20 | Regular | 1.7 | 0 | `Text/Body` |
| `Body/Case` | 20 | Regular | 1.8 aprox. | 0 | `Text/Secondary` |
| `Body/Base` | 16 | Regular | 1.7 | 0 | `Text/Body` |
| `Body/Card` | 14/16 | Regular | 1.5-1.75 | 0 | `Text/Secondary` |
| `Label/Eyebrow` | 11 | Black/Bold | Auto | +32%/+34% | `Text/Muted` |
| `Label/Card` | 10/12 | Semibold/Bold | Auto | +16%/+28% | `Text/Subtle` |
| `Button/Default` | 14 | Semibold | Auto | 0 | `Button/Text` |
| `Footer/Link` | 12 | Regular | 1.0 | 0 | `Text/Soft` |

## 6. Layout e grid

### Desktop

- Navbar fixa com altura 104px e container `1320px`.
- Home hero: grid de 3 colunas no desktop, `lg:grid-cols-[0.9fr_minmax(500px,640px)_0.9fr]`, com imagem central.
- Paginas institucionais: container unico `1180px`, cabecalho editorial e blocos abaixo.
- Cases: secoes full-width com container `1240px`; grid de duas colunas com proporcoes alternadas.
- Cards de case: grids de 2 colunas para cards editoriais (`sm:grid-cols-2`) e deslocamentos verticais alternados para dar ritmo.
- Portfolio: grid de 3 cards em `md:grid-cols-3`; outros projetos em 5 colunas no `lg`.

### Tablet

- `md:px-8` aparece como padding lateral recorrente.
- Footer muda de coluna para linha em `md`.
- Case sections ainda podem estar em coluna ate `lg`, mantendo mockup e texto empilhados.
- Cards podem entrar em 2 colunas a partir de `sm`/`md`.

### Mobile

- Navbar mostra apenas logo e menu button; menu abre em card abaixo.
- Hero home troca o layout interativo desktop por composicao vertical com titulos em duas colunas e imagem central.
- Cases ficam empilhados, com `px-5`, titulos `38px`, paragrafos `16px`.
- Mockups browser desktop tem versao simplificada no mobile.
- ParkingPix usa mockups mobile com largura controlada.
- CTAs no hero home empilham e passam para linha em `min-[390px]`.

### Padroes de seccao

| Padrao | Classes recorrentes | Uso |
| --- | --- | --- |
| Secao case hero | `relative overflow-hidden px-5 pb-24 pt-16 md:px-8 md:pb-32 md:pt-24` | Topo dos cases |
| Secao case conteudo | `relative overflow-hidden bg-white/#F3F3F3 px-5 py-24 md:px-8 lg:min-h-[760px]` | Corpo dos cases |
| Container case | `mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols[...]` | Texto + visual |
| Texto case | `max-w-[540px]` | Coluna editorial |
| Intro page | `mx-auto max-w-[1180px]` | Portfolio, Sobre, Contato |
| Grid cards | `grid gap-5 sm:grid-cols-2` | Cards de dores, impacto, aprendizado |

## 7. Componentes para criar no Figma

| Componente Figma | Base no codigo | Variantes recomendadas |
| --- | --- | --- |
| Navbar | `Navbar` | Desktop, Mobile closed, Mobile open |
| Logo button | `Navbar` | Default, Hover, Active |
| Nav button | `.btn-soft-3d` + nav | Default, Hover, Active/Focus |
| Social icon button | `iconButtonClass` | GitHub, LinkedIn, Behance; Default/Hover/Active |
| Language switcher | `LanguageToggle` | PT active, EN active, ES active |
| Footer | `Footer` | Desktop, Mobile |
| Back to top button | `Footer` | Default, Hover, Active |
| Home Hero | `Hero` | Desktop neutral, Desktop designer focus, Desktop coder focus, Mobile |
| Button primary soft 3D | `.btn-soft-3d` | Default, Hover, Active, With icon, Compact |
| Button secondary/link | Portfolio inline links | Text link with arrow, External card link |
| Featured work section | `FeaturedWork` | 1 col, 2 col, 3 col |
| Project card | `WorkCard` | Default, Hover, Featured/Vanir, Mobile |
| Page intro header | Portfolio/Sobre/Contato | Portfolio, About, Contact, generic |
| Basic content card | `CaseSection` | Default, 2-column grid item |
| Case hero | Case pages | Browser case, Mobile app case |
| Case content section | Case pages | Visual left/text right, Text left/visual right |
| Browser mockup | Local `BrowserMockup`/`StaticBrowserMockup` | Desktop tilt hero, Static, Auto-scroll, Video, Mobile compact |
| Browser chrome | Static mockups | Address visible, Address skeleton, No address text |
| Mobile mockup/showcase | ParkingPix | Hero, Single screen, Flow item, Placeholder |
| Editorial image card | ParkingPix | Default, Narrow, Tall |
| Flow showcase | ParkingPix | 3 screens, staggered |
| Metric/impact card | Case cards | White, Soft gray, Staggered, With label |
| Problem/solution card | Case cards | Pain, Learning, Impact |
| Comparison block | Vanir impact comparison | Two-column, List item |
| Case final CTA/confidentiality | Cases | Default, With CTA button |
| Front-end scroll story panel | `FrontendScrollStory` | Mobile overlay, Desktop right aligned, CTA step |
| Stack/tag row | `FrontendScrollStory` stack | With separators, wrapping |
| Contact link card | `/contato` | LinkedIn, GitHub, Behance, Hover |
| Other project card | `/portfolio` | In progress |

Observacao: nao ha badges/pills genericos nos cards de case; os "tags" mais proximos aparecem como stack textual na pagina front-end, separado por pontos.

## 8. Auto Layout no Figma

### Navbar

- Frame principal: horizontal, height 104, width fill, padding left/right 24 mobile e 40 desktop, align center, space-between.
- Container interno: max 1320, horizontal, align center, space-between.
- Logo: fixed 66x66.
- Nav links desktop: horizontal, gap 16.
- Social/language group: horizontal, gap 20; social subgroup gap 12.
- Mobile menu: vertical, padding 16, gap 12, radius 24, width fill com margem 16.

### Button soft 3D

- Auto Layout horizontal, center.
- Height 50 default, 46 compact.
- Min width 150 default.
- Padding horizontal 24/26.
- Radius 30.
- Gap 12 quando tiver icone.
- Estados devem trocar sombra e texto, sem alterar dimensoes.

### Language switcher

- Container horizontal/grid equivalente com 3 segmentos.
- Fixed 124x38, padding 4, radius full.
- Slider absoluto ou camada interna com largura `(124 - 8) / 3`, height 30.
- Variantes mudam posicao do slider.

### WorkCard

- Card externo: vertical, padding 10, radius 24, width fill.
- Card interno: vertical, radius 18.
- Image area: fixed aspect ratio 16:9, padding 7.
- Content: vertical, padding left/right 16, top/bottom 20, gap visual entre categoria, titulo, descricao e CTA.
- CTA row: horizontal, space-between, wrap on small widths.
- Variantes: default, hover, featured.

### Page intro

- Vertical, align left.
- Width fill com max 1180.
- Gap: eyebrow -> title 20; title -> body 28.
- H1 responsivo como estilos separados para mobile/tablet/desktop.

### Case section text + visual

- Section: vertical/full-width, padding horizontal 20 mobile e 32 tablet/desktop, padding vertical 96.
- Container: desktop horizontal/grid com 2 colunas, max 1240, gap 56-80; mobile vertical gap 48-56.
- Text column: vertical, max 540, gap 28 entre titulo e paragrafo group.
- Paragraph group: vertical, gap 20.
- Note: left border, padding-left 20, margin top 28.

### Browser mockup

- Outer frame: vertical, padding 12, radius 30, border.
- Inner browser: vertical, radius 22, overflow hidden.
- Chrome bar: horizontal, height 44, padding horizontal 20, gap 12.
- Dots group: horizontal, gap 8, dots 12x12.
- Address bar: height 28, width 42-48% desktop, radius full, centered.
- Content: fixed height or aspect ratio depending variant.
- Variantes: desktop static, desktop hero tilt, mobile compact, video, autoscroll.

### Mobile mockup / ParkingPix

- Wrapper: center aligned, width fill.
- Device image frame: fixed aspect ratio, max width 240-320 depending variant.
- Flow: horizontal on tablet/desktop with 3 children, gap 20-32; vertical on mobile.
- Stagger: second/third items receive vertical offset only in larger breakpoints.

### Metric / impact cards

- Vertical Auto Layout.
- Padding 28 or 32.
- Gap 24.
- Min height 220-250.
- Radius 32.
- Border `#DADADA`.
- Label + metric group: vertical, label then metric with 16px gap.
- Body below.
- Variantes: white, soft gray, staggered offset.

### Footer

- Footer frame vertical with top border.
- Back-to-top button absolute centered at top.
- Content container: mobile vertical center, desktop horizontal space-between.
- Height min 86, padding 32 vertical.
- Nav links: horizontal wrap, gap 24.

## 9. Variaveis no Figma

### `color`

Estrutura sugerida:

- `color/background/default = #FFFFFF`
- `color/background/app = #E8E8E8`
- `color/background/section-muted = #F3F3F3`
- `color/surface/default = #FFFFFF`
- `color/surface/soft = #F7F7F7`
- `color/surface/card = #F2F2F2`
- `color/surface/image = #EDEDED`
- `color/text/primary = #303030`
- `color/text/foreground = #111111`
- `color/text/body = #727272`
- `color/text/secondary = #686868`
- `color/text/muted = #777777`
- `color/text/soft = #8A8A8A`
- `color/text/subtle = #9A9A9A`
- `color/text/button = #606060`
- `color/border/default = #E2E2E2`
- `color/border/soft = #DDDDDD`
- `color/border/card = #DADADA`
- `color/border/button = #8F9092`
- `color/border/divider = #D0D0D0`
- `color/border/note = #BDBDBD`
- `color/logo/background = #080808`
- `color/logo/hover = #111111`
- `color/logo/border = #1C1C1C`

### `typography`

- `typography/font/family/sans = Inter`
- `typography/display/page/mobile = 56/0.92/Black/-5.5%`
- `typography/display/page/tablet = 74/0.92/Black/-5.5%`
- `typography/display/page/desktop = 96/0.92/Black/-5.5%`
- `typography/display/home/desktop = 88/0.92/Black/-5.5%`
- `typography/heading/case/h1 = 54/0.98/Black/-4.5%`
- `typography/heading/case/h2 = 48/1.0/Bold/-3.5%`
- `typography/heading/card/lg = 30/1.05/Bold/-3.5%`
- `typography/body/intro = 20/1.7/Regular/0`
- `typography/body/case = 20/1.8/Regular/0`
- `typography/body/base = 16/1.7/Regular/0`
- `typography/body/card = 14/1.6/Regular/0`
- `typography/label/eyebrow = 11/auto/Black/+34%`
- `typography/button/default = 14/auto/Semibold/0`

### `spacing`

Use uma escala numerica alinhada aos valores reais:

- `spacing/1 = 4`
- `spacing/2 = 8`
- `spacing/3 = 12`
- `spacing/4 = 16`
- `spacing/5 = 20`
- `spacing/6 = 24`
- `spacing/7 = 28`
- `spacing/8 = 32`
- `spacing/9 = 36`
- `spacing/10 = 40`
- `spacing/12 = 48`
- `spacing/14 = 56`
- `spacing/16 = 64`
- `spacing/20 = 80`
- `spacing/24 = 96`
- `spacing/28 = 112`
- `spacing/32 = 128`

### `radius`

- `radius/sm = 14`
- `radius/md = 18`
- `radius/lg = 22`
- `radius/xl = 24`
- `radius/2xl = 26`
- `radius/3xl = 28`
- `radius/4xl = 30`
- `radius/5xl = 32`
- `radius/6xl = 34`
- `radius/full = 999`

### `shadow`

- `shadow/neomorphic/sm`
- `shadow/neomorphic/md`
- `shadow/neomorphic/lg`
- `shadow/button/default = none`
- `shadow/button/hover`
- `shadow/button/active`
- `shadow/mockup/default = 0 24 70 rgba(48,48,48,0.12)`
- `shadow/mockup/hero = 0 26 70 rgba(48,48,48,0.14)`
- `shadow/card/editorial = 0 24 70 rgba(48,48,48,0.08)`
- `shadow/card/subtle = 0 24 70 rgba(48,48,48,0.06)`
- `shadow/mobile/mockup = 0 24 45 rgba(0,0,0,0.14)`

### `layout`

- `layout/container/footer = 960`
- `layout/container/page = 1180`
- `layout/container/case = 1240`
- `layout/container/nav = 1320`
- `layout/text/case = 540`
- `layout/text/caseHero = 560`
- `layout/text/pageIntro = 780`
- `layout/nav/height = 104`
- `layout/footer/minHeight = 86`
- `layout/case/minSectionDesktop = 760`
- `layout/case/minContent = 560`

### `breakpoint`

- `breakpoint/sm = 640`
- `breakpoint/md = 768`
- `breakpoint/lg = 1024`
- `breakpoint/xl = 1280`
- `breakpoint/mobileCta = 390`

## 10. Design system proposto no Figma

Organizacao recomendada do arquivo Figma:

### Cover

- Nome do sistema: Portfolio Diego Suque Design System.
- Snapshot visual com Navbar, WorkCard, BrowserMockup e Case Section.
- Link/nota indicando que a referencia vem do codigo atual.

### Foundations

- Principios: limpo, premium, editorial, tecnico, maduro, operacional.
- Regras de uso: preservar paleta cinza/branco, tipografia Inter, sombras soft 3D e foco em mockups reais.

### Colors

- Primitivos: white, black, gray scale.
- Semanticos: background, surface, text, border, button, logo.
- Gradientes: button soft 3D, toggle, image fade.

### Typography

- Display, headings, body, labels, buttons e captions.
- Exemplos aplicados em Page Intro, Case Hero e Cards.

### Spacing

- Escala 4-128.
- Exemplos: cards, secoes de case, navbar, grids.

### Radius

- Tokens de 14 a full.
- Demonstrar aplicacao em WorkCard, browser mockup, buttons e case cards.

### Shadows

- Neomorphic cards.
- Button states.
- Mockup shadows.
- Editorial card shadows.

### Components

- Navbar
- Footer
- Button soft 3D
- Icon button
- Language switcher
- WorkCard
- CaseSection
- PageIntro
- BrowserMockup
- MobileMockup
- MetricCard
- ContactLinkCard
- OtherProjectCard

### Patterns

- Hero home.
- Featured work grid.
- Case two-column section.
- Case card grid.
- Case final CTA/confidentiality.
- Front-end sticky story.

### Case Templates

- Desktop product case template: Vanir/Heimdall.
- Mobile product case template: ParkingPix.
- Sections: hero, overview, context, role, challenge, solution, impact, learnings, confidentiality.

### Portfolio Pages

- Home.
- Portfolio index.
- About.
- Contact.
- Front-end.
- Vanir.
- Heimdall.
- ParkingPix.

### Playground

- Area para testar novas secoes mantendo tokens.
- Area para combinar mockups, cards e layouts sem alterar componentes base.

## 11. Observacoes de melhoria

Inconsistencias e oportunidades encontradas:

1. Muitos tokens visuais estao hardcoded em classes Tailwind (`#303030`, `#727272`, `#F3F3F3`, sombras e raios). O Figma deveria consolidar esses valores em variables antes de criar componentes.

2. Ha tokens globais em `globals.css`, mas a maioria das cores usadas nas telas nao consome diretamente esses tokens. Exemplo: `#303030`, `#E8E8E8`, `#F2F2F2` e `#DADADA` aparecem repetidos como valores diretos.

3. Os mockups de browser aparecem duplicados em Vanir e Heimdall com estrutura muito parecida. No Figma, devem virar um componente unico com variantes; no codigo, poderiam futuramente virar componente compartilhado se houver escopo.

4. Cards de impacto, aprendizado e dores se repetem nos cases com pequenas variacoes de fundo, sombra e conteudo. No Figma, devem ser um componente `CaseCard` com variantes `impact`, `learning`, `pain`, `white`, `soft`.

5. O padrao de secao de case se repete muitas vezes: container `1240px`, grid de duas colunas, texto `540px`, titulo `36/44/48`, paragrafo com `space-y-5`. Isso deve virar um pattern/template no Figma.

6. Os valores de sombra neumorfica e soft 3D sao longos e repetidos. Eles merecem styles/variables especificos para reduzir divergencias.

7. Existem raios proximos (`22`, `24`, `26`, `28`, `30`, `32`, `34`) usados por contexto. No Figma, a documentacao deve explicar quando usar cada um para evitar que todos virem escolhas arbitrarias.

8. A pagina `not-found.tsx` usa `text-brand-red` e `hover:bg-brand-red`, mas `brand-red` nao foi encontrado nos tokens globais auditados. Isso pode indicar vestigio de uma paleta anterior ou token ausente.

9. O arquivo `src/data/cases.ts` contem uma estrutura de case generica, mas as paginas atuais de Vanir/Heimdall/ParkingPix usam textos vindos de translations e componentes locais. Ha uma possivel divergencia entre modelo de dados e implementacao real.

10. A grafia de alguns arquivos de imagem inclui nomes com acentos e possiveis typos como `previwe`. Isso nao afeta o design system diretamente, mas pode dificultar organizacao de assets no Figma.

11. A pagina Front-end usa uma experiencia altamente customizada em canvas. No Figma, ela deve ser documentada como pattern/prototipo e nao apenas como componente estatico.

12. O botao soft 3D e usado como linguagem principal de acao, mas existem links inline e cards clicaveis com outros comportamentos. O Figma deve separar `Button`, `IconButton`, `TextLink` e `CardLink`.

13. Alguns offsets visuais de cards (`translate-y`, `-translate-y`) sao aplicados manualmente por indice. No Figma, isso pode virar variante/pattern de grid editorial staggered.

14. A responsividade depende fortemente de classes Tailwind por breakpoint. Ao reconstruir no Figma, e importante criar frames separados para mobile, tablet e desktop, nao apenas um componente elastico.

15. A paleta e intencionalmente restrita a cinzas, branco e preto. O risco no Figma e criar variacoes demais; a recomendacao e manter poucas variaveis semanticas e preservar a sobriedade do portfolio.

