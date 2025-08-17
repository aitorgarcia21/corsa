/**
 * Casa Corsa Website - Simple & Elegant JavaScript
 * Multilingual Restaurant Website with Corsican Theme
 */

class CasaCorsa {
    constructor() {
        this.currentLanguage = localStorage.getItem('casaCorsa-language') || 'fr';
        this.translations = {};
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.loadTranslations();
        this.initNavigation();
        this.initLanguageSelector();
        this.initMenuLanguages();
        this.initScrollEffects();
        this.setLanguage(this.currentLanguage);
    }

    loadTranslations() {
        this.translations = {
            fr: {
                'page-title': 'Casa Corsa - Restaurant Corse à Porto-Vecchio',
                'nav-home': 'Accueil',
                'nav-menu': 'Notre Carte',
                'nav-contact': 'Contact',
                'hero-title': 'Bienvenue à Casa Corsa',
                'hero-subtitle': 'Restaurant Corse • Spécialités de Corse • Porto-Vecchio',
                'hero-motto': '"La Corse est belle"',
                'hero-cta': 'Découvrir notre carte',
                'about-title': 'L\'Art de la Cuisine Corse',
                'about-text1': 'Situé au cœur du port de plaisance de Porto-Vecchio, Casa Corsa vous invite à découvrir les saveurs authentiques de la Corse. Notre restaurant vous propose une cuisine traditionnelle revisitée, dans un cadre chaleureux et convivial.',
                'about-text2': '<strong>Nos spécialités authentiques :</strong> Charcuterie corse (lonzu, coppa, figatellu), fromages de brebis, châtaignes, miel de maquis, vins corses AOC, et bien sûr nos fameux cannellonis au brocciu !',
                'about-text3': 'Venez déguster nos spécialités préparées avec des produits du terroir corse, dans l\'atmosphère conviviale de notre établissement face au port de Porto-Vecchio.',
                'menu-title': 'Notre Carte',
                'menu-subtitle': 'Nos spécialités corses authentiques',
                'menu-cat-tasting': 'Nos Planches de dégustation',
                'menu-cat-starters': 'Nos Entrées',
                'menu-cat-specialities': 'Nos Spécialités',
                'menu-cat-kids': 'Pour les Enfants',
                'menu-cat-desserts': 'Nos Desserts',
                'contact-title': 'Contactez-nous',
                'contact-subtitle': 'Nous sommes là pour vous',
                'reviews-title': 'Avis clients',
                'reviews-subtitle': 'Consultez nos avis certifiés sur TripAdvisor',
                'reviews-cta': 'Lire tous les avis sur TripAdvisor'
            },
            en: {
                'page-title': 'Casa Corsa - Corsican Restaurant in Porto-Vecchio',
                'nav-home': 'Home',
                'nav-menu': 'Our Menu',
                'nav-contact': 'Contact',
                'hero-title': 'Welcome to Casa Corsa',
                'hero-subtitle': 'Corsican Restaurant • Authentic Specialties • Porto-Vecchio',
                'hero-motto': '"Corsica is beautiful" - Discover our island',
                'hero-cta': 'Discover our menu',
                'about-title': 'The Art of Corsican Cuisine',
                'about-text1': 'Located in the heart of Porto-Vecchio\'s marina, Casa Corsa invites you to discover the authentic flavors of Corsica. Our restaurant offers traditional cuisine revisited, in a warm and friendly setting.',
                'about-text2': '<strong>Our authentic specialties:</strong> Corsican charcuterie (lonzu, coppa, figatellu), sheep cheese, chestnuts, maquis honey, AOC Corsican wines, and of course our famous cannelloni with brocciu!',
                'about-text3': 'Come and taste our specialties prepared with Corsican local products, in the friendly atmosphere of our establishment facing the port of Porto-Vecchio.',
                'menu-title': 'Our Menu',
                'menu-subtitle': 'Discover our Corsican specialties in multiple languages',
                'menu-cat-tasting': 'Tasting Boards',
                'menu-cat-starters': 'Starters',
                'menu-cat-specialities': 'Specialties',
                'menu-cat-kids': 'For Kids',
                'menu-cat-desserts': 'Desserts',
                'contact-title': 'Contact Us',
                'contact-subtitle': 'We are here for you - Nous sommes là pour vous',
                'reviews-title': 'Customer Reviews',
                'reviews-subtitle': 'Read our verified reviews on TripAdvisor',
                'reviews-cta': 'Read all reviews on TripAdvisor'
            },
            es: {
                'page-title': 'Casa Corsa - Restaurante Corso en Porto-Vecchio',
                'nav-home': 'Inicio',
                'nav-menu': 'Nuestra Carta',
                'nav-contact': 'Contacto',
                'hero-title': 'Bienvenidos a Casa Corsa',
                'hero-subtitle': 'Restaurante Corso • Especialidades Auténticas • Porto-Vecchio',
                'hero-motto': '"Córcega es hermosa" - Descubre nuestra isla',
                'hero-cta': 'Descubrir nuestra carta',
                'about-title': 'El Arte de la Cocina Corsa',
                'about-text1': 'Situado en el corazón del puerto deportivo de Porto-Vecchio, Casa Corsa te invita a descubrir los sabores auténticos de Córcega. Nuestro restaurante ofrece cocina tradicional revisitada, en un ambiente cálido y acogedor.',
                'about-text2': '<strong>Nuestras especialidades auténticas:</strong> Charcutería corsa (lonzu, coppa, figatellu), quesos de oveja, castañas, miel de maquis, vinos corsos AOC, ¡y por supuesto nuestros famosos canelones con brocciu!',
                'about-text3': 'Ven a degustar nuestras especialidades preparadas con productos locales corsos, en la atmósfera acogedora de nuestro establecimiento frente al puerto de Porto-Vecchio.',
                'menu-title': 'Nuestra Carta',
                'menu-subtitle': 'Descubre nuestras especialidades corsas en varios idiomas',
                'menu-cat-tasting': 'Tablas de degustación',
                'menu-cat-starters': 'Entrantes',
                'menu-cat-specialities': 'Especialidades',
                'menu-cat-kids': 'Para Niños',
                'menu-cat-desserts': 'Postres',
                'contact-title': 'Contáctanos',
                'contact-subtitle': 'Estamos aquí para ti - Nous sommes là pour vous',
                'reviews-title': 'Opiniones de clientes',
                'reviews-subtitle': 'Consulta nuestras reseñas verificadas en TripAdvisor',
                'reviews-cta': 'Leer todas las reseñas en TripAdvisor'
            },
            de: {
                'page-title': 'Casa Corsa - Korsisches Restaurant in Porto-Vecchio',
                'nav-home': 'Startseite',
                'nav-menu': 'Unsere Karte',
                'nav-contact': 'Kontakt',
                'hero-title': 'Willkommen bei Casa Corsa',
                'hero-subtitle': 'Korsisches Restaurant • Authentische Spezialitäten • Porto-Vecchio',
                'hero-motto': '"Korsika ist schön" - Entdecken Sie unsere Insel',
                'hero-cta': 'Unsere Karte entdecken',
                'about-title': 'Die Kunst der korsischen Küche',
                'about-text1': 'Im Herzen des Yachthafens von Porto-Vecchio gelegen, lädt Sie Casa Corsa ein, die authentischen Aromen Korsikas zu entdecken. Unser Restaurant bietet traditionelle, neu interpretierte Küche in warmem und freundlichem Ambiente.',
                'about-text2': '<strong>Unsere authentischen Spezialitäten:</strong> Korsische Wurst (lonzu, coppa, figatellu), Schafskäse, Kastanien, Maquis-Honig, AOC-korsische Weine und natürlich unsere berühmten Cannelloni mit Brocciu!',
                'about-text3': 'Kommen Sie und probieren Sie unsere Spezialitäten, die mit korsischen Regionalprodukten zubereitet werden, in der freundlichen Atmosphäre unseres Restaurants mit Blick auf den Hafen von Porto-Vecchio.',
                'menu-title': 'Unsere Speisekarte',
                'menu-subtitle': 'Entdecken Sie unsere korsischen Spezialitäten in mehreren Sprachen',
                'menu-cat-tasting': 'Degustationsplatten',
                'menu-cat-starters': 'Vorspeisen',
                'menu-cat-specialities': 'Spezialitäten',
                'menu-cat-kids': 'Für Kinder',
                'menu-cat-desserts': 'Desserts',
                'contact-title': 'Kontaktieren Sie uns',
                'contact-subtitle': 'Wir sind für Sie da - Nous sommes là pour vous',
                'reviews-title': 'Kundenbewertungen',
                'reviews-subtitle': 'Lesen Sie unsere verifizierten Bewertungen auf TripAdvisor',
                'reviews-cta': 'Alle Bewertungen auf TripAdvisor lesen'
            }
        };
    }

