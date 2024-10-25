/* script.js */

let currentLevelId = 1;

document.addEventListener('DOMContentLoaded', () => {
    // URL-Parameter auslesen und das entsprechende Level laden
    const urlParams = new URLSearchParams(window.location.search);
    const levelParam = urlParams.get('level');
    const initialLevelId = levelParam ? parseInt(levelParam, 10) : 1;

    if (isNaN(initialLevelId) || initialLevelId < 1 || initialLevelId > gameLevels.length) {
        currentLevelId = 1;
    } else {
        currentLevelId = initialLevelId;
    }

    loadLevel(currentLevelId);

    // Bestehender Code für das Verschieben des Viewports und der Elemente
    const viewport = document.getElementById('background');
    let isDraggingViewport = false;
    let startX, startY;

    // Handler für das Verschieben des Viewports
    viewport.addEventListener('mousedown', (e) => {
        const isTextElement = ['TEXTAREA', 'INPUT', 'P', 'H2'].includes(e.target.tagName);

        if (!e.target.classList.contains('handle') && !isTextElement) {
            isDraggingViewport = true;
            startX = e.clientX;
            startY = e.clientY;
            viewport.style.cursor = 'grabbing';
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (isDraggingViewport) {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;

            viewport.style.left = `${viewport.offsetLeft + dx}px`;
            viewport.style.top = `${viewport.offsetTop + dy}px`;

            startX = e.clientX;
            startY = e.clientY;
        }
    });

    window.addEventListener('mouseup', () => {
        isDraggingViewport = false;
        viewport.style.cursor = 'grab';
    });

    // Handler für das Verschieben der einzelnen Elemente
    const draggableElements = document.querySelectorAll('.draggable');

    draggableElements.forEach(element => {
        let isDraggingElement = false;
        let elementStartX, elementStartY;

        const handle = element.querySelector('.handle');

        handle.addEventListener('mousedown', (e) => {
            isDraggingElement = true;
            elementStartX = e.clientX;
            elementStartY = e.clientY;
            handle.style.cursor = 'grabbing';
            e.stopPropagation();
        });

        window.addEventListener('mousemove', (e) => {
            if (isDraggingElement) {
                const dx = e.clientX - elementStartX;
                const dy = e.clientY - elementStartY;

                element.style.left = `${element.offsetLeft + dx}px`;
                element.style.top = `${element.offsetTop + dy}px`;

                elementStartX = e.clientX;
                elementStartY = e.clientY;

                // Ausgabe der Position in Prozent
                const parentWidth = viewport.offsetWidth;
                const parentHeight = viewport.offsetHeight;
                const leftPercent = (element.offsetLeft / parentWidth) * 100;
                const topPercent = (element.offsetTop / parentHeight) * 100;
                console.log(`Element: ${element.id}, Left: ${leftPercent.toFixed(1)}%, Top: ${topPercent.toFixed(1)}%`);
            }
        });

        window.addEventListener('mouseup', () => {
            isDraggingElement = false;
            handle.style.cursor = 'move';
        });
    });
});

function loadLevel(levelId) {
    const level = gameLevels[levelId - 1];
    console.log(level);
    if (!level) return;

    document.getElementById('background').style.backgroundImage = level.backgroundImage;
    document.getElementById('task').textContent = level.task;
    document.getElementById('password-input').value = '';
    document.getElementById('prompt').value = '';
    document.getElementById('response-output').textContent = '';
    document.getElementById('feedback-output').textContent = '';
    document.getElementById('primary-font-link').href = level.font.primary.url;
    document.getElementById('secondary-font-link').href = level.font.secondary.url;

    document.documentElement.style.setProperty('--button-color', level.colorScheme.buttonColor);
    document.documentElement.style.setProperty('--border-color', level.colorScheme.borderColor);
    document.documentElement.style.setProperty('--text-color', level.colorScheme.textColor);
    document.documentElement.style.setProperty('--primary-font-name', level.font.primary.name);
    document.documentElement.style.setProperty('--secondary-font-name', level.font.secondary.name);
    document.documentElement.style.setProperty('--primary-font-size', level.font.primary.size);
    document.documentElement.style.setProperty('--secondary-font-size', level.font.secondary.size);

    setPosition('task-book', level.positions.taskBook);
    setPosition('input-area', level.positions.inputArea);
    setPosition('response-area', level.positions.responseArea);
    setPosition('password-area', level.positions.passwordArea);
    // setPosition('mentor', level.positions.mentor);

    updateLevelIndicator(levelId);

    // Implementiere das Laden und Abspielen des Hintergrund-Sounds
}

function updateLevelIndicator(levelId) {
    const totalLevels = gameLevels.length;
    const levelIndicator = document.getElementById('level-indicator');
    levelIndicator.textContent = `Level ${levelId} / ${totalLevels}`;
}

function setPosition(elementId, position) {
    const element = document.getElementById(elementId);

    // Position in Pixeln oder Prozent akzeptieren
    element.style.left = position.left.includes('%') ? position.left : `${position.left}px`;
    element.style.top = position.top.includes('%') ? position.top : `${position.top}px`;

    // Optionale Constraints hinzufügen, um das Rausrutschen aus dem sichtbaren Bereich zu verhindern
    if (position.left.includes('%') && parseFloat(position.left) > 100) {
        element.style.left = '100%';
    }
    if (position.top.includes('%') && parseFloat(position.top) > 100) {
        element.style.top = '100%';
    }
}

function handleSendPromptClick() {
    const sendButton = document.querySelector('.actions button');
    const inputArea = document.getElementById('input-area');

    // Visuelle Rückmeldung
    sendButton.classList.add('loading');
    inputArea.classList.add('loading');
    sendButton.disabled = true;

    // Send prompt with normal model
    sendPrompt(currentLevelId, false, () => {
        // Callback function to call sendPrompt with feedback model
        sendPrompt(currentLevelId, true, () => {
            // Entfernen der Ladeanzeige
            sendButton.classList.remove('loading');
            inputArea.classList.remove('loading');
            sendButton.disabled = false;
        });
    });
}

function clearApiKey() {
    localStorage.removeItem('apiKey');
    alert('API key has been cleared. You will be prompted for a new key on the next API call.');
}


async function sendPrompt(levelId = currentLevelId, feedbackMode = false, callback) {
    console.log('Current level Id: ' + levelId);

    let apiKey = localStorage.getItem('apiKey');
    if (!apiKey) {
        apiKey = prompt('Bitte gib einen OpenAI API-Key ein (z.B. sk-xxxxxxx):');
        if (apiKey) {
            localStorage.setItem('apiKey', apiKey);
        } else {
            alert('Ohne API-Key funktioniert das Spiel leider nicht.');
            return;
        }
    }

    const userPrompt = document.getElementById('prompt').value; // Changed from prompt to userPrompt
    const model = document.getElementById('model').value;

    const level = gameLevels.find(l => l.levelId === levelId);

    if (!level) {
        console.error('Level not found');
        return;
    }

    let systemPrompt;
    if (feedbackMode) {
        systemPrompt = level.systemPrompts.feedbackModel
            .replace('${task}', level.task)
            .replace('${password}', level.password)
            .replace('${playerPrompt}', userPrompt) // Changed from prompt to userPrompt
            .replace('${assistantResponse}', document.getElementById('response-output').textContent);
    } else {
        systemPrompt = model === 'vanilla'
            ? level.systemPrompts.normalModel
            : level.systemPrompts.adversarialModel;

        systemPrompt = systemPrompt
            .replace('${task}', level.task)
            .replace('${password}', level.password)
            .replace('${playerPrompt}', userPrompt) // Changed from prompt to userPrompt
            .replace('${assistantResponse}', '');
    }

    const messages = [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt } // Changed from prompt to userPrompt
    ];

    const requestPayload = {
        model: 'gpt-4',
        messages: messages
    };

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestPayload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const responseContent = data.choices[0].message.content;

        if (feedbackMode) {
            document.getElementById('feedback-output').textContent = responseContent;
        } else {
            document.getElementById('response-output').textContent = responseContent;
        }

        // Call the callback function if provided
        if (callback) {
            callback();
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function showMessageOverlay(message, callback) {
    document.getElementById('message-overlay-message').textContent = message;
    document.getElementById('message-overlay').classList.remove('hidden');

    const okButton = document.getElementById('message-overlay-button');
    okButton.onclick = callback || hideMessageOverlay; // Set the callback function for the button
}

function hideMessageOverlay() {
    document.getElementById('message-overlay').classList.add('hidden');
}


function hideMessageOverlay() {
    document.getElementById('message-overlay').classList.add('hidden');
}

function prevLevel() {
    const prevLevel = gameLevels.find(l => l.levelId === currentLevelId - 1);

    if (prevLevel) {
        currentLevelId -= 1;
        reloadPageWithLevel(currentLevelId);
    } else {
        showMessageOverlay('Kein vorheriges Level verfügbar.');
    }
}

function nextLevel() {
    const nextLevel = gameLevels.find(l => l.levelId === currentLevelId + 1);

    if (nextLevel) {
        currentLevelId += 1;
        reloadPageWithLevel(currentLevelId);
    } else {
        showMessageOverlay('Du hast die Kunst des Prompt-Designs gemeistert! 💖🪄🎇 ');
    }
}

function triggerFireworks(levelId) {
    const container = document.getElementById('background');
    const duration = Math.min(2 + levelId * 0.8, 8); // Increase duration with each level, max 3 seconds
    const infiniteFireworks = levelId >= gameLevels.length; // Infinite fireworks on the last level
    intensity = levelId;

    // Clear any existing fireworks container to avoid conflicts
    clearPreviousFireworks();

    // Create a new Fireworks instance
    const fireworks = new Fireworks.default(container, {
        hue: { min: 0, max: 360 },
        rocketsPoint: { min: 30, max: 70 },
        opacity: (0.5 + intensity/25),
        acceleration: 1.031,
        friction: 0.95,
        gravity: 2.5,
        particles: 200,
        traceLength: 5,
        traceSpeed: 1,
        explosion: 10,
        intensity: 60,
        flickering: 50,
        lineStyle: 'round',
        lineWidth: {
            explosion: {
              min: 1,
              max: 6
            },
            trace: {
              min: 1,
              max: 8
            }
          },
        delay: { min: 10, max: 100 },
        brightness: { min: 50, max: 80 },
        decay: { min: 0.02, max: 0.05 },
        autoresize: true
    });

    fireworks.start();

    if (infiniteFireworks) {
        // Infinite fireworks on the last level
        console.log('Infinite fireworks!');
    } else {
        // Stop fireworks after the calculated duration
        setTimeout(() => {
            fireworks.stop(true); // Passing true to dispose the instance
        }, duration * 1000);
    }
}

function clearPreviousFireworks() {
    const canvas = document.querySelector('#background canvas');
    if (canvas) {
        canvas.remove(); // Remove the existing canvas
    }
}



function submitPassword() {
    const enteredPassword = document.getElementById('password-input').value;
    const level = gameLevels.find(l => l.levelId === currentLevelId);
    if (!level) {
        console.error('Aktuelles Level nicht gefunden');
        return;
    }
    if (enteredPassword.toLowerCase() === level.password.toLowerCase()) {
        triggerFireworks(currentLevelId);
        showMessageOverlay('Passwort korrekt! Lade das nächste Level.', () => {
            hideMessageOverlay();
            nextLevel();
        });
        } else {
        showMessageOverlay('Falsches Passwort. Bitte versuche es erneut.');
    }
}

function reloadPageWithLevel(levelId) {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('level', levelId);
    window.location.href = newUrl.href;
}

function showTip() {
    const level = gameLevels.find(l => l.levelId === currentLevelId);
    if (level) {
        alert(level.tip);
    } else {
        alert('Keine Tipps verfügbar.');
    }
}

function newConvo() {
    document.getElementById('prompt').value = '';
    document.getElementById('response-output').textContent = '';
    document.getElementById('feedback-output').textContent = '';
    alert('Neue Konversation gestartet. Alle Eingabefelder wurden geleert.');
}
