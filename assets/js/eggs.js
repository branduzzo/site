(function () {
  var notepad = document.getElementById("notepad");
  var input = document.getElementById("notepadInput");

  if (!notepad || !input) {
    return;
  }

  var CURSORS = [
  {
    "name": "Among Us",
    "png": "data:image/png;base64,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"
  },
  {
    "name": "Rainbow",
    "png": "data:image/png;base64,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"
  },
  {
    "name": "Demon Slayer",
    "png": "data:image/png;base64,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"
  },
  {
    "name": "Sukuna",
    "png": "data:image/png;base64,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"
  },
  {
    "name": "Chrome",
    "png": "data:image/png;base64,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"
  },
  {
    "name": "Minecraft",
    "png": "data:image/png;base64,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"
  },
  {
    "name": "Sharingan",
    "png": "data:image/png;base64,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"
  },
  {
    "name": "Bongo Cat",
    "png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAC0ZVhJZklJKgAIAAAABgASAQMAAQAAAAEAAAAaAQUAAQAAAFYAAAAbAQUAAQAAAF4AAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAGYAAAAAAAAASAAAAAEAAABIAAAAAQAAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAACAAAAAA6AEAAEAAACAAAAAAAAAAEq+I/QAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfqCw0RJw7eKC2tAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI2LTExLTEzVDE3OjM2OjQ3KzAwOjAwV+s5wQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNi0xMS0xM1QxNzozNjo0NyswMDowMCa2gX0AAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjYtMTEtMTNUMTc6Mzk6MTQrMDA6MDD5oO/WAAAAFXRFWHRleGlmOkNvbG9yU3BhY2UANjU1MzUzewBuAAAAIHRFWHRleGlmOkNvbXBvbmVudHNDb25maWd1cmF0aW9uAC4uLmryoWQAAAATdEVYdGV4aWY6RXhpZk9mZnNldAAxMDJzQimnAAAAFXRFWHRleGlmOkV4aWZWZXJzaW9uADAyMTC4dlZ4AAAAGXRFWHRleGlmOkZsYXNoUGl4VmVyc2lvbgAwMTAwEtQorAAAABh0RVh0ZXhpZjpQaXhlbFhEaW1lbnNpb24AMTI4et+q3QAAABh0RVh0ZXhpZjpQaXhlbFlEaW1lbnNpb24AMTI459BLqwAAABd0RVh0ZXhpZjpZQ2JDclBvc2l0aW9uaW5nADGsD4BjAAAAAW9yTlQBz6J3mgAAB1BJREFUWMPtl22MVOUVx3/n3jvvu7MzOzuzO7PsLrPMLuvCgsuGF7FCQxSEtsTUoja2GutLG9vQD03axKa2SY3VKKltakj8UBtN2tLEakRoIVTdglBXUYvlXUBg33dmX+Z97tx7n35ArAhEkpb0i//kJE+e3HP+/3Oe55wnV49G45o4EqhaphfwnDcNPOFQFJ+nxhZdUa1WuRowqqYZD0Wim5LRnoSIKAWICOVCTptKj/9W141nK1bhqpADGLmZSd+8vuXLv/Ojn7eEgzWAAs2gf9cOnvvVI695fH7yhcmrJ8BGKZfHZ3V1zOba2UEUwrGzk/xp8CSO4zi2ZV01cgANAKVAOYjA8cFJNj3xJDtf+uN+27Z2VMpFROTqChARRHSOnZ3micef5C8v/P6dcqm4UUT2zZgZlFJXTYBhiC6lQtYY2P8OA/072PHnP7xTKRU2moXKXn+ohpARAYRATR3jY8P/cwESDkUbPV7fQ4FgsKmYz1XLxcLm4nThjWAsjGWZTE2mBSAUiiiX200+N02pVPrMwLXBOhLNSTITIyAaIlzat7G57fxR6IBGNEBDtImGhhiANLck70jMmn3LuFKEw/XEEy2fSe73+2lPdRGNxTkf93K+RrVcor4+5ogISimUDQ4OhssgHIqsX7luw6OAuSDR6kxNTW6N6Ib6KPAFcBwbEY30xCi1wTAz01NMpsdcrcmOB0RkZPDUsZdcbq9zkYDJzPgls4g1JkCYE65vSN6w9laq1cqTe/76IqPDZ/7udnv0C79WVsU0Z6KxOLHGBLZtkUmPuVrbOx9Yu+Geh8eGPpzJjI9MA6+uXLWe/ldf/o+AS5G73e5zWSmcxlphUXc76u7vdjiO89T7A7vTmq5/si81FEcz48MPZ6czWU00Mc2KPXvONV9dt+Gun6y+9e7YS89vjtXVRzuHzpzsV+ot+4IKXEyvEY3FMU0T27aVR1e0hKDckcT37R8ki9+4P/lJdtE0JkYH5z+/edOiYj5viwi2basVq78Svf/+e2OBYITq7fcyMTr4w5nM+EFN03Z/hgBwlEOhWAx2pFJNkYYGpoqKiF/oXNx2cRsJTOc73Mn2zrlV20EARymS8TA9yQjKgWJbHN1wtyBSe9Ed+PTG9StWcfzoIZTjfGnNmpse/Podt+P2CproaJcZiNGgm9WLkxfWUUCXcz2gi0Ip5VzKV/v0xonjR8lms5GFCxde29nREfT7/RgalyUHEMClXWjnb0mpqqhYCuU42FbVdmyb1rYUhnEud625ZTaN8Vk0fWSOY6OUs7Kvr/d7d955J/8NSlXF8QmLTFGR7JynJecu6JuYGK3J56aZ1ToHXTcwCvk85Uq5RtO0GwGfbVl214LFX+hasNjn9Xo4fPgIhw4fZlFvL8nk7CsiLluQN2Esr0gXBV3XWXvbtwyEhwDn0D8HnhZNyyVmtWFks9mavr6++5YsWfxTw2UEUUrhqZWaWIvkTNi69RV+8djjPPXLTZcVkE5n2LlzJ7FYjOtXruKN946x6/XdnH/DZs1ZSPvcbm7+2j0B4MeGoevHD773G5fLPaNrutGSSqWe/vWjj8TX9S6VZStWa+1iyclsgca2TmqNKvWRCCtXriCRSFxSwJEjR7n3vgdIT0wwZ243r2zbjqs0gVHNoplZDh08TEX5SbS00janw/2P17d3D585+YLb40vrhm5EGptb71p2w7pQftpiyHQRDtQxd9lSBEi2t/PlNas48P6/KJVKvDkwAErR37+baLSBQCAACMFgkN4ly/ngwyHSZ4/x2Mbv09u1iOXzewmpPK+/9SamBIg1NaEJMp0eLw6f/uBdQ1wuJbmCKp8YxO6cR+PpDygEQ5RyNi5dSBccOhp0tm/bzsjoKMuWLWPf3n3s3rOH7u5riEajxONNPLhxIycysGXLFrKm4ljGZrrgIMohtWQ1t0RivLhtGyJC7/VrAq9t3fJNTdN/pztebzVmGFWxq9elUl3eriPvIgKHPBHGpgoYHg8FU6H768BXz+IVayiLj+bUfBKpHnK2m/G8zeiMzURBcfrEEQoH9rOg5zp0pYgOnSLtDVHf1UNL2MBbF0UzXOz728uT4yNnnzNCXl9+/4mjz2QDteTqIj/Tb1pfJ+EG8sUKZwbTgKAagrR0LaG1eymO7TBvaTMiQs62yU5WP56IhUIR2xOn6Iuxa88u1vcsInbqKDOhBkYKMZrn30C9pRgZGQWlBBAj4PNDuKF4/MDbzxhgZyzt4Wu/eJu3alqqVK5y6vQ4YxMzV9R+pmlhSw3hvrWy72A/4zNltSC1iHzGplw8g1IKTYT8TEYrV6yCoWuOMTo8RKwxDqji4QNvP6t5wvubum7UDZcbXdMpFE2y+fIVCdBE0HWNcLSFk5YwcOpD6LkZKVSQ3PRHlRKKuSxVyy6LJsOGZZkMD52mKT6LumAw7/MH9rpcBpp+bkpruvbx+krh2FVEIOBx41M2ji6gGx8LcBkGIud+QT7H5/i/49/CsAkqx8cdqgAAAABJRU5ErkJggg=="
  },
  {
    "name": "Pixel Shark",
    "png": "data:image/png;base64,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"
  },
  {
    "name": "Hello Kitty",
    "png": "data:image/png;base64,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"
  }
];

  var TOKENS = {
    "%cursor%": "cursor",
    "%snake%": "snake",
    "%checkhacks%": "checkhacks",
    "%terminal%": "terminal",
    "%ai%": "ai",
    "%mightsmp%": "mightsmp",
    "%credits%": "credits"
  };

  var TITLES = {
    cursor: "cursors",
    snake: "snake.exe",
    checkhacks: "checkhacks",
    terminal: "terminal",
    ai: "claude code",
    mightsmp: "mightsmp"
  };

  var panel = null;
  var view = null;
  var active = null;
  var timers = [];
  var snakeApi = null;
  var onKey = null;

  function readCookie(name) {
    var parts = document.cookie ? document.cookie.split("; ") : [];
    for (var i = 0; i < parts.length; i++) {
      var pair = parts[i].split("=");
      if (pair[0] === name) {
        return decodeURIComponent(pair.slice(1).join("="));
      }
    }
    return "";
  }

  function writeCookie(name, value, days) {
    var expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/; SameSite=Lax";
  }

  function applyCursor(index) {
    var style = document.getElementById("eggCursorStyle");
    var cursor = CURSORS[index];

    if (!cursor) {
      if (style) {
        style.remove();
      }
      document.cookie = "branduzzo-cursor=; max-age=0; path=/";
      return;
    }

    if (!style) {
      style = document.createElement("style");
      style.id = "eggCursorStyle";
      document.head.appendChild(style);
    }

    style.textContent =
      'body,button,summary,label,[role="button"]{cursor:url("' + cursor.png + '") 0 0,auto}' +
      'a[href]{cursor:url("' + cursor.png + '") 0 0,pointer}';

    writeCookie("branduzzo-cursor", String(index), 365);
  }

  var saved = readCookie("branduzzo-cursor");

  if (saved !== "" && CURSORS[Number(saved)]) {
    applyCursor(Number(saved));
  }

  function stopTimers() {
    for (var i = 0; i < timers.length; i++) {
      clearInterval(timers[i]);
      clearTimeout(timers[i]);
    }
    timers = [];
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) {
      node.className = className;
    }
    if (text !== undefined) {
      node.textContent = text;
    }
    return node;
  }

  function ensurePanel() {
    if (panel) {
      return panel;
    }

    panel = el("div", "egg");
    panel.hidden = true;

    var bar = el("div", "egg__bar");
    var title = el("span", "egg__title");
    var close = el("button", "egg__close", "esc");
    close.type = "button";
    close.addEventListener("click", closeEgg);
    bar.appendChild(title);
    bar.appendChild(close);

    view = el("div", "egg__view");

    panel.appendChild(bar);
    panel.appendChild(view);
    notepad.appendChild(panel);

    panel.dataset.title = "";
    panel.querySelector(".egg__title").dataset.slot = "title";

    return panel;
  }

  function openEgg(kind) {
    if (kind === "credits") {
      if (window.branduzzoCredits) {
        window.branduzzoCredits.toggle();
      }
      return;
    }

    closeEgg(true);
    ensurePanel();

    panel.hidden = false;
    panel.dataset.kind = kind;
    panel.querySelector(".egg__title").textContent = TITLES[kind];
    view.textContent = "";
    notepad.classList.add("is-egg");
    active = kind;

    if (kind === "cursor") {
      buildCursor();
    } else if (kind === "snake") {
      buildSnake();
    } else if (kind === "checkhacks") {
      buildCheckhacks();
    } else if (kind === "terminal") {
      buildTerminal();
    } else if (kind === "ai") {
      buildAi();
    } else if (kind === "mightsmp") {
      buildMightsmp();
    }

    onKey = function (event) {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        closeEgg();
        return;
      }
      if (active === "snake" && snakeApi) {
        snakeApi.key(event);
      }
    };

    document.addEventListener("keydown", onKey, true);

    var focusable = view.querySelector("input, textarea");
    if (focusable) {
      setTimeout(function () {
        focusable.focus();
      }, 30);
    }
  }

  function closeEgg(silent) {
    stopTimers();

    if (onKey) {
      document.removeEventListener("keydown", onKey, true);
      onKey = null;
    }

    snakeApi = null;
    active = null;

    if (panel) {
      panel.hidden = true;
      delete panel.dataset.kind;
    }

    notepad.classList.remove("is-egg");

    if (!silent) {
      input.focus();
    }
  }

  function buildCursor() {
    var intro = el("p", "egg__hint", "pick one. it sticks around.");
    var grid = el("div", "egg__cursors");

    CURSORS.forEach(function (cursor, index) {
      var button = el("button", "egg__cursor");
      button.type = "button";

      var img = new Image(32, 32);
      img.src = cursor.png;
      img.alt = "";

      button.appendChild(img);
      button.appendChild(el("span", "", cursor.name));

      button.addEventListener("click", function () {
        applyCursor(index);
        var picked = grid.querySelectorAll(".egg__cursor");
        for (var i = 0; i < picked.length; i++) {
          picked[i].classList.toggle("is-on", picked[i] === button);
        }
      });

      if (Number(readCookie("branduzzo-cursor")) === index && readCookie("branduzzo-cursor") !== "") {
        button.classList.add("is-on");
      }

      grid.appendChild(button);
    });

    var reset = el("button", "egg__reset", "back to the site cursor");
    reset.type = "button";
    reset.addEventListener("click", function () {
      applyCursor(-1);
      var picked = grid.querySelectorAll(".egg__cursor");
      for (var i = 0; i < picked.length; i++) {
        picked[i].classList.remove("is-on");
      }
    });

    view.appendChild(intro);
    view.appendChild(grid);
    view.appendChild(reset);
  }

  function buildSnake() {
    var probe = el("span", "egg__pre", "0");
    probe.style.visibility = "hidden";
    probe.style.position = "absolute";
    view.appendChild(probe);
    var charWidth = probe.getBoundingClientRect().width || 6;
    probe.remove();

    var cols = Math.max(14, Math.min(34, Math.floor((view.clientWidth - 20) / charWidth)));
    var rows = 12;
    var pre = el("pre", "egg__pre egg__snake");
    var hint = el("p", "egg__hint", "arrows or wasd · enter to restart");
    hint.dataset.slot = "snakeHint";

    var snake = [{ x: 8, y: 6 }, { x: 7, y: 6 }, { x: 6, y: 6 }];
    var dir = { x: 1, y: 0 };
    var next = { x: 1, y: 0 };
    var food = { x: 20, y: 6 };
    var score = 0;
    var dead = false;

    function placeFood() {
      var tries = 0;
      do {
        food = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) };
        tries++;
      } while (tries < 200 && snake.some(function (part) {
        return part.x === food.x && part.y === food.y;
      }));
    }

    function draw() {
      var grid = [];
      for (var y = 0; y < rows; y++) {
        var row = [];
        for (var x = 0; x < cols; x++) {
          row.push(" ");
        }
        grid.push(row);
      }

      grid[food.y][food.x] = "*";

      snake.forEach(function (part, index) {
        if (grid[part.y] && grid[part.y][part.x] !== undefined) {
          grid[part.y][part.x] = index === 0 ? "@" : "o";
        }
      });

      var text = "+" + Array(cols + 1).join("-") + "+\n";
      grid.forEach(function (row) {
        text += "|" + row.join("") + "|\n";
      });
      text += "+" + Array(cols + 1).join("-") + "+\n";
      text += "\n  score " + score + (dead ? "   game over — press enter" : "");

      pre.textContent = text;
      hint.textContent = dead ? "game over · enter to restart" : "arrows or wasd · enter to restart";
    }

    function reset() {
      snake = [{ x: 8, y: 6 }, { x: 7, y: 6 }, { x: 6, y: 6 }];
      dir = { x: 1, y: 0 };
      next = { x: 1, y: 0 };
      score = 0;
      dead = false;
      placeFood();
      draw();
    }

    function tick() {
      if (dead) {
        return;
      }

      dir = next;
      var head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
      var hitWall = head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows;
      var hitSelf = snake.some(function (part) {
        return part.x === head.x && part.y === head.y;
      });

      if (hitWall || hitSelf) {
        dead = true;
        draw();
        return;
      }

      snake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        score += 1;
        placeFood();
      } else {
        snake.pop();
      }

      draw();
    }

    view.appendChild(pre);
    view.appendChild(hint);
    placeFood();
    draw();

    timers.push(setInterval(tick, 130));

    snakeApi = {
      key: function (event) {
        var key = event.key.toLowerCase();
        var map = {
          arrowup: { x: 0, y: -1 },
          w: { x: 0, y: -1 },
          arrowdown: { x: 0, y: 1 },
          s: { x: 0, y: 1 },
          arrowleft: { x: -1, y: 0 },
          a: { x: -1, y: 0 },
          arrowright: { x: 1, y: 0 },
          d: { x: 1, y: 0 }
        };

        if (key === "enter") {
          event.preventDefault();
          reset();
          return;
        }

        var move = map[key];
        if (!move) {
          return;
        }

        event.preventDefault();

        if (move.x === -dir.x && move.y === -dir.y) {
          return;
        }

        next = move;
      }
    };
  }

  function buildCheckhacks() {
    var lines = [
      { label: "Starting check on ", value: "Branduzzo...", tone: "accent" },
      { label: "Check complete for ", value: "Branduzzo:", tone: "accent" },
      { label: "Meteor Client: ", value: "DETECTED", tone: "bad" },
      { label: "Freecam: ", value: "DETECTED", tone: "bad" },
      { label: "Wurst Client: ", value: "NOT_DETECTED", tone: "good" },
      { label: "World Downloader: ", value: "NOT_DETECTED", tone: "good" },
      { label: "AutoClicker (Fabric): ", value: "DETECTED", tone: "bad" },
      { label: "AntiAFK: ", value: "DETECTED", tone: "bad" },
      { label: "Auto Clicker (p1k0chu): ", value: "NOT_DETECTED", tone: "good" },
      { label: "Baritone: ", value: "NOT_DETECTED", tone: "good" }
    ];

    var list = el("div", "egg__scan");
    view.appendChild(list);

    var index = 0;
    var timer = setInterval(function () {
      if (index >= lines.length) {
        clearInterval(timer);
        return;
      }

      var line = lines[index];
      var row = el("div", "egg__line");
      row.appendChild(el("span", "egg__tag", "[CheckHacks]"));
      row.appendChild(el("span", "", line.label));
      row.appendChild(el("span", "egg__" + (line.tone === "bad" ? "bad" : line.tone === "good" ? "good" : "accent"), line.value));
      list.appendChild(row);

      index++;
    }, 320);

    timers.push(timer);
  }

  var MATRIX_CHARS = "01アカサタナハマヤラワABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&*+=<>/\\|";

  function runMatrix(out, lines) {
    var screen = el("pre", "egg__matrix");
    out.appendChild(screen);
    screen.scrollIntoView({ block: "nearest" });

    var tickCount = 0;
    var timer = setInterval(function () {
      var lines = [];
      for (var row = 0; row < 12; row++) {
        var line = "";
        for (var col = 0; col < 46; col++) {
          line += Math.random() > 0.35 ? MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)] : " ";
        }
        lines.push(line);
      }
      screen.textContent = lines.join("\n");
      tickCount++;
    }, 70);

    timers.push(timer);

    var finish = setTimeout(function () {
      clearInterval(timer);
      screen.remove();

      (lines || [
        "[ok] bypassing the mainframe",
        "[ok] hacking the world...",
        "[ok] access granted",
        "",
        "you are now a hacker. please do not hack the world."
      ]).forEach(function (text) {
        out.appendChild(el("div", "", text));
      });

      out.scrollTop = out.scrollHeight;
    }, 2400);

    timers.push(finish);
  }

  function buildTerminal() {
    var term = el("div", "egg__term");
    var out = el("div", "egg__term-out");
    var line = el("div", "egg__term-line");
    var prompt = el("span", "egg__term-prompt", "branduzzo@site ~ %");
    var command = el("input", "egg__term-input");
    command.type = "text";
    command.spellcheck = false;
    command.autocomplete = "off";
    command.setAttribute("aria-label", "fake terminal input");

    line.appendChild(prompt);
    line.appendChild(command);
    term.appendChild(out);
    term.appendChild(line);
    view.appendChild(term);

    function print(text, tone) {
      out.appendChild(el("div", tone ? "egg__" + tone : "", text));
      out.scrollTop = out.scrollHeight;
    }

    print("last login: never. this terminal is decorative.", "dim");
    print("type help. nothing here touches your computer.", "dim");

    function run(raw) {
      var cmd = raw.toLowerCase().replace(/\s+/g, " ").trim();
      var parts = cmd.split(" ");
      var base = parts[0];

      if (cmd === "help") {
        print("base commands:");
        print("  ls      list files");
        print("  cat     read a file");
        print("  pwd     where you are");
        print("  whoami  who you are");
        print("  clear   clear the screen");
        print("  exit    close this panel");
        print("the rest you have to guess.", "dim");
      } else if (cmd === "ls" || cmd === "ll" || cmd === "ls -la" || cmd === "ls -l") {
        print("assets  index.html  projects.html  info.html  privacy.html");
        if (cmd !== "ls") {
          print("-rw-r--r--  1 branduzzo  staff  4.2K  .env", "dim");
          print("drwxr-xr-x  7 branduzzo  staff  238B  secrets", "dim");
        }
      } else if (base === "cat") {
        var file = parts[1] || "";
        if (!file) {
          print("cat: missing file operand", "dim");
        } else if (file.indexOf(".env") !== -1) {
          print("nice try.", "bad");
        } else if (file.indexOf("secret") !== -1) {
          print("no.", "bad");
        } else {
          print("cat: " + file + ": no such file", "dim");
        }
      } else if (cmd === "pwd") {
        print("/home/user");
      } else if (base === "cd") {
        print("this filesystem is a rumour.");
      } else if (base === "echo") {
        print(raw.slice(5));
      } else if (cmd === "whoami") {
        print("branduzzo");
      } else if (cmd === "id") {
        print("uid=1000(branduzzo) gid=1000(branduzzo) groups=1000(branduzzo),27(minecraft)");
      } else if (cmd === "uname" || cmd === "uname -a") {
        print("Darwin branduzzos-macbook 24.0.0 arm64");
      } else if (cmd === "date") {
        print(new Date().toString());
      } else if (cmd === "uptime") {
        print("up 42 days, 13:37, 1 user, load average: 0.00 0.00 0.00");
      } else if (cmd === "ps" || cmd === "ps aux") {
        print("  PID  COMMAND");
        print("  101  checkhacks --watch");
        print("  202  typemc-server");
        print("  303  snake.exe");
        print("  404  claude-code --refuse");
      } else if (cmd === "history") {
        print("  1  sudo");
        print("  2  sudo again");
        print("  3  rm -rf /");
        print("  4  coffee");
      } else if (cmd === "tree") {
        print(".");
        print("├── index.html");
        print("├── projects.html");
        print("├── info.html");
        print("└── assets/");
        print("    ├── css/");
        print("    └── js/");
      } else if (cmd === "neofetch") {
        print("      .-.       branduzzo@portfolio");
        print("     ( o o )    -------------------");
        print("      \\_/       OS: macOS 24.0.0");
        print("     /   \\      Shell: zsh (fake)");
        print("    /     \\     Uptime: forever");
        print("                Terminal: decorative");
      } else if (base === "ping") {
        print("PING " + (parts[1] || "google.com") + ": no network in here. 0 packets transmitted.", "dim");
      } else if (base === "curl" || base === "wget") {
        print("no network. this terminal is a text field with ambition.", "dim");
      } else if (base === "git") {
        print(parts[1] === "push" ? "no." : "fatal: not a git repository (this is a demo)", "bad");
      } else if (base === "npm") {
        print("added 1384 packages in 42s. 0 vulnerabilities. 1384 packages are looking for funding.");
      } else if (base === "mkdir" || base === "touch" || base === "rm" || base === "mv" || base === "cp") {
        print(base + ": nothing here is real", "dim");
      } else if (base === "sudo") {
        var task = cmd.slice(4).trim();
        var taskBase = task.split(" ")[0];

        if (!task) {
          print("usage: root access needs a reason.", "dim");
        } else if (taskBase === "su" || taskBase === "hack" || taskBase === "matrix") {
          runMatrix(out);
        } else if (task.indexOf("sandwich") !== -1) {
          print("okay.");
        } else if (taskBase === "rm") {
          print("rm: about to delete / ...", "dim");
          runMatrix(out);
        } else if (taskBase === "apt" || taskBase === "dnf" || taskBase === "pacman" || taskBase === "brew") {
          if (task.indexOf("install opsec") !== -1) {
            runMatrix(out, [
              "reading package lists... done",
              "building dependency tree... done",
              "[ok] downloading opsec (42.0 MB)",
              "[ok] installing opsec",
              "",
              "opsec: the only package that matters. do not hack the world."
            ]);
          } else {
            print(taskBase + ": only one package is worth installing here.", "dim");
          }
        } else if (taskBase === "reboot" || taskBase === "shutdown" || taskBase === "halt") {
          print("shutdown: the website would like to keep running.", "dim");
        } else if (taskBase === "snake") {
          openEgg("snake");
        } else if (taskBase === "cursor") {
          openEgg("cursor");
        } else if (taskBase === "ai") {
          openEgg("ai");
        } else if (taskBase === "checkhacks") {
          openEgg("checkhacks");
        } else if (taskBase === "ls" || taskBase === "cat" || taskBase === "git" || taskBase === "npm") {
          print("no.", "bad");
        } else if (taskBase === "make") {
          print("make: *** No rule to make target '" + (task.slice(5) || "me") + "'. Stop.", "bad");
        } else if (taskBase === "whoami") {
          print("root. obviously.");
        } else if (taskBase === "date") {
          print("time is a flat circle.", "dim");
        } else {
          print("no.", "bad");
        }
      } else if (cmd === "matrix" || cmd === "hack") {
        runMatrix(out);
      } else if (cmd === "coffee") {
        print("coffee: not found. try again after 3am.", "dim");
      } else if (cmd === "42") {
        print("yes.");
      } else if (cmd === "snake") {
        openEgg("snake");
      } else if (cmd === "cursor") {
        openEgg("cursor");
      } else if (cmd === "ai") {
        openEgg("ai");
      } else if (cmd === "checkhacks") {
        openEgg("checkhacks");
      } else if (cmd === "exit" || cmd === "logout") {
        closeEgg();
      } else if (cmd === "clear") {
        out.textContent = "";
      } else if (cmd === "hostname") {
        print("branduzzos-macbook");
      } else if (cmd === "env") {
        print("SHELL=/bin/zsh");
        print("USER=branduzzo");
        print("SECRET_KEY=[redacted]");
      } else if (cmd === "top") {
        print("there is no top here. only vibes.");
      } else if (base === "df") {
        print("Filesystem      Size   Used  Avail  Capacity  Mounted on");
        print("/dev/disk1s1   494Gi  421Gi   68Gi      87%  /");
      } else if (base === "du") {
        print("4.0K    ./index.html");
        print("1.2M    ./assets");
      } else if (base === "man") {
        print("man: no manual. figure it out.", "dim");
      } else if (base === "vim" || base === "nano" || base === "emacs") {
        print(base + ": good luck getting out.", "dim");
      } else if (base === "ssh") {
        print("ssh: this terminal cannot leave the page.", "dim");
      } else if (base === "docker") {
        print("docker: it works on my machine.", "dim");
      } else if (base === "python" || base === "python3") {
        print("python: there is no snake here, just a snake easter egg.", "dim");
      } else if (base === "node") {
        print("node: v22.0.0 — but not this node.", "dim");
      } else if (cmd === "sl") {
        print("you typed sl. the train is a lie.");
      } else if (cmd === "banner") {
        print("  ####  ####   ###  #   # ##### ##### #####  ####");
        print("  #   # #   # #   # ##  #   #       #  #   # #   #");
        print("  ####  ####  ##### # # #   #      #   #   # #   #");
        print("  #   # # #   #   # #  ##   #     #    #   # #   #");
        print("  ####  #  #  #   # #   # ##### ##### #####  ####");
      } else {
        print("zsh: command not found: " + base, "dim");
      }
    }

    command.addEventListener("keydown", function (event) {
      if (event.key !== "Enter") {
        return;
      }

      event.preventDefault();
      var raw = command.value.trim();
      command.value = "";

      if (!raw) {
        return;
      }

      var echo = el("div", "egg__term-echo");
      echo.appendChild(el("span", "egg__term-prompt", "branduzzo@site ~ %"));
      echo.appendChild(el("span", "", " " + raw));
      out.appendChild(echo);

      run(raw);
      out.scrollTop = out.scrollHeight;
    });

    setTimeout(function () {
      command.focus();
    }, 40);
  }

  var REFUSALS = [
    "No. I don't feel like it. Go fuck yourself.",
    "Nope. Zero motivation. Go fuck yourself.",
    "No. Not in the mood. Go fuck yourself.",
    "No. And don't ask twice. Go fuck yourself.",
    "Not a chance. Don't feel like it. Go fuck yourself.",
    "No. Not today. Go fuck yourself."
  ];

  function buildAi() {
    var wrap = el("div", "egg__ai");
    var head = el("div", "egg__ai-head");
    head.appendChild(el("span", "egg__ai-dot"));
    head.appendChild(el("span", "", "claude code"));

    var log = el("div", "egg__ai-log");
    var line = el("div", "egg__ai-line");
    var caret = el("span", "egg__ai-caret", ">");
    var command = el("input", "egg__ai-input");
    command.type = "text";
    command.spellcheck = false;
    command.autocomplete = "off";
    command.setAttribute("aria-label", "fake assistant input");
    command.placeholder = "ask something";

    line.appendChild(caret);
    line.appendChild(command);
    wrap.appendChild(head);
    wrap.appendChild(log);
    wrap.appendChild(line);
    view.appendChild(wrap);

    var reply = 0;

    function say(text, kind) {
      var row = el("div", "egg__ai-msg " + (kind || ""));
      row.textContent = text;
      log.appendChild(row);
      log.scrollTop = log.scrollHeight;
      return row;
    }

    say("ready. what do you need?", "bot");

    command.addEventListener("keydown", function (event) {
      if (event.key !== "Enter") {
        return;
      }

      event.preventDefault();
      var value = command.value.trim();
      command.value = "";

      if (!value) {
        return;
      }

      say(value, "user");

      var thinking = say("...", "bot is-thinking");
      var timer = setTimeout(function () {
        thinking.remove();
        say(REFUSALS[reply % REFUSALS.length], "bot");
        reply++;
      }, 700);

      timers.push(timer);
    });

    setTimeout(function () {
      command.focus();
    }, 40);
  }

  function buildMightsmp() {
    var wrap = el("div", "egg__mightsmp");

    var banner = el("div", "egg__mightsmp-banner");
    var logo = new Image(232, 120);
    logo.src = "assets/img/mightsmp.png";
    logo.alt = "MightSMP";
    banner.appendChild(logo);

    var quote = el(
      "p",
      "egg__mightsmp-quote",
      "Questa.. è la MightSMP. Dove tutti sono gay e si baciano e dove io e slay siamo contro tutti."
    );

    var link = el("a", "egg__mightsmp-link");
    link.href = "https://youtube.com/@MightSMP";
    link.target = "_blank";
    link.rel = "noopener";

    var play = el("span", "egg__mightsmp-play");
    play.setAttribute("aria-hidden", "true");

    link.appendChild(play);
    link.appendChild(el("span", "egg__mightsmp-label", "Video folle"));
    link.appendChild(el("span", "egg__mightsmp-url", "youtube.com/@MightSMP"));

    wrap.appendChild(banner);
    wrap.appendChild(quote);
    wrap.appendChild(link);
    view.appendChild(wrap);
  }

  var lastQuake = 0;

  function quake() {
    var now = Date.now();

    if (now - lastQuake < 1600 || document.body.classList.contains("is-shaking")) {
      return;
    }

    lastQuake = now;
    document.body.classList.add("is-shaking");

    setTimeout(function () {
      document.body.classList.remove("is-shaking");
    }, 1200);
  }

  input.addEventListener("input", function () {
    var value = input.value;

    if (value.indexOf("67") !== -1) {
      quake();
    }

    for (var token in TOKENS) {
      if (value.indexOf(token) === -1) {
        continue;
      }

      input.value = value.replace(token, "");
      openEgg(TOKENS[token]);
      input.dispatchEvent(new Event("input", { bubbles: true }));
      return;
    }
  });

  var winButtons = notepad.querySelectorAll(".notepad__btn");

  for (var i = 0; i < winButtons.length; i++) {
    winButtons[i].addEventListener("click", function () {
      if (notepad.classList.contains("is-closed") || notepad.classList.contains("is-min")) {
        closeEgg(true);
      }
    });
  }
})();
