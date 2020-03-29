var scores, roundScore, activePlayer;
var finalScore = prompt('enter final Score!');

scores = [0, 0];
roundScore = 0;
activePlayer = 0;


document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click' , function() {
    // 1.random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2.display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';  
    diceDOM.src = 'dice-' + dice + '.png';

    // 3.update the round score 
    if(dice !== 1) {
        // add score
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;

    } else {
        // next player

        // set round score = 0 and current score to '0'
        document.getElementById('current-' + activePlayer).textContent = '0';
        roundScore = 0;

        // hiding the dice
        // document.querySelector('.dice').style.display = 'none';

        
        // changed activePlayer
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        // modifying class names using toggle to active next player
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    }

});


document.querySelector('.btn-hold').addEventListener('click' , function() {
    // roundScore added to score[i] and display player's round score
    scores[activePlayer] += roundScore;
    if(scores[activePlayer] >= finalScore) {
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        document.getElementById('name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        console.log(scores[activePlayer]);
        document.getElementById('current-' + activePlayer).textContent = '0';
        document.querySelector('.btn-roll').disabled = true; 
        document.querySelector('.btn-hold').disabled = true; 
        return;
    }
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    roundScore = 0;
    
    // current score = 0 on webpage and hiding the dice
    document.getElementById('current-' + activePlayer).textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    
    // change activePlayer and toggle activePlayer
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
});

document.querySelector('.btn-new').addEventListener('click' , function() {
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';

    if(activePlayer !== 0) {
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
    }

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.dice').style.display = 'none';

    document.querySelector('.btn-roll').disabled = false;
    document.querySelector('.btn-hold').disabled = false;
});



















































