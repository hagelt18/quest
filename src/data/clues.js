const clues = [
  {
    id: '6101d6ed-c553-4693-a7b5-7c74bb0a1f39',
    type: 'basic',
    clue: 'We have just one, but with eight to spare. We rumble when touched and we wail when empty.',
    question: 'What are we?',
    webAnswer: false,
    hint: 'We are in your house'
  },
  {
    id: 'eb8dd419-2569-4dde-b13b-1e31134184d4',
    type: 'basic',
    clue: 'Travel to the nearest Black Bean Temple where two spoons touch and the beasts of Denali are revered. There you will find a clue to the whereabouts of the first Magic gem. Word around town is that you may even find something there to increase your stamina',
    question: 'What is another name for this place?',
    answers: ['caribou'],
    webAnswer: true,
    hint: 'Building number of your favorite place to go in the morning'
  },
  {
    id: '1f24fa80-6332-4ce6-87d8-cb00ce022226',
    type: 'basic',
    clue: 'A once a strong and proud warrior now reduced to a mere ornament. Remains defiled, she lost more than just her honor. ',
    question: 'What was she?',
    answers: ['bear'],
    webAnswer: true,
    hint: 'Animal'
  },
  {
    id: 'f0266dbb-b101-4078-9954-a6df942f5831',
    type: 'basic',
    clue: 'Legends tell of a woodland beast who travelled so very far, passing many mountains, rivers, and trees...beyond the sun and over the horizon. Beneath his path, a great bounty, now sold to this very day in this temple.',
    question: 'How many trees did he pass on his journey?',
    answers: ['11'],
    webAnswer: true,
    hint: 'His story was memorialized on the walls within the Temple of the Black Bean. There he is depicted in the middle of his journey. Though it was very hard, I eventually made it home.'
  },
  {
    id: '31a874c0-1a05-45ea-82e2-ea79adcf03a3',
    type: 'basic',
    clue: 'Filled with new wisdom and vigor, you are now ready to embark on a journey to three locations. Each one will provide you with an KEY which will guide you to one of the MAGIC GEMS.',
    question: null,
    answers: [],
    webAnswer: true,
    hint: null
  },
  {
    id: '435c10bc-8546-4d15-8a86-270f4a335a77',
    type: 'basic',
    clue: 'Deep within the metropolis lies a wondrous place full of Nature’s beauty and splendor. There you will find a wise Sorceress living there who will be able to aid you on your adventure.\r\n\r\nJin, Mu, Shui, Huo, Tu',
    question: 'Enter the name of the place:',
    image: 'fiveelements',
    answers: ['wood', 'lake'],
    webAnswer: true,
    hint: 'This great sanctuary reserves a safe location for the old world to live on, safe from the ever growing threat of humanity.'
  },
  {
    id: '5aa10399-b215-4b90-bf48-49482790ab89',
    type: 'basic',
    clue: 'The temple here is closed, but you can still find a wealth of information just near the entrance.',
    question: 'They say this place is A _____ in the Middle of the City.',
    image: 'fiveelements',
    answers: ['marsh'],
    webAnswer: true,
    hint: 'Look for an area near the entrance that has a roof, but only two walls.'
  },
  {
    id: '7205280c-56f8-4910-8cde-db69277f030b',
    type: 'basic',
    clue: 'Here in this sanctuary for nature, we remember all those who fought to protect it. Follow the shortest path, keep the water to your left. As you travel through it, you will find many resting points which pay tribute to these individuals. One among them once said, \r\n\r\n"Savour the Past\r\nLive for today\r\nLook forward to the future"',
    question: 'What was their name?',
    answers: ['dorothy', 'holstrom'],
    webAnswer: true,
    hint: 'Follow the shortest path, keep the water to your left.'
  },
  {
    id: '6e533cb1-63ef-4939-9f92-57220d63ad82',
    type: 'basic',
    clue: 'Legends tell of a benevolent Sorceress who once lived in this wooded sanctuary. They say she returns to assist those in need who are pure of heart. If the stories are true, she rests in at the heart of wood lake.',
    question: 'Find her and ask for her aid.',
    answers: [],
    webAnswer: false,
    hint: 'If only there was some way you could walk across the water to the middle of the lake.'
  },
  {
    id: 'c9fbc8bf-620a-4d29-b5fc-cbe77acb9ebf',
    type: 'basic',
    clue: 'That place where you met your true love, though far from you now, has many like it here.',
    question: 'What is this place called?',
    answers: ['gamestop'],
    webAnswer: true,
    hint: 'A market place for amusements, somewhere next to a rainbow.'
  },
  {
    id: 'cf6e3e8b-ab3d-494d-a912-f91f494c4e96',
    type: 'basic',
    clue: 'Here in this grand bazaar of amusements awaits one of the three KEYs that will aid you in your quest. Worry not, brave hero...there are many in this land who would see to your success. ',
    question: 'See the store merchant and ask them for that which was left for you to PICK UP.',
    image: 'barcode',
    answers: ['711719519065'],
    webAnswer: true,
    hint: 'Enter the barcode number for the item you picked up. If you didn’t get something, try the Help Whistle in your inventory.'
  },
  {
    id: '75beaf1b-66d2-44a4-95fb-2867ebbae0c6',
    type: 'basic',
    clue: 'Nice work. There is yet one more KEY you must obtain. Lucky for you, it is very near. Like...if you were playing hot or cold, you could say you are HOT.',
    question: 'What numerals rest above the enterance?',
    answers: ['26'],
    webAnswer: true,
    hint: 'Your sorceress actually knows the "Hot or Cold" spell. Ask her to try it out.'
  },
  {
    id: '2c2bf8ed-3e80-4da7-8d74-b6dce1f76b1a',
    type: 'basic',
    clue: 'Your final KEY awaits you here. Speak with the merchant and tell them your name, they will have it for you in what they call a PULL BOX. Since you are out there working hard trying to save the prince, this one is on the house.',
    question: 'Confirm You have received it by entering the names of the two individuals represented on the front of the KEY',
    answers: ['gambit', 'rogue'],
    webAnswer: true,
    hint: 'Try the Help Whistle in your inventory if you are having trouble.'
  },
  {
    id: 'c1bf0873-02ad-4f14-8858-9fa25a8583f2',
    type: 'keys-obtained',
    clue: 'Now that you possess all three KEYS, you can enter the Echo Temple where you will find the gems. To enter the temple, you must return home and carry with you all three keys. When you walk through the door, you will not be in your real home, but an echo of itself in another plane of existence. Prepare yourself for the final trial',
    question: null,
    answers: [],
    webAnswer: false
  }
]

export default clues;