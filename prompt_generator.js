// A program that will output a random story prompt.

// Arrays full of words <3
const nouns = [
    'house', 'bed', 'human', 'child', 'cat', 'witch', 'ghost',
    'garden', 'tree', 'flower', 'teapot', 'scissors', 'vase',
    'paper', 'towel', 'woman', 'man', 'dog', 'cow', 'vampire',
    'ghoul', 'candle', 'glass', 'student', 'combination', 'moment',
    'argument', 'drawer', 'solution', 'employee', 'stranger', 'entertainment', 'thing'
];
const adjectives = [
    'lacking', 'fierce', 'broad', 'wretched', 'jumpy', 'outgoing',
    'difficult', 'six', 'relieved', 'unsuitable', 'new', 'dusty',
    'boundless', 'impossible', 'sweet', 'bustling', 'subsequent',
    'tiring', 'lovely', 'tenuous', 'productive', 'tricky', 'smooth',
    'cheerful', 'irritating', 'giant', 'spiritual', 'barbarous', 'precious', 'cozy'
];
const verbs = [
    'freeze', 'kick', 'clarify', 'remove', 'take risks', 'delay',
    'advise', 'train', 'advise', 'smile', 'administer', 'run',
    'jump', 'perform', 'dance', 'sense', 'shrug', 'contribute',
    'display', 'incorporate', 'imply', 'observe', 'mutter', 'bet',
    'restore', 'treat', 'aim', 'inhibit', 'perceive', 'invent', 'sing'
];
// random word generator :o

function randomWord(arr) {
    let num = Math.floor(Math.random() * arr.length);
    return arr[num];
}

function promptGenerator() {
    //save random words as constant variables and the first letter of the adjective

    const verb = randomWord(verbs);
    const noun = randomWord(nouns);
    const adjective = randomWord(adjectives);
    const firstChar = adjective.substring(0,1);
    
    //if clause for more proper grammar within the sentence
    
    if (firstChar === 'a' || firstChar === 'e' || firstChar === 'i'
        || firstChar === 'o'  || firstChar === 'u' || firstChar === 'y' ) {
            return `Write a story about an ${adjective} ${noun} that loves to ${verb}!`;
    } else {
        return `Write a story about a ${adjective} ${noun} that loves to ${verb}!`;
    }
}

console.log(promptGenerator());