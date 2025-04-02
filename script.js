const Quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "The best way to predict the future is to create it. – Peter Drucker",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Opportunities don’t happen. You create them. – Chris Grosser",
    "If you want to achieve greatness stop asking for permission. – Anonymous",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair"
];

function randomQuoteGenerator() {
    const random = Math.floor(Math.random() * Quotes.length);
    document.getElementById('quote').innerHTML = Quotes[random];
}
