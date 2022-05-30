

// MODEL
// let ord1 = "noe";
// let story = `Dette er en veldig ${ord1} fortelling om en ${ord2} ${ord3}`;
//<p>Dette er en veldig ${ord1}, ${ord2}, ${ord3}, ${ord4}, ${ord5}, ${ord6}, ${ord7}, ${ord8}, ${ord9}, ${ord10}, ${ord12}</p>

// VIEW
updateView();
function updateView() {
   
    document.getElementById('app').innerHTML = /*HTML*/ `
    <p>ok ${word} </p>
    </br>
    <button onclick="addWord(this)">stor</button>
    <button onclick="addWord(this)">liten</button>
    <button onclick="addWord(this)">vakker</button>
    <button onclick="addWord(this)">mager</button>
    <button onclick="addWord(this)">pen</button>
    <button onclick="addWord(this)">stygg</button>
    <button onclick="addWord(this)">gigant</button>
    <button onclick="addWord(this)">mikroskopisk</button>
    <button onclick="addWord(this)">utrolig</button>
    <button onclick="addWord(this)">pedagogisk</button>
    <button onclick="addWord(this)">fordummende</button>
    `;
    console.log(word);
}
 
// CONTROLLER
function addWord(word){
    word = word.innerHTML;
    console.log(word);
    updateView();
}