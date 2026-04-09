# Teaterfag Kompendium — Handoff April 2026 (v2)

## Project
Static HTML/CSS kompendium for Teaterfag, Vågen VGS, Sandnes.
Redaktør: Ren Powell (ren.katherine.powell@skole.rogfk.no)
Repo: https://github.com/ren-at-vaagen/kompendium
Live: https://ren-at-vaagen.github.io/kompendium/
Style: Atkinson Hyperlegible, mobile-first, max-width 480px (approx), dark/light mode via data-theme

---

## FILES — CURRENT STATE

All working files are in /home/claude/ in Claude's environment. The last delivered versions are in outputs. Always work from /home/claude/ and copy to outputs when done.

| File | Status | Notes |
|------|--------|-------|
| index.html | ✅ | Chapters 00–08 |
| introduksjon.html | ✅ | Clean |
| teaterhistorie.html | ✅ | Clean |
| teaterfornyere.html | ✅ | Collapsible groups, openToAnchor script |
| dramaturgi.html | ✅ | Dramaturgiske modeller (not former), Klotz+berg-og-dal-bane boxes, Fuchs citation fixed, technique CSS fixed |
| analyse.html | ✅ | "Regissørens valg" collapsible with intro box, lightbox on abstrahering, Pinteresque→teaterfornyere.html |
| produksjon.html | ✅ | Produsent+Dramaturg added, flat/hierarkisk org.modell notes, Bevegelseinstruktør/koreograf, new kostymer wakelet |
| skuespill.html | ✅ | Correct anchors to teaterfornyere |
| bevegelse.html | ✅ | openToAnchor, Laban max-width, muscle tables (no collapse buttons), begrep CSS fixed |
| fordypning.html | ✅ | Major restructure — see below |
| sok.html | ✅ | Google CSE cx=2653249d21f1e4f3c |
| style.css | ✅ | ~1410 lines, complete |

---

## FORDYPNING.HTML — SECTION STRUCTURE

### Collapsible groups (grp-section):

