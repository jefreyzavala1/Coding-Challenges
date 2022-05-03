/* You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades' */

function defineSuit(card) {
  let deck = [
    "2♣",
    "3♣",
    "4♣",
    "5♣",
    "6♣",
    "7♣",
    "8♣",
    "9♣",
    "10♣",
    "J♣",
    "Q♣",
    "K♣",
    "A♣",
    "2♦",
    "3♦",
    "4♦",
    "5♦",
    "6♦",
    "7♦",
    "8♦",
    "9♦",
    "10♦",
    "J♦",
    "Q♦",
    "K♦",
    "A♦",
    "2♥",
    "3♥",
    "4♥",
    "5♥",
    "6♥",
    "7♥",
    "8♥",
    "9♥",
    "10♥",
    "J♥",
    "Q♥",
    "K♥",
    "A♥",
    "2♠",
    "3♠",
    "4♠",
    "5♠",
    "6♠",
    "7♠",
    "8♠",
    "9♠",
    "10♠",
    "J♠",
    "Q♠",
    "K♠",
    "A♠",
  ];

  let clubs = deck[0];
  let diamonds = deck[13];
  let hearts = deck[26];
  let spades = deck[47];
  clubs = clubs.slice(-1);
  diamonds = diamonds.slice(-1);
  hearts = hearts.slice(-1);
  spades = spades.slice(-1);

  switch (card.slice(-1)) {
    case clubs:
      return "clubs";
      break;
    case diamonds:
      return "diamonds";
      break;
    case hearts:
      return "hearts";
      break;
    case spades:
      return "spades";
      break;
  }
}

console.log(defineSuit("3♣")); //'clubs'
console.log(defineSuit("3♦")); //'diamonds'
console.log(defineSuit("3♥")); //'hearts'
console.log(defineSuit("3♠")); //'spades'
