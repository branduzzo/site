(function () {
  var KONAMI = ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a"];
  var CHARS = "01\u30a2\u30ab\u30b5\u30bf\u30ca\u30cf\u30de\u30e4\u30e9\u30efABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&*+=<>/\\|";
  var progress = 0;
  var buffer = "";
  var credits = null;
  var pointer = { x: 0, y: 0 };

  function toast(text) {
    var node = document.getElementById("toast");
    if (!node) {
      return;
    }
    node.textContent = text;
    node.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(function () {
      node.classList.remove("show");
    }, 3200);
  }

  function randomStream(length) {
    var text = "";
    for (var i = 0; i < length; i++) {
      text += CHARS[Math.floor(Math.random() * CHARS.length)] + "\n";
    }
    return text;
  }

  function rain(phrase, duration) {
    if (document.querySelector(".secret-rain")) {
      return;
    }

    var layer = document.createElement("div");
    layer.className = "secret-rain";
    layer.setAttribute("aria-hidden", "true");

    var columns = Math.max(22, Math.min(84, Math.round(window.innerWidth / 24)));

    for (var i = 0; i < columns; i++) {
      var column = document.createElement("span");
      column.className = "secret-rain__col";
      column.style.left = ((i / columns) * 100).toFixed(2) + "%";
      column.style.animationDuration = (1.7 + Math.random() * 2.3).toFixed(2) + "s";
      column.style.animationDelay = (-Math.random() * 2.4).toFixed(2) + "s";
      column.style.opacity = (0.3 + Math.random() * 0.6).toFixed(2);
      column.textContent = randomStream(14 + Math.floor(Math.random() * 12));
      layer.appendChild(column);
    }

    var message = document.createElement("div");
    message.className = "secret-rain__msg";
    layer.appendChild(message);

    document.body.appendChild(layer);

    var index = 0;
    var typing = setInterval(function () {
      index += 1;
      message.textContent = phrase.slice(0, index);
      if (index >= phrase.length) {
        clearInterval(typing);
      }
    }, 65);

    var shuffle = setInterval(function () {
      var all = layer.querySelectorAll(".secret-rain__col");
      for (var k = 0; k < 3; k++) {
        var pick = all[Math.floor(Math.random() * all.length)];
        if (pick) {
          pick.textContent = randomStream(16);
        }
      }
    }, 110);

    setTimeout(function () {
      clearInterval(typing);
      clearInterval(shuffle);
      layer.remove();
    }, duration);
  }

  function retro(duration) {
    var root = document.documentElement;
    if (root.classList.contains("is-retro")) {
      return;
    }
    root.classList.add("is-retro");
    setTimeout(function () {
      root.classList.remove("is-retro");
    }, duration);
  }

  function aurora() {
    if (document.querySelector(".secret-aurora")) {
      return;
    }

    var layer = document.createElement("div");
    layer.className = "secret-aurora";
    layer.setAttribute("aria-hidden", "true");

    for (var i = 1; i <= 3; i++) {
      var band = document.createElement("span");
      band.className = "secret-aurora__band secret-aurora__band--" + i;
      layer.appendChild(band);
    }

    document.body.appendChild(layer);

    setTimeout(function () {
      layer.remove();
    }, 7600);
  }

  function ping(x, y) {
    if (document.querySelector(".secret-ping")) {
      return;
    }

    var layer = document.createElement("div");
    layer.className = "secret-ping";
    layer.style.left = x + "px";
    layer.style.top = y + "px";
    layer.setAttribute("aria-hidden", "true");

    for (var i = 0; i < 3; i++) {
      var ring = document.createElement("span");
      ring.className = "secret-ping__ring";
      ring.style.animationDelay = (i * 0.16).toFixed(2) + "s";
      layer.appendChild(ring);
    }

    document.body.appendChild(layer);

    setTimeout(function () {
      layer.remove();
    }, 2200);
  }

  function closeCredits() {
    if (credits) {
      credits.remove();
      credits = null;
    }
  }

  function toggleCredits() {
    if (credits) {
      closeCredits();
      return;
    }

    var rows = [
      ["designed & built", "branduzzo"],
      ["stack", "handwritten css · vanilla js"],
      ["tracking", "none"],
      ["fonts", "system ui"]
    ];

    credits = document.createElement("div");
    credits.className = "secret-credits";

    var head = document.createElement("div");
    head.className = "secret-credits__head";

    var dot = document.createElement("span");
    dot.className = "secret-credits__dot";

    var label = document.createElement("span");
    label.className = "secret-credits__label";
    label.textContent = "credits";

    var close = document.createElement("button");
    close.type = "button";
    close.className = "secret-credits__close";
    close.textContent = "esc";
    close.addEventListener("click", closeCredits);

    head.appendChild(dot);
    head.appendChild(label);
    head.appendChild(close);

    var list = document.createElement("div");
    list.className = "secret-credits__rows";

    rows.forEach(function (pair) {
      var row = document.createElement("div");
      row.className = "secret-credits__row";
      var key = document.createElement("span");
      key.className = "secret-credits__key";
      key.textContent = pair[0];
      var value = document.createElement("span");
      value.className = "secret-credits__value";
      value.textContent = pair[1];
      row.appendChild(key);
      row.appendChild(value);
      list.appendChild(row);
    });

    credits.appendChild(head);
    credits.appendChild(list);

    document.body.appendChild(credits);
  }

  window.branduzzoCredits = {
    toggle: toggleCredits,
    close: closeCredits
  };

  document.addEventListener("mousemove", function (event) {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  }, { passive: true });

  document.addEventListener("keydown", function (event) {
    var target = event.target;
    var tag = (target && target.tagName ? target.tagName : "").toLowerCase();
    var isField = tag === "input" || tag === "textarea" || (target && target.isContentEditable);
    var inEggInput = target && target.closest ? target.closest(".egg__term-input, .egg__ai-input") : null;

    if (event.key === "Escape" && credits) {
      closeCredits();
      return;
    }

    var key = (event.key || "").toLowerCase();

    if (isField) {
      progress = 0;
    } else if (key === KONAMI[progress]) {
      progress += 1;
      if (progress === KONAMI.length) {
        progress = 0;
        retro(4200);
        toast("up up down down. welcome to 1985.");
      }
    } else {
      progress = key === KONAMI[0] ? 1 : 0;
    }

    if (inEggInput || event.ctrlKey || event.metaKey || event.altKey || key.length !== 1) {
      return;
    }

    buffer = (buffer + key).slice(-8);

    if (buffer.slice(-4) === "hack") {
      buffer = "";
      rain("nice try.", 2600);
      return;
    }

    if (isField) {
      return;
    }

    if (buffer.slice(-6) === "aurora") {
      buffer = "";
      aurora();
      return;
    }

    if (buffer.slice(-4) === "ping") {
      buffer = "";
      ping(pointer.x || window.innerWidth / 2, pointer.y || window.innerHeight / 2);
    }
  });

  var wordmark = document.getElementById("wordmark");

  if (wordmark) {
    var lines = [
      "that tickles.",
      "hey. hands off the logo.",
      "you found the logo. impressive.",
      "still here."
    ];
    var pick = 0;

    wordmark.addEventListener("dblclick", function () {
      wordmark.classList.remove("is-wiggle");
      void wordmark.offsetWidth;
      wordmark.classList.add("is-wiggle");
      toast(lines[pick % lines.length]);
      pick += 1;
      setTimeout(function () {
        wordmark.classList.remove("is-wiggle");
      }, 900);
    });
  }
})();
