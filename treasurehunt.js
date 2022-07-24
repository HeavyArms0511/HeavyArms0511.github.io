var randomBomb = Math.floor(Math.random() * 12)
var randomTreasure = Math.floor(Math.random() * 12)
if (randomTreasure === randomBomb){
    randomTreasure = Math.floor(Math.random() * 12) 
}

console.log(randomBomb,randomTreasure)

const treasure = (location) => {
    if (randomBomb === location){
        document.getElementById("gravestones").innerHTML = "😈"; 
        alert("You ran into Evil Ashe, YOU LOSE!!")
    }else if (randomTreasure === location){
        document.getElementById("gravestones").innerHTML = "📗";
        var phrase = prompt("Say the proper phrase to claim the Necronomicon!(case matters)");
        if (phrase === "Klaatu, Barada, Nikto"){
             alert("You have claimed the Necronomicon!")
        }else {
            document.getElementById("gravestones").innerHTML = "💀"
            return alert("Wrong Phrase, Try Again 💀");          
        }
    }else {
        document.getElementById(location).innerHTML = "❌"
        return alert("Try again if you dare!")
    }
} 
 