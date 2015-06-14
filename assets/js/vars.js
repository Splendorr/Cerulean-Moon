// Hey nacho!
// These are the variable declarations; these lists instantiate the variables below, and should match:
var youTubeVideoID, gfySingles;

// This is the YouTube Video ID, just the part of URL after https://www.youtube.com/watch?v=
var youTubeVideoID = 'sdh2VsCD9-Q';

// And these are the GFYCAT IDs.
// If you change the total number here, you need to adjust the slides in index.html to match. You can see that #gfySingle0 and #gfySingle0triple, etc. correspond to the indices of this array.

var gfySingles = [
  'VillainousUnrealisticBallpython', // Slide 0
  'AcclaimedLiquidIbizanhound', // Slide 1
  'PointlessCheerfulBurro', // Slide 2
  'SingleBoldAnemoneshrimp', // Slide 3
  'WateryOblongCoelacanth', // Slide 4
  'InconsequentialDifferentKite', // Slide 5
  // 'DeficientImpureAnkole', // Slide 6
  // 'HopefulBeautifulHen', // Slide 7
  // 'TameCavernousIzuthrush', // Slide 8
  // 'VapidSerpentineHippopotamus', // Slide 9
  // 'NegligibleRecentAfghanhound', // Slide  10
  // 'FragrantHeartyKawala', // Slide  11
];

// This is the number of small-screen single-GFY slides, starting from 0. This should match the total array index of gfySingles above.
var gfySingleMax = 5;

// This is the number of 3-GFY slides, also starting from 0. 0 = one slide, 1 = two slides, etc.
var gfyTripleMax = 1;
var gfyDoubleMax = 2;
