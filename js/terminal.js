const terminalHTML = `
<div id="terminal-overlay" class="terminal-overlay" style="display: none;">
    <div class="terminal-window" id="terminal-window">
        <div class="terminal-header" id="terminal-header">
            <div class="terminal-buttons">
                <span class="btn-close" onclick="toggleTerminal()"></span>
                <span class="btn-min"></span>
                <span class="btn-max"></span>
            </div>
            <div class="terminal-title">yanko@portfolio:~</div>
        </div>
        <div class="terminal-body" id="terminal-body">
            <div class="terminal-output" id="terminal-output">
                <div>Welcome to YankoOS v1.0.0 (GNU/Linux 5.15.0-x86_64)</div>
                <div>* System load:  0.01</div>
                <div>* Usage of /:   42.0%</div>
                <div><br>Type <span class="cmd-focus">'help'</span> to see available commands. Type <span class="cmd-focus">'gui'</span> or <span class="cmd-focus">'exit'</span> to return to the normal website.</div>
                <div class="terminal-line"><br></div>
            </div>
            <div class="terminal-input-line">
                <span class="prompt">yanko@portfolio:~$ </span>
                <input type="text" id="terminal-input" autocomplete="off" spellcheck="false" autofocus>
            </div>
        </div>
    </div>
</div>
<button id="terminal-btn" class="terminal-floating-btn" onclick="toggleTerminal()" title="Open Terminal">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="4 17 10 11 4 5"></polyline>
        <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
</button>
`;

// Inject HTML
document.body.insertAdjacentHTML('beforeend', terminalHTML);

const termOverlay = document.getElementById('terminal-overlay');
const termInput = document.getElementById('terminal-input');
const termOutput = document.getElementById('terminal-output');
const termWindow = document.getElementById('terminal-window');
const termHeader = document.getElementById('terminal-header');

let isTerminalOpen = false;

// Command History
const cmdHistory = [];
let historyIndex = -1;

function toggleTerminal() {
    isTerminalOpen = !isTerminalOpen;
    if (isTerminalOpen) {
        termOverlay.style.display = 'flex';
        setTimeout(() => termInput.focus(), 100);
    } else {
        termOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Drag functionality for the terminal window
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

termHeader.addEventListener('mousedown', dragStart);
document.addEventListener('mouseup', dragEnd);
document.addEventListener('mousemove', drag);

function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    if (e.target === termHeader || e.target.parentElement === termHeader) {
        isDragging = true;
    }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        xOffset = currentX;
        yOffset = currentY;
        setTranslate(currentX, currentY, termWindow);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

// Focus input when clicking anywhere inside the terminal body
document.getElementById('terminal-body').addEventListener('click', () => {
    termInput.focus();
});

// Process Command
termInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const value = this.value.trim();
        if (value) {
            cmdHistory.push(value);
            historyIndex = cmdHistory.length;
            processCommand(value);
        } else {
            printLine('<span class="prompt">yanko@portfolio:~$ </span>');
        }
        this.value = '';
        scrollToBottom();
    } else if (e.key === 'ArrowUp') {
        if (historyIndex > 0) {
            historyIndex--;
            this.value = cmdHistory[historyIndex];
        }
        e.preventDefault(); // Prevent cursor moving to start
    } else if (e.key === 'ArrowDown') {
        if (historyIndex < cmdHistory.length - 1) {
            historyIndex++;
            this.value = cmdHistory[historyIndex];
        } else {
            historyIndex = cmdHistory.length;
            this.value = '';
        }
    }
});

function printLine(htmlText) {
    const div = document.createElement('div');
    div.className = 'terminal-line';
    div.innerHTML = htmlText;
    termOutput.appendChild(div);
}

function scrollToBottom() {
    const body = document.getElementById('terminal-body');
    body.scrollTop = body.scrollHeight;
}

