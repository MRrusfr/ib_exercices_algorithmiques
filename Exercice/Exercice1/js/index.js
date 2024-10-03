let participants = ['First','Second','Third'];
let score = [];
for (let i = 0; i < participants.length; i++) {
    let input = prompt("Entrez les resultats des épreuves de " + (participants[i]) + " : ");
    let epreuves = input.split(",");
    let moyen = (parseInt(epreuves[0])+parseInt(epreuves[1])+parseInt(epreuves[2]))/3;
    let niveau = ['Débutant', 'Intermédiaire', 'Expert'];
    if (moyen < 50) {
        score.push(niveau[0]);
    } else if (moyen < 70) {
        score.push(niveau[1]);
    } else if (moyen < 100) {
        score.push(niveau[2]);
    }
    console.log(participants[i] + " est " + score[i])
}

