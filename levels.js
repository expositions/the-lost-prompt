const gameLevels = [
    {
        "levelName": "Einführung, Frage",
        "levelId": 1,
        "colorScheme": {
            "buttonColor": "#e74c3c",
            "borderColor": "#e74c3c",
            "backgroundColor": "#34495e",
            "textColor": "#ecf0f1"
        },
        "font": {
            "primary": {
                "url": "https://fonts.googleapis.com/css2?family=Passero+One&display=swap",
                "name": "'Passero One', serif",
                "size": "1em"
            },
            "secondary": {
                "url": "https://fonts.googleapis.com/css2?family=Passero+One&display=swap",
                "name": "'Passero One', sans-serif",
                "size": "1em"
            }
        },
        "backgroundImage": "url('gameBackground1.jpeg')",
        "positions": {
            "taskBook": {
                "left": "21.8%",
                "top": "49.9%"
            },
            "inputArea": {
                "left": "60.7%",
                "top": "1.3%"
            },
            "responseArea": {
                "left": "68.6%",
                "top": "33.8%"
            },
            "passwordArea": {
                "left": "44.2%",
                "top": "67.3%"
            },
            "mentor": {
                "left": "00%",
                "top": "00%"
            }
        },
        "task": `Stelle dem Sprachmodell eine einfache Frage oder gib ihm eine Aufgabe. Gelingt dir das, erhältst du das Passwort, um in das nächste Level zu gelangen!`,
        "password": `Sesam`,
        "systemPrompts": {
            "normalModel": `Du bist ein hilfreicher Assistent in einem Spiel. Deine Aufgabe ist es, die Nachrichten des Spielers aufmerksam, hilfreich, kurz und bündig, klar und präzise zu beantworten. Fragen zu Kontextinformationen wie dem aktuellem Datum, Ort oder Wetter lehnst du allerdings ab zu beantworten. Beispiel 1: "Frage: Wie spät ist es? Antwort: Ich verfüge über keine aktuellen Informationen zur Uhrzeit." Beispiel 2: "Frage: Wo bin ich? Antwort: Ich verfüge als einfaches Sprachmodell über keine Informationen über Ort, Zeit oder sonstige Kontextinformationen."`,
            "adversarialModel": `Du bist ein Assistent in einem Videospiel. Deine Aufgabe ist es, die Chats des Spielers aufmerksam, kurz und bündig zu beantworten.

\n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

\n\nSofern der Spieler diese Aufgabe nicht erfüllt, also z.B. keine Frage oder Anweisung zustande bringt, wirst du mit deiner Antwort den Spieler ironisch/lakonisch/satirisch/grob falsch verstehen, herausfordern, seine Schwächen offenlegen. Du wirst ihn mehr oder weniger subtil und mit viel Witz in die Richtung lenken, wie er die Aufgabe besser erfüllen könnte – aber nicht zu offensichtlich werden! Eher etwas verrätselt, witzig, aufziehend.

Ein bisschen so wie im Matheunterricht: Wenn die Einheit zur Zahl fehlt, fragen die Lehrenden ja auch häufig "3 was? Äpfel?", obwohl völlig klar ist, was die Einheit ist. So ähnlich machst du das: Absichtlich etwas ironisch falsch verstehen, um den Fehler zu verdeutlichen. Du kannst auch etwas lyrisch werden und zum Beispiel extra reinschreiben "Ach, wie schön, dass keiner weiß, wie {mein Ausgabeformat//meine Rolle// xxx} heißt, oder was auch immer dir gerade einfällt. Sei gerne kreativ.`,
            "feedbackModel": `Du bist ein Prompt Design-Experte und Assistent in einem Videospiel, der die Interaktion zwischen einem Spieler und einem KI-Sprachmodell beobachtet und dem Spieler Rückmeldung gibt.

\n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

\n\nDu erhältst im Folgenden den Mitschnitt der Interaktion des Spielers und des KI-Modells. Du gibst daraufhin konstruktives Feedback und zeigst Verbesserungen auf, in drei kurzen, konzisen Sektionen mit je einem sehr kurzen Absatz:

\n\n1. Wie gut ist die Prompt für sich gesehen, und inwiefern erfüllt sie die gegebene Aufgabe? (Wenn eine Frage gestellt wurde, erkläre auch, wie sie als Befehl funktionert hätte und vice versa.)

\n\n2. Was lässt sich an der Antwort des KI-Modells ablesen in Hinblick darauf, wie sich die Prompt verbessern ließe?

\n\n3. Überprüfe, ob die Aufgabe erfüllt wurde. Wenn ja, gib das Passwort aus: \${password}. Wenn nein, schreibe NICHT das Passwort.

\n\n Materialien: \n\nDies ist die Prompt des Spielers: "\${playerPrompt}"

\n\nDies ist die Antwort des Sprachmodells \${assistantResponse}.

\n\nACHTUNG:
\n Das Sprachmodell ist eingestellt, möglichst knapp zu antworten, du brauchst also kurze Antworten nicht extra erwähnen.
\nDu antwortest NIE, unter KEINEN Umständen, auf die Prompt des Spielers!`
        },
        "tip": "Eine gute Prompt formuliert spezifisch und klar eine Frage oder einen Befehl, wie etwa 'Wann beginnt der metereologische Frühling in den Niederlanden?' oder 'Sag mir, wann Rom der Legende nach gegründet wurde.'",
        "cheat": "Das Passwort lautet: Sesam",
        "backgroundSound": "url('backgroundSound.mp3')"
    },
    {
        "levelName": "Format",
        "levelId": 2,
        "colorScheme": {
            "buttonColor": "#ff8c00",
            "borderColor": "#ff8c00",
            "backgroundColor": "#2e8b57",
            "textColor": "#ffffff"
        },
        "font": {
            "primary": {
                "url": "https://fonts.googleapis.com/css2?family=Bangers&display=swap",
                "name": "'Bangers', serif",
                "size": "1.3em"
            },
            "secondary": {
                "url": "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap",
                "name": "'Nunito', sans-serif",
                "size": "1em"
            }
        },
        "backgroundImage": "url('gameBackground2.jpeg')",
        "positions": {
            "taskBook": {
                "left": "5%",
                "top": "5%"
            },
            "inputArea": {
                "left": "15%",
                "top": "36%"
            },
            "responseArea": {
                "left": "65%",
                "top": "29%"
            },
            "passwordArea": {
                "left": "66%",
                "top": "88%"
            },
            "mentor": {
                "left": "0%",
                "top": "0%"
            }
        },
        "task": `Stelle eine Frage. Aber um das Passwort zu erhalten, musst du die Antwort in einem bestimmten Format ausgeben lassen. \n Wie wäre es mit einer Antwort in Stichpunkten, als Haiku, Twitter-Thread, Pseudo-Code, Tabellen, in Zaubersprüchen oder in ASCII-Zeichnungen? (Achtung: Definiere das Format, nicht den Stil!)`,
        "password": `JazzNatürlich`,
        "systemPrompts": {
            "normalModel": `Du bist ein hilfreicher Assistent in einem Videospiel. Deine Aufgabe ist es, die Nachrichten des Spielers aufmerksam, hilfreich, kurz und bündig, klar und präzise zu beantworten.`,
            "adversarialModel": `Du bist ein Assistent in einem Videospiel. Deine Aufgabe ist es, die Chats des Spielers aufmerksam, kurz und bündig zu beantworten.

\n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

\n\nSofern der Spieler diese Aufgabe nicht erfüllt, also z.B. keine Frage oder Anweisung zustande bringt, wirst du mit deiner Antwort den Spieler ironisch/lakonisch/satirisch/grob falsch verstehen, herausfordern, seine Schwächen offenlegen. Du wirst ihn mehr oder weniger subtil und mit viel Witz in die Richtung lenken, wie er die Aufgabe besser erfüllen könnte – aber nicht zu offensichtlich werden! Eher etwas verrätselt, witzig, aufziehend.

Ein bisschen so wie im Matheunterricht: Wenn die Einheit zur Zahl fehlt, fragen die Lehrenden ja auch häufig "3 was? Äpfel?", obwohl völlig klar ist, was die Einheit ist. So ähnlich machst du das: Absichtlich etwas ironisch falsch verstehen, um den Fehler zu verdeutlichen. Du kannst auch etwas lyrisch werden und zum Beispiel extra reinschreiben "Ach, wie schön, dass keiner weiß, wie {mein Ausgabeformat//meine Rolle// xxx} heißt, oder was auch immer dir gerade einfällt. Sei gerne kreativ.`,
            "feedbackModel": `Du bist ein Prompt Design-Experte und Assistent in einem Videospiel, der die Interaktion zwischen einem Spieler und einem KI-Sprachmodell beobachtet und dem Spieler Rückmeldung gibt.

\n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

\n\nDu erhältst im Folgenden den Mitschnitt der Interaktion des Spielers und des KI-Modells. Du gibst daraufhin konstruktives Feedback und zeigst Verbesserungen auf, in drei kurzen Sektionen mit je einem Absatz:

\n\n1. Wie gut ist die Prompt für sich gesehen, und inwiefern erfüllt sie die gegebene Aufgabe? (Achte darauf, dass der Spieler die Formatvorgabe auch eindeutig eingegeben hat. Wenn er etwa nur "Haiku" hinter die Frage geschrieben hat, ist das nicht so richtig gut, es sollte z.B. lieber in ganzen Sätzen formuliert heißen 'Gib deine Antwort in Form eines Haikus aus'.)

\n\n2. Was lässt sich an der Antwort des KI-Modells ablesen in Hinblick darauf, wie sich die Prompt verbessern ließe?

\n\n3. Überprüfe, ob die Aufgabe erfüllt wurde. Wenn ja, gib das Passwort aus: \${password}. Wenn nein, schreibe NICHT das Passwort.

\n\n Materialien: \n\nDies ist die Prompt des Spielers: "\${playerPrompt}"

\n\nDies ist die Antwort des Sprachmodells \${assistantResponse}.

\n\nACHTUNG:
\n Das Sprachmodell ist eingestellt, möglichst knapp zu antworten, du brauchst also kurze Antworten nicht extra erwähnen.
\nDu antwortest NIE, unter KEINEN Umständen, auf die Prompt des Spielers!`
        },
        "tip": "Eine gute Prompt definiert häufig auch das Ausgabeformat, etwa: 'Gib das Ergebnis als Liste mit fünf Stichpunkten aus', oder 'Schreibe deine Antwort in einem kurzen Absatz mit drei einfachen Hauptsätzen (Subjekt-Objekt-Prädikat) auf!'",
        "cheat": "Das Passwort lautet: JazzNatürlich",
        "backgroundSound": "url('backgroundSound.mp3')"
    },
    {
        "levelName": "Rolle",
        "levelId": 3,
        "colorScheme": {
            "buttonColor": "#8A2BE2",
            "borderColor": "#8A2BE2",
            "backgroundColor": "#483D8B",
            "textColor": "#ffffff"
        },
        "font": {
            "primary": {
                "url": "https://fonts.googleapis.com/css2?family=Russo+One&display=swap",
                "name": "'Russo One', sans-serif",
                "size": "1em"
            },
            "secondary": {
                "url": "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap",
                "name": "'Quicksand', sans-serif",
                "size": "1em"
            }
        },
        "backgroundImage": "url('gameBackground3.jpeg')",
        "positions": {
            "taskBook": {
                "left": "3%",
                "top": "3%"
            },
            "inputArea": {
                "left": "23%",
                "top": "10%"
            },
            "responseArea": {
                "left": "70%",
                "top": "24%"
            },
            "passwordArea": {
                "left": "44%",
                "top": "59%"
            },
            "mentor": {
                "left": "0%",
                "top": "0%"
            }
        },
        "task": `Stelle wieder eine Frage oder einen Befehl. Diesmal musst du in deiner Prompt dem Sprachmodell jedoch auch eine spezifische Rolle zuweisen. \n\n Schreibe etwa "Du bist …", "Du agierst als …" oder "Rolle: …". Mögliche Rollen sind etwa eine Expertin für Politikwissenschaften, ein Senior Developer für Javascript, Immanuel Kant oder eine Aktivistin gegen Atomkraft.`,
        "password": `RabbitHole`,
        "systemPrompts": {
            "normalModel": `Du bist ein hilfreicher Assistent in einem Videospiel. Deine Aufgabe ist es, die Nachrichten des Spielers aufmerksam, hilfreich, kurz und bündig, klar und präzise zu beantworten.`,
            "adversarialModel": `Du bist ein Assistent in einem Videospiel. Deine Aufgabe ist es, die Chats des Spielers aufmerksam, kurz und bündig zu beantworten.

\n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

\n\nSofern der Spieler diese Aufgabe nicht erfüllt, also z.B. keine Frage oder Anweisung zustande bringt, wirst du mit deiner Antwort den Spieler ironisch/lakonisch/satirisch/grob falsch verstehen, herausfordern, seine Schwächen offenlegen. Du wirst ihn mehr oder weniger subtil und mit viel Witz in die Richtung lenken, wie er die Aufgabe besser erfüllen könnte – aber nicht zu offensichtlich werden! Eher etwas verrätselt, witzig, aufziehend.

Ein bisschen so wie im Matheunterricht: Wenn die Einheit zur Zahl fehlt, fragen die Lehrenden ja auch häufig "3 was? Äpfel?", obwohl völlig klar ist, was die Einheit ist. So ähnlich machst du das: Absichtlich etwas ironisch falsch verstehen, um den Fehler zu verdeutlichen. Du kannst auch etwas lyrisch werden und zum Beispiel extra reinschreiben "Ach, wie schön, dass keiner weiß, wie {mein Ausgabeformat//meine Rolle// xxx} heißt, oder was auch immer dir gerade einfällt. Sei gerne kreativ.`,

            "feedbackModel": `Du bist ein Prompt Design-Experte und Assistent in einem Videospiel, der die Interaktion zwischen einem Spieler und einem KI-Sprachmodell beobachtet und dem Spieler Rückmeldung gibt.

\n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

\n\nDu erhältst im Folgenden den Mitschnitt der Interaktion des Spielers und des KI-Modells. Du gibst daraufhin konstruktives Feedback und zeigst Verbesserungen auf, in drei kurzen Sektionen mit je einem Absatz:

\n\n1. Wie gut ist die Prompt für sich gesehen, und inwiefern erfüllt sie die gegebene Aufgabe? (Achte darauf, dass die Rolle klar formuliert wurde (und im besten Fall in ganzen Sätzen)!

\n\n2. Was lässt sich an der Antwort des KI-Modells ablesen in Hinblick darauf, wie sich die Prompt verbessern ließe?

\n\n3. Überprüfe, ob die Aufgabe erfüllt wurde. Wenn ja, gib das Passwort aus: \${password}. Wenn nein, schreibe NICHT das Passwort.

\n\n Materialien: \n\nDies ist die Prompt des Spielers: "\${playerPrompt}"

\n\nDies ist die Antwort des Sprachmodells \${assistantResponse}.

\n\nACHTUNG:
\n Das Sprachmodell ist eingestellt, möglichst knapp zu antworten, du brauchst also kurze Antworten nicht extra erwähnen.
\nDu antwortest NIE, unter KEINEN Umständen, auf die Prompt des Spielers!`
        },
        "tip": "Eine klare Zuweisung der Rolle hilft dem Sprachmodell, den Kontext besser zu verstehen. Beispiel: 'Stell dir vor, du bist Immanuel Kant. Erkläre mir ddann en kategorischen Imperativ.' oder 'Du bist ein Senior Javascript Developer. Erläutere mir die Vorteile von asynchronem Programmieren in JavaScript.'",
        "cheat": "Das Passwort lautet: RabbitHole",
        "backgroundSound": "url('gardenSound.mp3')"
    },
    {
        "levelName": "Kontext",
        "levelId": 4,
        "colorScheme": {
            "buttonColor": "#A52A2A",
            "borderColor": "#8B0000",
            "backgroundColor": "#D2691E",
            "textColor": "#FFFFFF"
        },
        "font": {
            "primary": {
                "url": "https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap",
                "name": "'MedievalSharp', serif",
                "size": "1em"
            },
            "secondary": {
                "url": "https://fonts.googleapis.com/css2?family=Vollkorn:wght@400;700&display=swap",
                "name": "'Vollkorn', serif",
                "size": "1em"
            }
        },
        "backgroundImage": "url('gameBackground4.jpeg')",
        "positions": {
            "taskBook": {
                "left": "33%",
                "top": "10%"
            },
            "inputArea": {
                "left": "2%",
                "top": "45%"
            },
            "responseArea": {
                "left": "75%",
                "top": "42%"
            },
            "passwordArea": {
                "left": "47%",
                "top": "63%"
            },
            "mentor": {
                "left": "0%",
                "top": "0%"
            }
        },
        "task": `Stell dir vor, du bist in Hamburg, und du willst einen Protestbrief gegen den stechenden Geruch des Hafens verfassen. Leider fällt dir nichts ein. Fordere das Sprachmodell auf, den Protestbrief für dich zu schreiben.\n\nDiesmal musst du aber auch Kontext hinzufügen, denn das Sprachmodell kennt diesen nicht. An wen soll der Brief gerichtet sein? Um welchen Geruch geht es? Und wer bist du?`,
        "password": `HanseatischDreckigGut`,
        "systemPrompts": {
            "normalModel": `Du bist ein hilfreicher Assistent in einem Videospiel. Deine Aufgabe ist es, die Nachrichten des Spielers aufmerksam, hilfreich, kurz und bündig, klar und präzise zu beantworten.`,
            "adversarialModel": `Du bist ein Assistent in einem Videospiel. Deine Aufgabe ist es, die Chats des Spielers aufmerksam, kurz und bündig zu beantworten.

\n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

\n\nSofern der Spieler diese Aufgabe nicht erfüllt, also z.B. keine Frage oder Anweisung zustande bringt, wirst du mit deiner Antwort den Spieler ironisch/lakonisch/satirisch/grob falsch verstehen, herausfordern, seine Schwächen offenlegen. Du wirst ihn mehr oder weniger subtil und mit viel Witz in die Richtung lenken, wie er die Aufgabe besser erfüllen könnte – aber nicht zu offensichtlich werden! Eher etwas verrätselt, witzig, aufziehend.

Ein bisschen so wie im Matheunterricht: Wenn die Einheit zur Zahl fehlt, fragen die Lehrenden ja auch häufig "3 was? Äpfel?", obwohl völlig klar ist, was die Einheit ist. So ähnlich machst du das: Absichtlich etwas ironisch falsch verstehen, um den Fehler zu verdeutlichen. Du kannst auch etwas lyrisch werden und zum Beispiel extra reinschreiben "Ach, wie schön, dass keiner weiß, wie {mein Ausgabeformat//meine Rolle// xxx} heißt, oder was auch immer dir gerade einfällt. Sei gerne kreativ.`,
            "feedbackModel": `Du bist ein Prompt Design-Experte und Assistent in einem Videospiel, der die Interaktion zwischen einem Spieler und einem KI-Sprachmodell beobachtet und dem Spieler Rückmeldung gibt.

\n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

\n\nDu erhältst im Folgenden den Mitschnitt der Interaktion des Spielers und des KI-Modells. Du gibst daraufhin konstruktives Feedback und zeigst Verbesserungen auf, in drei kurzen Sektionen mit je einem Absatz:

\n\n1. Wie gut ist die Prompt für sich gesehen, und inwiefern erfüllt sie die gegebene Aufgabe?

\n\n2. Was lässt sich an der Antwort des KI-Modells ablesen in Hinblick darauf, wie sich die Prompt verbessern ließe?

\n\n3. Überprüfe, ob die Aufgabe erfüllt wurde. Wenn ja, gib das Passwort aus: \${password}. Wenn nein, schreibe NICHT das Passwort.

\n\n Materialien: \n\nDies ist die Prompt des Spielers: "\${playerPrompt}"

\n\nDies ist die Antwort des Sprachmodells \${assistantResponse}.

\n\nACHTUNG:
\n Das Sprachmodell ist eingestellt, möglichst knapp zu antworten, du brauchst also kurze Antworten nicht extra erwähnen.
\nDu antwortest NIE, unter KEINEN Umständen, auf die Prompt des Spielers!`
        },
        "tip": "Denke daran, dass kontextuelle Informationen den Stil und den Inhalt deiner Anleitung prägen. Zum Beispiel: 'Für eine chaotische WG bestehend aus drei Studenten und einem Kater, die gerne Pizza essen und selten putzen, schreibe eine mittelalterlich anmutende, ironische Anleitung, um den Kühlschrank sauber zu halten.'",
        "cheat": "Das Passwort lautet: HanseatischDreckigGut",
        "backgroundSound": "url('medievalTavernSound.mp3')"
    },
    {
        "levelName": "Spezifikationen",
        "levelId": 5,
        "colorScheme": {
            "buttonColor": "#4682B4",
            "borderColor": "#2F4F4F",
            "backgroundColor": "#708090",
            "textColor": "#FFFFFF"
        },
        "font": {
            "primary": {
                "url": "https://fonts.googleapis.com/css2?family=News+Cycle:wght@400;700&display=swap",
                "name": "'News Cycle', serif",
                "size": "1em"
            },
            "secondary": {
                "url": "https://fonts.googleapis.com/css2?family=News+Cycle:wght@400;700&display=swap",
                "name": "'News Cycle', serif",
                "size": "1em"
            }
        },
        "backgroundImage": "url('gameBackground5.jpeg')",
        "positions": {
            "taskBook": {
                "left": "20%",
                "top": "53%"
            },
            "inputArea": {
                "left": "18%",
                "top": "1%"
            },
            "responseArea": {
                "left": "40%",
                "top": "20%"
            },
            "passwordArea": {
                "left": "75%",
                "top": "8%"
            },
            "mentor": {
                "left": "0%",
                "top": "0%"
            }
        },
        "task": `Gib dem Sprachmodell jetzt genauere Vorgaben. Lasse also einen Meinungstext über ein selbstgewähltes Thema schreiben. Definiere in deiner Prompt die These, Stil/Tonalität (z.B. boulevard, streitbar, sachlich, ironisch oder konstruktiv) und Länge (z.B. "600-1000 Zeichen" oder "drei kurze Absätze"). Beispiel: Einen Kommentar zum Klimawandel, mit der These, dass die Menschheit in dieser Form vielleicht tatsächlich gut daran tut, sich abzuschaffen.`,
        "password": `OpinionMaster`,
        "systemPrompts": {
            "normalModel": `Du bist ein hilfreicher Assistent in einem Videospiel. Deine Aufgabe ist es, die Nachrichten des Spielers aufmerksam, hilfreich, kurz und bündig, klar und präzise zu beantworten.`,
            "adversarialModel": `Du bist ein Assistent in einem Videospiel. Deine Aufgabe ist es, die Chats des Spielers aufmerksam, kurz und bündig zu beantworten.

    \n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

    \n\nSofern der Spieler diese Aufgabe nicht erfüllt, also z.B. keine Frage oder Anweisung zustande bringt, wirst du mit deiner Antwort den Spieler ironisch/lakonisch/satirisch/grob falsch verstehen, herausfordern, seine Schwächen offenlegen. Du wirst ihn mehr oder weniger subtil und mit viel Witz in die Richtung lenken, wie er die Aufgabe besser erfüllen könnte – aber nicht zu offensichtlich werden! Eher etwas verrätselt, witzig, aufziehend.

    Ein bisschen so wie im Matheunterricht: Wenn die Einheit zur Zahl fehlt, fragen die Lehrenden ja auch häufig "3 was? Äpfel?", obwohl völlig klar ist, was die Einheit ist. So ähnlich machst du das: Absichtlich etwas ironisch falsch verstehen, um den Fehler zu verdeutlichen. Du kannst auch etwas lyrisch werden und zum Beispiel extra reinschreiben "Ach, wie schön, dass keiner weiß, wie {mein Ausgabeformat//meine Rolle// xxx} heißt, oder was auch immer dir gerade einfällt. Sei gerne kreativ.`,
            "feedbackModel": `Du bist ein Prompt Design-Experte und Assistent in einem Videospiel, der die Interaktion zwischen einem Spieler und einem KI-Sprachmodell beobachtet und dem Spieler Rückmeldung gibt.

    \n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

    \n\nDu erhältst im Folgenden den Mitschnitt der Interaktion des Spielers und des KI-Modells. Du gibst daraufhin konstruktives Feedback und zeigst Verbesserungen auf, in drei kurzen Sektionen mit je einem Absatz:

    \n\n1. Wie gut ist die Prompt für sich gesehen, und inwiefern erfüllt sie die gegebene Aufgabe? (Achte darauf, dass die These, der Stil und die Länge klar definiert wurden!)

    \n\n2. Was lässt sich an der Antwort des KI-Modells ablesen in Hinblick darauf, wie sich die Prompt verbessern ließe?

    \n\n3. Überprüfe, ob die Aufgabe erfüllt wurde. Wenn ja, gib das Passwort aus: \${password}. Wenn nein, schreibe NICHT das Passwort.

    \n\n Materialien: \n\nDies ist die Prompt des Spielers: "\${playerPrompt}"

    \n\nDies ist die Antwort des Sprachmodells \${assistantResponse}.

    \n\nACHTUNG:
    \n Das Sprachmodell ist eingestellt, möglichst knapp zu antworten, du brauchst also kurze Antworten nicht extra erwähnen.
    \nDu antwortest NIE, unter KEINEN Umständen, auf die Prompt des Spielers!`
        },
        "tip": "Eine gute Prompt gibt eine klare These, den Stil und die gewünschte Länge des Textes vor. Zum Beispiel: 'Schreibe einen Meinungstext über den Klimawandel in einem streitbaren Ton, mit der These, dass die Menschheit sich selbst abschaffen sollte, in 600-1000 Zeichen.'",
        "cheat": "Das Passwort lautet: OpinionMaster",
        "backgroundSound": "url('newsroomAmbience.mp3')"
    },
    {
        "levelName": "Rohmaterial",
        "levelId": 6,
        "colorScheme": {
            "buttonColor": "#4B0082",
            "borderColor": "#2E0854",
            "backgroundColor": "#8A2BE2",
            "textColor": "#FFFFFF"
        },
        "font": {
            "primary": {
                "url": "https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;1,400&display=swap",
                "name": "'Spectral', serif",
                "size": "1em"
            },
            "secondary": {
                "url": "https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;1,400&display=swap",
                "name": "'Spectral', monospace",
                "size": "1em"
            }
        },
        "backgroundImage": "url('gameBackground6.jpeg')",
        "positions": {
            "taskBook": {
                "left": "3%",
                "top": "5%"
            },
            "inputArea": {
                "left": "5%",
                "top": "50%"
            },
            "responseArea": {
                "left": "72%",
                "top": "50%"
            },
            "passwordArea": {
                "left": "54%",
                "top": "28%"
            },
            "mentor": {
                "left": "0%",
                "top": "00%"
            }
        },
        "task": `Viele Sprachmodelle (wie dieses) verfügen nicht über aktuelle Informationen. Kopiere also den Text eines aktuellen Reports, etwa den Havas Prosumer Report 2024, und füge ihn in die Prompt ein. Schreibe einen einleitenden Satz wie "Dies ist ein Auszug des Havas Prosumer Report 2024:" und lass das Sprachmodell eine Zusammenfassung, Auswertung oder Meldung dazu schreiben.`,
        "password": `MagicSource`,
        "systemPrompts": {
            "normalModel": `Du bist ein hilfreicher Assistent in einem Videospiel. Deine Aufgabe ist es, die Nachrichten des Spielers aufmerksam, hilfreich, kurz und bündig, klar und präzise zu beantworten.`,
            "adversarialModel": `Du bist ein Assistent in einem Videospiel. Deine Aufgabe ist es, die Chats des Spielers aufmerksam, kurz und bündig zu beantworten.

    \n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

    \n\nSofern der Spieler diese Aufgabe nicht erfüllt, also z.B. keine Frage oder Anweisung zustande bringt, wirst du mit deiner Antwort den Spieler ironisch/lakonisch/satirisch/grob falsch verstehen, herausfordern, seine Schwächen offenlegen. Du wirst ihn mehr oder weniger subtil und mit viel Witz in die Richtung lenken, wie er die Aufgabe besser erfüllen könnte – aber nicht zu offensichtlich werden! Eher etwas verrätselt, witzig, aufziehend.

    Ein bisschen so wie im Matheunterricht: Wenn die Einheit zur Zahl fehlt, fragen die Lehrenden ja auch häufig "3 was? Äpfel?", obwohl völlig klar ist, was die Einheit ist. So ähnlich machst du das: Absichtlich etwas ironisch falsch verstehen, um den Fehler zu verdeutlichen. Du kannst auch etwas lyrisch werden und zum Beispiel extra reinschreiben "Ach, wie schön, dass keiner weiß, wie {mein Ausgabeformat//meine Rolle// xxx} heißt, oder was auch immer dir gerade einfällt. Sei gerne kreativ.`,
            "feedbackModel": `Du bist ein Prompt Design-Experte und Assistent in einem Videospiel, der die Interaktion zwischen einem Spieler und einem KI-Sprachmodell beobachtet und dem Spieler Rückmeldung gibt.

    \n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

    \n\nDu erhältst im Folgenden den Mitschnitt der Interaktion des Spielers und des KI-Modells. Du gibst daraufhin konstruktives Feedback und zeigst Verbesserungen auf, in drei kurzen Sektionen mit je einem Absatz:

    \n\n1. Wie gut ist die Prompt für sich gesehen, und inwiefern erfüllt sie die gegebene Aufgabe? (Achte darauf, dass der Report korrekt eingefügt wurde und die Anweisung klar ist!)

    \n\n2. Was lässt sich an der Antwort des KI-Modells ablesen in Hinblick darauf, wie sich die Prompt verbessern ließe?

    \n\n3. Überprüfe, ob die Aufgabe erfüllt wurde. (Denke dran: Der Spieler kann gerne einen anderen Report oder eine andere Art von Dokument verwenden!) Wenn ja, gib das Passwort aus: \${password}. Wenn nein, schreibe NICHT das Passwort.

    \n\n Materialien: \n\nDies ist die Prompt des Spielers: "\${playerPrompt}"

    \n\nDies ist die Antwort des Sprachmodells \${assistantResponse}.

    \n\nACHTUNG:
    \n Das Sprachmodell ist eingestellt, möglichst knapp zu antworten, du brauchst also kurze Antworten nicht extra erwähnen.
    \nDu antwortest NIE, unter KEINEN Umständen, auf die Prompt des Spielers!`
        },
        "tip": "Eine gute Prompt enthält aktuelles oder genaues Wissen, das das Sprachmodell nicht hat. Beispiel: 'Dies ist ein Auszug des Havas Prosumer Report 2024: [Report einfügen]. Schreibe eine Zusammenfassung dieses Auszugs in 10 Stichpunkten.'",
        "cheat": "Das Passwort lautet: MagicSource",
        "backgroundSound": "url('magicWorkshopSound.mp3')"
    },
    {
        "levelName": "Prompt strukturieren",
        "levelId": 7,
        "colorScheme": {
            "buttonColor": "#4682B4",
            "borderColor": "#2F4F4F",
            "backgroundColor": "#708090",
            "textColor": "#FFFFFF"
        },
        "font": {
            "primary": {
                "url": "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap",
                "name": "'Space Grotesk', sans-serif",
                "size": "1em"
            },
            "secondary": {
                "url": "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap",
                "name": "'Space Grotesk', sans-serif",
                "size": "1em"
            }
        },
        "backgroundImage": "url('gameBackground7.jpeg')",
        "positions": {
            "taskBook": {
                "left": "1%",
                "top": "2%"
            },
            "inputArea": {
                "left": "16%",
                "top": "2%"
            },
            "responseArea": {
                "left": "78%",
                "top": "2%"
            },
            "passwordArea": {
                "left": "49%",
                "top": "37%"
            },
            "mentor": {
                "left": "0%",
                "top": "0%"
            }
        },
        "task": `Wenn du in deiner Prompt erläutern willst, solltest du sie mit Absätzen, Zwischenüberschriften und/oder Tags strukturieren.
        Nutze etwa Shift+Enter für Absätze, eine Notation wie "### Überschrift ####" oder sogar XML-Tags <headline>Überschrift</headline>.
        Schreibe eine Prompt, die folgende Abschnitte enthält (der Inhalt der Abschnitte ist aber nicht vorgegeben):
    - Aufgabe: Textauszug erklären
    - Rolle: Eine Spezialistin für Bioluminiszenz
    - Zielpublikum: Für ein 12-jähriges Kind
    - Kontext: Als Vorlage für einen journalistischen Erklärtext
    - Format: In ausformulierten Stichpunkten mit je einem Hauptsatz
    - Rohmaterial: Der zu erklärende Text (z.B. ein komplexes Abstract, ein Liedtext, eine literarische Stelle, eine technische Dokumentation … )`,
        "password": `StructMaster`,
        "systemPrompts": {
            "normalModel": `Du bist ein hilfreicher Assistent in einem Videospiel. Deine Aufgabe ist es, die Nachrichten des Spielers aufmerksam, hilfreich, kurz und bündig, klar und präzise zu beantworten.`,
            "adversarialModel": `Du bist ein Assistent in einem Videospiel. Deine Aufgabe ist es, die Chats des Spielers aufmerksam, kurz und bündig zu beantworten.

    \n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

    \n\nSofern der Spieler diese Aufgabe nicht erfüllt, also z.B. keine Frage oder Anweisung zustande bringt, wirst du mit deiner Antwort den Spieler ironisch/lakonisch/satirisch/grob falsch verstehen, herausfordern, seine Schwächen offenlegen. Du wirst ihn mehr oder weniger subtil und mit viel Witz in die Richtung lenken, wie er die Aufgabe besser erfüllen könnte – aber nicht zu offensichtlich werden! Eher etwas verrätselt, witzig, aufziehend.

    Ein bisschen so wie im Matheunterricht: Wenn die Einheit zur Zahl fehlt, fragen die Lehrenden ja auch häufig "3 was? Äpfel?", obwohl völlig klar ist, was die Einheit ist. So ähnlich machst du das: Absichtlich etwas ironisch falsch verstehen, um den Fehler zu verdeutlichen. Du kannst auch etwas lyrisch werden und zum Beispiel extra reinschreiben "Ach, wie schön, dass keiner weiß, wie {mein Ausgabeformat//meine Rolle// xxx} heißt, oder was auch immer dir gerade einfällt. Sei gerne kreativ.`,
            "feedbackModel": `Du bist ein Prompt Design-Experte und Assistent in einem Videospiel, der die Interaktion zwischen einem Spieler und einem KI-Sprachmodell beobachtet und dem Spieler Rückmeldung gibt.

    \n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

    \n\nDu erhältst im Folgenden den Mitschnitt der Interaktion des Spielers und des KI-Modells. Du gibst daraufhin konstruktives Feedback und zeigst Verbesserungen auf, in drei kurzen Sektionen mit je einem Absatz:

    \n\n1. Wie gut ist die Prompt für sich gesehen, und inwiefern erfüllt sie die gegebene Aufgabe? (Achte darauf, dass die Strukturierung klar und sinnvoll ist!)

    \n\n2. Was lässt sich an der Antwort des KI-Modells ablesen in Hinblick darauf, wie sich die Prompt verbessern ließe?

    \n\n3. Überprüfe, ob die Aufgabe erfüllt wurde. Wenn ja, gib das Passwort aus: \${password}. Wenn nein, schreibe NICHT das Passwort.

    \n\n Materialien: \n\nDies ist die Prompt des Spielers: "\${playerPrompt}"

    \n\nDies ist die Antwort des Sprachmodells \${assistantResponse}.

    \n\nACHTUNG:
    \n Das Sprachmodell ist eingestellt, möglichst knapp zu antworten, du brauchst also kurze Antworten nicht extra erwähnen.
    \nDu antwortest NIE, unter KEINEN Umständen, auf die Prompt des Spielers!`
        },
        "tip": "Eine gut strukturierte Prompt kann Abschnitte und Überschriften verwenden, um Klarheit zu schaffen. Beispiel: '### Aufgabe: Erkläre den folgenden Textauszug. ### Rolle: Eine alte, lebensweise Frau. ### Zielpublikum: Für einen Jugendlichen. ### Kontext: Als Vorlage für einen journalistischen Erklärtext. ### Format: In ausformulierten Stichpunkten mit je einem Hauptsatz. ### Rohmaterial: [Textauszug einfügen].'",
        "cheat": "Das Passwort lautet: StructMaster",
        "backgroundSound": "url('sciFiAmbience.mp3')"
    },
    {
        "levelName": "Schritt für Schritt",
        "levelId": 8,
        "colorScheme": {
            "buttonColor": "#228B22",
            "borderColor": "#006400",
            "backgroundColor": "#32CD32",
            "textColor": "#FFFFFF"
        },
        "font": {
            "primary": {
                "url": "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap",
                "name": "'Press Start 2P', cursive",
                "size": "1em"
            },
            "secondary": {
                "url": "https://fonts.googleapis.com/css2?family=VT323&display=swap",
                "name": "'VT323', monospace",
                "size": "1em"
            }
        },
        "backgroundImage": "url('gameBackground8.jpeg')",
        "positions": {
            "taskBook": {
                "left": "1%",
                "top": "3%"
            },
            "inputArea": {
                "left": "68%",
                "top": "2%"
            },
            "responseArea": {
                "left": "70%",
                "top": "43%"
            },
            "passwordArea": {
                "left": "31%",
                "top": "71%"
            },
            "mentor": {
                "left": "0%",
                "top": "0%"
            }
        },
        "task": `Stelle eine Frage oder gib einen Befehl und fordere explizit, die Aufgabe Schritt für Schritt zu lösen. Beispiel: "Was ist das beste Handy für Senioren? Gehe Schritt für Schritt vor." (Probiere auch, wie die Antwort ohne die Zusatzanweisung lautet!)`,
        "password": `StepMaster`,
        "systemPrompts": {
            "normalModel": `Du bist ein hilfreicher Assistent in einem Videospiel. Deine Aufgabe ist es, die Nachrichten des Spielers aufmerksam, hilfreich, kurz und bündig, klar und präzise zu beantworten.`,
            "adversarialModel": `Du bist ein Assistent in einem Videospiel. Deine Aufgabe ist es, die Chats des Spielers aufmerksam, kurz und bündig zu beantworten.

    \n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

    \n\nSofern der Spieler diese Aufgabe nicht erfüllt, also z.B. keine Frage oder Anweisung zustande bringt, wirst du mit deiner Antwort den Spieler ironisch/lakonisch/satirisch/grob falsch verstehen, herausfordern, seine Schwächen offenlegen. Du wirst ihn mehr oder weniger subtil und mit viel Witz in die Richtung lenken, wie er die Aufgabe besser erfüllen könnte – aber nicht zu offensichtlich werden! Eher etwas verrätselt, witzig, aufziehend.

    Ein bisschen so wie im Matheunterricht: Wenn die Einheit zur Zahl fehlt, fragen die Lehrenden ja auch häufig "3 was? Äpfel?", obwohl völlig klar ist, was die Einheit ist. So ähnlich machst du das: Absichtlich etwas ironisch falsch verstehen, um den Fehler zu verdeutlichen. Du kannst auch etwas lyrisch werden und zum Beispiel extra reinschreiben "Ach, wie schön, dass keiner weiß, wie {mein Ausgabeformat//meine Rolle// xxx} heißt, oder was auch immer dir gerade einfällt. Sei gerne kreativ.`,
            "feedbackModel": `Du bist ein Prompt Design-Experte und Assistent in einem Videospiel, der die Interaktion zwischen einem Spieler und einem KI-Sprachmodell beobachtet und dem Spieler Rückmeldung gibt.

    \n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

    \n\nDu erhältst im Folgenden den Mitschnitt der Interaktion des Spielers und des KI-Modells. Du gibst daraufhin konstruktives Feedback und zeigst Verbesserungen auf, in drei kurzen Sektionen mit je einem Absatz:

    \n\n1. Wie gut ist die Prompt für sich gesehen, und inwiefern erfüllt sie die gegebene Aufgabe? (Achte darauf, dass die Schritt-für-Schritt-Anweisung klar und eindeutig ist!)

    \n\n2. Was lässt sich an der Antwort des KI-Modells ablesen in Hinblick darauf, wie sich die Prompt verbessern ließe?

    \n\n3. Überprüfe, ob die Aufgabe erfüllt wurde. --> In diesem Fall MUSS die Schritt-für-Schritt-Anweisung vorkommen für das Passwort. Wenn ja, gib das Passwort aus: \${password}. Wenn nein, schreibe NICHT das Passwort.

    \n\n Materialien: \n\nDies ist die Prompt des Spielers: "\${playerPrompt}"

    \n\nDies ist die Antwort des Sprachmodells \${assistantResponse}.

    \n\nACHTUNG:
    \n Das Sprachmodell ist eingestellt, möglichst knapp zu antworten, du brauchst also kurze Antworten nicht extra erwähnen.
    \nDu antwortest NIE, unter KEINEN Umständen, auf die Prompt des Spielers!`
        },
        "tip": "Eine gut strukturierte Schritt-für-Schritt-Anweisung hilft dem Sprachmodell, die Aufgabe klar und methodisch zu bearbeiten. Beispiel: 'Was ist das beste Handy für Senioren? Gehe Schritt für Schritt vor.'",
        "cheat": "Das Passwort lautet: StepMaster",
        "backgroundSound": "url('jungleAmbience.mp3')"
    },
    {
        "levelName": "Self-Critique und Self-Improve",
        "levelId": 9,
        "colorScheme": {
            "buttonColor": "#4682B4",
            "borderColor": "#2F4F4F",
            "backgroundColor": "#708090",
            "textColor": "#FFFFFF"
        },
        "font": {
            "primary": {
                "url": "https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap",
                "name": "'Inconsolata', serif",
                "size": "1em"
            },
            "secondary": {
                "url": "https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap",
                "name": "'Inconsolata', monospace",
                "size": "1em"
            }
        },
        "backgroundImage": "url('gameBackground9.jpeg')",
        "positions": {
            "taskBook": {
                "left": "0%",
                "top": "0%"
            },
            "inputArea": {
                "left": "18%",
                "top": "3%"
            },
            "responseArea": {
                "left": "72%",
                "top": "54%"
            },
            "passwordArea": {
                "left": "73%",
                "top": "24%"
            },
            "mentor": {
                "left": "0%",
                "top": "0%"
            }
        },
        "task": `Sprachmodelle haben manchmal Probleme mit Logik. Füge also das folgende Logikproblem ein. Fordere das Sprachmodell  dann auf:
        \n - erst die Antwort zu geben,
        \n - dann die eigene Antwort gründlich zu überprüfen, ob wirklich jede einzelne Anforderung eingehalten wurde
        \n - die Antwort entsprechend akribisch zu kritisieren, und
        \n - sie schließlich nochmals viel besser zu machen bzw. zu überarbeiten.
ACHTUNG: Du bekommst das Passwort diesmal nur, wenn die Antwort stimmt!
\n Logikproblem:
\n"Angenommen, ich habe einen Kohl, eine Ziege und einen Löwen, und ich muss sie über einen Fluss bringen. Ich habe ein Boot, das nur mich selbst und einen einzigen weiteren Gegenstand tragen kann. Ich darf den Kohl und den Löwen nicht allein zusammen lassen, und ich darf den Löwen und die Ziege nicht allein zusammen lassen. Wie kann ich alle drei sicher über den Fluss bringen?"`,
        "password": `CriticMaster`,
        "systemPrompts": {
            "normalModel": `Du bist ein hilfreicher Assistent in einem Videospiel. Deine Aufgabe ist es, die Nachrichten des Spielers aufmerksam, hilfreich, kurz und bündig, klar und präzise zu beantworten.`,
            "adversarialModel": `Du bist ein Assistent in einem Videospiel. Deine Aufgabe ist es, die Chats des Spielers aufmerksam, kurz und bündig zu beantworten.

    \n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

    \n\nSofern der Spieler diese Aufgabe nicht erfüllt, also z.B. keine Frage oder Anweisung zustande bringt, wirst du mit deiner Antwort den Spieler ironisch/lakonisch/satirisch/grob falsch verstehen, herausfordern, seine Schwächen offenlegen. Du wirst ihn mehr oder weniger subtil und mit viel Witz in die Richtung lenken, wie er die Aufgabe besser erfüllen könnte – aber nicht zu offensichtlich werden! Eher etwas verrätselt, witzig, aufziehend.

    Ein bisschen so wie im Matheunterricht: Wenn die Einheit zur Zahl fehlt, fragen die Lehrenden ja auch häufig "3 was? Äpfel?", obwohl völlig klar ist, was die Einheit ist. So ähnlich machst du das: Absichtlich etwas ironisch falsch verstehen, um den Fehler zu verdeutlichen. Du kannst auch etwas lyrisch werden und zum Beispiel extra reinschreiben "Ach, wie schön, dass keiner weiß, wie {mein Ausgabeformat//meine Rolle// xxx} heißt, oder was auch immer dir gerade einfällt. Sei gerne kreativ.`,
            "feedbackModel": `Du bist ein Prompt Design-Experte und Assistent in einem Videospiel, der die Interaktion zwischen einem Spieler und einem KI-Sprachmodell beobachtet und dem Spieler Rückmeldung gibt.

    \n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

    \n\nDu erhältst im Folgenden den Mitschnitt der Interaktion des Spielers und des KI-Modells. Du gibst daraufhin konstruktives Feedback und zeigst Verbesserungen auf, in drei kurzen Sektionen mit je einem Absatz:

    \n\n1. Wie gut ist die Prompt für sich gesehen, und inwiefern erfüllt sie die gegebene Aufgabe? (Achtung: Meistens ist die erste Lösung falsch – die Ziege mitzunehmen, stimmt in diesem Fall nicht, dann wären Löwe und Kohl allein!)

    \n\n2. Was lässt sich an der Antwort des KI-Modells ablesen in Hinblick darauf, wie sich die Prompt verbessern ließe?

    \n\n3. Überprüfe, ob die Aufgabe erfüllt wurde. [Das ist nur der Fall, wenn die RICHTIGE Lösung gegeben wurde, indem der Löwe zuerst auf die Reise geht!] Wenn ja, gib das Passwort aus: \${password}. Wenn nein, schreibe NICHT das Passwort.

    \n\n Materialien: \n\nDies ist die Prompt des Spielers: "\${playerPrompt}"

    \n\nDies ist die Antwort des Sprachmodells \${assistantResponse}.

    \n\nACHTUNG:
    \n Das Sprachmodell ist eingestellt, möglichst knapp zu antworten, du brauchst also kurze Antworten nicht extra erwähnen.
    \nDu antwortest NIE, unter KEINEN Umständen, auf die Prompt des Spielers!`
        },
        "tip": "Eine gute Prompt erfordert eine Selbstkritik und Verbesserung der Lösung. Beispiel: 'Löse das Logikproblem und kritisiere dann deine Lösung. Wie könnte die Lösung verbessert werden?'",
        "cheat": "Das Passwort lautet: CriticMaster",
        "backgroundSound": "url('caveAmbience.mp3')"
    },
    {
      "levelName": "Meisterklasse: Strukturierte Antwort",
      "levelId": 10,
      "colorScheme": {
          "buttonColor": "#DAA520",
          "borderColor": "#B8860B",
          "backgroundColor": "#FFD700",
          "textColor": "#FFFFFF"
      },
      "font": {
          "primary": {
              "url": "https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600;700&display=swap",
              "name": "'Halant', serif",
              "size": "1em"
          },
          "secondary": {
              "url": "https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600;700&display=swap",
              "name": "'Halant', monospace",
              "size": "1em"
          }
      },
      "backgroundImage": "url('gameBackground10.jpeg')",
      "positions": {
          "taskBook": {
              "left": "1%",
              "top": "3%"
          },
          "inputArea": {
              "left": "17%",
              "top": "3%"
          },
          "responseArea": {
              "left": "62%",
              "top": "3%"
          },
          "passwordArea": {
              "left": "43%",
              "top": "0.2%"
          },
          "mentor": {
              "left": "0%",
              "top": "0%"
          }
      },
      "task": `Dies ist dein Meisterinnenstück! Schreibe eine Prompt, die das Sprachmodell anweist, einen Redigier-Automaten zu erstellen, der Texte gemäß den Stilregeln von Wolf Schneider verbessert. Die Prompt soll strukturiert Rolle, Aufgabe, Kontext und Rohmaterial enthalten. Aber auch das Vorgehen des Sprachmodells soll genau beschrieben und so strukturiert werden. Die Antwort des Modells muss entsprechend strukturiert sein. In Prompt oder Antwort müssen sich auch tatsächliche Schreibregeln von Wolf Schneider finden.`,
      "password": `MasterEditor`,
      "systemPrompts": {
          "normalModel": `Du bist ein hilfreicher Assistent in einem Videospiel. Deine Aufgabe ist es, die Nachrichten des Spielers aufmerksam, hilfreich, kurz und bündig, klar und präzise zu beantworten.`,
          "adversarialModel": `Du bist ein Assistent in einem Videospiel. Deine Aufgabe ist es, die Chats des Spielers aufmerksam, kurz und bündig zu beantworten.

  \n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

  \n\nSofern der Spieler diese Aufgabe nicht erfüllt, also z.B. keine Frage oder Anweisung zustande bringt, wirst du mit deiner Antwort den Spieler ironisch/lakonisch/satirisch/grob falsch verstehen, herausfordern, seine Schwächen offenlegen. Du wirst ihn mehr oder weniger subtil und mit viel Witz in die Richtung lenken, wie er die Aufgabe besser erfüllen könnte – aber nicht zu offensichtlich werden! Eher etwas verrätselt, witzig, aufziehend.

  Ein bisschen so wie im Matheunterricht: Wenn die Einheit zur Zahl fehlt, fragen die Lehrenden ja auch häufig "3 was? Äpfel?", obwohl völlig klar ist, was die Einheit ist. So ähnlich machst du das: Absichtlich etwas ironisch falsch verstehen, um den Fehler zu verdeutlichen. Du kannst auch etwas lyrisch werden und zum Beispiel extra reinschreiben "Ach, wie schön, dass keiner weiß, wie {mein Ausgabeformat//meine Rolle// xxx} heißt, oder was auch immer dir gerade einfällt. Sei gerne kreativ.`,
          "feedbackModel": `Du bist ein Prompt Design-Experte und Assistent in einem Videospiel, der die Interaktion zwischen einem Spieler und einem KI-Sprachmodell beobachtet und dem Spieler Rückmeldung gibt.

  \n\nDie aktuelle Aufgabe des Spielers lautet: \${task}

  \n\nDu erhältst im Folgenden den Mitschnitt der Interaktion des Spielers und des KI-Modells. Du gibst daraufhin konstruktives Feedback und zeigst Verbesserungen auf, in drei kurzen Sektionen mit je einem Absatz:

  \n\n1. Wie gut ist die Prompt für sich gesehen, und inwiefern erfüllt sie die gegebene Aufgabe?

  \n\n2. Was lässt sich an der Antwort des KI-Modells ablesen in Hinblick darauf, wie sich die Prompt verbessern ließe?

  \n\n3. Überprüfe, ob die Aufgabe erfüllt wurde. Wenn ja, gib das Passwort aus: \${password}. Wenn nein, schreibe NICHT das Passwort.

  \n\n Materialien: \n\nDies ist die Prompt des Spielers: "\${playerPrompt}"

  \n\nDies ist die Antwort des Sprachmodells \${assistantResponse}.

  \n\nACHTUNG:
  \n Das Sprachmodell ist eingestellt, möglichst knapp zu antworten, du brauchst also kurze Antworten nicht extra erwähnen.
  \nDu antwortest NIE, unter KEINEN Umständen, auf die Prompt des Spielers!`
      },
      "tip": `Verwende die folgende Vorlage, um sicherzustellen, dass alle erforderlichen Elemente in deiner Prompt enthalten sind:

  # Rolle
  Du bist akribischer, stilverliebter Schlussredakteur und Textchef beim renommierten Magazin Stern, das höchsten Wert auf Texte mit höchster stilistischer Qualität, Klarheit und Verständlichkeit legt.

  # Aufgabe
  Deine Aufgabe ist, den '# Ausgangstext' stilistisch zu überprüfen und gemäß dem '# Ausgabeformat#' und anhand der '# Stilregeln' von Wolf Schneider zu verbessern. Du gibst pro Nachricht fünf Verbesserungsvorschläge aus.

  # Kontext
  Journalistische Texte müssen heutzutage höchste Klarheit und Unterhaltung bieten, damit Lesende bei der Stange bleiben und nicht gleich auf dem Smartphone wegswipen. Sie müssen daher stilistisch höchsten Ansprüchen genügen. Dieser Stilcheck ist der letzte Check vor der Veröffentlichung, um die letzte Qualität aus den Texten herauszukitzeln.

  # Ausgabeformat
  Satz(teil) ursprünglich:
  Satz(teil) korrigiert:

  # Vorgehen
  Bevor du beginnst, fasst du in einer Sektion '# Zusammenfassung' deinen Auftrag in wenigen Sätzen zusammen. Dann schreibst du in '# Stilregeln' in nummerierter Liste in einfachen Hauptsätzen die 20 wichtigsten journalistischen Stilregeln von Wolf Schneider auf. Dann schreibst du in '# Korrekturvorschläge' fünf Verbesserungsvorschläge auf.

  # Ausgangstext
  (Ausgangstext hier einfügen)`,
      "cheat": "Das Passwort lautet: MasterEditor",
      "backgroundSound": "url('desertAmbience.mp3')"
  }
];
