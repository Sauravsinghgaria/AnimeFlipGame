let clickedCard = null;
let preventClick = false;
let combosFound = 0;
const imageUrls = [
    './images/one.jpeg',
    './images/two.jpeg',
    './images/three.jpeg',
    './images/four.jpeg',
    './images/five.jpeg',
    './images/six.jpeg',
    './images/seven.jpeg',
    './images/eight.jpeg',
];
const winning = [
    "I am Justice! I protect the innocent and those who fear evil. I'm the one who will become the god of a new world that everyone desires!",
    "I am Kira. It's not an alias, but my true name. I am the one who will become the god of a new world that everyone desires!",
    "I am Justice. I protect the innocent and those who fear evil. I'm the one who will become the god of a new world that everyone desires!",
    "I am Justice! I roam the world, delivering righteous judgement to the wicked, as decreed by this notebook.",
    "I am Light Yagami, and I am Kira.",
    "I am Justice. I am the one who will vanquish all the evil from this world.",
    "I am Kira. And at the same time, I am also God of the new world.",
    "I am Justice. I protect the innocent and punish the guilty. That is my way of life.",
    "I am the one who will become the god of the new world!",
    "I am Kira. The one who will win in the end.",
    "If Kira Gets Caught, He Is Evil. If Kira Rules The World, He Is Justice.",
    "When You Die, I'll Be The One Writing Your Name In My Death Note.",
    "In This World, There Are Very Few People Who Actually Trust Each Other.",
    "All You Will See Are People The World Would Be Better Off Without.",
    "An Eye For An Eye, My Friend.",
    "Careful What You Do, Because God Is Watching Your Every Move.",
    "In The End, There Is No Greater Motivation Than Revenge.",
    "It Is Generally Bad Luck For A Person To Be Followed By A God Of Death.",
    "Being Alone Is Better Than Being With The Wrong Person.",
    "If You Can't Beat The Game, If You Can't Solve The Puzzle, You're Nothing But A Loser.",
    "I Can't Develop Feelings. That's How Most Idiots Screw Up.",
    "In This World, There Is Only Good And Evil.", "Death Is Equal.",
    "This World Is Rotten, And Those Who Are Making It Rot Deserve To Die."
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

window.addEventListener('load', function () {
    const cards = document.getElementsByClassName('color-hidden');

    let newUrls = shuffleArray(imageUrls.concat(imageUrls));

    for (let i = 0; i < cards.length; i++) {
        // const imageIndex = i % newUrls.length; // Cycle through the images
        // const imageUrl = newUrls[imageIndex];
        cards[i].setAttribute('data-image', newUrls[i]);
    }
});

function onCardClicked(e) {
    const target = e.currentTarget;

    if (preventClick || target === clickedCard || target.classList.contains('done')) {
        return;
    }

    target.style.backgroundImage = `url(${target.getAttribute('data-image')})`;
    target.classList.add('done');

    // Check if we have clicked a new card and there is a previously clicked card
    if (!clickedCard) {
        clickedCard = target;
    } else {
        // If the data-image attributes match, it's a match
        if (clickedCard.getAttribute('data-image') === target.getAttribute('data-image')) {
            combosFound++;
            clickedCard = null;
            if (combosFound === 8) {
                setTimeout(function () {
                    // Generate a random index to choose a quote from the array
                    const randomIndex = Math.floor(Math.random() * winning.length);
                    //shuffle array too and then proceed
                    const newShuffledWinningQuote = shuffleArray(winning);
                    // Retrieve the random quote
                    const randomQuote = newShuffledWinningQuote[randomIndex];
                    // Display the random quote using alert()
                    alert(randomQuote);
                }, 1000);

            }
        } else {
            // If it's not a match, flip both cards back after a short delay
            preventClick = true;
            setTimeout(() => {
                clickedCard.style.backgroundImage = '';
                target.style.backgroundImage = '';
                clickedCard.classList.remove('done');
                target.classList.remove('done');
                clickedCard = null;
                preventClick = false;
            }, 500);
        }
    }
}
