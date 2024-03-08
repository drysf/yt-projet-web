//Sélection des éléments HTML avec la classe "scroller"
const scrollers = document.querySelectorAll(".scroller");

//Vérification de la préférence de réduction de mouvement 
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

//Fonction pour ajouter l'animation aux éléments "scroller"
function addAnimation() {
  scrollers.forEach((scroller) => {
    // Ajoute l'attribut data-animated="true" à chaque élément avec la classe ".scroller"
    scroller.setAttribute("data-animated", true);

    // Crée un tableau à partir des éléments enfants de ".scroller-inner"
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // Pour chaque élément dans le tableau, le clone, ajoute aria-hidden et l'ajoute à ".scroller-inner"
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}