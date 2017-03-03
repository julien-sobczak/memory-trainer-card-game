// Return the card from its suit and type metadata.
var getCard = function(suit, type) {
  for (var i = 0; i < matrix.cards.length; i++) {
    var card = matrix.cards[i];
    if (card.type == type.name && card.suit == suit.name) {
      return card;
    }
  }
  return undefined;
};




var app = new Vue({
  el: '#app',

  data: {

    matrix: matrix ,    // inherited from a global variable

    // menu
    section: "home",    // currently displayed section

    // reference
    showPictures: true, // displays the card pictures
    showTexts: true,    // display the card texts

    // practice
    card1Index: -1,
    card2Index: -1,
    card3Index: -1,
    card1: null,
    card2: null,
    card3: null,
  },

  methods: {

    // Display the given section after hidding the other ones.
    toggle: function(idSection) {
      app.section = idSection;
      if (idSection == 'practice') {
        app.initPracticeSession();
      }
    },

    getType: function(typeName) {
      var types = app.matrix.metadata.types;
      for (var i = 0; i < types.length; i++) {
        if (types[i].name == typeName) {
          return types[i];
        }
      }
      return undefined;
    },

    getSuit: function(suitName) {
      var suits = app.matrix.metadata.suits;
      for (var i = 0; i < suits.length; i++) {
        if (suits[i].name == suitName) {
          return suits[i];
        }
      }
      return undefined;
    },

    // Return a card PAO phrase from its suit and type metadata.
    getPhrase: function(suit, type) {
      var card = getCard(suit, type);
      var result = card.phrase.replace("{P}", '<span class="person">' + card.person + '</span>').
                               replace("{A}", '<span class="action">' + card.action + '</span>').
                               replace("{O}", '<span class="object">' + card.object + '</span>');
      return result;
    },

    // Return the card CSS class name.
    getClassName: function(card) {
      return "card-" + card.suit + "-" + card.type;
    },

    // Return the card picture from its suit and type metadata.
    getSmallPicture: function(suit, type) {
      return '/images/pictures/' + type.filename + '-' + suit.filename + '-small.jpg';
    },

    initPracticeSession: function() {
      // Determine three random cards
      app.card1Index = Math.floor((Math.random() * matrix.cards.length));
      do {
        app.card2Index = Math.floor((Math.random() * matrix.cards.length));
      } while (app.card2Index == app.card1Index);
      do {
        app.card3Index = Math.floor((Math.random() * matrix.cards.length));
      } while (app.card3Index == app.card1Index || app.card3Index == app.card2Index);

      // Assign the cards
      app.card1 = app.matrix.cards[app.card1Index];
      app.card2 = app.matrix.cards[app.card2Index];
      app.card3 = app.matrix.cards[app.card3Index];
    },

  }
})
