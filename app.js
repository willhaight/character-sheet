//intro data
let charName = document.getElementById('charName');
let race = document.getElementById('race');
let playerName = document.getElementById('playerName');
if (localStorage.sheetIntroDataCharName || localStorage.sheetIntroDataPlayerName) {
    charName.innerHTML = localStorage.sheetIntroDataCharName;
    race.innerHTML = localStorage.sheetIntroDataRace;
    playerName.innerHTML = localStorage.sheetIntroDataPlayerName;
}


//character stats

let strengthStat = document.getElementById('strengthStat');
let dexterityStat = document.getElementById('dexterityStat');
let constitutionStat = document.getElementById('constitutionStat');
let intelligenceStat = document.getElementById('intelligenceStat');
let wisdomStat = document.getElementById('wisdomStat');
let charismaStat = document.getElementById('charismaStat');
let arcanaStat = document.getElementById('arcanaStat');
let perceptionStat = document.getElementById('perceptionStat');
if (localStorage.sheetIntroDataCharName || localStorage.sheetIntroDataPlayerName) {
    strengthStat.innerHTML = localStorage.sheetStatStrength;
    dexterityStat.innerHTML = localStorage.sheetStatDexterity;
    constitutionStat.innerHTML = localStorage.sheetStatConstitution;
    intelligenceStat.innerHTML = localStorage.sheetStatIntelligence;
    wisdomStat.innerHTML = localStorage.sheetStatWisdom;
    charismaStat.innerHTML = localStorage.sheetStatCharisma;
    arcanaStat.innerHTML = localStorage.sheetStatArcana;
    perceptionStat.innerHTML = localStorage.sheetStatPerception;
}

//row1 data

let armorClass = document.getElementById('sheetArmorClass');
let initiative = document.getElementById('sheetInitiative');
let speed = document.getElementById('sheetSpeed');
if (localStorage.sheetIntroDataCharName || localStorage.sheetIntroDataPlayerName) {
    armorClass.innerHTML = localStorage.sheetArmorClass;
    initiative.innerHTML = localStorage.sheetInitiative;
    speed.innerHTML = localStorage.sheetSpeed;
}

//Well Being Stats

let sheetHealth = document.getElementById('sheetHealth');
let sheetShieldPoints = document.getElementById('sheetShieldPoints');
let sheetInventoryPoints = document.getElementById('sheetInventoryPoints');
let sheetEnergy = document.getElementById('sheetEnergy');
let sheetArcanaPoints = document.getElementById('sheetArcana');
let notes = document.getElementById('notes');
if (localStorage.sheetIntroDataCharName || localStorage.sheetIntroDataPlayerName) {
    sheetHealth.innerHTML = localStorage.sheetStatHealth;
    sheetShieldPoints.innerHTML = localStorage.sheetStatShieldPoints;
    sheetInventoryPoints.innerHTML = localStorage.sheetStatInventoryPoints;
    sheetEnergy.innerHTML = localStorage.sheetStatEnergy;
    sheetArcanaPoints.innerHTML = localStorage.sheetStatArcanaPoints;
    notes.innerHTML = localStorage.notes;

}


//refreshing data
onkeyup = function () {
    this.localStorage.sheetIntroDataCharName = charName.innerHTML;
    this.localStorage.sheetIntroDataRace = race.innerHTML;
    this.localStorage.sheetIntroDataPlayerName = playerName.innerHTML;
    //
    this.localStorage.sheetStatStrength = strengthStat.innerHTML;
    this.localStorage.sheetStatDexterity = dexterityStat.innerHTML;
    this.localStorage.sheetStatConstitution = constitutionStat.innerHTML;
    this.localStorage.sheetStatIntelligence = intelligenceStat.innerHTML;
    this.localStorage.sheetStatWisdom = wisdomStat.innerHTML;
    this.localStorage.sheetStatCharisma = charismaStat.innerHTML;
    this.localStorage.sheetStatArcana = arcanaStat.innerHTML;
    this.localStorage.sheetStatPerception = perceptionStat.innerHTML;
    //
    this.localStorage.sheetArmorClass = armorClass.innerHTML
    this.localStorage.sheetInitiative = initiative.innerHTML
    this.localStorage.sheetSpeed = speed.innerHTML
    //
    this.localStorage.sheetStatHealth = sheetHealth.innerHTML;
    this.localStorage.sheetStatShieldPoints = sheetShieldPoints.innerHTML;
    this.localStorage.sheetStatInventoryPoints = sheetInventoryPoints.innerHTML;
    this.localStorage.sheetStatEnergy = sheetEnergy.innerHTML;
    this.localStorage.sheetStatArcanaPoints = sheetArcanaPoints.innerHTML;
    this.localStorage.notes = notes.innerHTML;

    //delete warning
    if (!charName.innerHTML) {
        let exit = confirm('You deleted your character name. Did you mean to do that?');
        if (!exit) {
            charName.innerHTML = "Name";
        }
    }
}

