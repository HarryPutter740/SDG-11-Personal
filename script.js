document.addEventListener("DOMContentLoaded", function() {

    // === SCROLL PROGRESS BAR (Global) ===
    const scrollProgressBar = document.querySelector('.scroll-progress-bar');
    if (scrollProgressBar) {
        const updateProgressBar = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (scrollHeight > clientHeight) {
                const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
                scrollProgressBar.style.width = `${scrollPercent}%`;
            } else {
                scrollProgressBar.style.width = '0%'; // No scrollbar if content is not scrollable
            }
        };
        window.addEventListener('scroll', updateProgressBar);
        updateProgressBar(); // Initial check
    }

    // === TRANSLATION LOGIC ===
    const translations = {
        'EN': {
            'nav_home': 'Home',
            'nav_targets': 'Detailed Targets',
            'nav_gallery': 'Gallery',
            'hero_title': 'Sustainable Development Goal 11',
            'hero_subtitle': 'Make cities and human settlements inclusive, safe, resilient, and sustainable.',
            'why_matters_title': 'Why SDG 11 Matters',
            'targets_hero_title': 'SDG 11: Detailed Targets',
            'targets_hero_subtitle': 'A closer look at the specific goals for sustainable urban development.',
            'stats_billion_people': 'Billion People in Cities',
            'stat_pop_2050': '% of World Population in Cities by 2050',
            'stat_gdp': '% of Global GDP Generated in Cities',
            'stat_co2': '% of Global CO2 Emissions from Cities',
            'dyk_title': 'Did You Know?',
            'dyk_fact1': "Cities consume over <strong>two-thirds</strong> of the world's energy and account for more than 70% of global CO2 emissions.",
            'dyk_fact2': "By 2050, the world's urban population is expected to nearly <strong>double</strong>, making sustainable urbanization a critical global priority.",
            'dyk_fact3': "Over <strong>1 billion</strong> people live in slums, and this number is projected to rise without significant intervention in housing policies.",
            'co_title': 'Challenges vs. Opportunities',
            'co_challenges_title': 'Challenges',
            'co_opportunities_title': 'Opportunities',
            'co_challenge1': 'Pollution & Emissions',
            'co_challenge2': 'Housing Shortages',
            'co_challenge3': 'Infrastructure Strain',
            'co_challenge4': 'Social Inequality',
            'co_opportunity1': 'Green Innovation',
            'co_opportunity2': 'Economic Hubs',
            'co_opportunity3': 'Cultural Diversity',
            'co_opportunity4': 'Efficient Resource Use',
            'action_title': 'SDG 11 in Action',
            'action_case1_title': "Singapore's Green Plan 2030",
            'action_case1_desc': "A nationwide movement to advance Singapore's national agenda on sustainable development. It charts ambitious and concrete targets, seeking to change the way people live, work, study and play, while creating new opportunities for growth.",
            'action_case2_title': "Freiburg's Vauban District, Germany",
            'action_case2_desc': 'A world-renowned example of sustainable urban living. The district is car-free, with extensive cycling networks, and buildings constructed to ultra-low energy consumption standards ("Passivhaus"), many with solar installations.',
            'action_case3_title': "Curitiba's Bus Rapid Transit (BRT)",
            'action_case3_desc': "Pioneered in Brazil, Curitiba's BRT system is a model for efficient, high-capacity public transport. Its dedicated bus lanes, pre-payment stations, and iconic tube-like stops have inspired similar systems worldwide, reducing congestion and pollution.",
            'objectives_title': 'Core Objectives',
            'objective1_title': 'Safe Housing',
            'objective1_desc': 'Upgrade slums and ensure access to adequate and affordable housing for all.',
            'objective2_title': 'Sustainable Transport',
            'objective2_desc': 'Provide safe, affordable, and accessible transport systems, especially public transit.',
            'objective3_title': 'Protect Heritage',
            'objective3_desc': "Strengthen efforts to protect and safeguard the world's cultural and natural heritage.",
            'objective4_title': 'Green Spaces',
            'objective4_desc': 'Ensure universal access to safe, inclusive, and accessible green and public spaces.',
            'help_title': 'How You Can Help',
            'help_item1': '<strong>Champion Green Spaces.</strong> Support local parks, community gardens, and tree-planting initiatives. Green spaces are vital for air quality, biodiversity, and public health.',
            'help_item2': '<strong>Use Sustainable Transport.</strong> Opt for public transportation, cycling, or walking whenever possible. Reducing car dependency lowers emissions and eases traffic congestion.',
            'help_item3': "<strong>Advocate for Smart Policies.</strong> Voice your support for affordable housing, efficient waste management, and inclusive urban planning at local government meetings. Your voice matters in shaping your city's future."
        },
        'ES': {
            'nav_home': 'Inicio',
            'nav_targets': 'Objetivos Detallados',
            'nav_gallery': 'Galería',
            'hero_title': 'Objetivo de Desarrollo Sostenible 11',
            'hero_subtitle': 'Lograr que las ciudades y los asentamientos humanos sean inclusivos, seguros, resilientes y sostenibles.',
            'why_matters_title': 'Por Qué Importa el ODS 11',
            'targets_hero_title': 'ODS 11: Objetivos Detallados',
            'targets_hero_subtitle': 'Una mirada más cercana a las metas específicas para el desarrollo urbano sostenible.',
            'stats_billion_people': 'Mil Millones de Personas en Ciudades',
            'stat_pop_2050': '% de la Población Mundial en Ciudades para 2050',
            'stat_gdp': '% del PIB Global Generado en Ciudades',
            'stat_co2': '% de las Emisiones Globales de CO2 desde Ciudades',
            'dyk_title': '¿Sabías Que?',
            'dyk_fact1': 'Las ciudades consumen más de <strong>dos tercios</strong> de la energía mundial y representan más del 70% de las emisiones globales de CO2.',
            'dyk_fact2': 'Para 2050, se espera que la población urbana mundial casi se <strong>duplique</strong>, convirtiendo la urbanización sostenible en una prioridad mundial crítica.',
            'dyk_fact3': 'Más de <strong>mil millones</strong> de personas viven en barrios marginales, y se prevé que este número aumente sin una intervención significativa en las políticas de vivienda.',
            'co_title': 'Desafíos vs. Oportunidades',
            'co_challenges_title': 'Desafíos',
            'co_opportunities_title': 'Oportunidades',
            'co_challenge1': 'Contaminación y Emisiones',
            'co_challenge2': 'Escasez de Vivienda',
            'co_challenge3': 'Presión sobre la Infraestructura',
            'co_challenge4': 'Desigualdad Social',
            'co_opportunity1': 'Innovación Verde',
            'co_opportunity2': 'Centros Económicos',
            'co_opportunity3': 'Diversidad Cultural',
            'co_opportunity4': 'Uso Eficiente de Recursos',
            'action_title': 'ODS 11 en Acción',
            'action_case1_title': 'Plan Verde de Singapur 2030',
            'action_case1_desc': 'Un movimiento nacional para avanzar en la agenda de Singapur sobre desarrollo sostenible. Traza metas ambiciosas y concretas, buscando cambiar la forma en que la gente vive, trabaja, estudia y juega, mientras crea nuevas oportunidades de crecimiento.',
            'action_case2_title': 'Distrito Vauban de Friburgo, Alemania',
            'action_case2_desc': 'Un ejemplo de vida urbana sostenible de renombre mundial. El distrito es libre de automóviles, con extensas redes de ciclismo y edificios construidos con estándares de consumo de energía ultrabajo ("Passivhaus"), muchos con instalaciones solares.',
            'action_case3_title': 'Sistema de Tránsito Rápido de Curitiba (BRT)',
            'action_case3_desc': 'Pionero en Brasil, el sistema BRT de Curitiba es un modelo de transporte público eficiente y de alta capacidad. Sus carriles exclusivos para autobuses, estaciones de prepago y paradas icónicas en forma de tubo han inspirado sistemas similares en todo el mundo, reduciendo la congestión y la contaminación.',
            'objectives_title': 'Objetivos Principales',
            'objective1_title': 'Vivienda Segura',
            'objective1_desc': 'Mejorar los barrios marginales y garantizar el acceso a viviendas adecuadas y asequibles para todos.',
            'objective2_title': 'Transporte Sostenible',
            'objective2_desc': 'Proporcionar sistemas de transporte seguros, asequibles y accesibles, especialmente el transporte público.',
            'objective3_title': 'Proteger el Patrimonio',
            'objective3_desc': 'Fortalecer los esfuerzos para proteger y salvaguardar el patrimonio cultural y natural del mundo.',
            'objective4_title': 'Espacios Verdes',
            'objective4_desc': 'Garantizar el acceso universal a espacios verdes y públicos seguros, inclusivos y accesibles.',
            'help_title': 'Cómo Puedes Ayudar',
            'help_item1': '<strong>Defiende los Espacios Verdes.</strong> Apoya los parques locales, jardines comunitarios e iniciativas de plantación de árboles. Los espacios verdes son vitales para la calidad del aire, la biodiversidad y la salud pública.',
            'help_item2': '<strong>Usa Transporte Sostenible.</strong> Opta por el transporte público, la bicicleta o caminar siempre que sea posible. Reducir la dependencia del automóvil disminuye las emisiones y alivia la congestión del tráfico.',
            'help_item3': '<strong>Aboga por Políticas Inteligentes.</strong> Expresa tu apoyo a la vivienda asequible, la gestión eficiente de residuos y la planificación urbana inclusiva en las reuniones del gobierno local. Tu voz importa en la configuración del futuro de tu ciudad.'
        }
    };

    // === Nav Link Animation on Load ===
    const navLinks = document.querySelectorAll('.header__menu .header__menu-link');
    let totalDelay = 0.5; // Initial delay to let the page settle

    navLinks.forEach(link => {
        const text = link.textContent;
        link.textContent = ''; // Clear original text

        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.className = 'nav-letter';
            span.textContent = char;
            span.style.animationDelay = `${totalDelay}s`;
            link.appendChild(span);
            totalDelay += 0.03; // Stagger the delay for each letter
        });
        totalDelay += 0.1; // Add a small pause between links
    });

    // === Preloader (only on homepage) ===
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('hide-preloader');
        });
    }

    // === Search Overlay Logic (Global) ===
    const searchOverlay = document.querySelector('.search-overlay');
    const openSearchBtn = document.querySelector('.search-btn');
    const closeSearchBtn = document.querySelector('.search-close-btn');
    const searchInput = document.querySelector('.search-overlay-input');
    const searchResultsContainer = document.querySelector('.search-results-container');

    if (searchOverlay && openSearchBtn && closeSearchBtn && searchInput && searchResultsContainer) {
        const searchIndex = [
            { title: 'Home', url: 'sdg11.html', keywords: 'main sustainable cities communities why data targets action help' },
            { title: 'Detailed Targets', url: 'targets.html', keywords: 'goals objectives housing transport heritage disasters' },
            { title: 'Inspiration Gallery', url: 'gallery.html', keywords: 'images photos pictures vision' },
            { title: 'Privacy Policy', url: 'privacy.html', keywords: 'cookies data legal terms' }
        ];

        const displayResults = (results) => {
            searchResultsContainer.innerHTML = '';
            if (results.length === 0) {
                searchResultsContainer.innerHTML = '<p>No results found.</p>';
                return;
            }
            results.forEach((result, index) => {
                const item = document.createElement('a');
                item.href = result.url;
                item.className = 'search-result-item';
                item.innerHTML = `${result.title} <span>${result.url}</span>`;
                item.style.animationDelay = `${index * 0.05}s`; // Staggered delay
                searchResultsContainer.appendChild(item);
            });
        };

        openSearchBtn.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            searchInput.focus();
            displayResults(searchIndex); // Show all pages as initial suggestions
        });

        closeSearchBtn.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
            searchInput.value = '';
        });

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (!query) {
                displayResults(searchIndex);
                return;
            }
            const filteredResults = searchIndex.filter(item =>
                item.title.toLowerCase().includes(query) || item.keywords.toLowerCase().includes(query)
            );
            displayResults(filteredResults);
        });
    }

    const translatePage = (lang) => {
        if (!translations[lang]) return;

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.dataset.i18n;
            if (translations[lang][key]) { el.innerHTML = translations[lang][key]; }
        });

        // Handle parent elements that contain multiple translatable children
        // This is useful for lists or groups where you want to translate all children at once.
        document.querySelectorAll('[data-i18n-parent]').forEach(parent => {
            const childrenWithI18n = parent.querySelectorAll('[data-i18n]');
            if (childrenWithI18n.length > 0) {
                childrenWithI18n.forEach(child => {
                    const key = child.dataset.i18n;
                    if (translations[lang][key]) {
                        child.innerHTML = translations[lang][key];
                    }
                });
            }
        });

        document.documentElement.lang = lang.toLowerCase();
    };
    // === Language Switcher Logic (Global) ===
    const langSwitcher = document.querySelector('.language-switcher');
    if (langSwitcher) {
        const langBtn = langSwitcher.querySelector('.language-btn');
        const langCodeSpan = langSwitcher.querySelector('.language-btn .lang-code');
        const langDropdown = langSwitcher.querySelector('.language-dropdown');

        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langSwitcher.classList.toggle('active');
            langDropdown.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            langSwitcher.classList.remove('active');
            langDropdown.classList.remove('active');
        });

        langDropdown.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                const selectedLang = e.target.getAttribute('data-lang');
                langCodeSpan.textContent = selectedLang;
                localStorage.setItem('language', selectedLang);
                translatePage(selectedLang);
            }
        });

        // Set initial language on page load
        const savedLang = localStorage.getItem('language') || 'EN';
        langCodeSpan.textContent = savedLang;
        translatePage(savedLang);

        // Re-run nav animation after translation
        if (savedLang !== 'EN') {
            document.querySelectorAll('.nav-letter').forEach(letter => letter.style.animation = 'none');
        }
    }

    // === Hero Text Animation (Homepage only) ===
    const heroText = document.querySelector('.hero__title.animated-hero-text');
    if (heroText) {
        // Check if it has already been animated by a previous script run
        if (heroText.dataset.isAnimated !== 'true') {
            const text = heroText.textContent;
            heroText.textContent = '';
            let delay = 0.3;

            text.split('').forEach(char => {
                const span = document.createElement('span');
                span.className = 'letter';
                span.innerHTML = char === ' ' ? '&nbsp;' : char;
                span.style.animationDelay = `${delay}s`;
                heroText.appendChild(span);
                delay += 0.05;
            });

            // Mark as animated to prevent re-animation on language switch
            heroText.dataset.isAnimated = 'true';
        }
    }

    // === Theme Switcher Logic (Global) ===
    const themeSwitcherBtn = document.querySelector('.header__action-btn--theme');
    if (themeSwitcherBtn) {
        const setInitialTheme = () => {
            const currentTheme = localStorage.getItem('theme');
            if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.body.setAttribute('data-theme', 'dark');
            }
        };

        themeSwitcherBtn.addEventListener('click', () => {
            let theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });

        setInitialTheme();
    }

    // === Cookie Consent Logic (Global) ===
    const cookieBanner = document.querySelector('.cookie-consent-banner');
    if (cookieBanner) {
        const acceptCookieBtn = cookieBanner.querySelector('.cookie-accept-btn');
        const declineCookieBtn = cookieBanner.querySelector('.cookie-decline-btn');

        if (!localStorage.getItem('cookieConsent')) {
            cookieBanner.classList.add('show');
        }

        acceptCookieBtn.addEventListener('click', () => {
            cookieBanner.classList.remove('show');
            localStorage.setItem('cookieConsent', 'accepted');
        });

        declineCookieBtn.addEventListener('click', () => {
            cookieBanner.classList.remove('show');
        });
    }

    // === Back to Top Button Logic (Global) ===
    const backToTopButton = document.querySelector(".back-to-top-btn");
    if (backToTopButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
            }
        });
    }

    // === Hamburger Menu Toggle (Global) ===
    const header = document.querySelector(".header");
    if (header) {
        const hamburgerBtn = header.querySelector(".header__hamburger");
        const navLinksForMenu = header.querySelectorAll(".header__menu-link");

        hamburgerBtn.addEventListener("click", () => {
            header.classList.toggle("header--nav-open");
            const isExpanded = header.classList.contains("header--nav-open");
            hamburgerBtn.setAttribute("aria-expanded", isExpanded);
        });

        // Close menu when a link is clicked
        navLinksForMenu.forEach(link => {
            link.addEventListener("click", () => {
                if (header.classList.contains("header--nav-open")) {
                    header.classList.remove("header--nav-open");
                    hamburgerBtn.setAttribute("aria-expanded", "false");
                }
            });
        });

        // Move sub-nav into hamburger menu on mobile
        const subNav = document.querySelector('.sub-nav');
        if (subNav && window.innerWidth <= 768) {
            const mobileSubNav = subNav.cloneNode(true);
            mobileSubNav.classList.add('sub-nav--mobile');
            
            const mainMenu = header.querySelector('.header__menu');
            mainMenu.appendChild(mobileSubNav);

            // Add click listener to close menu when sub-nav link is clicked
            mobileSubNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    header.classList.remove('header--nav-open');
                });
            });
        }
    }

    // === Intersection Observer for Animations (Global) ===
    const animatedElements = document.querySelectorAll('.illustration, .help-list li, .bar, .timeline__item, .icon-grid-item, .stat-number');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(el => observer.observe(el));
    }

    // --- Targets Page Specific Logic ---
    const initTargetsPage = () => {
        const timeline = document.querySelector('.timeline');
        if (timeline) {
            const timelineObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Animate only once
                    }
                });
            }, { threshold: 0.2 });
            timelineObserver.observe(timeline);
        }
    };
    // --- Homepage Specific Logic ---
    const initHomepage = () => {
        const factCarousel = document.querySelector('.fact-carousel');
if (factCarousel) {
    const factItems = factCarousel.querySelectorAll('.fact-item');
    if (factItems.length > 1) { // Only run if there's more than one fact
        let currentFactIndex = 0;
        let factInterval;

        // Store original content to re-animate and handle translations
        factItems.forEach(item => {
            const p = item.querySelector('p');
            if (p) {
                item.dataset.originalContent = p.innerHTML;
            }
        });

        const animateFact = (factItem) => {
            const p = factItem.querySelector('p');
            if (!p || !p.dataset.i18n) return;

            // Get the correct translated text
            const currentLang = localStorage.getItem('language') || 'EN';
            const i18nKey = p.dataset.i18n;
            const textContent = translations[currentLang][i18nKey] || factItem.dataset.originalContent;
            
            p.innerHTML = ''; // Clear content

            const parts = textContent.split(/(<strong>|<\/strong>)/g);
            let delay = 0;

            parts.forEach(part => {
                if (part.match(/<strong>/)) {
                    p.innerHTML += '<strong>';
                } else if (part.match(/<\/strong>/)) {
                    p.innerHTML += '</strong>';
                } else if (part.trim() !== '') {
                    const container = document.createDocumentFragment();
                    part.split('').forEach(char => {
                        const span = document.createElement('span');
                        span.className = 'letter';
                        span.innerHTML = char === ' ' ? '&nbsp;' : char;
                        span.style.animationDelay = `${delay}s`;
                        container.appendChild(span);
                        delay += 0.015;
                    });
                    p.appendChild(container);
                }
            });
        };

        const showNextFact = () => {
            factItems[currentFactIndex].classList.remove('active');
            currentFactIndex = (currentFactIndex + 1) % factItems.length;
            factItems[currentFactIndex].classList.add('active');
            animateFact(factItems[currentFactIndex]);
        };

        const startCarousel = () => {
            stopCarousel(); // Clear any existing interval
            factInterval = setInterval(showNextFact, 7000); // Change fact every 7 seconds
        };

        const stopCarousel = () => clearInterval(factInterval);

        const factObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => entry.isIntersecting ? startCarousel() : stopCarousel());
        }, { threshold: 0.5 });

        factObserver.observe(factCarousel);
        factCarousel.addEventListener('mouseenter', stopCarousel);
        factCarousel.addEventListener('mouseleave', startCarousel);

        // Initial animation for the first fact
        animateFact(factItems[0]);
    }
}

        // Active animation for data card when in view
        const dataCard = document.querySelector('.story-card--data');
        if (dataCard) {
            const dataCardObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const card = entry.target;
                        card.classList.add('is-active-anim');

                        // Animate numbers if not already animated
                        const numbers = card.querySelectorAll('.stat-number');
                        numbers.forEach(numberEl => {
                            if (numberEl.dataset.isAnimated === 'true') return;

                            const goal = parseInt(numberEl.dataset.goal, 10);
                            if (isNaN(goal)) return;

                            numberEl.dataset.isAnimated = 'true';
                            let current = 0;
                            const duration = 2000; // 2 seconds
                            const incrementTime = 20; // update every 20ms
                            const step = goal / (duration / incrementTime);

                            const timer = setInterval(() => {
                                current += step;
                                if (current >= goal) {
                                    clearInterval(timer);
                                    numberEl.textContent = goal;
                                } else {
                                    numberEl.textContent = Math.ceil(current);
                                }
                            }, incrementTime);
                        });

                    } else {
                        entry.target.classList.remove('is-active-anim');
                    }
                });
            }, { threshold: 0.5 });
            dataCardObserver.observe(dataCard);
        }

        // Staggered Animation for Story Cards
        const storyCards = document.querySelectorAll('.stories-grid .story-card');
        if (storyCards.length > 0) {
            const cardObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            storyCards.forEach((card, index) => {
                card.style.transitionDelay = `${index * 50}ms`;
                cardObserver.observe(card);
            });
        }

        // Story Grid Filtering
        const storyFilterBar = document.querySelector('.story-filter-bar');
        if (storyFilterBar) {
            const storyCards = document.querySelectorAll('.stories-grid .story-card');

            storyFilterBar.addEventListener('click', (e) => {
                const filterBtn = e.target.closest('.story-filter-btn');
                if (!filterBtn) return;

                // Update active button state
                storyFilterBar.querySelector('.active').classList.remove('active');
                filterBtn.classList.add('active');

                const filter = filterBtn.dataset.filter;

                storyCards.forEach(card => {
                    const category = card.dataset.category;
                    if (filter === 'all' || category === filter) {
                        card.classList.remove('hide');
                    } else {
                        card.classList.add('hide');
                    }
                });
            });
        }

        // Share Menu Logic for Story Cards
        const storiesGrid = document.querySelector('.stories-grid');
        if (storiesGrid) {
            storiesGrid.addEventListener('click', (e) => {
                const shareMenuBtn = e.target.closest('.share-menu-btn');
                if (shareMenuBtn) {
                    e.preventDefault(); // Prevent link overlay from triggering
                    e.stopPropagation();
                    const wrapper = shareMenuBtn.closest('.share-menu-wrapper');
                    // Close other open menus
                    document.querySelectorAll('.share-menu-wrapper.active').forEach(openWrapper => {
                        if (openWrapper !== wrapper) {
                            openWrapper.classList.remove('active');
                        }
                    });
                    wrapper.classList.toggle('active');
                }

                const shareBtn = e.target.closest('.share-btn');
                if (shareBtn) {
                    e.preventDefault();
                    e.stopPropagation();

                    const storyCard = shareBtn.closest('.story-card');
                    const link = storyCard.querySelector('a');
                    const title = storyCard.querySelector('.story-card__title').textContent;
                    const imageUrl = window.getComputedStyle(storyCard).getPropertyValue('--bg-image').slice(4, -1).replace(/"/g, "");
                    const shareUrl = link ? link.href : window.location.href;
                    const text = `Check out this story: ${title} #SDG11`;

                    let socialUrl;
                    if (shareBtn.classList.contains('twitter')) {
                        socialUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`;
                    } else if (shareBtn.classList.contains('facebook')) {
                        socialUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
                    } else if (shareBtn.classList.contains('pinterest')) {
                        socialUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(text)}`;
                    }

                    if (socialUrl) {
                        window.open(socialUrl, '_blank', 'width=600,height=400');
                    }
                }
            });

            // Close share menus when clicking anywhere else on the grid
            storiesGrid.addEventListener('click', () => {
                document.querySelectorAll('.share-menu-wrapper.active').forEach(w => w.classList.remove('active'));
            });
        }

        // Infinite Logo Carousel
        const logoCarousel = document.querySelector('.logo-carousel');
        if (logoCarousel) {
            const partnersSection = logoCarousel.closest('.partners-section');
            const logos = logoCarousel.querySelectorAll('img');
            logos.forEach(logo => {
                const clone = logo.cloneNode(true);
                logoCarousel.appendChild(clone);
            });

            // Pause animation on hover/focus for accessibility
            const pauseAnimation = () => logoCarousel.style.animationPlayState = 'paused';
            const playAnimation = () => logoCarousel.style.animationPlayState = 'running';

            partnersSection.addEventListener('mouseenter', pauseAnimation);
            partnersSection.addEventListener('mouseleave', playAnimation);
            partnersSection.addEventListener('focusin', pauseAnimation);
            partnersSection.addEventListener('focusout', playAnimation);

        }
    };

    // --- Privacy Page Specific Logic ---
    const initPrivacyPage = () => {
        const copyBtn = document.querySelector('.copy-code-btn');
        copyBtn.addEventListener('click', () => {
            const codeElement = document.getElementById('code-to-copy');
            navigator.clipboard.writeText(codeElement.innerText).then(() => {
                copyBtn.innerText = 'Copied!';
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.innerText = 'Copy';
                    copyBtn.classList.remove('copied');
                }, 2000);
            });
        });
    };

    // --- Gallery Page Specific Logic ---
    const initGalleryPage = () => {
        const galleryGrid = document.querySelector('.gallery-grid');
        const filterContainer = document.querySelector('.filter-buttons');
        const galleryItems = document.querySelectorAll('.gallery-item');
        const lightbox = document.querySelector('.lightbox-overlay');
        const lightboxImg = document.querySelector('.lightbox-img');
        const lightboxClose = document.querySelector('.lightbox-close');
        const lightboxNext = document.querySelector('.lightbox-next');
        const lightboxPrev = document.querySelector('.lightbox-prev');

        // Store all image sources for easy navigation
        let allImages = Array.from(galleryItems).map(item => item.querySelector('img').src);
        let currentImageIndex;

        // 1. Gallery Filtering Logic
        if (filterContainer && galleryItems.length > 0) {
            filterContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('filter-btn')) {
                    filterContainer.querySelector('.active').classList.remove('active');
                    e.target.classList.add('active');

                    const filter = e.target.dataset.filter;
                    const loadMoreBtn = document.querySelector('.load-more-btn');

                    galleryItems.forEach(item => {
                        if (filter === 'all' || item.dataset.category === filter) {
                            item.classList.remove('hide');
                        } else {
                            item.classList.add('hide');
                        }
                    });

                    // When filtering, hide the "Load More" button as its logic is based on the initial full set.
                    // A more advanced implementation could re-calculate, but this is a clean, simple approach.
                    if (loadMoreBtn) {
                        loadMoreBtn.style.display = filter === 'all' ? 'inline-block' : 'none';
                        if (filter !== 'all') {
                             galleryItems.forEach(item => item.classList.remove('hidden-by-load-more'));
                        }
                    }
                }
            });
        }

        // 2. Lightbox Logic
        const openLightbox = (imgSrc) => {
            currentImageIndex = index;
            lightboxImg.src = allImages[currentImageIndex];
            lightbox.classList.add('active');
        };

        const closeLightbox = () => {
            lightbox.classList.remove('active');
        };

        const showNextImage = () => {
            currentImageIndex = (currentImageIndex + 1) % allImages.length;
            lightboxImg.src = allImages[currentImageIndex];
        };

        const showPrevImage = () => {
            currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
            lightboxImg.src = allImages[currentImageIndex];
        };

        galleryGrid.addEventListener('click', (e) => {
            const galleryItem = e.target.closest('.gallery-item');
            // Ensure the click is on a gallery item but not on the share button
            if (galleryItem && !e.target.closest('.share-menu-btn')) {
                const imgSrc = galleryItem.querySelector('img').src;
                currentImageIndex = allImages.findIndex(src => src === imgSrc);
                openLightbox(currentImageIndex);
            }
        });

        lightboxClose.addEventListener('click', closeLightbox);
        lightboxNext.addEventListener('click', showNextImage);
        lightboxPrev.addEventListener('click', showPrevImage);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (lightbox.classList.contains('active')) {
                if (e.key === 'ArrowRight') showNextImage();
                if (e.key === 'ArrowLeft') showPrevImage();
                if (e.key === 'Escape') closeLightbox();
            }
        });

        // 3. Share Menu Logic
        galleryGrid.addEventListener('click', (e) => {
            const shareMenuBtn = e.target.closest('.share-menu-btn');
            if (shareMenuBtn) {
                e.stopPropagation(); // Prevent lightbox from opening
                const wrapper = shareMenuBtn.closest('.share-menu-wrapper');
                // Close other open menus
                document.querySelectorAll('.share-menu-wrapper.active').forEach(openWrapper => {
                    if (openWrapper !== wrapper) {
                        openWrapper.classList.remove('active');
                    }
                });
                wrapper.classList.toggle('active');
            }

            const shareBtn = e.target.closest('.share-btn');
            if (shareBtn) {
                e.preventDefault();
                e.stopPropagation();

                const galleryItem = shareBtn.closest('.gallery-item');
                const imageUrl = galleryItem.querySelector('img').src;
                const pageUrl = window.location.href;
                const text = "Check out this inspiring image for sustainable cities! #SDG11";

                let shareUrl;

                if (shareBtn.classList.contains('twitter')) {
                    shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(text)}`;
                } else if (shareBtn.classList.contains('facebook')) {
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
                } else if (shareBtn.classList.contains('pinterest')) {
                    shareUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(text)}`;
                }

                if (shareUrl) {
                    window.open(shareUrl, '_blank', 'width=600,height=400');
                }
            }
        });

        // Close share menus when clicking anywhere else
        document.addEventListener('click', () => {
            document.querySelectorAll('.share-menu-wrapper.active').forEach(openWrapper => {
                openWrapper.classList.remove('active');
            });
        });

        // 4. Lazy Loading for Gallery Images
        const lazyImages = galleryGrid.querySelectorAll('img.lazy');
        if ('IntersectionObserver' in window) {
            const lazyImageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.addEventListener('load', () => {
                            lazyImage.classList.remove('lazy');
                        });
                        observer.unobserve(lazyImage);
                    }
                });
            });

            lazyImages.forEach(lazyImage => {
                lazyImageObserver.observe(lazyImage);
            });
        } else {
            // Fallback for older browsers
            lazyImages.forEach(lazyImage => lazyImage.src = lazyImage.dataset.src);
        }

        // 5. Load More Button Logic
        const loadMoreBtn = document.querySelector('.load-more-btn');
        if (loadMoreBtn) {
            const initialItems = 6;
            // Initially hide items beyond the initial count
            galleryItems.forEach((item, index) => {
                if (index >= initialItems) {
                    item.classList.add('hidden-by-load-more');
                }
            });

            loadMoreBtn.addEventListener('click', () => {
                const hiddenItems = galleryGrid.querySelectorAll('.gallery-item.hidden-by-load-more');
                const itemsToShow = 3;

                for (let i = 0; i < itemsToShow; i++) {
                    if (hiddenItems[i]) {
                        hiddenItems[i].classList.remove('hidden-by-load-more');
                    }
                }

                // Hide button if no more items are hidden
                if (galleryGrid.querySelectorAll('.gallery-item.hidden-by-load-more').length === 0) {
                    loadMoreBtn.style.display = 'none';
                }
            });

            // Hide button initially if there are not enough items to hide
            if (galleryItems.length <= initialItems) {
                loadMoreBtn.style.display = 'none';
            }
        }
    };
    const contactForms = document.querySelectorAll('.footer__form form, .contact-form form');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameInput = form.querySelector('input[name="name"]');
            const emailInput = form.querySelector('input[name="email"]');
            const messageInput = form.querySelector('textarea[name="message"]');
            const submitBtn = form.querySelector('button[type="submit"]');

            let isValid = true;

            // Helper to show/hide errors
            const showError = (input, message) => {
                const formGroup = input.closest('.footer__form-group, .form-group');
                let errorDiv = formGroup.querySelector('.error-message');
                if (!errorDiv) {
                    errorDiv = document.createElement('div');
                    errorDiv.className = 'error-message';
                    formGroup.appendChild(errorDiv);
                }
                input.classList.add('invalid');
                errorDiv.textContent = message;
                errorDiv.style.display = 'block';
            };

            const clearError = (input) => {
                const formGroup = input.closest('.footer__form-group, .form-group');
                const errorDiv = formGroup.querySelector('.error-message');
                input.classList.remove('invalid');
                if (errorDiv) {
                    errorDiv.style.display = 'none';
                }
            };

            // Validation
            clearError(nameInput);
            if (nameInput.value.trim() === '') {
                isValid = false;
                showError(nameInput, 'Name is required.');
            }

            clearError(emailInput);
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                isValid = false;
                showError(emailInput, 'Email is required.');
            } else if (!emailRegex.test(emailInput.value)) {
                isValid = false;
                showError(emailInput, 'Please enter a valid email address.');
            }

            clearError(messageInput);
            if (messageInput.value.trim() === '') {
                isValid = false;
                showError(messageInput, 'Message is required.');
            }

            if (!isValid) return;

            // AJAX Submission
            const formData = new FormData(form);
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    window.location.href = form.querySelector('input[name="_next"]').value || 'thank-you.html';
                } else {
                    throw new Error('Network response was not ok.');
                }
            }).catch(error => {
                alert('There was a problem with your submission. Please try again.');
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    });

    // === Footer Share Button Logic ===
    const shareBtn = document.querySelector('.footer__share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            const shareData = {
                title: document.title,
                text: `Check out this page about ${document.title}`,
                url: window.location.href
            };

            try {
                // Use Web Share API if available (modern mobile browsers)
                if (navigator.share) {
                    await navigator.share(shareData);
                } else {
                    // Fallback for desktop: copy URL to clipboard
                    await navigator.clipboard.writeText(window.location.href);
                    const originalText = shareBtn.querySelector('span').textContent;
                    shareBtn.querySelector('span').textContent = 'Copied!';
                    setTimeout(() => {
                        shareBtn.querySelector('span').textContent = originalText;
                    }, 2000);
                }
            } catch (err) {
                // This can happen if the user cancels the share dialog
                console.log("Share action was cancelled or failed:", err);
                // As a final fallback, alert the user
                alert('Could not share. You can manually copy the URL from your browser.');
            }
        });
    }

    // === MODAL LOGIC (Global) ===
    const openModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    };

    const closeModal = (modal) => {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    };

    // Close with button or overlay click
    document.querySelectorAll('.modal-overlay, .modal-close').forEach(el => {
        el.addEventListener('click', (e) => {
            // Ensure we don't close when clicking on modal content itself
            if (e.target === el) {
                closeModal(el.closest('.modal-overlay'));
            }
        });
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            closeModal(activeModal);
        }
    });

    // === PAGE ROUTER ===
    // Determines which page-specific scripts to run
    const runPageSpecificScripts = () => {
        const path = window.location.pathname.split("/").pop();

        // Logic for homepage (sdg11.html or root)
        if (path === 'sdg11.html' || path === '') {
            initHomepage();
        }

        // Logic for gallery page
        if (path === 'gallery.html') {
            initGalleryPage();
        }

        // Logic for privacy page
        if (path === 'privacy.html') {
            initPrivacyPage();
        }
    };
        // Logic for targets page
        if (path === 'targets.html') {
            initTargetsPage();
        }
    };

    // === GLOBAL INITIALIZATION ===
    // Functions that run on every page
    const initGlobal = () => {
        const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

        // Custom Cursor (non-touch devices only)
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        if (cursorDot && cursorOutline && !isTouchDevice) {
            window.addEventListener('mousemove', (e) => {
                cursorDot.style.left = `${e.clientX}px`;
                cursorDot.style.top = `${e.clientY}px`;
                cursorOutline.animate({
                    left: `${e.clientX}px`,
                    top: `${e.clientY}px`
                }, { duration: 500, fill: 'forwards' });
            });
            document.querySelectorAll('a, button, input, .story-card, .gallery-item').forEach(el => {
                el.addEventListener('mouseover', () => cursorOutline.classList.add('hover'));
                el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover'));
            });
        }

        // Touch Ripple Effect (touch devices only)
        if (isTouchDevice) {
            document.body.addEventListener('click', function (e) {
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                document.body.appendChild(ripple);
                ripple.style.left = `${e.clientX - (ripple.clientWidth / 2)}px`;
                ripple.style.top = `${e.clientY - (ripple.clientHeight / 2)}px`;
                setTimeout(() => ripple.remove(), 600);
            });
        }
    };

    initGlobal();
    runPageSpecificScripts();
});