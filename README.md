# Auf der Suche nach der verlorenen Prompt 

## Ein Prompt-Design-Spiel für Journalist:innen

### Einleitung

Dieses Spiel habe ich für einen Lehrgang im Prompt-Design an der Henri-Nannen-Schule für angehende Journalist:innen programmiert. 
**Ziel** ist, grundlegende Techniken des Prompt-Designs für Sprachmodelle (Large Language Models) kennenzulernen und im journalistischen Kontext auszuprobieren.
Das Spiel selbst habe ich mit Hilfe von ChatGPT programmiert – innerhalb von 24 Stunden. Es gibt rough edges hier und da, aber ich teile das Spiel gerne mit allen Interessierten!

### Spielziel
Meistere alle 10 Levels durch gutes Prompt-Design. Der Preis ist … naja. Ein digitales Feuerwerk und alles, was du gelernt hast auf dem Weg! 

### Anleitung 
1. Lade das Spiel herunter (z.B. als ZIP-Datei, dann bitte auch entpacken) und öffne die Datei `index.html` im Hauptordner. 
2. Falls du noch keinen hast: Besorge dir einen API-Key von OpenAI, etwa via https://platform.openai.com/signup. Achtung: Registrierung mit Handynummer ist nötig!
3. Öffne das Spiel. 
4. Bewege den Bildausschnitt, indem du per Drag and Drop das Hintergrundbild verschiebst.
5. Schreibe Prompts entsprechend der Aufgabe. Ein Sprachmodell wird überprüfen, ob die die Aufgabe erfüllt hast. Wenn ja, bekommst du das Passwort für das nächste Level!
6. Nach dem Abschicken deiner ersten Prompt wirst du nach dem API-Key gefragt. (Achtung: Der API-Key wird im Browser gespeichert, sofern du ihn nicht via "API-Key ändern" mittig unten wieder löschst.)
7. Falls du nicht weiterkommst: Nutze die Tipps oder überspringe das Level (Buttons unten mittig)

### Lizenz

Das Spiel ist veröffentlicht unter der Lizenz CC BY-SA 4.0 [https://creativecommons.org/licenses/by-sa/4.0/]. 
Du darfst dieses Werk frei nutzen, verbreiten, verändern. 
Wenn du das Werk veränderst und neu veröffentlichst, nenne meinen Namen als Urheber, kennzeichne deine Änderungen und – wichtig – verwende dieselbe Lizenz.

### Technik
Das Spiel läuft lokal im Browser, auf Basis von HTML, CSS und JavaScript. Für die KI-Funktionen wird das Sprachmodell GPT-4o von OpenAI genutzt.
Eine KI-Instanz erfüllt die Prompt des Spielers, während eine zweite Instanz die Interaktion bewertet, Feedback gibt und basierend darauf das Passwort ausgibt – oder auch nicht. 
Die Levels können in `levels.js` angepasst werden. Eigene Levels hinzufügen, die Aufgaben ändern … fühl dich frei!
