(function () {

  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  document.addEventListener("keydown", function (event) {
    var key = (event.key || "").toLowerCase();
    var modifier = event.ctrlKey || event.metaKey;
    var inspect = key === "f12" || (modifier && event.shiftKey && (key === "i" || key === "j" || key === "c" || key === "k"));
    var source = modifier && (key === "u" || key === "s");
    if (inspect || source) {
      event.preventDefault();
      event.stopPropagation();
    }
  });
  "use strict";

  var root = document.documentElement;
  var reduce = false;
  var hover = false;

  try {
    reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    hover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  } catch (e) {
    reduce = false;
    hover = false;
  }

  window.requestAnimationFrame(function () {
    root.classList.add("is-ready");
  });

  var island = document.getElementById("island");
  var where = document.getElementById("islandWhere");
  var navLinks = [].slice.call(document.querySelectorAll(".island__links a"));
  var sections = [];

  for (var i = 0; i < navLinks.length; i++) {
    var href = navLinks[i].getAttribute("href") || "";
    var hash = href.indexOf("#") > -1 ? href.slice(href.indexOf("#")) : "";
    if (hash.length > 1) {
      var target = document.querySelector(hash);
      if (target) {
        sections.push({ link: navLinks[i], el: target });
      }
    }
  }

  var stage = document.querySelector(".stage");
  var ticking = false;

  function paint() {
    var y = window.scrollY || window.pageYOffset || 0;

    if (island) {
      island.classList.toggle("is-compact", y > 56);
    }

    if (stage && !reduce) {
      var rect = stage.getBoundingClientRect();
      var start = window.innerHeight;
      var end = window.innerHeight * 0.25;
      var progress = (start - rect.top) / (start - end);
      progress = progress < 0 ? 0 : progress > 1 ? 1 : progress;
      var scale = 0.9 + progress * 0.1;
      stage.style.transform = "scale(" + scale.toFixed(3) + ")";
    }

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(paint);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  paint();

  if (sections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(
      function (entries) {
        for (var k = 0; k < entries.length; k++) {
          if (!entries[k].isIntersecting) {
            continue;
          }
          for (var m = 0; m < sections.length; m++) {
            var active = sections[m].el === entries[k].target;
            sections[m].link.classList.toggle("is-active", active);
            if (active && where) {
              where.textContent = sections[m].link.textContent;
            }
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    for (var s = 0; s < sections.length; s++) {
      spy.observe(sections[s].el);
    }
  }

  var revealNodes = document.querySelectorAll(".footer, .about__text, .staff__row, .credit");

  if (!reduce && "IntersectionObserver" in window) {
    for (var r = 0; r < revealNodes.length; r++) {
      revealNodes[r].classList.add("reveal");
    }

    var reveal = new IntersectionObserver(
      function (entries) {
        for (var n = 0; n < entries.length; n++) {
          if (entries[n].isIntersecting) {
            entries[n].target.classList.add("is-in");
            reveal.unobserve(entries[n].target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    for (var t = 0; t < revealNodes.length; t++) {
      reveal.observe(revealNodes[t]);
    }
  }

  var wordmark = document.getElementById("wordmark");

  if (wordmark) {
    if (reduce || !("IntersectionObserver" in window)) {
      wordmark.classList.add("is-visible");
    } else {
      var mark = new IntersectionObserver(
        function (entries) {
          for (var q = 0; q < entries.length; q++) {
            if (entries[q].isIntersecting) {
              wordmark.classList.add("is-visible");
              mark.disconnect();
            }
          }
        },
        { threshold: 0.3 }
      );
      mark.observe(wordmark);
    }
  }

  var notepad = document.getElementById("notepad");

  if (notepad) {
    var input = document.getElementById("notepadInput");
    var gutter = document.getElementById("notepadGutter");
    var source = document.getElementById("notepadSource");
    var status = document.getElementById("notepadStatus");
    var counter = document.getElementById("notepadCount");
    var zoomLabel = document.getElementById("notepadZoom");
    var restore = document.getElementById("notepadRestore");
    var dialog = document.getElementById("notepadOpen");
    var savedMeta = document.getElementById("notepadSavedMeta");
    var fileName = document.querySelector(".notepad__name");
    var limit = 800;
    var cookieName = "branduzzo-todo";
    var zoomSteps = [11, 12.5, 14];
    var zoomIndex = 1;
    var statusTimer = null;
    var dirty = false;
    var currentFile = "todo.txt";

    function readCookie() {
      var parts = document.cookie ? document.cookie.split("; ") : [];
      for (var i = 0; i < parts.length; i++) {
        var pair = parts[i].split("=");
        if (pair[0] === cookieName) {
          try {
            return decodeURIComponent(pair.slice(1).join("="));
          } catch (e) {
            return "";
          }
        }
      }
      return "";
    }

    function writeCookie(text) {
      var encoded = encodeURIComponent(text);
      if (encoded.length > 3600) {
        return false;
      }
      document.cookie = cookieName + "=" + encoded + "; max-age=31536000; path=/; SameSite=Lax";
      return true;
    }

    function defaultText() {
      if (!source) {
        return "";
      }
      var items = source.querySelectorAll("li");
      var lines = [];
      for (var i = 0; i < items.length; i++) {
        var text = items[i].textContent.replace(/\s+/g, " ").trim();
        lines.push((i === 0 ? "[x] " : "[ ] ") + text);
      }
      return lines.join("\n");
    }

    function flash(text) {
      if (!status) {
        return;
      }
      status.textContent = text;
      if (statusTimer) {
        window.clearTimeout(statusTimer);
      }
      statusTimer = window.setTimeout(updateStatus, 1600);
    }

    function updateStatus() {
      var value = input.value;
      var caret = input.selectionStart === null ? 0 : input.selectionStart;
      var head = value.slice(0, caret);
      var line = head.split("\n").length;
      var col = head.length - head.lastIndexOf("\n");
      if (status) {
        status.textContent = "Ln " + line + ", Col " + col;
      }
      if (counter) {
        counter.textContent = value.length + " / " + limit;
      }
    }

    function updateGutter() {
      if (!gutter) {
        return;
      }
      var total = input.value.split("\n").length;
      var out = "";
      for (var i = 1; i <= total; i++) {
        out += i + "\n";
      }
      gutter.textContent = out;
      gutter.scrollTop = input.scrollTop;
    }

    function updateTitle() {
      if (fileName) {
        fileName.textContent = currentFile + (dirty ? " •" : "");
      }
    }

    function refresh() {
      var truncated = false;
      if (input.value.length > limit) {
        input.value = input.value.slice(0, limit);
        truncated = true;
      }
      updateStatus();
      updateGutter();
      updateTitle();
      if (truncated) {
        flash("Limit is " + limit + " characters");
      }
    }

    function load(text, name, unsaved) {
      input.value = text;
      currentFile = name;
      dirty = !!unsaved;
      refresh();
    }

    function closeMenus() {
      var openPanels = notepad.querySelectorAll(".notepad__dropdown.is-open");
      var openItems = notepad.querySelectorAll(".notepad__item.is-open");
      var a;
      for (a = 0; a < openPanels.length; a++) {
        openPanels[a].classList.remove("is-open");
      }
      for (a = 0; a < openItems.length; a++) {
        openItems[a].classList.remove("is-open");
      }
    }

    function closeDialog() {
      if (dialog) {
        dialog.classList.remove("is-open");
      }
    }

    function closeAll() {
      closeMenus();
      closeDialog();
    }

    function openMenu(item) {
      var panel = item.parentElement.querySelector(".notepad__dropdown");
      if (!panel) {
        return;
      }
      closeAll();
      panel.classList.add("is-open");
      item.classList.add("is-open");
    }

    function openDialog() {
      if (!dialog) {
        return;
      }
      var saved = readCookie();
      if (savedMeta) {
        savedMeta.textContent = saved ? "saved" : "empty";
      }
      var entry = dialog.querySelector('[data-open="saved"]');
      if (entry) {
        entry.classList.toggle("is-empty", !saved);
      }
      dialog.classList.add("is-open");
    }

    function applyZoom() {
      notepad.style.setProperty("--np-size", zoomSteps[zoomIndex] + "px");
      if (zoomLabel) {
        zoomLabel.textContent = Math.round((zoomSteps[zoomIndex] / 12.5) * 100) + "%";
      }
    }

    function copySelection() {
      var start = input.selectionStart;
      var end = input.selectionEnd;
      if (start === end) {
        flash("Nothing selected");
        return;
      }
      var text = input.value.slice(start, end);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          flash("Copied");
        }, function () {
          flash("Copy blocked by the browser");
        });
      } else {
        flash("Copy blocked by the browser");
      }
    }

    function run(action) {
      if (action === "new") {
        load("", "untitled.txt", true);
        flash("New file");
        return;
      }
      if (action === "open") {
        closeMenus();
        openDialog();
        return;
      }
      if (action === "save") {
        if (writeCookie(input.value)) {
          currentFile = "saved.txt";
          dirty = false;
          if (savedMeta) {
            savedMeta.textContent = "saved";
          }
          refresh();
          flash("Saved to saved.txt");
        } else {
          flash("Too long to save");
        }
        return;
      }
      if (action === "wordwrap") {
        notepad.classList.toggle("is-wrap");
        var wrap = notepad.querySelector('[data-action="wordwrap"]');
        var on = notepad.classList.contains("is-wrap");
        if (wrap) {
          wrap.classList.toggle("is-on", on);
        }
        flash(on ? "Word wrap on" : "Word wrap off");
        return;
      }
      if (action === "zoomin") {
        zoomIndex = Math.min(zoomSteps.length - 1, zoomIndex + 1);
        applyZoom();
        flash("Zoom " + (zoomLabel ? zoomLabel.textContent : ""));
        return;
      }
      if (action === "zoomout") {
        zoomIndex = Math.max(0, zoomIndex - 1);
        applyZoom();
        flash("Zoom " + (zoomLabel ? zoomLabel.textContent : ""));
        return;
      }
      if (action === "about") {
        flash("Notepad 1.0");
        return;
      }
      if (action === "undo") {
        flash("Nothing to undo");
        return;
      }
      if (action === "copy") {
        copySelection();
        return;
      }
      if (action === "cut") {
        flash(input.selectionStart === input.selectionEnd ? "Nothing selected" : "Cut is disabled");
        return;
      }
      if (action === "paste") {
        flash("Clipboard is read-only here");
      }
    }

    input.addEventListener("input", function () {
      dirty = true;
      refresh();
    });

    input.addEventListener("click", updateStatus);
    input.addEventListener("keyup", updateStatus);
    input.addEventListener("scroll", function () {
      if (gutter) {
        gutter.scrollTop = input.scrollTop;
      }
    });

    input.addEventListener("keydown", function (event) {
      if (event.key !== "Tab") {
        return;
      }
      event.preventDefault();
      input.setRangeText("  ", input.selectionStart, input.selectionEnd, "end");
      dirty = true;
      refresh();
    });

    notepad.addEventListener("click", function (event) {
      var control = event.target.closest(".notepad__btn");
      if (control) {
        var which = control.getAttribute("data-win");
        closeAll();
        if (which === "min") {
          notepad.classList.toggle("is-min");
        } else if (which === "max") {
          var maximized = notepad.classList.toggle("is-max");
          if (!maximized) {
            notepad.style.left = "";
            notepad.style.top = "";
            notepad.style.transform = "";
          }
        } else if (which === "close") {
          notepad.classList.add("is-closed");
          if (restore) {
            restore.classList.add("is-on");
          }
        }
        return;
      }

      var file = event.target.closest(".notepad__file");
      if (file) {
        if (file.getAttribute("data-open") === "default") {
          load(defaultText(), "todo.txt", false);
          flash("todo.txt");
        } else {
          var saved = readCookie();
          if (saved) {
            load(saved, "saved.txt", false);
            flash("saved.txt");
          } else {
            flash("Nothing saved yet");
          }
        }
        closeDialog();
        return;
      }

      var item = event.target.closest(".notepad__item");
      if (item) {
        if (item.classList.contains("is-open")) {
          closeAll();
        } else {
          openMenu(item);
        }
        return;
      }

      var option = event.target.closest(".notepad__opt");
      if (option) {
        run(option.getAttribute("data-action"));
        closeMenus();
        return;
      }

      if (!event.target.closest(".notepad__menu") && !event.target.closest(".notepad__dialog")) {
        closeAll();
      }
    });

    var titlebar = notepad.querySelector(".notepad__title");

    if (titlebar) {
      var dragStartX = 0;
      var dragStartY = 0;
      var originX = 0;
      var originY = 0;
      var dragging = false;

      titlebar.addEventListener("pointerdown", function (event) {
        if (!notepad.classList.contains("is-max") || event.target.closest(".notepad__btn")) {
          return;
        }
        var rect = notepad.getBoundingClientRect();
        notepad.style.left = rect.left + "px";
        notepad.style.top = rect.top + "px";
        notepad.style.transform = "none";
        originX = rect.left;
        originY = rect.top;
        dragStartX = event.clientX;
        dragStartY = event.clientY;
        dragging = true;
        notepad.classList.add("is-dragging");
        try {
          titlebar.setPointerCapture(event.pointerId);
        } catch (e) {
          dragging = dragging;
        }
      });

      titlebar.addEventListener("pointermove", function (event) {
        if (!dragging) {
          return;
        }
        var rect = notepad.getBoundingClientRect();
        var nextX = originX + (event.clientX - dragStartX);
        var nextY = originY + (event.clientY - dragStartY);
        var maxX = window.innerWidth - rect.width - 8;
        var maxY = window.innerHeight - rect.height - 8;
        nextX = Math.max(8, Math.min(maxX, nextX));
        nextY = Math.max(8, Math.min(maxY, nextY));
        notepad.style.left = nextX + "px";
        notepad.style.top = nextY + "px";
      });

      function stopDrag(event) {
        if (!dragging) {
          return;
        }
        dragging = false;
        notepad.classList.remove("is-dragging");
        try {
          if (titlebar.hasPointerCapture(event.pointerId)) {
            titlebar.releasePointerCapture(event.pointerId);
          }
        } catch (e) {
          dragging = false;
        }
      }

      titlebar.addEventListener("pointerup", stopDrag);
      titlebar.addEventListener("pointercancel", stopDrag);

      titlebar.addEventListener("dblclick", function () {
        notepad.style.left = "";
        notepad.style.top = "";
        notepad.style.transform = "";
      });
    }

    var items = notepad.querySelectorAll(".notepad__item");

    for (var it = 0; it < items.length; it++) {
      items[it].addEventListener("pointerenter", function () {
        var open = notepad.querySelector(".notepad__item.is-open");
        if (open && open !== this) {
          openMenu(this);
        }
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") {
        return;
      }
      closeAll();
      notepad.classList.remove("is-max");
    });

    if (restore) {
      restore.addEventListener("click", function () {
        notepad.classList.remove("is-closed");
        restore.classList.remove("is-on");
      });
    }

    if (source && "MutationObserver" in window) {
      var watch = new MutationObserver(function () {
        if (currentFile === "todo.txt" && !dirty) {
          input.value = defaultText();
          refresh();
        }
      });
      watch.observe(source, { childList: true, subtree: true, characterData: true });
    }

    var stored = readCookie();

    if (stored) {
      load(stored, "saved.txt", false);
      if (savedMeta) {
        savedMeta.textContent = "saved";
      }
    } else {
      load(defaultText(), "todo.txt", false);
    }

    applyZoom();
  }

  var list = document.querySelector(".projects");

  if (list && hover && !reduce) {
    var preview = document.createElement("img");
    preview.className = "project-preview";
    preview.alt = "";
    preview.setAttribute("aria-hidden", "true");
    list.appendChild(preview);

    var targetX = 0;
    var targetY = 0;
    var currentX = 0;
    var currentY = 0;
    var visible = false;
    var running = false;

    function tick() {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      preview.style.transform = "translate3d(" + currentX.toFixed(1) + "px," + currentY.toFixed(1) + "px,0)";
      if (visible) {
        window.requestAnimationFrame(tick);
      } else {
        running = false;
      }
    }

    function hide() {
      if (!visible) {
        return;
      }
      visible = false;
      preview.classList.remove("is-on");
    }

    function place(event) {
      var row = event.target.closest ? event.target.closest(".row") : null;
      var src = row && row.getAttribute("data-preview");

      if (!src) {
        hide();
        return;
      }

      var box = list.getBoundingClientRect();
      var width = preview.offsetWidth || 272;
      var height = preview.offsetHeight || 170;
      var x = event.clientX - box.left + 24;
      var y = event.clientY - box.top - height / 2;

      if (x + width > box.width) {
        x = box.width - width - 8;
      }
      if (x < 8) {
        x = 8;
      }
      if (y < 0) {
        y = 0;
      }
      if (y + height > box.height) {
        y = box.height - height;
      }

      if (preview.getAttribute("src") !== src) {
        preview.setAttribute("src", src);
        preview.setAttribute("data-contain", row.getAttribute("data-contain") || "0");
      }

      targetX = x;
      targetY = y;

      if (!visible) {
        visible = true;
        currentX = x;
        currentY = y;
        preview.classList.add("is-on");
        if (!running) {
          running = true;
          window.requestAnimationFrame(tick);
        }
      }
    }

    list.addEventListener("pointermove", place, { passive: true });
    list.addEventListener("pointerleave", hide, { passive: true });
    window.addEventListener("blur", hide);
  }
})();
