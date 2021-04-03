const shuffle_array = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

const GenerateUniqueItem = (
    arrayReference,
    minBound,
    maxBound,
) => {
    let array = [];
    let i = 0;
    for (let x=minBound; x<(maxBound + 1); x++) {
        array.push(x);
    }
    array = shuffle_array(array);
    do {
        if(arrayReference.indexOf(array[i]) === -1) {
            return array[i];
        }
        i++;
    } while(true);
}

module.exports = { GenerateUniqueItem };
