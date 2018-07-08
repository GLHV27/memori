const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

const randomize = (list = []) => {
    const length = list.length - 1;
    let randomList = [];

    for (let i = 0; i < length; i++) {
        let j = randomInteger(i, length);

        randomList[i] = list[j];
        randomList[j] = list[i];
    }

    return randomList;
};

export default randomize;
