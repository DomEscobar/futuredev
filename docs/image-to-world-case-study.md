# Fallbeispiel: Image to World

`image-to-world` zeigt Harness Engineering bereits als laufenden Workflow.

## Die Aufgabenteilung

| Ebene | Verantwortlich | Grund |
|---|---|---|
| Szene verstehen und Rollen zuweisen | Modell | Semantik braucht Bildverständnis. |
| Normalisieren, segmentieren, filtern und Konturen bauen | Scripts | Deterministische Arbeit muss wiederholbar sein. |
| Datenvertrag | JSON Schema | Output braucht eine prüfbare Form. |
| Korrektheit | Validator plus Render | Schema-Gültigkeit allein beweist keine visuelle Qualität. |

## Der rekursive Hebel

Jede gute Ausführung erzeugt nicht nur ein Ergebnis. Sie zeigt auch, wo das Harness noch schwach ist. Daraus entstehen bessere Filter, klarere Schemas, neue Validatoren und bessere Abnahmebilder. Diese Verbesserungen helfen jeder späteren Agentenausführung.

Das ist eine begrenzte, kontrollierbare Form rekursiver Verbesserung: Das System verbessert seine Produktionsbedingungen, ohne seine eigenen Wahrheitskriterien frei umschreiben zu dürfen.

## Repositories

- [Image to World](https://github.com/DomEscobar/image-to-world)
- [Future Dev](https://github.com/DomEscobar/futuredev)
