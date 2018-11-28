(function() {
    var Question = function(question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}



Question.prototype.print = function(){
    console.log(this.question);
    for ( var i = 0 ; i<this.answers.length; i++){
        console.log(i+1 + ': ' + this.answers[i]);;;;;
    }
    
   
}

Question.prototype.checkIfCorrect = function(answer, callback){
    var scr;
    if(answer === this.correctAnswer){
        console.log('Tacan odgovor');
        scr = callback(true)
        console.log('Ukupan rezultat: '+ scr);
        console.log('------------------------------------------------------');  
   
    }
    else{
        console.log('Netacan odgovor')
        scr = callback(false);
        console.log('Ukupan rezultat: '+ scr);
        console.log('------------------------------------------------------');  
  }
    
}


var q1 = new Question('Kako se zoves?',['Luka','Pera'],1)
var q2 = new Question('Kako se zove tvoja majka?',['Zorana','Mileva'],1);
var q3 = new Question('Koja ti je omiljena boja?',['Plava','Crvena'],2);
var q4 = new Question('Ime prvog ljubimca?',['Carli','Rex'],1);
var q5 = new Question('Kako se zove fakultet koji si pohadjao?',['FON','ITS'],2);

var questionArray = [q1,q2,q3,q4,q5];

function score(){
    var sum = 0;
    return function(correct){
        if(correct){
            sum++;
        }
        return  sum;
    }
}

    var keepScore = score();



function randomQuestion(){
    var randomNumber = Math.floor(Math.random() * questionArray.length);
    questionArray[randomNumber].print();
    var ans = prompt('Unesite tacan odgovor');
    
        if(ans !== 'exit'){
            questionArray[randomNumber].checkIfCorrect(parseInt(ans),keepScore);
        
            randomQuestion()
        }
    
   
    }
    randomQuestion();
})();
