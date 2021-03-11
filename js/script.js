// variables
let petName = prompt("Name your pet");
let happinessLevel = 0;
let energyLevel = 0;

// loop
let i = 0;
for (i = 0; i < 6; i++) {
    let chooseOne = prompt("Choose: feed, pet, or walk");
    
    if (chooseOne === "feed") {
        
        energyLevel = energyLevel + 2;

    } else if (chooseOne === "pet") {
        
        happinessLevel = happinessLevel + 1;

    } else if (chooseOne === "walk") {
        
        if (energyLevel === 0) {
            alert("Not enough energy to enjoy a walk.");
        } else {
            happinessLevel = happinessLevel + 2;
            energyLevel = energyLevel - 1;
        }
    } else {
        console.log("neither: feed, pet, or walk entered");
    }

} 

// end message
console.log(petName + " has " + happinessLevel + " happiness and " + energyLevel + " energy.");
