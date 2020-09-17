const tbody = document.querySelector('.table-body');


function setup() {
    noCanvas();
    // let lang = navigator.language || '';
    let speechRec = new p5.SpeechRec('pt-br', gotSpeech);

    speechRec.start(true, false);

    function gotSpeech() {
        if (speechRec.resultValue) {

            const tr = document.createElement('tr');
            const tdOne = document.createElement('td');
            const tdSecond = document.createElement('td');

            console.log(speechRec);

            tdOne.innerText = speechRec.resultString;
            tdSecond.innerText = Math.round(speechRec.resultConfidence * 100) + "%";
            tbody.appendChild(tr);
            tr.appendChild(tdOne);
            tr.appendChild(tdSecond);
        }

    }

}