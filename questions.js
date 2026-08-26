/* =======================================================================
   VOS QUESTIONS — modifiez ce tableau pour créer votre propre quiz.

   Chaque question est un objet avec :
     - type: "mcq"   -> choix multiples (propose "options" + "correctIndex")
             "open"  -> réponse libre (propose "answer", affiché au clic sur "Afficher la réponse")
             "image" -> une image à montrer, combinable avec mcq ou open
                        (ajoutez "image": "images/nom-du-fichier.jpg")
     - question: le texte de la question
     - options: (uniquement pour "mcq") liste des choix, dans l'ordre
     - correctIndex: (uniquement pour "mcq") index (0,1,2,3...) de la bonne réponse
     - answer: (uniquement pour "open") la réponse à afficher
     - image: (optionnel, pour mcq/open/image) chemin vers le fichier image
     - points: (optionnel) nombre de points que rapporte la question, défaut = 1

   Placez vos images dans un dossier "images" à côté du fichier quiz.html
   ========================================================================= */

const questions = [
            {
              type: "mcq",
              question: "Si on somme le jour et le mois des anniversaires d'Audrey et Mathieu, quel nombre obtient-on ?",
              options: ["10", "8", "103", "16"],
              correctIndex: 3,
              points: 1
            },
            {
              type: "open",
              question: "Combien de mots comporte le titre de la thèse de Mathieu ?",
              answer: "14",
              points: 2
            },
            {
              type: "image",
              question: "Où cette photo a t'elle été prise ?",
              image: "images/normandie.jpg",
              answer: "Honfleur",
              points: 1
            },
            {
              type: "mcq",
              question: "Quelle est la ville où Audrey a vécu le plus longtemps ?",
              options: ["Vineuil", "Tours", "Rennes", "Marseille"],
              correctIndex: 2,
              points: 2
            },
         {
           type: "mcq",
           question: "Combien de jours Audrey et Mathieu ont ils passé à la réunion ?",
           options: [120, 185, 203, 167],
           points : 1
         },
         {
           type: "mcq",
           question: "Quel animal est le doudou de Mathieu ?",
           options: ["Un chien", "un lapin", "un cheval", "une araignée"],
           correctIndex: 1,
           points : 2
         },
         {
           type: "mcq",
           question: "Qui est la soeur préférée de Mathieu ?",
           options: ["Léna", "Léna Kernen", "Lénouille", "Léna manager"],
           correctIndex: [0, 1, 2, 3],
           point : 1
         },
         {
           type: "mcq",
           question: "Quel animal de compagnie Audrey a-t'elle eu ?",
           options: ["Un chat", "Un chien", "Une grenouille", "Un ver de terre"],
           correctIndex: 3,
           point : 1
         },
         {
           type: "mcq",
           question: "De quelle matière Audrey et Mathieu ont ils été tuteur ?",
           options: ["La biologie cellulaire", "L'anatomie", "La biologie de la reproduction", "La chimie organique"],
           correctIndex: 0,
           point : 1
         }

         /* question médicine pure */
         /* où a été prise la photo où ils sont autour du poteau
        des photos de Mathieu et Clément et il faut retrouver Mathieu
        une question sur la Réunion !


        efficacité des techniques de changement de comportement en médecine générale : revue de la littérature
  */
  ];
