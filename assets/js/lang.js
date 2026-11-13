const LANGS = ["en", "it", "es", "fr", "ru"];
const LANG_LABELS = { en: "English", it: "Italiano", es: "Español", fr: "Français", ru: "Русский" };
const I18N = {
en: {
nav_home: "Home", nav_about: "About", nav_projects: "Projects", nav_staff: "Staff Experience", nav_info: "Info", menu_open: "Open menu",
staff_eyebrow: "Experience", staff_title: "Staff Experience", staff_max: "Max online", staff_status_active: "Active", staff_status_current: "Current", staff_status_closed: "Closed",
hero_title: "Building unique Minecraft plugins and W projects",
hero_text: "Hi, I'm <span class=\"hero-highlight\">Branduzzo</span>. I build plugins, moderation tools, and websites for Minecraft communities. I also help manage and grow communities, focusing on practical solutions that keep servers running smoothly, fair, and professional. I mainly work with <span class=\"hero-highlight\">Java</span>, <span class=\"hero-highlight\">JavaScript</span>, <span class=\"hero-highlight\">HTML</span> and <span class=\"hero-highlight\">CSS</span>.",
btn_projects: "My Projects", btn_socials: "My Socials",
proj_eyebrow: "Projects", proj_title: "My Projects",
p1_desc: "A server-side Minecraft anticheat that detects client-side mods and hack clients using the Sign Translation Vulnerability (MC-265322), helping ban cheaters.",
p1_link: "View on Modrinth",
p2_desc: "Managing support tickets and media, assisting with development, configuring server systems, and keeping everything running smoothly.",
p2_link: "Visit TypeMC",
p3_name: "All Projects", p3_desc: "Every project I've built in one place: plugins, servers and websites.", p3_link: "View all projects",
p5_name: "MightSMP", p5_desc: "Italian scripted series: I manage the VPS infrastructure and take care of everything on the development side.", p5_link: "Join the Discord",
all_title: "All Projects", all_intro: "The active projects I build and run every day: anticheats, servers and networks.", proj_more: "More projects are on the way.", all_count_label: "active projects",
about_eyebrow: "About", about_title: "Who is this",
about_p1: "Hi, I'm Branduzzo, a Minecraft server administrator and developer with hands-on experience in multiplayer communities. I work every day to keep gameplay fair, support players, and improve staff workflows.",
about_p2: "I started from a passion for Minecraft and server management, then specialized in staff management, Discord organization and tools for communities.",
about_p3: "Today I focus on practical projects: plugin and sites development, server infrastructure, custom gameplay systems, community moderation, and fast, SEO-friendly websites for servers, guilds, and creators.",
badge_community: "Community Managing", badge_social: "Social Media Manager",
todo1: "Launch my portfolio", todo2: "Open a studios", todo3: "Help TypeMC reach 100 players", todo4: "Publish a new plugin",
info_eyebrow: "Info", info_title: "About this site",
info_p1: "This is my personal portfolio, where I showcase my work for Minecraft communities, from plugins and moderation tools to websites, alongside the projects I work on every day.",
info_p2: "This site took A LOT of inspiration from <a class=\"info-link\" href=\"https://github.com/msafdev/macfolio\" target=\"_blank\" rel=\"noopener\">macfolio by msafdev</a>. Go check out the original project and leave it a star.",
cred_eyebrow: "Credits", role_dev: "Developing", role_des: "Designing",
err_title: "Page not found",
err_text: "This page went missing like a panda in tall grass. Let's get you back home.",
err_back: "Back to Home",
consent_text: "This site stores only three optional cookies: your language, your notepad text and your cursor. No analytics, no ads, no tracking. Details in the Privacy Policy.",
consent_accept: "Accept", consent_decline: "Decline", priv_link: "Privacy Policy", site_source: "Site Source",
priv_title: "Privacy Policy",
priv_intro: "Short version: this site does not track you. No analytics, no ads, no accounts, no third-party scripts.",
priv_h1: "Cookies we use",
priv_p1: "Only three, all created by this site and all optional: branduzzo-lang remembers your language, branduzzo-todo remembers what you typed in the notepad, branduzzo-cursor remembers the cursor you picked in the secret menu. Nothing is sent anywhere: they live in your browser and you can delete them at any time from your browser settings.",
priv_h2: "What we do not use",
priv_p2: "No analytics, no tracking pixels, no advertising, no third-party embeds, no fonts from other servers. Your IP is visible to the hosting provider like on any website, and that is all. If you decline the banner, no cookie is written and your language choice stays in localStorage.",
priv_h3: "Contact",
priv_p3: "Questions about privacy? Contact me at hello@branduzzo.it.",
},
it: {
nav_home: "Home", nav_about: "Chi sono", nav_projects: "Progetti", nav_staff: "Esperienza Staff", nav_info: "Info", menu_open: "Apri il menu",
staff_eyebrow: "Esperienza", staff_title: "Esperienza Staff", staff_max: "Picco online", staff_status_active: "Attivo", staff_status_current: "Tutt'ora", staff_status_closed: "Chiuso",
hero_title: "Creo plugin Minecraft unici e progetti top",
hero_text: "Ciao, sono <span class=\"hero-highlight\">Branduzzo</span>. Creo plugin, strumenti di moderazione e siti web per community Minecraft. Aiuto anche a gestire e far crescere le community, con soluzioni pratiche che mantengono i server stabili, equi e professionali. Lavoro soprattutto con <span class=\"hero-highlight\">Java</span>, <span class=\"hero-highlight\">JavaScript</span>, <span class=\"hero-highlight\">HTML</span> e <span class=\"hero-highlight\">CSS</span>.",
btn_projects: "I miei progetti", btn_socials: "I miei social",
proj_eyebrow: "Progetti", proj_title: "I miei progetti",
p1_desc: "Un anticheat Minecraft lato server che rileva mod client e hack client usando la Sign Translation Vulnerability (MC-265322), aiutando a bannare i cheater.",
p1_link: "Vedi su Modrinth",
p2_desc: "Gestione di ticket di supporto e media, aiuto nello sviluppo, configurazione dei sistemi del server, e tutto che funziona senza problemi.",
p2_link: "Visita TypeMC",
p3_name: "Tutti i progetti", p3_desc: "Tutti i progetti che ho fatto in un unico posto: plugin, server e siti.", p3_link: "Vedi tutti i progetti",
p5_name: "MightSMP", p5_desc: "Serie scripted italiana: mi occupo della gestione della VPS e di tutto il lato developing.", p5_link: "Entra nel Discord",
all_title: "Tutti i progetti", all_intro: "I progetti attivi che porto avanti ogni giorno: anticheat, server e network.", proj_more: "Altri progetti in arrivo.", all_count_label: "progetti attivi",
about_eyebrow: "Chi sono", about_title: "Chi è chist",
about_p1: "Ciao, sono Branduzzo, amministratore e sviluppatore di server Minecraft con esperienza diretta nelle community multiplayer. Lavoro ogni giorno per mantenere il gioco equo, supportare i giocatori e migliorare i flussi di lavoro dello staff.",
about_p2: "Ho iniziato dalla passione per Minecraft e la gestione dei server, poi mi sono specializzato in gestione dello staff, organizzazione Discord e strumenti per le community.",
about_p3: "Oggi mi concentro su progetti pratici: sviluppo di plugin e siti, infrastruttura dei server, sistemi di gameplay personalizzati, moderazione delle community e siti veloci e SEO-friendly per server, gilde e creator.",
badge_community: "Gestione community", badge_social: "Social Media Manager",
todo1: "Lanciare il mio portfolio", todo2: "Aprire uno studio", todo3: "Aiutare TypeMC a raggiungere 100 giocatori", todo4: "Pubblicare un nuovo plugin",
info_eyebrow: "Info", info_title: "Su questo sito",
info_p1: "Questo è il mio portfolio personale, dove mostro il mio lavoro per le community Minecraft, dai plugin agli strumenti di moderazione fino ai siti web, insieme ai progetti a cui lavoro ogni giorno.",
info_p2: "Questo sito ha preso MOLTA ispirazione da <a class=\"info-link\" href=\"https://github.com/msafdev/macfolio\" target=\"_blank\" rel=\"noopener\">macfolio di msafdev</a>. Dai un'occhiata al progetto originale e lascia una stella.",
cred_eyebrow: "Crediti", role_dev: "Sviluppo", role_des: "Design",
err_title: "Pagina non trovata",
err_text: "Questa pagina è sparita come un panda nell'erba alta. Torniamo alla home.",
err_back: "Torna alla Home",
consent_text: "Questo sito salva solo tre cookie opzionali: lingua, testo del notepad e cursore. Niente analytics, niente pubblicità, niente tracciamento. Dettagli nella Privacy Policy.",
consent_accept: "Accetta", consent_decline: "Rifiuta", priv_link: "Privacy Policy", site_source: "Sorgente del sito",
priv_title: "Privacy Policy",
priv_intro: "In breve: questo sito non ti traccia. Niente analytics, niente pubblicità, niente account, niente script di terze parti.",
priv_h1: "Cookie che uso",
priv_p1: "Solo tre, tutti creati da questo sito e tutti opzionali: branduzzo-lang ricorda la tua lingua, branduzzo-todo ricorda quello che hai scritto nel notepad, branduzzo-cursor ricorda il cursore scelto nel menu segreto. Niente viene inviato da nessuna parte: restano nel tuo browser e puoi cancellarli quando vuoi dalle impostazioni.",
priv_h2: "Cosa non uso",
priv_p2: "Niente analytics, niente pixel di tracciamento, niente pubblicità, niente embed di terze parti, niente font da altri server. Il tuo IP è visibile al provider di hosting come su qualsiasi sito, e basta. Se rifiuti il banner nessun cookie viene scritto e la lingua resta nel local storage.",
priv_h3: "Contatti",
priv_p3: "Domande sulla privacy? Scrivimi a hello@branduzzo.it.",
},
es: {
nav_home: "Inicio", nav_about: "Sobre mí", nav_projects: "Proyectos", nav_staff: "Experiencia de Staff", nav_info: "Info", menu_open: "Abrir el menú",
staff_eyebrow: "Experiencia", staff_title: "Experiencia de Staff", staff_max: "Máx. online", staff_status_active: "Activo", staff_status_current: "Actual", staff_status_closed: "Cerrado",
hero_title: "Creo plugins únicos de Minecraft y proyectos increíbles",
hero_text: "Hola, soy <span class=\"hero-highlight\">Branduzzo</span>. Creo plugins, herramientas de moderación y sitios web para comunidades de Minecraft. También ayudo a gestionar y hacer crecer comunidades, con soluciones prácticas que mantienen los servidores estables, justos y profesionales. Trabajo sobre todo con <span class=\"hero-highlight\">Java</span>, <span class=\"hero-highlight\">JavaScript</span>, <span class=\"hero-highlight\">HTML</span> y <span class=\"hero-highlight\">CSS</span>.",
btn_projects: "Mis proyectos", btn_socials: "Mis redes",
proj_eyebrow: "Proyectos", proj_title: "Mis proyectos",
p1_desc: "Un anticheat de Minecraft del lado del servidor que detecta mods de cliente y hack clients usando la Sign Translation Vulnerability (MC-265322), ayudando a banear tramposos.",
p1_link: "Ver en Modrinth",
p2_desc: "Gestión de tickets de soporte y medios, ayuda en el desarrollo, configuración de los sistemas del servidor y mantener todo funcionando sin problemas.",
p2_link: "Visitar TypeMC",
p3_name: "Todos los proyectos", p3_desc: "Todos los proyectos que he hecho en un solo lugar: plugins, servidores y sitios.", p3_link: "Ver todos los proyectos",
p5_name: "MightSMP", p5_desc: "Serie scripted italiana: me encargo de la gestión del VPS y de todo el lado de desarrollo.", p5_link: "Únete al Discord",
all_title: "Todos los proyectos", all_intro: "Los proyectos activos que llevo cada día: anticheats, servidores y redes.", proj_more: "Más proyectos en camino.", all_count_label: "proyectos activos",
about_eyebrow: "Sobre mí", about_title: "Quién es este",
about_p1: "Hola, soy Branduzzo, administrador y desarrollador de servidores de Minecraft con experiencia directa en comunidades multijugador. Trabajo cada día para mantener el juego justo, apoyar a los jugadores y mejorar los flujos del staff.",
about_p2: "Empecé por la pasión por Minecraft y la gestión de servidores, luego me especialicé en gestión del staff, organización de Discord y herramientas para comunidades.",
about_p3: "Hoy me centro en proyectos prácticos: desarrollo de plugins y sitios, infraestructura de servidores, sistemas de juego personalizados, moderación de comunidades y sitios rápidos y SEO-friendly para servidores, gremios y creadores.",
badge_community: "Gestión de comunidades", badge_social: "Social Media Manager",
todo1: "Lanzar mi portafolio", todo2: "Abrir un estudio", todo3: "Ayudar a TypeMC a llegar a 100 jugadores", todo4: "Publicar un nuevo plugin",
info_eyebrow: "Info", info_title: "Sobre este sitio",
info_p1: "Este es mi portafolio personal, donde muestro mi trabajo para las comunidades de Minecraft, desde plugins y herramientas de moderación hasta sitios web, junto con los proyectos en los que trabajo cada día.",
info_p2: "Este sitio tomó MUCHA inspiración de <a class=\"info-link\" href=\"https://github.com/msafdev/macfolio\" target=\"_blank\" rel=\"noopener\">macfolio de msafdev</a>. Échale un vistazo al proyecto original y deja una estrella.",
cred_eyebrow: "Créditos", role_dev: "Desarrollo", role_des: "Diseño",
err_title: "Página no encontrada",
err_text: "Esta página desapareció como un panda en la hierba alta. Volvamos al inicio.",
err_back: "Volver al inicio",
consent_text: "Este sitio solo guarda tres cookies opcionales: idioma, texto del bloc de notas y cursor. Sin analiticas, sin publicidad, sin seguimiento. Detalles en la Politica de Privacidad.",
consent_accept: "Aceptar", consent_decline: "Rechazar", priv_link: "Política de Privacidad", site_source: "Código del sitio",
priv_title: "Política de Privacidad",
priv_intro: "En resumen: este sitio no te rastrea. Sin analiticas, sin anuncios, sin cuentas, sin scripts de terceros.",
priv_h1: "Cookies que uso",
priv_p1: "Solo tres, todas creadas por este sitio y todas opcionales: branduzzo-lang recuerda tu idioma, branduzzo-todo recuerda lo que escribiste en el bloc de notas, branduzzo-cursor recuerda el cursor que elegiste en el menu secreto. Nada se envia a ningún sitio: viven en tu navegador y puedes borrarlas cuando quieras.",
priv_h2: "Lo que no uso",
priv_p2: "Sin analiticas, sin pixeles de seguimiento, sin publicidad, sin contenido incrustado de terceros, sin fuentes de otros servidores. Tu IP es visible para el proveedor de hosting como en cualquier sitio web. Si rechazas el banner no se escribe ninguna cookie y tu idioma queda en el almacenamiento local.",
priv_h3: "Contacto",
priv_p3: "¿Preguntas sobre privacidad? Escríbeme a hello@branduzzo.it.",
},
fr: {
nav_home: "Accueil", nav_about: "À propos", nav_projects: "Projets", nav_staff: "Expérience Staff", nav_info: "Infos", menu_open: "Ouvrir le menu",
staff_eyebrow: "Expérience", staff_title: "Expérience Staff", staff_max: "Max en ligne", staff_status_active: "Actif", staff_status_current: "Actuel", staff_status_closed: "Fermé",
hero_title: "Je crée des plugins Minecraft uniques et des projets géniaux",
hero_text: "Salut, moi c'est <span class=\"hero-highlight\">Branduzzo</span>. Je crée des plugins, des outils de modération et des sites web pour les communautés Minecraft. J'aide aussi à gérer et à faire grandir les communautés, avec des solutions pratiques qui gardent les serveurs stables, équitables et professionnels. Je travaille surtout avec <span class=\"hero-highlight\">Java</span>, <span class=\"hero-highlight\">JavaScript</span>, <span class=\"hero-highlight\">HTML</span> et <span class=\"hero-highlight\">CSS</span>.",
btn_projects: "Mes projets", btn_socials: "Mes réseaux",
proj_eyebrow: "Projets", proj_title: "Mes projets",
p1_desc: "Un anticheat Minecraft côté serveur qui détecte les mods clients et les hack clients grâce à la Sign Translation Vulnerability (MC-265322), pour aider à bannir les tricheurs.",
p1_link: "Voir sur Modrinth",
p2_desc: "Gestion des tickets de support et des médias, aide au développement, configuration des systèmes du serveur, pour que tout tourne sans accroc.",
p2_link: "Visiter TypeMC",
p3_name: "Tous les projets", p3_desc: "Tous mes projets au même endroit : plugins, serveurs et sites.", p3_link: "Voir tous les projets",
p5_name: "MightSMP", p5_desc: "Série scripted italienne : je gère le VPS et tout le côté développement.", p5_link: "Rejoindre le Discord",
all_title: "Tous les projets", all_intro: "Les projets actifs que je fais tourner au quotidien : anticheats, serveurs et réseaux.", proj_more: "D'autres projets arrivent.", all_count_label: "projets actifs",
about_eyebrow: "À propos", about_title: "Qui est-ce",
about_p1: "Salut, moi c'est Branduzzo, administrateur et développeur de serveurs Minecraft avec une expérience directe des communautés multijoueurs. Je travaille chaque jour pour garder un jeu équitable, aider les joueurs et améliorer les méthodes du staff.",
about_p2: "J'ai commencé par la passion pour Minecraft et la gestion de serveurs, puis je me suis spécialisé dans la gestion du staff, l'organisation Discord et les outils pour communautés.",
about_p3: "Aujourd'hui je me concentre sur des projets concrets : développement de plugins et de sites, infrastructure serveurs, systèmes de jeu sur mesure, modération des communautés, et des sites rapides et SEO-friendly pour serveurs, guildes et créateurs.",
badge_community: "Gestion de communauté", badge_social: "Social Media Manager",
todo1: "Lancer mon portfolio", todo2: "Ouvrir un studio", todo3: "Aider TypeMC à atteindre 100 joueurs", todo4: "Publier un nouveau plugin",
info_eyebrow: "Infos", info_title: "À propos de ce site",
info_p1: "Ceci est mon portfolio personnel, où je présente mon travail pour les communautés Minecraft, des plugins et outils de modération aux sites web, ainsi que les projets sur lesquels je travaille chaque jour.",
info_p2: "Ce site s'est BEAUCOUP inspiré de <a class=\"info-link\" href=\"https://github.com/msafdev/macfolio\" target=\"_blank\" rel=\"noopener\">macfolio par msafdev</a>. Va voir le projet original et laisse une étoile.",
cred_eyebrow: "Crédits", role_dev: "Développement", role_des: "Design",
err_title: "Page introuvable",
err_text: "Cette page a disparu comme un panda dans les hautes herbes. Retournons à l'accueil.",
err_back: "Retour à l'accueil",
consent_text: "Ce site n'enregistre que trois cookies optionnels : ta langue, ton texte du bloc-notes et ton curseur. Pas d'analytics, pas de pub, pas de suivi. Details dans la Politique de Confidentialite.",
consent_accept: "Accepter", consent_decline: "Refuser", priv_link: "Politique de Confidentialité", site_source: "Code du site",
priv_title: "Politique de Confidentialité",
priv_intro: "En bref : ce site ne te suit pas. Pas d'analytics, pas de pubs, pas de comptes, pas de scripts tiers.",
priv_h1: "Les cookies utilisés",
priv_p1: "Seulement trois, tous créés par ce site et tous optionnels : branduzzo-lang retient ta langue, branduzzo-todo retient ce que tu as écrit dans le bloc-notes, branduzzo-cursor retient le curseur choisi dans le menu secret. Rien n'est envoyé nulle part : ils restent dans ton navigateur et tu peux les supprimer à tout moment.",
priv_h2: "Ce qu'on n'utilise pas",
priv_p2: "Pas d'analytics, pas de pixels de suivi, pas de publicite, pas d'embeds tiers, pas de polices depuis d'autres serveurs. Ton IP est visible par l'hébergeur comme sur n'importe quel site. Si tu refuses la bannière, aucun cookie n'est écrit et ta langue reste dans le stockage local.",
priv_h3: "Contact",
priv_p3: "Des questions sur la confidentialité ? Écris-moi à hello@branduzzo.it.",
},
ru: {
nav_home: "Главная", nav_about: "Обо мне", nav_projects: "Проекты", nav_staff: "Опыт в команде", nav_info: "Инфо", menu_open: "Открыть меню",
staff_eyebrow: "Опыт", staff_title: "Опыт в команде", staff_max: "Макс. онлайн", staff_status_active: "Активен", staff_status_current: "Сейчас", staff_status_closed: "Закрыт",
hero_title: "Создаю уникальные плагины Minecraft и крутые проекты",
hero_text: "Привет, я <span class=\"hero-highlight\">Branduzzo</span>. Я создаю плагины, инструменты модерации и сайты для Minecraft-сообществ. Также помогаю управлять сообществами и развивать их, предлагая практичные решения, благодаря которым серверы работают стабильно, честно и профессионально. В основном работаю с <span class=\"hero-highlight\">Java</span>, <span class=\"hero-highlight\">JavaScript</span>, <span class=\"hero-highlight\">HTML</span> и <span class=\"hero-highlight\">CSS</span>.",
btn_projects: "Мои проекты", btn_socials: "Мои соцсети",
proj_eyebrow: "Проекты", proj_title: "Мои проекты",
p1_desc: "Серверный античит для Minecraft, который обнаруживает клиентские моды и чит-клиенты с помощью Sign Translation Vulnerability (MC-265322) и помогает банить читеров.",
p1_link: "Смотреть на Modrinth",
p2_desc: "Управление тикетами поддержки и медиа, помощь в разработке, настройка систем сервера — чтобы всё работало без сбоев.",
p2_link: "Открыть TypeMC",
p3_name: "Все проекты", p3_desc: "Все мои проекты в одном месте: плагины, серверы и сайты.", p3_link: "Смотреть все проекты",
p5_name: "MightSMP", p5_desc: "Итальянский скриптовый сериал: я отвечаю за VPS и всю разработку.", p5_link: "Зайти в Discord",
all_title: "Все проекты", all_intro: "Активные проекты, которыми я занимаюсь каждый день: античиты, серверы и сети.", proj_more: "Скоро будет больше проектов.", all_count_label: "активных проектов",
about_eyebrow: "Обо мне", about_title: "Кто это",
about_p1: "Привет, я Branduzzo — администратор и разработчик Minecraft-серверов с практическим опытом в мультиплеерных сообществах. Каждый день работаю над честной игрой, поддержкой игроков и улучшением работы команды.",
about_p2: "Всё началось с увлечения Minecraft и управлением серверами, затем я специализировался на управлении командой, организации Discord и инструментах для сообществ.",
about_p3: "Сегодня я сосредоточен на практических проектах: разработка плагинов и сайтов, инфраструктура серверов, кастомные игровые системы, модерация сообществ, а также быстрые SEO-дружелюбные сайты для серверов, гильдий и авторов.",
badge_community: "Управление сообществом", badge_social: "SMM-менеджер",
todo1: "Запустить моё портфолио", todo2: "Открыть студию", todo3: "Помочь TypeMC набрать 100 игроков", todo4: "Опубликовать новый плагин",
info_eyebrow: "Инфо", info_title: "Об этом сайте",
info_p1: "Это моё личное портфолио, где я показываю свою работу для Minecraft-сообществ — от плагинов и инструментов модерации до сайтов, — а также проекты, над которыми работаю каждый день.",
info_p2: "Этот сайт ВДОХНОВЛЁН <a class=\"info-link\" href=\"https://github.com/msafdev/macfolio\" target=\"_blank\" rel=\"noopener\">macfolio от msafdev</a>. Загляните в оригинальный проект и поставьте звезду.",
cred_eyebrow: "Авторы", role_dev: "Разработка", role_des: "Дизайн",
err_title: "Страница не найдена",
err_text: "Эта страница пропала, как панда в высокой траве. Давайте вернёмся домой.",
err_back: "На главную",
consent_text: "Сайт хранит только три необязательных cookie: язык, текст блокнота и курсор. Без аналитики, рекламы и слежки. Подробности — в Политике конфиденциальности.",
consent_accept: "Принять", consent_decline: "Отклонить", priv_link: "Политика конфиденциальности", site_source: "Исходники",
priv_title: "Политика конфиденциальности",
priv_intro: "Коротко: этот сайт не отслеживает вас. Ни аналитики, ни рекламы, ни аккаунтов, ни сторонних скриптов.",
priv_h1: "Какие cookie используются",
priv_p1: "Всего три, все созданы этим сайтом и все необязательные: branduzzo-lang запоминает ваш язык, branduzzo-todo — текст в блокноте, branduzzo-cursor — выбранный курсор в секретном меню. Ничего никуда не отправляется: они живут в вашем браузере, и их можно удалить в любой момент.",
priv_h2: "Чего мы не используем",
priv_p2: "Ни аналитики, ни пикселей слежения, ни рекламы, ни сторонних встраиваний, ни шрифтов с других серверов. Ваш IP виден хостинг-провайдеру, как на любом сайте. Если вы откажетесь от баннера, cookie не записываются, а выбор языка остаётся в локальном хранилище.",
priv_h3: "Контакты",
priv_p3: "Вопросы о конфиденциальности? Напишите мне: hello@branduzzo.it.",
}
};
const CONSENT_KEY = "branduzzo-consent";
const LANG_LS_KEY = "branduzzo-lang";
function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch (e) {
    return null;
  }
}
function getCookieLang() {
  try {
    const m = document.cookie.match(/(?:^|; )branduzzo-lang=([a-z]{2})/);
    if (m && LANGS.indexOf(m[1]) !== -1) {
      return m[1];
    }
  } catch (e) {
    return null;
  }
  return null;
}
function getStoredLang() {
  try {
    const ls = localStorage.getItem(LANG_LS_KEY);
    if (ls && LANGS.indexOf(ls) !== -1) {
      return ls;
    }
  } catch (e) {
    return;
  }
  return getCookieLang();
}
function setCookieLang(lang) {
  try {
    document.cookie = "branduzzo-lang=" + lang + "; max-age=31536000; path=/; SameSite=Lax";
  } catch (e) {
    return;
  }
}
function deleteCookieLang() {
  try {
    document.cookie = "branduzzo-lang=; max-age=0; path=/; SameSite=Lax";
  } catch (e) {
    return;
  }
}
function setStoredLang(lang) {
  try {
    localStorage.setItem(LANG_LS_KEY, lang);
  } catch (e) {
    return;
  }
  if (getConsent() === "accepted") {
    setCookieLang(lang);
  }
}
function detectLang() {
  const saved = getStoredLang();
  if (saved) {
    return saved;
  }
  try {
    const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (LANGS.indexOf(nav) !== -1) {
      return nav;
    }
  } catch (e) {
    return "en";
  }
  return "en";
}
function applyLang(lang) {
  if (LANGS.indexOf(lang) === -1) {
    lang = "en";
  }
  const dict = I18N[lang];
  document.documentElement.setAttribute("lang", lang);
  const textEls = document.querySelectorAll("[data-i18n]");
  textEls.forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });
  const htmlEls = document.querySelectorAll("[data-i18n-html]");
  htmlEls.forEach(function (el) {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
  const options = document.querySelectorAll("[data-lang-value]");
  options.forEach(function (opt) {
    if (opt.getAttribute("data-lang-value") === lang) {
      opt.classList.add("active");
    } else {
      opt.classList.remove("active");
    }
  });
  const label = document.getElementById("langLabel");
  if (label) {
    label.textContent = lang.toUpperCase();
  }
}
let currentLang = detectLang();
applyLang(currentLang);
const langButton = document.getElementById("langButton");
const langMenu = document.getElementById("langMenu");
if (langButton && langMenu) {
  langButton.addEventListener("click", function (event) {
    event.stopPropagation();
    langMenu.classList.toggle("open");
    const mm = document.getElementById("mobileMenu");
    if (mm) {
      mm.classList.remove("open");
    }
  });
  langMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });
  const langOptions = langMenu.querySelectorAll("[data-lang-value]");
  langOptions.forEach(function (opt) {
    opt.addEventListener("click", function (event) {
      event.stopPropagation();
      currentLang = opt.getAttribute("data-lang-value");
      setStoredLang(currentLang);
      applyLang(currentLang);
      langMenu.classList.remove("open");
    });
  });
  document.addEventListener("click", function () {
    langMenu.classList.remove("open");
  });
}
