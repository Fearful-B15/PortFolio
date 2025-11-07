const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
];

function getRandomJoke() {
    jokeContainer=document.getElementById("joke-text");
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeContainer.textContent = jokes[randomIndex];
}