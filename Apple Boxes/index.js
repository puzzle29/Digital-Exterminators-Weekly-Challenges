function appleBoxes (k) {
    let x,
        odd = [],
        even = [],
        mapEven,
        mapOdd,
        yellowApples,
        redApples;

    function reducer( accumulator, currentValue ) {
        return accumulator + currentValue;
    }

    function mapper( currentValue ) {
        return currentValue * currentValue;
    }

    for ( x = 0; x <= k; x++ ) {
        if ( x === 0 ) {
            // group evens in the even array
            even.push(x);
        }
        else if ( x % 2 === 0 ) {
            even.push(x);
        }
        else {
            // group odds in the odd array
            odd.push(x);
        }
    }

    // map arrays usind the mapper function
    mapEven = even.map( mapper );
    mapOdd = odd.map( mapper );

    //reduce arrays usind the reducer function
    yellowApples = mapEven.reduce( reducer );
    redApples = mapOdd.reduce( reducer );

    return yellowApples - redApples;
}

console.log( appleBoxes( 5 ) )
