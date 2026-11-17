# Phone view: issue list

Audit done 2026-11-17; fixes made the same day on branch `claude/phone-fixes-c7b198`. See "Status" at the end.

- Checked at 390 × 844 (iPhone-size, emulated in Chrome), light mode.
- Pages: Home, Business, IP & Works, About, Investors, News, Partner, Careers, one IP detail page, one news article.
- Versions: the Chinese site and the new English design. The old English design was not checked because it is being replaced.
- Not checked: the AI assistant panel when open, dark mode on a phone, tablets, landscape, real devices.

## A. Both Chinese and new English

| # | Where | Issue |
|---|---|---|
| A1 | Home hero | The 7 posters are hidden on phones. The hero is a full screen of blue with only a dashed ring and a yellow dot. |
| A2 | Every page | The round AI assistant button floats over the content at the right edge and covers text: the quick links, "03 Global" in the business overview, the About profile paragraph, the Partner AI box, IP posters. |
| A3 | Page menu bar (Business, IP, About, Investors, News, Partner) | Items run off the right edge with no sign that the bar scrolls ("Film & M…", "Reports & Fi…"). |
| A4 | Business overview (5 steps) | Laid out 3 + 2 with 12 px text squeezed into columns about 110 px wide. |
| A5 | Figure boxes inside feature cards (Business) | Three boxes across are too narrow: "1,200+" is cut off at the box edge in English; "5,200万+" touches the next box and "1,200部+" is cut off in Chinese. |
| A6 | Coloured chapter cards, "Up next" cards, partnership banner | Decorative circle outlines run through the text. |
| A7 | Header and footer | Tap targets are small. Language links are 14 to 29 px wide and 22 to 24 px tall, the menu button is 28 × 28, footer links are 19 to 26 px tall, the close button on the AI prompt is 10 × 17. The usual minimum is about 44 px. |
| A8 | About timeline | The last entry (2026) is right-aligned while every other entry is left-aligned. |
| A9 | IP & Works trailers | The note about screeners sits beside the last vertical video and leaves an odd gap. Seen in English; the Chinese page uses the same block. |
| A10 | Business page | About 18,000 px tall on a phone (around 21 screens), with no "back to top". The page menu only lists the top level. |
| A11 | Investors share price card | Red figures on the blue card are hard to read, especially the small change and percentage. |
| A12 | Stats rows | A row with an odd number of figures leaves one alone on its own line ("5B", "490K+ hrs"). Minor. |

## B. Chinese only

| # | Where | Issue |
|---|---|---|
| B1 | Header, every page | With "中 / EN / New" added, the header is wider than the screen. The menu button starts at 384 px on a 390 px screen, so only a sliver of it shows. This is the most serious issue, and it comes from the "New" link added last week. English is fine because its logo is shorter. |
| B2 | Section headings | The outlined English word behind each heading (BUSINESS, PLATFORMS, WORKS & IP) is cut off and collides with the heading and the button next to it. |
| B3 | Home business tiles | The description runs under the round arrow button and is cut off on 网络文学, 海外 and 数商服务. |
| B4 | Home quick links | Hints such as "内容 · 授权 · 海外" wrap onto a second line, so the six entries are uneven. |
| B5 | Home IP cards | Tag chips wrap onto two or three lines each and the cards end at different heights. This is the same mess already fixed on the new English IP page. |
| B6 | Business products | Five tall cards with large logos take about two screens. Minor. |

## C. New English only

| # | Where | Issue |
|---|---|---|
| C1 | Stats | "hrs" wraps under the number in "200K+ hrs" while "490K+ hrs" beside it stays on one line. |
| C2 | Home section headings | The "All businesses →" link drops onto its own line under the heading. |
| C3 | Business product rows | The name wraps awkwardly beside the logo ("Ciyuan / Shenbi"). |
| C4 | IP detail, "More works" | Five posters in two columns leave one on its own. Minor. |
| C5 | Home hero | The headline is small (44 px) for a full-screen hero, which adds to the emptiness in A1. |

## How to fix each one

"Shared" means the fix goes in a file both languages use, so it changes the live Chinese site too. "EN" means `src/styles/en.css` only.

### A. Both languages

