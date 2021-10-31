function fibonacchiGenerator(numOfItems){
    let i = 0;
    const sequence = [];
    if (numOfItems === 1)
        sequence.push(0);
    if (numOfItems === 2){
        sequence.push(0);
        sequence.push(1);
    }
    else if (numOfItems > 2){
        sequence.push(0);
        sequence.push(1);
        for (let i = 2; i < numOfItems; i++)
            sequence.push(sequence[i-2] + sequence[i-1]);
    }    
    
    console.log(sequence);
}

fibonacchiGenerator(5);
