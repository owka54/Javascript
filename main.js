// Generate random words
const food = () => {
    let foods = ['cereal', 'porridge', 'pancakes', 'full english', 'toast', 'soup', 'fruit'];

    return foods[Math.floor(Math.random() * foods.length)];
}

// console.log(food());

const location = () => {
    let locations = ['outside', 'living room', 'kitchen', 'bedroom', 'cafe', 'park'];

    return locations[Math.floor(Math.random() * locations.length)];
}

// console.log(location());

const whilst = () => {
    let tasks = ['reading', 'listening to music', 'listening to a podcast', 'watching youtube', 'watching tv', 'planning your day'];

    return tasks[Math.floor(Math.random() * tasks.length)];
}

console.log(whilst());