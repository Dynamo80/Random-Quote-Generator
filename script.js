const Quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "The best way to predict the future is to create it. – Peter Drucker"
]

function randomQuoteGenerator() {
    const random = Math.floor(Math.random() * Quotes.length)
    document.getElementById('quote').innerHTML = Quotes[random]
}