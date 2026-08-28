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
     // Exemple de question "choix d'image" : 4 photos, il faut cliquer la bonne
             type: "image-choice",
             question: "Quelle est la version originale de cette photo ?",
             images: [
               "images/poteau_inv.jpg",
               "images/eventail.jpg",
               "images/poteau.jpg",
               "images/cravate2.jpg"
             ],
             correctIndex: 2,
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
           correctIndex: 1,
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
   // Exemple de question "choix d'image" : 4 photos, il faut cliquer la bonne
           type: "image-choice",
           question: "Sur quelle(s) image(s) voit-on Mathieu ?",
           images: [
             "images/Mathieu1.jpg",
             "images/Clement3.JPG",
             "images/Mathieu4.JPG",
             "images/Clement1.jpg"
           ],
           correctIndex: [0, 2],
           points: 1
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
           question: "Qui est la soeur préférée de Mathieu ?",
           options: ["Léna", "Léna Kernen", "Lénouille", "Léna manager"],
           correctIndex: [0, 1, 2, 3],
           point : 1
         },
         {
           type: "mcq",
           question: "De quelle matière Audrey et Mathieu ont ils été tuteurs ?",
           options: ["La biologie cellulaire", "L'anatomie", "La biologie de la reproduction", "La chimie organique"],
           correctIndex: 0,
           point : 1
         },
        {
 // Exemple de question "choix d'image" : 4 photos, il faut cliquer la bonne
         type: "image-choice",
         question: "Sur quelle(s) image(s) voit-on Mathieu ?",
         images: [
           "images/Clement2.JPG",
           "images/Mathieu2.jpg",
           "images/Mathieu3.JPG",
           "images/Clement4.JPG"
         ],
         correctIndex: [1, 2],
         points: 1
       },
       {
         type: "open",
         question: "Comment s'appelait la maîtresse de CP d'Audrey ?",
         answer: "Madame Roland",
         points: 1
       },
       {
         type: "mcq",
         question: "Quelle était la boisson alcoolisée favorite de Mathieu pendant ses années médecine ?",
         options: ["Whiskey Coca", "Ricard", "Vodka menthe", "Teq paf"],
         correctIndex: 2,
         point : 1
       },
       {
         type: "mcq",
         question: "Quelle était la boisson alcoolisée favorite d'Audrey pendant la course Croisière EDHEC ?",
         options: ["Whiskey Coca", "Ricard", "Vodka menthe", "Teq paf"],
         correctIndex: 1,
         point : 1
       },
       {
         type: "image",
         question: "Où cette photo a t'elle été prise ?",
         image: "images/etretat.jpeg",
         answer: "Etretat",
         points: 1
       },
       {
// Exemple de question "choix d'image" : 4 photos, il faut cliquer la bonne
        type: "image-choice",
        question: "Quel animal Audrey et Mathieu n'ont ils PAS vu à la Réunion ?",
        images: [
          "images/cameleon.jpeg",
          "images/oiseau.jpeg",
          "images/bounty.jpeg",
          "images/tortue.jpeg"
        ],
        correctIndex: 2,
        points: 1
      },


         /* question médicine pure */
         /* une question sur la Réunion !
         quel animal n'ont ils pas croisé à la Réunion ?
        efficacité des techniques de changement de comportement en médecine générale : revue de la littérature
  */
  ];
