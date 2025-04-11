# Google Tag Manager & Google Analytics

Används för att samla in och analysera data om användning.

## Varför vill vi göra det?

1. Kan skapa insikter om användarnas faktiska beteende.
   1. Kvantitativ, alla användare (kan göra skärningar)
   2. Faktiskt beteende är inte samma sak som behov.
2. Ett bra första steg för att göra annat, användarintervjuer och mer kvalitativ-datainsamling.
3. Kan hjälpa till vid prioritering, kan skydda mog "yttre krafter" eftersom vi är säkrare på prioreteringen.
4. Tekniska insikter, hur använder användarna vår tjänst.

## Vilka ska göra det?

1. Det är nog bra om hela teamet är med, även kravställare.

## Hur gör vi det?

1. Det är svårt, men börja med frågorna:
   1. Vet vi det här om användaren?
   2. Hur vet vi det här om användaren?
   3. Gjorde vi rätt? Används den nya funktionen som vi tänkte?
   4. ...
2. Om vi inte vet, försök skapa hypoteser.
3. Bekräfta eller dementera hypoteserna genom att analysera befintlig data eller samla in mer data för att göra det.

## Google Tag Manager

1. https://tagmanager.google.com/
2. Kallas GTM
3. Använder "the data layer", datalagret: https://developers.google.com/tag-platform/tag-manager/datalayer
4. I kod "används" GTM genom att göra en push till datalagret, `window.datalayer.push({event: "test", ... } )`
5. Ett ställe att hantera all datainsamling.
6. Väldigt flexibelt, gjort för att kunna göra saker utan hjälp av utvecklare.

## Google Analytics 4

1. https://analytics.google.com/
2. Kallas GA4
3. Tar emot event från GTM. Lagrar datat, används för analys och för att skapa vackra rapporter