1. **grp-middelalder** — Middelalderens teaterformer (6 begrep cards)
2. **grp-fornyere** — Fornyere i dybden (Stanislavski, Artaud, Brecht, Brook, Grotowski, NT5Truths, Meyerhold)
3. **grp-politisk** — Teater som politisk handling (Agitprop, Representasjon, Dokumentarteater)
4. **grp-begrep** — Begrep — Test deg selv, containing:
   - **tm-beg-grunn** → "Drama og teater" (renamed from Grunnleggende) — includes lesemåte, konvensjoner, deklamatorisk
   - **tm-beg-vurd** → Vurdering og skuespill
   - **tm-beg-konsept** → Konsept og analyse (includes dramatisk ironi)
   - **tm-beg-gresk** → Greske begreper
   - **tm-beg-dramt** → Dramaturgiske begreper
   - **tm-beg-retninger** → Teaterretninger (NEW — Realisme, Naturalisme, Ekspresjonisme, Absurdteater)
   - **tm-beg-teaterformer** → Teaterformer (NEW — Fysisk teater, Dokumentarteater, Gateteater, Forumteater, Commedia dell'arte, Kabuki)
   - **tm-beg-sjangre** → Sjangre (NEW — Tragedie, Komedie, Melodrama, Farse, Musicalteater)
   - **tm-bevegelse** → Bevegelse begreper
   - **tm-beg-blande** → Begrep som er lette å blande (NEW — 3 parts, 14 cards)
   - **tm-beg-misbruk** → Misbrukte begrep (NEW — Kunstnerisk, Absurd, Realistisk)
5. **grp-vurdering** → Akademisk skriving og vurdering (Blooms, martini glass, hypotese vs problemstilling)
6. **grp-skrive** → Å skrive dramatisk tekst
7. **grp-ressurser** → Ressurser

---

## KEY CONTENT DECISIONS THIS SESSION

### Terminology framework (settled after long discussion):
- **Sjanger** — hva slags historie? (Eigtved 2007)
- **Teaterform** — konvensjoner som styrer forestillingsbegivenheten; fastslår blant annet publikumskontrakten (Gladsø et al. 2005)
- **Publikumskontrakt** — følger av teaterform
- **Teatermodell** — fysisk og sosial organisering av forestillingsbegivenheten (Gladsø et al. 2005) — NB: Nygaard uses this term differently
- **Dramaturgisk modell** — hvordan er fortellingen strukturert? (Nygaard 1990, Om teater)
- **Dramaturgisk form** — det helhetlige sceniske uttrykket (Nygaard 1990)

### Analyse page:
- Section "Sjanger" renamed to **"Regissørens valg"**
- Contains intro box "Regissørens valg" with all 6 terms + NB note about teaterform/teatermodell
- Followed by existing sjanger+spillestil content

### Citations in use:
- Eigtved, M. (2007). Forestillingsanalyse. Forlaget Samfundslitteratur. → spillestil, sjanger
- Gladsø, S. et al. (2005). Dramaturgi. Universitetsforlaget. → teaterform, publikumskontrakt, teatermodell
- Nygaard, J. (1990). Om teater. → dramaturgisk modell, dramaturgisk form
- Leach, R. (1989). Vsevolod Meyerhold. Cambridge University Press. → biomekanikk
- Lecoq, J. (2000). The Moving Body. Methuen Drama.
- Feldenkrais, M. (1972). Awareness Through Movement.
- Brustad, M. (2009). Teater og bevegelse. Thalia Publishing.
- Klotz, V. (1960). Geschlossene und offene Form im Drama. Hanser.
- Fuchs, E. (2008). TDR 52(2):179–180. → postdramatisk kritikk
- Esslin, M. (1961/62). The Theatre of the Absurd. → absurdteater
- Szatkowski, J. (1989). Dramaturgiske modeller. → fordypning reference

---

## PENDING / KNOWN ISSUES

### Still to fix manually on GitHub:
- `varm stol` → `hot seat` on line 1253 of fordypning.html

### Not yet built:
- Flowchart "Regissørens valg" showing how the 6 terms relate — was discussed and shown as a widget but not yet built into any page. Could go in fordypning begrep section or analyse page.
- The "Teaterformer og -retninger" list on analyse.html still uses old terminology — should reference new teaterretninger/teaterformer/sjangre split. (Low priority)

### Anchor navigation:
- openToAnchor() script is in teaterfornyere.html, fordypning.html, bevegelse.html
- Script walks up DOM opening all collapsed parents when URL has a hash

### Google Search:
- CSE cx=2653249d21f1e4f3c added to sok.html
- Needs Search Console submission for faster indexing

---

## MARTINI GLASS / ACADEMIC WRITING (fordypning grp-vurdering):

Two-column outline template (enkel/avansert) with:
- Enkel: I.Fakta (A.X, B.Y, C.Delkonklusjon) → II.Sammenligning (A-D) → III.Drøfting → Konklusjon
- Avansert: I.Fakta → II-IV.Sammenligning per aspekt (A.X, B.Y, C.Delkonklusjon each) → V.Drøfting → Konklusjon

Hypotese vs problemstilling:
- Hypotese = teksten forteller leseren hva forfatteren allerede har lært
- Problemstilling = tar leseren med på læringsprosessen

---

## CSS NOTES

Key local style blocks added to individual pages:
- **dramaturgi.html**: technique collapse CSS, grp-section CSS, dramt-note-box
- **bevegelse.html**: begrep CSS (with > direct child selector), grp-section CSS, technique CSS
- All pages: toggleTheme, toggleGrp, toggleTmat, toggleBegrep, openToAnchor functions in script

---

## CHAPTER NAV (prev/next at bottom of all content pages):
00 introduksjon ← → 01 teaterhistorie ← → 02 teaterfornyere ← → 03 dramaturgi ← → 04 analyse ← → 05 produksjon ← → 06 skuespill ← → 07 bevegelse ← → 08 fordypning