    initNavigation() {
        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.querySelector('.nav-menu');
        
        if (mobileMenu && navMenu) {
            mobileMenu.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }

        // Smooth scrolling
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu
                    if (navMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                        navMenu.classList.remove('active');
                    }
                }
            });
        });
    }

    initLanguageSelector() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                this.setLanguage(lang);
                
                // Update active button
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('casaCorsa-language', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (this.translations[lang] && this.translations[lang][key]) {
                if (element.tagName === 'TITLE') {
                    element.textContent = this.translations[lang][key];
                } else {
                    element.innerHTML = this.translations[lang][key];
                }
            }
        });
        
        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    initMenuLanguages() {
        const menuLinks = document.querySelectorAll('.menu-link');
        
        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const messages = {
                    fr: 'Notre carte complète sera bientôt disponible en ligne. En attendant, découvrez nos spécialités corses directement au restaurant !',
                    en: 'Our complete menu will be available online soon. Meanwhile, discover our Corsican specialties directly at the restaurant!',
                    es: 'Nuestro menú completo estará disponible en línea pronto. ¡Mientras tanto, descubra nuestras especialidades corsas directamente en el restaurante!',
                    de: 'Unsere vollständige Speisekarte wird bald online verfügbar sein. Entdecken Sie in der Zwischenzeit unsere korsischen Spezialitäten direkt im Restaurant!'
                };
                
                alert(messages[this.currentLanguage] || messages.fr);
            });
        });
    }

    initScrollEffects() {
        // Simple scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.about-content, .language-card, .contact-item, .review-card, .reviews-cta').forEach(el => {
            observer.observe(el);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// Initialize the application
new CasaCorsa();
