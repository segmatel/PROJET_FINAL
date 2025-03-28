//************************** Nav ************************************** */
// Sélectionner les éléments du DOM
const menuButton = document.getElementById("menu_icon"); // Bouton pour ouvrir le menu
const navMenu = document.getElementById("nav_menu"); // Menu de navigation
const closeButton = document.querySelector(".nav_fermer"); // Bouton pour fermer le menu

// Fonction pour ouvrir le menu
function openMenu() {
  navMenu.classList.add("active"); // Ajouter la classe 'active' pour afficher le menu
}

// Fonction pour fermer le menu
function closeMenu() {
  navMenu.classList.remove("active"); // Enlever la classe 'active' pour cacher le menu
}

// Ajouter l'événement au bouton d'ouverture
menuButton.addEventListener("click", openMenu);

// Ajouter l'événement au bouton de fermeture
closeButton.addEventListener("click", closeMenu);
//************************** Avatar *********************************** */
// Sélection des éléments HTML
const carouselTrack = document.querySelector('.carousel-track');
const partners = document.querySelectorAll('.partner');

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let index = 0; // Suivi de la position actuelle du carrousel
let autoSlideInterval; // Pour gérer l'intervalle du défilement automatique

// Vérification qu'il y a des slides
if (partners.length === 0) {
    console.error("Aucun partenaire trouvé dans le carrousel.");
    throw new Error("Le carrousel ne contient aucun élément.");
}

// Fonction pour mettre à jour la position du carrousel
/*function updateCarousel() {
    const offset = -index * 100; // Calcul de l'offset en fonction de l'index
    console.log("Offset calculé : " + offset); // Pour debug
    carouselTrack.style.transform = `translateX(${offset}%)`;
}*/
function updateCarousel() {
  const offset = -index * 100;
  console.log("Index:", index, "Offset:", offset + "%"); // DEBUG ICI
  carouselTrack.style.transform = `translateX(${offset}%)`;
}

// Démarrer le défilement automatique
function startAutoSlide() {
    autoSlideInterval = setInterval(function () {
        if (index < partners.length - 1) {
            index++;
        } else {
            index = 0;
        }
        updateCarousel();
    }, 5000); // Défilement toutes les 5 secondes
}

// Arrêter le défilement automatique
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Démarrer le défilement automatique au chargement
startAutoSlide();

// Initialiser le carrousel au chargement
function initCarousel() {
    console.log("Initialisation du carrousel...");
    updateCarousel();  // Assure que le premier partenaire est visible dès le début
}

// Gestion du bouton "Suivant"
nextButton.addEventListener('click', function () {
    stopAutoSlide(); // Arrêter le défilement automatique
    if (index < partners.length - 1) {
        index++;
    } else {
        index = 0; // Revenir au premier slide si on est au dernier
    }
    updateCarousel();
    setTimeout(startAutoSlide, 10000); // Redémarrer après 10 secondes
});

// Gestion du bouton "Précédent"
prevButton.addEventListener('click', function () {
    stopAutoSlide(); // Arrêter le défilement automatique
    if (index > 0) {
        index--;
    } else {
        index = partners.length - 1; // Passer au dernier slide si on est au premier
    }
    updateCarousel();
    setTimeout(startAutoSlide, 10000); // Redémarrer après 10 secondes
});

// Initialisation du carrousel au démarrage
window.onload = initCarousel;
