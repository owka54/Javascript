// Generate random words
const food = () => {
    let foods = ['cereal', 'porridge', 'pancakes', 'full english', 'toast', 'soup', 'fruit'];

    return foods[Math.floor(Math.random() * foods.length)];
}

// console.log(food());

const location = () => {
    let locations = ['outside', 'in the living room', 'in the kitchen', 'in the bedroom', 'atthe cafe', 'at the park'];

    return locations[Math.floor(Math.random() * locations.length)];
}

// console.log(location());

const whilst = () => {
    let tasks = ['reading', 'listening to music', 'listening to a podcast', 'watching youtube', 'watching tv', 'planning your day'];

    return tasks[Math.floor(Math.random() * tasks.length)];
}

// console.log(whilst());

const emoji = () => {
    let emojis = ['<3', ':)', ':o', '|_o.o_|', ':3'];

    return emojis[Math.floor(Math.random() * emojis.length)];
}

// Put random words together and format them into sentences.
const result = (food, location, whilst, emoji) => {
    return `You should have ${food} for breakfast.
You should eat it ${location}.
You should eat while ${whilst}.
${emoji}`;
}

// Print the results
console.log('========================================');
console.log(result(food(), location(), whilst(), emoji()));
console.log('========================================');