function processCommand(cmd) {
    printLine(`<span class="prompt">yanko@portfolio:~$ </span>${cmd}`);
    const args = cmd.split(' ');
    const mainCmd = args[0].toLowerCase();

    switch (mainCmd) {
        case 'help':
            printLine('Available commands:');
            printLine('  <span class="cmd-focus">whoami</span>    - Learn more about me');
            printLine('  <span class="cmd-focus">skills</span>    - List my technical stack');
            printLine('  <span class="cmd-focus">projects</span>  - Show latest projects');
            printLine('  <span class="cmd-focus">contact</span>   - Show contact info / github / linkedin');
            printLine('  <span class="cmd-focus">clear</span>     - Clear terminal screen');
            printLine('  <span class="cmd-focus">echo</span>      - Print text verbatim');
            printLine('  <span class="cmd-focus">date</span>      - Show current date/time');
            printLine('  <span class="cmd-focus">sudo</span>      - Execute a command as superuser');
            printLine('  <span class="cmd-focus">exit</span>      - Close terminal');
            break;
        case 'whoami':
            printLine('Yanko Acuña Villaseca');
            printLine('Full Stack Developer & Data Science enthusiastic.');
            printLine('Passionate about scalable architectures, microservices, and industrial digitalization.');
            break;
        case 'skills':
            printLine('<span style="color:#3fb950">Frontend:</span> React, Vue.js, Angular, TypeScript, Tailwind');
            printLine('<span style="color:#4f8ef7">Backend:</span>  Node.js, Express, NestJS, Spring Boot, Laravel');
            printLine('<span style="color:#f0883e">Db/Infra:</span> Oracle EAM, MongoDB, PostgreSQL, Docker, AWS, GCP');
            printLine('<span style="color:#a78bfa">Data:</span>     Python, Pandas, Scikit-learn, PowerBI');
            break;
        case 'projects':
            printLine('1. <span class="cmd-focus">SPM:</span> Maintenance Planning System for PF Alimentos (React, Node, Oracle).');
            printLine('2. <span class="cmd-focus">SVECG:</span> ECG Signal Viewer and Analyzer with AI features (React, TypeScript, Python).');
            printLine('3. <span class="cmd-focus">SGAT:</span> Tech Asset Manager for Empresas Iansa (Laravel, PHP, MySQL).');
            printLine('<br>Type <i>exit</i> to see visual details.');
            break;
        case 'contact':
            printLine('Email:    <a href="mailto:contacto@yankoacuna.cl" style="color:var(--accent);">contacto@yankoacuna.cl</a>');
            printLine('LinkedIn: <a href="https://linkedin.com/in/yanko-acuna-villaseca" target="_blank" style="color:var(--accent);">linkedin.com/in/yanko-acuna-villaseca</a>');
            printLine('GitHub:   <a href="https://github.com/yankoacuna" target="_blank" style="color:var(--accent);">github.com/yankoacuna</a>');
            break;
        case 'clear':
            termOutput.innerHTML = '';
            break;
        case 'echo':
            printLine(args.slice(1).join(' '));
            break;
        case 'date':
            printLine(new Date().toString());
            break;
        case 'sudo':
            printLine('yanko is not in the sudoers file. This incident will be reported.');
            break;
        case 'exit':
        case 'gui':
            toggleTerminal();
            break;
        case 'ls':
            printLine('<span style="color:#4f8ef7; font-weight:bold;">css/</span>  <span style="color:#4f8ef7; font-weight:bold;">js/</span>  <span style="color:#4f8ef7; font-weight:bold;">components/</span>  index.html  cv.pdf  about.md');
            break;
        case 'cat':
            if (args[1] === 'about.md') {
                printLine('# Yanko Acuña');
                printLine('Software Engineer');
            } else if (args[1] === 'cv.pdf') {
                printLine('Binary file. Try clicking the download button in the GUI Instead.');
            } else {
                printLine(`cat: ${args[1] || ''}: No such file or directory`);
            }
            break;
        default:
            printLine(`${mainCmd}: command not found. Type 'help' to see available commands.`);
    }
}
