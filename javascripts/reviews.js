const productReviews = {
    1: {
        name: "Arbre à Chat Haut",
        title: "Rio et Vador l'adorent !",
        review: "Rio et Vador ont tout de suite adopté cet arbre à chat ! Les deux plateformes en hauteur sont parfaites pour eux, les poteaux à griffer et les petites cachettes aussi. Vador adore particulièrement le hamac ! Seul petit bémol : il arrive à décrocher les balles suspendues, et le vendeur ne propose pas encore de pièces de rechange.",
        link: "https://fr.aliexpress.com/item/1005007463308356.html?supplyId=159831080&gatewayAdapt=glo2fra"
    },
    2: {
        name: "Brosse spéciale poils de chat",
        title: "Efficace et chats satisfaits",
        review: "Très satisfaits de cette brosse ! Rio adore les séances de brossage, et les poils se retirent très facilement. Par contre, dès qu’on active la vapeur, il prend peur et refuse de se laisser faire. Pour Vador, c’est un peu différent : il ne reste pas vraiment en place, mais il semble quand même apprécier la brosse à sa manière.",
        link: "https://fr.aliexpress.com/item/1005007102314234.html?supplyId=159831080&gatewayAdapt=glo2fra"
    },
    3: {
        name: "Nid douillet",
        title: "Le cocon de Vador",
        review: "Ce premier lit pour Vador a tout de suite été un succès ! Il adorait s’y blottir et se faufiler à l’intérieur. Rio l’a testé aussi, mais lui préférait se poser sur le dessus du “chapeau”. Avec le temps, Vador y va beaucoup moins souvent, mais le rapport qualité-prix reste correct — on met donc 4 étoiles.",
        link: "https://fr.aliexpress.com/item/1005007550213999.html?spm=a2g0o.productlist.seoads.7.28524c3cwRRtQb&p4p_pvid=202510300703583163593132390250000088277_4&gatewayAdapt=glo2fra"
    },
    4: {
        name: "Distributeur Automatique de Croquettes",
        title: "Praticité au quotidien",
        review: "Ce distributeur de croquettes est vraiment pratique ! Il nous permet de garder un bon rythme de repas matin et soir, même quand nous partons en week-end. Plutôt que de remplir deux grandes gamelles, on peut contrôler facilement les portions que Rio et Vador mangent en notre absence. Petit bonus (parce qu’on est un peu gaga) : on a choisi le modèle avec deux gamelles et une caméra intégrée pour garder un œil sur eux. L’application de gestion est plutôt simple et fonctionne bien.",
        link: "https://fr.aliexpress.com/item/1005006750761962.html?supplyId=159831080&gatewayAdapt=glo2fra"
    },
    5: {
        name: "Brosse pour chat avec manche",
        title: "Ergonomique",
        review: "Nous avons voulu tester une autre brosse, cette fois avec un manche. Elle est pratique à tenir, mais malheureusement moins efficace que celle que nous avions achetée auparavant. Elle attrape moins bien les poils, donc pour le même prix, nous préférons largement l’autre brosse.",
        link: "https://fr.aliexpress.com/item/1005007102314234.html?supplyId=159831080&gatewayAdapt=glo2fra"
    },
    6: {
        name: "Fontaine à eau automatique pour chat 3L",
        title: "Hydratation garantie",
        review: "Nous avons testé plusieurs fontaines avant celle-ci, et c’est clairement notre préférée !Sa grande capacité de 3 L est très pratique : on change l’eau une fois par semaine et le filtre environ une fois par mois. Elle est quasiment silencieuse, sauf quand elle arrive presque à vide, et n’émet aucune lumière — parfait pour la nuit. Un excellent rapport qualité-prix, donc 5 étoiles bien méritées !",
        link: "https://fr.aliexpress.com/item/1005005583190954.html?supplyId=159831080&gatewayAdapt=glo2fra"
    },
    7: {
        name: "Gamelle en acier inoxydable",
        title: "Durabilité et hygiène",
        review: "Incontournable pour une bonne hygiène. L'acier inoxydable est très facile à nettoyer. Aucune odeur parasite. Les deux chats mangent tranquillement dedans. C'est un basique à avoir !",
        link: "https://example.com/product-7"
    },
    8: {
        name: "Tour de jeu interactive pour chat - 8 niveaux & balles colorées",
        title: "Divertissement sans fin",
        review: "Vador en est complètement fou ! Il pourrait jouer des heures avec. Rio apprécie plus modérément mais s'amuse quand même. Les balles colorées sont attrayantes et l'assemblage est simple.",
        link: "https://example.com/product-8"
    }
};

// Ajouter les écouteurs d'événement aux étoiles
document.querySelectorAll('.product-rating-stars').forEach(stars => {
    stars.addEventListener('click', function(e) {
        e.preventDefault();
        const productId = this.getAttribute('data-product');
        openReviewModal(productId);
    });
});

function openReviewModal(productId) {
    const review = productReviews[productId];
    if (!review) return;

    document.getElementById('modalProductName').textContent = review.name;
    document.getElementById('modalReviewTitle').textContent = review.title;
    document.getElementById('modalReviewText').textContent = review.review;
    document.getElementById('modalProductLink').href = review.link;

    document.getElementById('reviewModal').classList.add('active');
}

function closeReviewModal() {
    document.getElementById('reviewModal').classList.remove('active');
}

// Fermer le modal en cliquant en dehors
document.getElementById('reviewModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeReviewModal();
    }
});

// Fermer le modal avec la touche Échap
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeReviewModal();
    }
});


// Trier les produits par note
// Ordre original des produits
let originalOrder = [];

// Sauvegarder l'ordre original au chargement
document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('productsGrid');
    originalOrder = Array.from(grid.querySelectorAll('.product-card'));
});

function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    const grid = document.getElementById('productsGrid');
    const cards = Array.from(grid.querySelectorAll('.product-card'));

    if (sortValue === 'default') {
        // Retourner à l'ordre original
        cards.sort((a, b) => {
            return originalOrder.indexOf(a) - originalOrder.indexOf(b);
        });
    } else if (sortValue === 'high-to-low') {
        cards.sort((a, b) => {
            const ratingA = parseFloat(a.querySelector('.product-rating').getAttribute('data-rating'));
            const ratingB = parseFloat(b.querySelector('.product-rating').getAttribute('data-rating'));
            return ratingB - ratingA;
        });
    } else if (sortValue === 'low-to-high') {
        cards.sort((a, b) => {
            const ratingA = parseFloat(a.querySelector('.product-rating').getAttribute('data-rating'));
            const ratingB = parseFloat(b.querySelector('.product-rating').getAttribute('data-rating'));
            return ratingA - ratingB;
        });
    }

    // Réinsérer les cartes triées
    cards.forEach(card => {
        grid.appendChild(card);
    });
}
