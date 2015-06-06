// Hey nacho!
// These are the variable declarations; these lists instantiate the variables below, and should match:
var youTubeVideoID, gfySingles;

// This is the YouTube Video ID, just the part of URL after https://www.youtube.com/watch?v=
var youTubeVideoID = 'sdh2VsCD9-Q';

// And these are the GFYCAT IDs.
// If you change the total number here, you need to adjust the slides in index.html to match. You can see that #gfySingle0 and #gfySingle0triple, etc. correspond to the indices of this array.

var gfySingles = [
  'FragrantHeartyKawala', // Slide 0
  'FragrantHeartyKawala', // Slide 1
  'FragrantHeartyKawala', // Slide 2
  'FragrantHeartyKawala', // Slide 3
  'FragrantHeartyKawala', // Slide 4
  'FragrantHeartyKawala', // Slide 5
]

// This is the number of small-screen single-GFY slides, starting from 0. This should match the total array index of gfySingles above.
var gfySingleMax = 5;

// This is the number of 3-GFY slides, also starting from 0. 0 = one slide, 1 = two slides, etc.
var gfyTripleMax = 1;
