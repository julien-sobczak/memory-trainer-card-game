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


// Reference panel - Show the full matrix
var app = new Vue({
  el: '#reference',

  data: {
    showPictures: true, // displays the card pictures
    showTexts: true,    // display the card texts
    matrix: matrix      // inherited from a global variable
  },

  methods: {

    // Return a card PAO phrase from its suit and type metadata.
    getPhrase: function(suit, type) {
      var card = getCard(suit, type);
      var result = card.phrase.replace("{P}", '<span class="person">' + card.person + '</span>').
                               replace("{A}", '<span class="action">' + card.action + '</span>').
                               replace("{O}", '<span class="object">' + card.object + '</span>');
      return result;
    },

    // Return the card picture from its suit and type metadata.
    getSmallPicture: function(suit, type) {
      return '/images/pictures/' + type.filename + '-' + suit.filename + '-small.jpg';
    }

  }
})
