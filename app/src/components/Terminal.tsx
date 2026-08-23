import { useRef, useState } from 'react';
import type { RefObject } from 'react';

const FS: Record<string, string[]> = {
  'C:': ['Documents and Settings', 'WINDOWS', 'Program Files'],
  'C:\\Documents and Settings': ['User', 'All Users'],
  'C:\\Documents and Settings\\User': ['Desktop', 'My Documents', 'Start Menu', 'Favorites'],
  'C:\\Documents and Settings\\User\\Desktop': [
    'Styrelsesammanträden',
    'Stormöten',
    'Stadgar',
    'Reglemente',
    'Verksamhetsberättelser',
    'Arkiv',
  ],
  'C:\\Documents and Settings\\User\\Desktop\\Styrelsesammanträden': [],
  'C:\\Documents and Settings\\User\\Desktop\\Stormöten': [],
  'C:\\Documents and Settings\\User\\Desktop\\Verksamhetsberättelser': [],
  'C:\\Documents and Settings\\User\\Desktop\\Arkiv': [],
  'C:\\Documents and Settings\\User\\My Documents': ['My Music', 'My Pictures', 'My Videos'],
  'C:\\Documents and Settings\\All Users': ['Desktop', 'Documents', 'Start Menu'],
  'C:\\WINDOWS': ['system32', 'Fonts', 'Media', 'Help', 'inf', 'Prefetch'],
  'C:\\WINDOWS\\system32': ['cmd.exe', 'notepad.exe', 'calc.exe', 'explorer.exe', 'regedit.exe', 'mspaint.exe'],
  'C:\\Program Files': ['Internet Explorer', 'Windows Media Player', 'Messenger', 'Common Files', 'Accessories'],
  'C:\\Program Files\\Accessories': ['wordpad.exe', 'mspaint.exe'],
};

const GoogleLinks: Record<string, string> = {
  Styrelsesammanträden: 'https://drive.google.com/drive/folders/1peOaj3nHz2e2iC-mgPjXiBPUmBrSJYnA?usp=sharing',
  Stormöten: 'https://drive.google.com/drive/folders/1lu-tczpqDbdeAbHi0Wh7rHpSqcAJ8zMz?usp=sharing',
  Stadgar: 'https://drive.google.com/file/d/1U3fdo3mHEqjdeSW9fvyBmP_yBvjQfNJY/view?usp=sharing',
  Reglemente: 'https://drive.google.com/file/d/1mpTTlN1ULU13OgS9k8W1iT-fgosDbnzA/view?usp=sharing',
  Verksamhetsberättelser: 'https://drive.google.com/drive/folders/1eAcasmS5rlIGwKqkcIXJJTwy5cL8qQD-?usp=sharing',
  Arkiv: 'https://drive.google.com/drive/folders/1ks7k0F2veSk2Cv2vIPaY4-hx6bIdeYfy?usp=sharing',
};

function isDir(p: string) {
  return !!FS[p];
}

function fmtDate(d: Date) {
  return `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}`;
}

