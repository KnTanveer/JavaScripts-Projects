const quotes = [
    "Stay curious.",
    "Chaos breeds stars.",
    "Less noise, more life.",
    "Trust the process.",
    "Begin again.",
    "Be a voice, not an echo.",
    "Dreams demand action.",
    "Find the magic in ordinary.",
    "Small steps still move you.",
    "Feel the fear and do it anyway.",
    "What you seek is seeking you.",
    "Let it be enough.",
    "Live gently, love fiercely.",
    "Done is better than perfect.",
    "You are your home.",
    "Risk the fall, feel the flight.",
    "Joy is a quiet rebellion.",
    "Energy is contagious.",
    "Grow through what you go through.",
    "Nothing changes if nothing changes.",
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }
    
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}