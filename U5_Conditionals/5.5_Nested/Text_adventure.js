alert("You are a warior-bard whose sole goal is to bring good music to all and protect the people. You have heard rumor of a troublsome dragon up on mount crater. You know of two path up, (1) straight up the sheer cliffs or (2) a long winding path around and up the mountain.")
let up_around = prompt("do you (1) go straight up, or, (2) go to take the long winding path?")  

if(up_around == 1) {
    let cave_continue = prompt("While scaling the steep icy cliffs you hear a sound, you see a cave to your left, do you (1) continue on, or, (2) investigate the cave?")
    if(cave_continue == 1) {
        alert("you ingore the cave and continue climbing, it gets cold as you contiune soon you hands grow numb and you legs grow weak, as you slowly slip from the cliffs you think of all that you had not done. You fall, silent and stoic to the end. GAME OVER")
    } else {
        alert("You enter the cave. You start to explore but become hopelessly lost in just a few short minutes. As you claw along in the dark, desperate for any sign of light you slip and fall. You fall for so long you ant tell if you are falling anymore, you can't tell if you're eyes are opened or closed you just fall forever and ever and ever. GAME OVER")
    }
} else {
    let wood_climb = prompt("As you begin your journey you stuble across a cotage on the base of the mountain, do you (1) investigate, or, (2) continue up the mountain")
    if(wood_climb == 1) {
        alert("as you walk inside you hear a cackle and you hear the door lock behind you. You turn and see a witch, in your few moments of suprise she casts a spell and you become a mouse. You scurry out and live in the woods for the rest of time, hoping to one day be changed back into what you were before.")
    } else {
        let music_fight = prompt("you finally reach the summit and find the dragon standing in all its fury. Do you (1) draw your sword and battle, or, (2) draw you lute and play a song?")
        if(music_fight == 1) {
            alert("You draw your sword and scream with all your warroir rage. You and the dragon fight in one of the most glorious and epic battles of history. THey say that you could see flames dancing from the village. After many minutes of battle you finally strike the killing blow. You emerge victorious but somehow feel like you missed an opportunity. You shake off the feeling and return to the village, a hero at last. THE END")
        } else {
            alert("instead of attacking you pull forth your stongest weapon, your lute and strum a tune so enchanting that the dragon stops for a moment to listen. YOu play and play and play, and even though you can't talk with the dragon you can see that it understands the music. You reach out to touch the dragon and he accepts you. You fly down to the village a hero. One that will be sung about for ages to come. THE END")
        }
    } 
}