function fmtTime(d: Date) {
  let h = d.getHours();
  const m = String(d.getMinutes()).padStart(2, '0');
  const ap = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${String(h).padStart(2, '0')}:${m} ${ap}`;
}

interface TerminalProps {
  screenRef: RefObject<HTMLDivElement | null>;
}

export function Terminal({ screenRef }: TerminalProps) {
  const [open, setOpen] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [booted, setBooted] = useState(false);
  const [cwd, setCwd] = useState('C:\\Documents and Settings\\User');
  const [lines, setLines] = useState<string[]>([]);
  const [value, setValue] = useState('');

  const cmdHistoryRef = useRef<string[]>([]);
  const histIdxRef = useRef(-1);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const termRef = useRef<HTMLDivElement | null>(null);
  const winRef = useRef<HTMLDivElement | null>(null);
  const origSizeRef = useRef<{ width: string; height: string }>({ width: '', height: '' });

  function print(text: string) {
    setLines((prev) => [...prev, text]);
  }

  function scrollBottom() {
    requestAnimationFrame(() => {
      if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight;
    });
  }

  function focusInput() {
    inputRef.current?.focus({ preventScroll: true });
  }

  function resolvePath(arg: string) {
    if (!arg || arg === '.') return cwd;
    if (/^[A-Za-z]:/.test(arg)) return arg.replace(/\//g, '\\').replace(/\\+$/, '');
    if (arg === '..') {
      const parts = cwd.split('\\');
      if (parts.length <= 1) return cwd;
      parts.pop();
      return parts.join('\\') || 'C:';
    }
    return (cwd + '\\' + arg).replace(/\\+/, '\\');
  }

  function boot() {
    print('Type HELP for a list of available commands.');
    print('Type DIR to list files. Type OPEN <name> to open a document.');
    print('');
    focusInput();
  }

  function openWin() {
    setOpen(true);
    if (!booted) {
      boot();
      setBooted(true);
    } else {
      focusInput();
    }
  }

  function closeWin() {
    setOpen(false);
    setLines([]);
    if (maximized) maximizeWin();
  }

  function maximizeWin() {
    const win = winRef.current;
    const screen = screenRef.current as HTMLDivElement | null;
    if (!win) return;

    if (!maximized) {
      origSizeRef.current = { width: win.style.width || win.offsetWidth + 'px', height: win.style.height || win.offsetHeight + 'px' };
      const titleH = win.querySelector('.titlebar')?.getBoundingClientRect().height ?? 0;
      const sw = screen ? screen.offsetWidth + 'px' : '100%';
      const sh = screen ? screen.offsetHeight + 'px' : '100%';

      win.style.width = sw;
      win.style.height = sh;
      win.style.resize = 'none';
      win.style.position = 'relative';
      win.style.top = '0';
      win.style.left = '0';
      win.style.zIndex = '2';

      if (termRef.current) {
        termRef.current.style.height = screen ? screen.offsetHeight - titleH + 'px' : '100%';
      }
      setMaximized(true);
    } else {
      win.style.width = origSizeRef.current.width || '500px';
      win.style.height = origSizeRef.current.height || '';
      win.style.resize = 'both';
      win.style.position = '';
      win.style.top = '';
      win.style.left = '';
      win.style.zIndex = '1';
      if (termRef.current) termRef.current.style.height = '300px';
      setMaximized(false);
    }
  }

  function runCommand(raw: string) {
    const echo = cwd + '> ' + raw;
    setLines((prev) => [...prev, echo]);

    const parts = raw.trim().split(/\s+/);
    const cmd = (parts[0] || '').toLowerCase();
    const args = parts.slice(1);

    if (!cmd) {
      print('');
      scrollBottom();
      return;
    }

    switch (cmd) {
      case 'cd':
      case 'chdir':
        if (!args[0] || args[0] === '.') {
          print(cwd);
        } else {
          const target = resolvePath(args[0]);
          if (isDir(target)) {
            const folderName = target.split('\\').pop() ?? '';
            if (GoogleLinks[folderName]) {
              print(`Opening "${folderName}" in Google Drive...`);
              window.open(GoogleLinks[folderName], '_blank');
            } else {
              setCwd(target);
            }
          } else {
            print('The system cannot find the path specified.');
          }
        }
        break;

      case 'dir': {
        const children = FS[cwd] || [];
        const now = new Date();
        print('');
        print(' Volume in drive C has no label.');
        print(' Volume Serial Number is 1A2B-3C4D');
        print('');
        print(` Directory of ${cwd}`);
        print('');
        print(`${fmtDate(now)}  ${fmtTime(now)}    <DIR>          .`);
        print(`${fmtDate(now)}  ${fmtTime(now)}    <DIR>          ..`);
        children.forEach((name) => {
          const childPath = cwd + '\\' + name;
          if (isDir(childPath)) {
            print(`${fmtDate(now)}  ${fmtTime(now)}    <DIR>          ${name}`);
          } else {
            const size = String(Math.floor(Math.random() * 900000 + 10000)).padStart(14);
            print(`${fmtDate(now)}  ${fmtTime(now)} ${size} ${name}`);
          }
        });
        const dirs = children.filter((n) => isDir(cwd + '\\' + n)).length + 2;
        const files = children.filter((n) => !isDir(cwd + '\\' + n)).length;
        print(`       ${files} File(s)          1,233,445 bytes`);
        print(`       ${dirs} Dir(s)  10,716,800 bytes free`);
        print('');
        break;
      }

      case 'cls':
        setLines([]);
        break;

      case 'echo':
        print(args.length ? args.join(' ') : 'ECHO is on.');
        break;

      case 'date': {
        const n = new Date();
        print(`The current date is: ${n.toLocaleDateString('sv-SE', { weekday: 'short', month: '2-digit', day: '2-digit', year: 'numeric' })}`);
        print('Enter the new date: (MM-DD-YYYY) ');
        break;
      }
      case 'time':
        print(`The current time is: ${new Date().toLocaleTimeString('sv-SE', { hour12: false })}`);
        break;

      case 'help':
        print('');
        print('For more information on a command, type HELP command-name');
        print('');
        (
          [
            ['CD', 'Displays or changes the current directory.'],
            ['CLS', 'Clears the screen.'],
            ['COLOR', 'Sets the console foreground and background colors.'],
            ['DATE', 'Displays or sets the date.'],
            ['DIR', 'Displays a list of files and subdirectories.'],
            ['ECHO', 'Displays messages or turns echoing on/off.'],
            ['EXIT', 'Quits CMD.EXE.'],
            ['HELP', 'Provides Help information for commands.'],
            ['OPEN', 'Opens a Drive folder by name (e.g. OPEN Stadgar).'],
            ['TIME', 'Displays or sets the system time.'],
            ['TREE', 'Graphically displays folder structure.'],
            ['TYPE', 'Displays the contents of a text file.'],
          ] as const
        ).forEach(([c, d]) => print(`${c.padEnd(15)}${d}`));
        print('');
        break;

      case 'open': {
        const name = args.join(' ');
        const link = GoogleLinks[name];
        if (link && cwd === 'C:\\Documents and Settings\\User\\Desktop') {
          print(`Opening "${name}"...`);
          window.open(link, '_blank');
        } else if (name) {
          print(`Cannot find "${name}". Are you in the right folder?`);
        } else {
          print('Usage: OPEN <name>  e.g. OPEN Stadgar');
        }
        break;
      }

      case 'color': {
        const palette: Record<string, string> = {
          '0': '#000',
          '1': '#00008B',
          '2': '#006400',
          '3': '#008B8B',
          '4': '#8B0000',
          '5': '#8B008B',
          '6': '#8B6914',
          '7': '#C0C0C0',
          '8': '#808080',
          '9': '#0000ff',
          A: '#00ff00',
          B: '#00ffff',
          C: '#ff0000',
          D: '#ff00ff',
          E: '#ffff00',
          F: '#ffffff',
        };
        const code = (args[0] || '').toUpperCase();
        if (code.length >= 2 && palette[code[0]] && palette[code[1]]) {
          if (termRef.current) {
            termRef.current.style.background = palette[code[0]];
            termRef.current.style.color = palette[code[1]];
          }
        } else {
          print('COLOR [attr]  — two hex digits: background then foreground');
          print('  0=Black  1=DkBlue  2=DkGreen  3=Teal  4=DkRed  5=Purple');
          print('  6=Olive  7=Silver  8=Gray     9=Blue  A=Green  B=Cyan');
          print('  C=Red    D=Magenta E=Yellow   F=White');
        }
        break;
      }

      case 'tree': {
        print('Folder PATH listing');
        print('Volume serial number is 1A2B-3C4D');
        print(cwd);
        const drawTree = (path: string, prefix: string) => {
          (FS[path] || []).forEach((name, i, arr) => {
            const last = i === arr.length - 1;
            print(prefix + (last ? '└───' : '├───') + name);
            if (FS[path + '\\' + name]) drawTree(path + '\\' + name, prefix + (last ? '    ' : '│   '));
          });
        };
        drawTree(cwd, '');
        print('');
        break;
      }

      case 'type':
        print('The system cannot find the file specified.');
        break;

      case 'exit':
        closeWin();
        break;

      default:
        print(`'${parts[0]}' is not recognized as an internal or external command,`);
        print('operable program or batch file.');
    }

    print('');
    scrollBottom();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const val = value;
      if (val.trim()) {
        cmdHistoryRef.current.unshift(val);
        histIdxRef.current = -1;
      }
      runCommand(val);
      setValue('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (histIdxRef.current < cmdHistoryRef.current.length - 1) {
        histIdxRef.current++;
        setValue(cmdHistoryRef.current[histIdxRef.current]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIdxRef.current > 0) {
        histIdxRef.current--;
        setValue(cmdHistoryRef.current[histIdxRef.current]);
      } else {
        histIdxRef.current = -1;
        setValue('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const typed = value;
      const lastSpace = typed.lastIndexOf(' ');
      const partial = typed.slice(lastSpace + 1);
      const siblings = FS[cwd] || [];
      const match = siblings.find((n) => n.toLowerCase().startsWith(partial.toLowerCase()));
      if (match) setValue(typed.slice(0, lastSpace + 1) + match);
    }
  }

  return (
    <>
      <div className="terminal-icon" onClick={openWin}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="3" width="30" height="24" rx="1" fill="#000080" />
          <rect x="2" y="4" width="28" height="22" fill="#0000c0" />
          <rect x="4" y="6" width="7" height="4" fill="#c0c0c0" />
          <rect x="13" y="6" width="12" height="2" fill="#808080" />
          <rect x="13" y="10" width="12" height="2" fill="#808080" />
          <rect x="4" y="14" width="21" height="2" fill="#808080" />
          <rect x="4" y="18" width="16" height="2" fill="#808080" />
          <rect x="4" y="22" width="10" height="2" fill="#808080" />
        </svg>
        <p>Command Prompt</p>
      </div>
      <div className="window-wrap">
        <div className="window" id="win" ref={winRef} style={{ display: open ? '' : 'none' }}>
          <div className="titlebar">
            <svg className="titlebar-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="2" width="14" height="12" fill="#000080" />
              <rect x="2" y="3" width="12" height="10" fill="#0000c0" />
              <rect x="3" y="4" width="3" height="2" fill="#c0c0c0" />
              <rect x="7" y="4" width="5" height="1" fill="#808080" />
              <rect x="7" y="6" width="5" height="1" fill="#808080" />
              <rect x="3" y="8" width="9" height="1" fill="#808080" />
              <rect x="3" y="10" width="7" height="1" fill="#808080" />
            </svg>
            <span className="titlebar-title">C:\WINDOWS\system32\cmd.exe</span>
            <div className="titlebar-buttons">
              <div className="titlebar-btn" title="Minimize" onClick={closeWin}>
                _
              </div>
              <div className="titlebar-btn" title="Maximize" onClick={maximizeWin}>
                &#9633;
              </div>
              <div className="titlebar-btn close" title="Close" onClick={closeWin}>
                &#10005;
              </div>
            </div>
          </div>

          <div className="terminal" id="terminal" ref={termRef} onClick={focusInput}>
            <div id="output">
              {lines.map((line, i) => (
                <div className="output-line" key={i}>
                  {line}
                </div>
              ))}
            </div>
            <div className="input-line">
              <span className="prompt" id="prompt">
                {cwd}&gt;&nbsp;
              </span>
              <input
                className="cmd-input"
                id="cmd-input"
                type="text"
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
