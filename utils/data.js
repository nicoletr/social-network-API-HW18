const usernames = [
  'greetingstux',
  'driedunderwing',
  'brassclearly',
  'defeatedourselves',
  'fireworkslove',
  'educatedcurd',
  'stockumber',
  'profiledairy',
  'youngflashy',
  'trickyshepherd',
  'keymajor',
  'pasttragic',
  'hourmedical',
  'buntlinebesiege',
  'workshoptomato',
  'shipwreckmarten',
  'lavendersome',
  'wildcatobvious',
  'tricebellow',
  'marfume',
  'partnersownder',
  'synonymoussenate',
  'obligationhelm',
  'garagetradition',
  'ikeademure',
  'evilwhoosh',
  'provewomanly',
  'julynonce',
  'meetingoil',
  'bintdeputy',
  'oftengeorgian',
  'peaceaccess',
  'somethingfist',
  'scrollspotless',
  'volleyshallots',
  'lutzwassail',
  'toiletdeliver',
  'searchgrand',
  'wassailintrigue',
  'mosquitoewest',
  'upsetideal',
  'knowledgesix',
  'drunkreligion',
  'amiablefreeboard',
  'freezingcheater',
  'concurheadsail',
  'animalwise',
  'whenevergratified',
  'meatballcontribute',
  'parkabevy',
  'ruffspeace',
  'boozerablaze',
  'settleuntidy',
  'bellhopdout',
  'pugcookie',
  'coffeepilot',
  'vineuniform',
  'historianlongjump',
  'unreevemortgage',
  'portionbullet',
  'thawconcern',
  'posegrunt',
  'femininewindlass',
  'nebulousdetermine',
  'homesickplus',
  'heraldmealy',
  'gestureinning',
  'distressedmaiden',
  'gleamingluxuriant',
  'defeatscare',
  'faithfulpish',
  'obeisantpeck',
  'surferthumbsdown',
  'totallyprime',
  'coastfluttering',
  'tagbrown',
  'threadsunique',
  'understoodpermanent',
  'strengthimpulsive',
  'rockallexhibit',
  'starbuckstoyota',
  'neckerchieftrend',
  'wardtomatoe',
  'cultivatedprofile',
  'fallappreciate',
  'blurtbath',
  'categoryattach',
  'regulationyouth',
  'hotshyster',
  'miniaturecache',
  'buttockspanties',
  'dunnockseaweed',
  'ooliganruddyh',
  'somalianelement',,
  'professortaunt',
  'frontpatience',
  'fightgentleman',
  'grinrecovery',
  'philipsequable',
  'crumblecalm',
  'tricepselectronic',
  'modifiedeyrar',
  'joinlappet'
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsername = () =>
  `${getRandomArrItem(usernames)}`;