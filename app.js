var min = 0;
var max = 16;
var finalSpeech = 0;
var speechArray = [];

function randomSpeech(min, max) {
    return Math.floor(Math.random()*(1 + max - min) + min);
}

    speechArray.push("Who is somebody you look up to and why?");
    speechArray.push("Talk about a blind date experience.");
    speechArray.push("What is your favorite movie and why?");
    speechArray.push("Talk about the best trip you ever took.");
    speechArray.push("Talk about your favorite memory of grandma's house.");
    speechArray.push("Talk about a famous person you have met.");
    speechArray.push("Talk about your first car you ever owned.");
    speechArray.push("What is the most proud moment in your life so far.");
    speechArray.push("If you won the lottery, what would be the first thing you bought and why?");
    speechArray.push("Are you a dog or cat person and why.");
    speechArray.push("Talk about the most embarrassing moment you have experienced.");
    speechArray.push("If you could go anywhere in the world, where would it be and why?");
    speechArray.push("Tell us about your best or worst vacation ever.");
    speechArray.push("Give us three famous persons, living or dead, that you'd like to have a dinner party with and why them?");
    speechArray.push("What was one thing that you got away with as a teenager that your parents never knew?");
    speechArray.push("Crunchy or creamy peanut butter? Why?");
    speechArray.push("Tell us about a Homeowner/Renter nightmare.");

function submitSpeech() {

    finalSpeech = speechArray[randomSpeech(min, max)];
   $("#randomSpeech").text("Topic: " + finalSpeech);

}