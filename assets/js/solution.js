
class Word{
    constructor(word){
        word = word.toUpperCase();
        this.word = word;
        this.index = words.indexOf(this.word);
    }

    getPronunciation(){
    var index = words.indexOf(this.word);
    return phenomes[index];
}

getIdentical(){
    var index = words.indexOf(this.word);
    var result = [];
    phenomes.forEach((phenome,i) =>  phenome === phenomes[index] ? result.push(words[i]) : null)
    return result;
}

getSimilarWordsWithSubPhonemes(){
    var results = [];
    var phenome = this.getPronunciation();
    for (var i =0; i < phenomes.length; i++){
        if(phenomes[i].every(j => phenome.includes(j)))
            results.push(words[i]);
    }
        return results;
    
     
}
getSimilarWordsWithAddedPhonemes(){
    var results = [];
    var phenome = this.getPronunciation();
    for (var i = 0; i < phenomes.length; i++){
        if(phenomes[i].toString().includes(phenome.toString()))
            results.push(words[i])
    }
    return results;


}



getSimilarWords(){
    var results = this.getIdentical().concat(this.getSimilarWordsWithAddedPhonemes(),this.getSimilarWordsWithSubPhonemes());
    results = Array.from(new Set(results));
    return results;
}

getSpelling(){
    return this.word.getPronunciation();
}

toString(){
    console.log("Word " + this.word);
    console.log("Get pronunciation: " + this.getPronunciation());
    console.log("Get Identical: " + this.getIdentical());
    console.log("Get similar words with Sub Phenomes: " +  this.getSimilarWordsWithSubPhonemes());
    console.log("Get similar words with added Phenemes: " + this.getSimilarWordsWithAddedPhonemes());
    console.log("Get similar words: " + this.getSimilarWords());

}

setWord(){
    let word;
    while (word==null)
    word = prompt("Please enter a new word");
    this.word = word.toUpperCase();
}



}
function getWords(s) {
    let result = "";
     result = s.split("\n");
     
     result.splice(0,54);
     //console.log(result);
      words = [];
      phenomes = [];
     wordsWphenomes = [];
      for (var i = 0; i < result.length; i++ ){
          tempLine = result[i].split(" ");
          words.push(tempLine[0]);
          phenomes.push(tempLine.slice(2,tempLine.length));
      }
      return;
    }

var words = [];
var phenomes = [];

