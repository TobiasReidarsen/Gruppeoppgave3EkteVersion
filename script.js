// console.log("EMPTY");
        // MODEL
        let story = null;
        let altWords = ["Ord 1", "Ord 2", "Ord 3", "Ord 4", "Ord 5", "Ord 6"];

        let storyWord = null;
        let buttonWord = null;

        // VIEW
        updateView();
        function updateView() {
            story = /*HTML*/ `Dette er en <span onclick="altWords[0] = storyFunc(this)">${altWords[0]}</span> og 
            <span onclick = "altWords[1] =storyFunc(this)">${altWords[1]}</span> fortelling 
            som vi synes er 
            <span onclick = "altWords[2] =storyFunc(this)">${altWords[2]}</span>
            og mange er 
            <span onclick = "altWords[3] =storyFunc(this)">${altWords[3]}</span>
            usikkere 
            <span onclick = "altWords[4] =storyFunc(this)">${altWords[4]}</span>
            mer enn det 
            <span onclick = "altWords[5] =storyFunc(this)">${altWords[5]}</span>
            ferdig.
            `;
            console.log(story);
            document.getElementById("app").innerHTML = /*HTML*/ `
            <p>${story}</p>
            <button onclick = "nyView(this)">stor</button>
            <button onclick = "nyView(this)">liten</button>
            <button onclick = "nyView(this)">mange</button>
            <button onclick = "nyView(this)">få</button>
            <button onclick = "nyView(this)">sær</button>
            <button onclick = "nyView(this)">sexy</button>
            <button onclick = "nyView(this)">snål</button>
            </br>
            <button onclick = "testLog()">TESTINGLOG</button>
            `
        }

        // CONTROLLER
        function nyView(eksEmpel) {
            buttonWord = eksEmpel.innerHTML;
            console.log(buttonWord + " T");
        }

        function storyFunc(a) {
            if (buttonWord !== null) {
                a.innerHTML = buttonWord;
                storyWord = a.innerHTML;
                //return a;
            }
        }


        function testLog() {
            console.log(" Her er buttonword: " + buttonWord);
            console.log(" Her er storyWord: " + storyWord);
        }
        // FLERE TING SOM KAN LEGGES TIL

        // Kan bare bruke et ord en gang.