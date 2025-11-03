const productReviews = {
    1: {
        name: "Arbre à Chat Haut",
        title: "Un véritable paradis pour nos chats",
        review: "Rio et Vador adorent cet arbre ! Les plateformes sont bien positionnées à la bonne hauteur, et les deux adorent se percher au sommet pour observer. Très robuste et stable, c'est un investissement qui en vaut vraiment la peine.",
        link: "https://example.com/product-1"
    },
    2: {
        name: "Brosse spéciale poils de chat",
        title: "Efficacité garantie et chats satisfaits",
        review: "Cette brosse élimine vraiment les poils morts ! Rio n'a jamais aimé être brossé, mais avec celle-ci, il accepte de mieux en mieux. Vador adore ça. Aucun arrachage de poils, très douce et efficace.",
        link: "https://example.com/product-2"
    },
    3: {
        name: "Nid douillet",
        title: "Le cocon parfait pour Vador",
        review: "Depuis son arrivée, Vador ne quitte plus son nid douillet ! Il s'y glisse, invisible, au chaud. C'est devenu son endroit préféré pour dormir. Rio a retrouvé son lit ! Excellent rapport qualité-prix.",
        link: "https://example.com/product-3"
    },
    4: {
        name: "Distributeur Automatique de Croquettes",
        title: "Praticité au quotidien",
        review: "Vador peut maintenant se servir seul ! La caméra intégrée est un plus pour vérifier qu'il ne triche pas. Rio a d'abord hésité mais s'y est fait. Parfait pour les journées chargées.",
        link: "https://example.com/product-4"
    },
    5: {
        name: "Brosse pour chat avec manche",
        title: "Ergonomique et efficace",
        review: "Le manche facilite vraiment les séances de toilettage. Plus facile à utiliser que les autres brosses pour des zones spécifiques. Rio et Vador la tolèrent bien. Bonne qualité générale.",
        link: "https://example.com/product-5"
    },
    6: {
        name: "Fontaine à eau automatique pour chat 3L",
        title: "Hydratation garantie",
        review: "Excellente fontaine ! Rio l'adore et boit beaucoup plus depuis qu'elle est à la maison. L'eau reste fraîche et le filtre est facile à remplacer. Vador est plus indifférent mais l'utilise quand même.",
        link: "https://example.com/product-6"
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
