/*
STEP 1: Get pet name.
STEP 2: Create loop for pet, feed, walk.
STEP 3: Add energy and hapiness levels along the way.
        Alert if any rules are broken.
STEP 4: log to the console the final tallies of pets name, hapiness, and energy levels.

Build Specifications:
● Prompt the user for the pet's name.
● Keep track of the pet's happiness and energy levels. Both start out at zero.
● Use a loop to repeat the following six times...
    ○ Prompt the user for an action. They can type one of three options: feed, pet, or walk.
    ○ The f​ eed​ option ​increases​ ​energy​ by 2​ .​
    ○ The p​ et​ option i​ ncreases​ ​happiness​ by 1​ ​.
    ○ The w​ alk​ option ​increases​ ​happiness​ by ​2​ but d​ ecreases​ e​ nergy​ by 1​ ​.
● If the user chooses "walk" but the energy level is currently at zero, do not increase happiness or decrease energy. Instead, alert the following message: "Not enough energy to enjoy a walk."
● At the end, after the six actions, log the pet's name, happiness, and energy level to the console.
*/

let petName = prompt("Name your pet.");
let happiness = 0;
let energy = 0;

for (let i = 0; i < 6; i++) {
    let activity = prompt("feed, pet, or walk?");

    if (activity == "feed"){
        energy += 2
    } else if (activity == "pet") {
        happiness += 1
    } else if (activity == "walk") {
        if (energy >= 1){
            happiness += 2 
            energy -= 1
            } else {
                alert("Not enough energy to enjoy a walk. That's an unfortunate waste of time and an activity.")
            }
    } else {
        alert("That's not one of the options. Please try again. Unfortunately you've wasted valuable time and so have burned an activity slot")
    }
}

console.log(petName + " has " + happiness + " happiness and " + energy + " energy.")