// Generate random words
const food = () => {
    let foods = ['cereal', 'porridge', 'pancakes', 'full english', 'toast', 'soup', 'fruit']

    return foods[Math.floor(Math.random() * foods.length)]
}

// console.log(food());