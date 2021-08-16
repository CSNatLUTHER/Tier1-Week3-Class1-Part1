//console.log ( 'js')

// REVIEW OF ARRAYS AND LOOPS

let sushiSpots = [ 'Shushi Train', 'Wakame', 'Masu', 'Sakura', 'Billy\'s Sushi' ]

//Loop through the array

for( let i=0; i<sushiSpots.length; i++ ){
    let thisSpot = sushiSpots[i]; // temp variabe to make writing the code easier.
    // inside the code clock
    // get the # of charaters in the sushi spot
    let spotChars = sushiSpots.length;
    let spaces = 0;
    // remove any spaces in sushiSpot name
    for ( j=0; j<thisSpot.length; j++){
        // is this charater an empty space
        if (thisSpot[ j ] === ' ') {
            console.log( 'Empty Space found in: ', thisSpot, 'at index ', j )
            spaces++;
            
        }
       
    }
    //spotChars -= spaces;

    // log out each sushi spot
    console.log (sushiSpots[i]);
    console.log (thisSpot, ' has ', spotChars, 'characters.')
} // end for

console.log ( 'sushiSpots: ', sushiSpots) // sushiSpots is a global value because it's outside a code block
// console.log ( 'i:', i ) // 'i' can't be defined because it's only available inside the code block.

// SEPARATE YOUR CONCERNS!!
//KEEP YOUR CODE DRY = (D)DON'T (R)REPEAT (Y)YOURSELF