| # | Fix | File | Scope |
|---|---|---|---|
| A1 | Stop hiding the posters under 768 px. Show them as a compact cluster in the lower half of the hero (about 84 to 110 px wide each, same tilt), with the text block moved to the top. Drop the hero from full-screen height to about 80% so the next section peeks in. | `src/pages/index.astro` (`.floater`, `.hero` phone rules) | Shared |
| A2 | On phones shrink the AI button to 44 px, tuck it 12 px from the bottom-right corner, and make it 85% opaque until tapped. Hide the speech-bubble prompt on phones. | `src/components/zh/AiChat.astro` | Shared |
| A3 | Fade the right edge of the page menu bar (CSS mask) so cut-off items read as "more this way", and scroll the active item into view when the section changes. | `src/components/zh/SideNav.astro`, `en.css` (`.rail`) | Shared |
| A4 | Under 768 px turn the five steps into a vertical list: number circle on the left, name and one-line description on the right, 15 px text. | `src/components/zh/Blocks.astro` (`.b-steps` phone rules) | Shared |
| A5 | Let the figure boxes fit their content: under 768 px use two boxes per row (third spans the full row), drop the figure to 24 px, and allow the unit to wrap instead of clipping. | `Blocks.astro` (`.ft-stats`) | Shared |
| A6 | Under 768 px hide the decorative shapes inside text cards, or shrink them into the top-right corner at lower opacity. | `src/pages/business/index.astro` (`.ch-shape`), `NextPage.astro` (`.shape`), `CtaBand.astro` (`.c-shape`), `Blocks.astro` (`.sp-ring`, `.sp-blob`) | Shared |
| A7 | Give every tappable item at least a 44 px hit area with padding: language links, menu button (44 × 44), footer links (8 px vertical padding), AI prompt close button (32 px or more). | `Header.astro`, `Footer.astro`, `AiChat.astro` | Shared |
| A8 | In the stacked phone timeline, reset the last entry to left-aligned. | `Blocks.astro` (`.jr-node.last .jr-card` under the 1100 px rule) | Shared |
| A9 | Make the screeners note span the full row under the videos, and show vertical videos two per row. | `Blocks.astro` (`.b-videos .b-note`, `.video.vertical`) | Shared |
| A10 | Add a small "back to top" button that appears after two screens of scrolling. Leave the page structure alone. | `src/layouts/BaseLayout.astro` | Shared |
| A11 | On the share price card show the price in white and put the change in a small tinted pill, using lighter red and green (about #ff9a9a and #7ee2a8) that read on blue. Keep the red/green meaning per language. | `src/pages/investors.astro` or the quote card styles | Shared |
| A12 | When a two-column stats row has an odd number of figures, let the last one span both columns. | `Blocks.astro` (`.b-stats`), `en.css` | Shared |

### B. Chinese only

| # | Fix | File | Scope |
|---|---|---|---|
| B1 | Under 520 px move "中 / EN / New" out of the top bar and into the top of the menu drawer, leaving logo, dark-mode button and menu button in the bar. Quick stopgap if needed first: shrink the logo to 20 px tall and the gap between tools to 8 px. | `Header.astro` | Shared |
| B2 | Under 768 px hide the outlined English word behind headings. | `src/styles/global.css` (`.s-ghost`) | Chinese |
| B3 | On phones keep 72 px clear on the right of the tile text so it cannot run under the arrow button, and let the text wrap to two lines. | `BizPosters.astro` (`.p-hook`, `.p-go`) | Chinese |
| B4 | Under 480 px drop the small icons from the quick links so each hint fits on one line. | `src/pages/index.astro` (`.aud`, `.aud-ic`) | Chinese |
| B5 | Show one tag per card on the phone home page and clamp it to two lines, the same treatment as the new English cards. Needs the team's OK because it hides the second tag on phones. | `src/pages/index.astro` (`.ipf-tags`) | Chinese |
| B6 | Optional: on phones show products as compact rows (logo left, text right) instead of tall cards. | `Blocks.astro` (`.b-cards.featured`) | Chinese |

### C. New English only

| # | Fix | File | Scope |
|---|---|---|---|
| C1 | Keep number and unit on one line: no wrapping inside a stat, and size phone figures at about 9% of screen width (32 to 40 px). | `en.css` (`.num`) | EN |
| C2 | On phones set home section headings to about 30 px so the "All …" link fits on the same line, right-aligned. | `en.css` (`main > .block-section .s-title`, `.s-head-row`) | EN |
| C3 | Stack product rows on phones: logo on its own line, then category and name, description, link. | `en.css` (`.b-cards.featured` under 1000 px) | EN |
| C4 | Show "More works" three across on phones. | `en.css` (`.ipd-more`) | EN |
| C5 | Raise the phone headline to about 52 px (two lines still fit at 390 px). Do this together with A1. | `en.css` (`.hero h1`) | EN |

## Suggested order

1. B1, because the Chinese menu is close to unusable on a phone.
2. A1, A2 and A5, which are visible on first look.
3. A3, A6, A7, B2, B3, B5, C1.
4. The rest.

## Status

Checked after the fixes at 390 × 844 with an iPhone user agent (light mode), all ten pages in Chinese and the new English, plus the open menu. No page scrolls sideways. Desktop (1440 px) screenshots of every page in both languages match the earlier ones apart from live content (stock price, video frames, number count-up).

"Shared" fixes are in one commit that can go to `main` on its own; English-only fixes are in a separate commit.

| # | Status | What was done |
|---|---|---|
| A1 | Fixed | Posters shown on phones (≤600 px) as two rows below the text, 88 to 104 px wide, same tilt. Hero is now about 88% of the screen in Chinese, 92% in English, so the next section shows. The dashed ring and yellow dot are hidden on phones. |
| A2 | Fixed | AI button 44 px, 12 px from the corner, 85% opaque until opened; greeting bubble hidden on phones (≤640 px). |
| A3 | Fixed | Right edge of the page menu bar fades out until scrolled to the end. Scrolling the active item into view already existed. |
| A4 | Fixed | Five steps are a vertical list on phones: number circle left, name and line right, 15 px text. |
| A5 | Fixed | Figure boxes two per row, third spans the row, figure 24 px, unit can wrap. |
| A6 | Fixed | Decorative circles hidden under 768 px on chapter cards, "Up next" cards, the call-to-action band and the spotlight card. |
| A7 | Partly | Menu button 44 × 44, language links 44 px tall, dark-mode button 40 px, footer links 8 px vertical padding. The AI prompt close button was not enlarged because the prompt is now hidden on phones; it is unchanged on desktop. |
| A8 | Fixed | Last timeline entry left-aligned in the stacked layout. |
| A9 | Fixed | Screeners note spans the full row under the videos. Vertical videos were already two per row. |
| A10 | Fixed | "Back to top" button on phones and tablets (≤768 px), above the AI button, appears after two screens. Not shown on desktop. |
| A11 | Fixed (phones) | Price, change and percentage in lighter red/green (#ff9a9a, #7ee2a8); change and percentage sit in small dark pills. The audit suggested a white price; kept coloured at the user's request. Red/green meaning still differs per language. Applied under 768 px only, so the desktop card is unchanged. |
| A12 | Fixed | Phone stats rows are two columns; an odd last figure spans both. |
| B1 | Fixed | Under 520 px, 中 / EN / New moved into the top of the menu drawer as three buttons. Header keeps logo, dark-mode button and menu button (menu button now at 338 to 382 px on a 390 px screen). |
| B2 | Fixed | Outlined English word behind headings hidden under 768 px. |
| B3 | Fixed | Tile text keeps 72 px clear on the right (Chinese only) and wraps. |
| B4 | Fixed | Quick-link icons hidden under 480 px; each hint fits on one line. |
| B5 | Skipped | Needs the team's OK (hides the second tag on phones). |
| B6 | Fixed | Done after the user asked for tall cards to be compacted: smaller logo, tag and name on one line, tighter spacing. Chinese only (English has C3). About 1,650 px down to 1,090 px for five products. |
| C1 | Fixed | Number and unit stay on one line; phone figures 32 to 40 px. |
| C2 | Fixed | Home section headings 28 px (30 px still wrapped "Our Businesses"), "All …" link on the same line, right-aligned. |
| C3 | Fixed | Product rows stack on phones: logo, category, name, description, link. |
| C4 | Fixed | "More works" three across on phones. |
| C5 | Fixed | Hero headline 52 px on phones. |

### Added after the user's review of the preview

- Phone menu: coloured dot before each business, aligned under the section heading.
- Stats: the tinted circle behind each number stays inside the left margin.
- Chinese card titles starting with 《 「 “ line up with other titles (all widths).
- Share price stays coloured on phones (A11 above).
- Investors: the three shareholder-letter themes are compact rows.
- About: the company timeline is one row per year (about 1,650 px down to 690 px); the dark pillar cards are tighter, figure and label on one line (about 2,150 px down to 750 px).
- Business: figure boxes inside feature cards slightly tighter.

Not checked: dark mode on a phone, tablets, landscape, real devices, the AI panel when open.
