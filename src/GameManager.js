var GameManager = {
  size: 4,
  startNewGame: false,
  undo: false,
  undoCount: 0,
  direction: '',
  showMenu: false,
  colorScheme: 'mint',
  moved: false,
  winGame: false,
  winCount: 0,
  gameOver: false,
  showWinScreen: false,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  showLoseScreen: false,
  abilities: [
    /*
    {
      type: 'free',
      state: true,
      id: 10123
    },
    {
      type: 'grow',
      state: true,
      id: 37193
    },
    {
      type: 'four tile',
      state: true,
      id: 2123
    },
    {
      type: 'four tile',
      state: true,
      id: 2123
    },
    
    {
      type: 'divide',
      state: true,
      id: 5365876
    },
    {
      type: 'multiply',
      state: true,
      id: 2636354
    }*/
  ],
  currentAbility: '',
  currentAbilityId: '',
  abilityTile: null,
  combo: 0,
  comboBlocks: [],
  bestCombo: 0,
  choosePowers: false,
  powerSelection: null,
  currentPower: 1,
  currentPowerTile: 0,
  navPowerTiles: false,
  tooltip: ''
=======
  showLoseScreen: false
>>>>>>> parent of 0097cc6... Added undo mode
=======
  showLoseScreen: false
>>>>>>> parent of 0097cc6... Added undo mode
=======
  showLoseScreen: false
>>>>>>> parent of 0097cc6... Added undo mode
=======
  showLoseScreen: false
>>>>>>> parent of 0097cc6... Added undo mode
};

export default GameManager;