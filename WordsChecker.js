const wordChecker = (wordsPassed) => {

    if(typeof(wordsPassed) === 'string'){
      let result = {};
      let wordHolder = wordsPassed.toLowerCase().split(' ');
        for(counter = 0; counter < wordHolder.length; counter++){
          console.log(wordHolder[counter])
            if(wordHolder[counter] in result){
              let valr = result[wordHolder[[counter]]];
              result[wordHolder[counter]] = valr+1;
            }
            else{
              result[wordHolder[counter]] = 1;
            }
    }
     return JSON.stringify(result);
    }
    else{
      console.log("Please enter an array");
    }
}

module.exports.wordChecker = wordChecker;
