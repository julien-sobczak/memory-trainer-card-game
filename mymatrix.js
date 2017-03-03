/*
 * Memory Palace Matrix
 * --------------------
 *
 * see http://mt.artofmemory.com/wiki/Person-Action-Object_(PAO)_System -->
 * Source of inspiration:
 * - http://mt.artofmemory.com/forums/version-1-of-my-pao-list-2584.html
 */

var matrix = {

  metadata: {
    "suits": [
      { "name": "Diamond", filename: "diamond",  description: "Rich people"              },
      { "name": "Heart",   filename: "heart",    description: "People you love"          },
      { "name": "Club",    filename: "club",     description: "Tough or crazy people"    },
      { "name": "Spade",   filename: "spade",    description: "Amusing or absurd people" }
    ],
    "types": [
      { "name": "King",  filename: "king",   description: "Male half of celeb couple"    },
      { "name": "Queen", filename: "queen",  description: "Female half of celeb couple"  },
      { "name": "Jack",  filename: "jack",   description: "Famous Jacks"                 },
      { "name": "10",    filename: "ten",    description: "Disney's characters"          },
      { "name": "9",     filename: "nine",   description: "Legend characters or Symbols" },
      { "name": "8",     filename: "eight",  description: "Simpson Family"               },
      { "name": "7",     filename: "seven",  description: "Film Main Characters"         },
      { "name": "6",     filename: "six",    description: "Animation Characters"         },
      { "name": "5",     filename: "five",   description: "Professions"                  },
      { "name": "4",     filename: "four",   description: "Comic Book Heroes"            },
      { "name": "3",     filename: "three",  description: "Sportmen"                     },
      { "name": "2",     filename: "two",    description: "Controversial people"         },
      { "name": "Ace",   filename: "ace",    description: "Genius"                       }
    ]
  },

  cards: [

    // King - Male half of celeb couple
    { "suit": "Diamond", "type": "King", "person": "Prince Charles",  "action": "Playing Cricket",    "object": "Mickey ear hat",              "phrase": "{P} {A} wearing a {O}" },
    { "suit": "Heart",   "type": "King", "person": "Barack Obama",    "action": "Remote controling",  "object": "Parrot drone",                "phrase": "{P} {A} a {O}" },
    { "suit": "Club",    "type": "King", "person": "David Beckham",   "action": "Juggling",           "object": "Ball",                        "phrase": "{P} {A} with a {O}" },
    { "suit": "Spade",   "type": "King", "person": "Nicolas Sarkozy", "action": "Climbing on stilts", "object": "Rapper Bling-bling necklace", "phrase": "{P} {A} wearing a {O}" },

    // Queen - Female half of celeb couple
    { "suit": "Diamond", "type": "Queen", "person": "Lady Di",          "action": "Hiding Face from paparazzis", "object": "A ton of Cameras", "phrase": "{P} {A} {O}" },
    { "suit": "Heart",   "type": "Queen", "person": "Michelle Obama",   "action": "Dancing like Beyonce",        "object": "America Flag",     "phrase": "{P} {A} holding an {O}" },
    { "suit": "Club",    "type": "Queen", "person": "Victoria Beckham", "action": "Applying lipstick",           "object": "Mirror",           "phrase": "{P} {A} in front of a {O}" },
    { "suit": "Spade",   "type": "Queen", "person": "Carla Bruni",      "action": "Singing",                     "object": "Micro",            "phrase": "{P} {A} in a {O}" },

    // Jack - Female half of celeb couple
    { "suit": "Diamond", "type": "Jack", "person": "Mickael Jackson", "action": "Moonwalking",       "object": "White Glove",   "phrase": "{P} {A} with a {O}" },
    { "suit": "Heart",   "type": "Jack", "person": "Jack Bauer",      "action": "Interrogating",     "object": "Robot Nao",     "phrase": "{P} {A} a {O}" },
    { "suit": "Club",    "type": "Jack", "person": "Batman's Joker",  "action": "Laughing insanely", "object": "Play Card",     "phrase": "{P} {A} holding a {O}" },
    { "suit": "Spade",   "type": "Jack", "person": "Jack Sparrow",    "action": "Drinking",          "object": "Bottle of rum", "phrase": "{P} {A} a {O}" },
    /*
     * Also:
     * - Jaquouille La fripouille
     *
     * - Jack Bauer (brutally interrogating Santa Claus with its messenger bag and black glasses),
     * - Batman's Joker (Green hair, white face, fixed grin, purple zoot suit and evil, insane laughter)
     * - Michael Jackson moonwalking with a White Glove
     * - Jack Sparrow drinking a bottle of rum
     */

    // 10 - Disney's characters
    { "suit": "Diamond", "type": "10", "person": "Aladdin",         "action": "Rubbing",           "object": "Lamp",             "phrase": "{P} {A} a {O}" },
    { "suit": "Heart",   "type": "10", "person": "Winnie the Pooh", "action": "Stuffing his hand", "object": "Honeypot",         "phrase": "{P} {A} into a {O}" },
    { "suit": "Club",    "type": "10", "person": "The Witch",       "action": "Giving",            "object": "Poisoneous apple", "phrase": "{P} {A} a {O}" },
    { "suit": "Spade",   "type": "10", "person": "Tigger",          "action": "Bouncing",          "object": "Tail",             "phrase": "{P} {A} on his {O}" },

    // 9 - Legend characters or Symbols
    { "suit": "Diamond", "type": "9", "person": "The Dalai Lama", "action": "Meditating and sitting",      "object": "Boulder",          "phrase": "{P} {A} on a {O}" },
    { "suit": "Heart",   "type": "9", "person": "Santa Claus",    "action": "Taking christmas presents",   "object": "Large Brown Sack", "phrase": "{P} {A} out of {O}" },
    { "suit": "Club",    "type": "9", "person": "Death",          "action": "Sharpening",                  "object": "Scythe",           "phrase": "{P} {A} with a {O}" },
    { "suit": "Spade",   "type": "9", "person": "Robin Hood",     "action": "Firing arrows",               "object": "English Longbow",  "phrase": "{P} {A} out of an {O}" },
    /*
     * Also:
     * - The Statue of Liberty holding up high a Flaming Torch
     * - Viking
     * - Pirate
     */

    // 8 - Simpson Family
    { "suit": "Diamond", "type": "8", "person": "Lisa",  "action": "Reading",     "object": "Book",              "phrase": "{P} {A} a {O}" },
    { "suit": "Heart",   "type": "8", "person": "Marge", "action": "Blow-drying", "object": "Massive Blue Hair", "phrase": "{P} {A} her {O}" },
    { "suit": "Club",    "type": "8", "person": "Bart",  "action": "Skating",     "object": "Skateboard",        "phrase": "{P} {A} with his {O}" },
    { "suit": "Spade",   "type": "8", "person": "Homer", "action": "Dreaming",    "object": "Beer",              "phrase": "{P} {A} of a {O}" },

    // 7 - Film Main Characters
    { "suit": "Diamond", "type": "7", "person": "Indiana Jones",   "action": "Swapping a sandbag",             "object": "Golden Statue",  "phrase": "{P} {A} for a {O}" },
    { "suit": "Heart",   "type": "7", "person": "Dexter",          "action": "Killing",                        "object": "Knife",          "phrase": "{P} {A} with a {O}" },
    { "suit": "Club",    "type": "7", "person": "Dark Vador",      "action": "telling \"I'm your father\"",    "object": "Laser sabor",    "phrase": "{P} {A} holding his {O}" },
    { "suit": "Spade",   "type": "7", "person": "Charlie Chaplin", "action": "swinging with big \"godasses\"", "object": "Bamboo cane",    "phrase": "{P} {A} holding his {O}" }, // TODO
    /*
     * Also:
     * - Mary Poppins floating along under a Black Umbrella
     * - Mick Dundee wrestling with a Crocodile
     * - Harry Potter flying on a Broomstick
     * - Tom Cruise revving a Motorbike
     * - Sherlock Holmes (using a magnifying glass, parka)
     */

    // 6 - Animation Characters
    { "suit": "Diamond", "type": "6", "person": "Bugs Bunny",  "action": "Saying \"What's up, doc?\"",  "object": "Carrot",                "phrase": "{P} {A} while eating a {O}" },
    { "suit": "Heart",   "type": "6", "person": "SpongeBob",   "action": "Blowing a bubble",            "object": "Net",                   "phrase": "{P} {A} holding a {O}" },
    { "suit": "Club",    "type": "6", "person": "Titeuf",      "action": "Urinating",                   "object": "Big Yellow Hair Wick",  "phrase": "{P} {A} hairing a {O}" },
    { "suit": "Spade",   "type": "6", "person": "Scooby Doo",  "action": "Swallowing",                  "object": "Giant Sandwich",        "phrase": "{P} {A} a {O}" },
    /*
     * Also:
     * - Monkey eating a banana
     * - Buzz saying "To Infinity and Beyond"
     * - Mario
     */

    // 5 - Professions
    { "suit": "Diamond", "type": "5", "person": "Stripteaser", "action": "Doing lapdance",      "object": "Row",       "phrase": "{P} {A} around a {O}" }, 
    { "suit": "Heart",   "type": "5", "person": "Fireman",     "action": "Squirting water",     "object": "Hose",      "phrase": "{P} {A} from a {O}" },
    { "suit": "Club",    "type": "5", "person": "Policeman",   "action": "attaching a burgler", "object": "handcuffs", "phrase": "{P} {A} with {O}" }, 
    { "suit": "Spade",   "type": "5", "person": "Clown",       "action": "Juggle",              "object": "Rings",     "phrase": "{P} {A} with his {O}" },
    /*
     * Also:
     * - Maid clean duster
     * - Amish milk cow
     * - Chef boil lobster
     * - Painter painting a Painting of Sunflowers on an Easel
     */

    // 4 - Comic Book Heroes
    { "suit": "Diamond", "type": "4", "person": "Superman",         "action": "Flying",          "object": "Cape",     "phrase": "{P} {A} with his {O}" },
    { "suit": "Heart",   "type": "4", "person": "Obelix",           "action": "Carrying",        "object": "Menhir",   "phrase": "{P} {A} a {O} on his back" },
    { "suit": "Club",    "type": "4", "person": "Captain Haddock",  "action": "falling",         "object": "Pipe",     "phrase": "{P} {A} while smoking his {O}" },
    { "suit": "Spade",   "type": "4", "person": "Spiderman",        "action": "Crawling walls",  "object": "Spiders",  "phrase": "{P} {A} with {O} on him" },
    /*
     * Also:
     * - Lucky Luke whistles with his Lasso
     * - Asterix laughing after drink his magical potion
     * - Captain America frisbee-throws his shield
     * - Panoramix - Picking Flowers - Cauldron
     */

    // 3 - Sportmen
    { "suit": "Diamond", "type": "3", "person": "Michael Jordan",         "action": "Doing a slam dunk",        "object": "Basketball",             "phrase": "{P} {A} with a {O}" },
    { "suit": "Heart",   "type": "3", "person": "Arnold Schwarzenegger",  "action": "Weightlifting",            "object": "Pair of dumbells",       "phrase": "{P} {A} a {O}" },
    { "suit": "Club",    "type": "3", "person": "Sébastien Loeb",         "action": "Putting a driver helmet",  "object": "Steering wheel",         "phrase": "{P} {A} holding a {O}" },
    { "suit": "Spade",   "type": "3", "person": "Usain Bolt",             "action": "Running",                  "object": "Collar of gold medals",  "phrase": "{P} {A} with a {O}" },
    /*
     * Also:
     * - Teddy Riner (ippon, black belt)
     * - Jeannine Longeau
     * - Amélie Mauresmo swinging with her racket,
     */

    // 2 - Controversial people
    { "suit": "Diamond", "type": "2", "person": "Paris Hilton",     "action": "Taking the pose for the photograph", "object": "Chihuahua",                   "phrase": "{P} {A} with her {O}" },
    { "suit": "Heart",   "type": "2", "person": "Colonel Sanders",  "action": "Coating",                            "object": "Breadcrumbs Chicken Pieces",  "phrase": "{P} {A} in {O}" }, 
    { "suit": "Club",    "type": "2", "person": "Adolf H.",         "action": "hailing",                            "object": "The world",                   "phrase": "{P} {A} while kicking {O}" },
    { "suit": "Spade",   "type": "2", "person": "Lady Gaga",        "action": "Wearing a chess dress",              "object": "A tons of luxury bags",       "phrase": "{P} {A} with her {O}" }, 
    /*
     * Also:
     * - Van Damme karate-kicking a punchbag
     * - Passepartout/Showing 3 with his hand/keyring
     */

    // Ace - Genius
    { "suit": "Diamond", "type": "Ace", "person": "Bill Gates",       "action": "Destroying",  "object": "PC displaying a blue screen",  "phrase": "{P} {A} a {O}" },
    { "suit": "Heart",   "type": "Ace", "person": "Steve Jobs",       "action": "Talking",     "object": "iPhone",                       "phrase": "{P} {A} on an {O}" },
    { "suit": "Club",    "type": "Ace", "person": "Linus Thornval",   "action": "Chasing",     "object": "Penguin",                      "phrase": "{P} {A} a {O}" },
    { "suit": "Spade",   "type": "Ace", "person": "Albert Einstein",  "action": "Writing",     "object": "Blackboard",                   "phrase": "{P} {A} on a {O}" },
    /*
     * Also:
     * - Neil Armstrong (in space suit) sticking into the ground a USA flag
     * - The Dalai Lama mediting and sitting on a Boulder
     * - Isaac Newton dropping an Apple
     * - Sigmund Freud writing notes on a Psychiatrist's Couch
     * - * - Elon Musk - Launching a toy rocket - Solar panel
     * - Donald Knuth signing a check
    */

  ]
}
