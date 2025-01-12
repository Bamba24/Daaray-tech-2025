let realisationBtn = document.querySelectorAll('.realisation-btn');

function openPopup() {
  realisationBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      const popupId = btn.dataset.popup;
      
      // Vérifier si un popup existe déjà pour cet ID
      if (!document.querySelector(`.popup[data-popup="${popupId}"]`)) {
        let popupHtml = '';

        // Switch pour afficher différents popups
        switch (popupId) {
          case 'popup-1':
            popupHtml = `
              <div class="popup" data-popup="popup-1">
                <div class="container-popup">
                  <div class="details">
                    <p>Details de la réalisation</p>
                  </div>
                  <div class="popup-image">
                    <img src="images/formations/data_mining.jpg" alt="popup-image">
                  </div>
                  <div class="popup-content">
                    <h3>Système de gestion scolaire</h3>
                    <p>Une plateforme complète et intuitive dédiée aux établissements scolaires pour optimiser leur gestion administrative et académique. Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                  </div>
                  <div class="popup-close">
                    <div class="fermer">Fermer</div>
                  </div>
                </div>
              </div>`;
            break;

          case 'popup-2':
            popupHtml = `
              <div class="popup" data-popup="popup-2">
                <div class="container-popup">
                  <div class="details">
                    <p>Details de la réalisation Popup 2</p>
                  </div>
                  <div class="popup-image">
                    <img src="images/formations/data_mining.jpg" alt="popup-image">
                  </div>
                  <div class="popup-content">
                    <h3>Application e-commerce</h3>
                    <p>Une solution e-commerce performante permettant aux entreprises de vendre leurs produits en ligne avec une expérience utilisateur optimisée.</p>
                  </div>
                  <div class="popup-close">
                    <div class="fermer">Fermer</div>
                  </div>
                </div>
              </div>`;
            break;

          case 'popup-3':
            popupHtml = `
              <div class="popup" data-popup="popup-3">
                <div class="container-popup">
                  <div class="details">
                    <p>Details de la réalisation Popup 3</p>
                  </div>
                  <div class="popup-image">
                    <img src="images/formations/data_mining.jpg" alt="popup-image">
                  </div>
                  <div class="popup-content">
                    <h3>Tableau de bord analytique</h3>
                    <p>Un outil d'analyse de données sophistiqué offrant des visualisations claires et des insights pertinents pour la prise de décision.</p>
                  </div>
                  <div class="popup-close">
                    <div class="fermer">Fermer</div>
                  </div>
                </div>
              </div>`;
            break;

            case 'popup-4':
            popupHtml = `
              <div class="popup" data-popup="popup-4">
                <div class="container-popup">
                  <div class="details">
                    <p>Details de la réalisation Popup 4</p>
                  </div>
                  <div class="popup-image">
                    <img src="images/formations/data_mining.jpg" alt="popup-image">
                  </div>
                  <div class="popup-content">
                    <h3>Application de gestion de contenu</h3>
                    <p>Une plateforme de gestion de contenu permettant aux entreprises de gérer leurs publications en ligne avec une expérience utilisateur optimisée.</p>
                  </div>
                  <div class="popup-close">
                    <div class="fermer">Fermer</div>
                  </div>
                </div>
              </div>`;
            break;


            case 'popup-5':
            popupHtml = `
              <div class="popup" data-popup="popup-5">
                <div class="container-popup">
                  <div class="details">
                    <p>Details de la réalisation Popup 5</p>
                  </div>
                  <div class="popup-image">
                    <img src="images/formations/data_mining.jpg" alt="popup-image">
                  </div>
                  <div class="popup-content">
                    <h3>Application de gestion de contenu</h3>
                    <p>Une plateforme de gestion de contenu permettant aux entreprises de gérer leurs publications en ligne avec une expérience utilisateur optimisée.</p>
                  </div>
                  <div class="popup-close">
                    <div class="fermer">Fermer</div>
                  </div>
                </div>
              </div>`;
            break;

            case 'popup-6':
            popupHtml = `
              <div class="popup" data-popup="popup-6">
                <div class="container-popup">
                  <div class="details">
                    <p>Details de la réalisation Popup 6</p>
                  </div>
                  <div class="popup-image">
                    <img src="images/formations/data_mining.jpg" alt="popup-image">
                  </div>
                  <div class="popup-content">
                    <h3>Application de gestion de contenu</h3>
                    <p>Une plateforme de gestion de contenu permettant aux entreprises de gérer leurs publications en ligne avec une expérience utilisateur optimisée.
                    Une plateforme de gestion de contenu permettant aux entreprises de gérer leurs publications en ligne avec une expérience utilisateur optimisée
                    </p>
                  </div>
                  <div class="popup-close">
                    <div class="fermer">Fermer</div>
                  </div>
                </div>
              </div>`;
            break;
          default:
            console.log('Popup non défini pour cet ID');
            return;
        }

        // Ajouter le HTML du popup dans le DOM
        document.body.insertAdjacentHTML('beforeend', popupHtml);
        
        // Sélectionner le popup complet et le bouton de fermeture
        const popup = document.querySelector(`.popup[data-popup="${popupId}"]`);
        const closeBtn = popup.querySelector('.popup-close');
        const containerPopup = popup.querySelector('.container-popup');
        
        // Afficher le popup et animer le container
        popup.classList.add('display-block');
        containerPopup.classList.add('popup-animate');
          
        // Ajouter l'événement de fermeture
        closeBtn.addEventListener('click', () => {
          containerPopup.classList.remove('popup-animate');
          setTimeout(() => {
            popup.classList.remove('display-block');
          }, 300); // Attendre la fin de l'animation
        });
      } else {
        // Si le popup existe déjà
        const popup = document.querySelector(`.popup[data-popup="${popupId}"]`);
        const closeBtn = popup.querySelector('.popup-close');
        const containerPopup = popup.querySelector('.container-popup');
        
        popup.classList.add('display-block');
        containerPopup.classList.add('popup-animate');
        
        closeBtn.addEventListener('click', () => {
          containerPopup.classList.remove('popup-animate');
          setTimeout(() => {
            popup.classList.remove('display-block');
          }, 300);
        });
      }
    });
  });
}

openPopup(); // Initialiser la fonction pour ajouter les événements


// FAQ
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      const chevron = item.querySelector('#faq-chevron-down');

      question.addEventListener('click', () => {
          // Ferme toutes les autres réponses
          faqItems.forEach(otherItem => {
              if (otherItem !== item) {
                  otherItem.querySelector('.faq-answer').classList.remove('active');
                  otherItem.querySelector('#faq-chevron-down').classList.remove('faq-chevron-rotate');
              }
          });

          // Bascule la réponse actuelle
          answer.classList.toggle('active');
          chevron.classList.toggle('faq-chevron-rotate');
      });
  });
});


document.getElementById('menu-burger').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-display');
});



