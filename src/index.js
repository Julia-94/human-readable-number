module.exports = function toReadable (number) {
    const intNamingFirst = [
        '','one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven',
        'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
      
    const decemalNames = [
        'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
      
    const wordsFromInt = (number) => {
        const arrayFromNumber = Array.from(String(number), num => Number(num));
        if (number > 0 && number <= 19) {
          return intNamingFirst[number];
        }
        else if (number == 0 ) {
          return 'zero';
        }
        else if (arrayFromNumber.length === 2) {
          return `${decemalNames[arrayFromNumber[0]-2]} ${intNamingFirst[arrayFromNumber[1]]}`;
        }
        else if (arrayFromNumber.length === 3) {
          if (arrayFromNumber[1] === 0 && arrayFromNumber[2] === 0) {
            return `${intNamingFirst[arrayFromNumber[0]]} hundred`;
          }
           else if (arrayFromNumber[1] === 0) {
            return `${intNamingFirst[arrayFromNumber[0]]} hundred ${intNamingFirst[arrayFromNumber[2]]}`;
          }
            else if (arrayFromNumber[1] === 1) {
            const searchNum = `${arrayFromNumber[1]}${arrayFromNumber[2]}` * 1;
            return `${intNamingFirst[arrayFromNumber[0]]} hundred ${intNamingFirst[searchNum]}`;
          }
           else {return `${intNamingFirst[arrayFromNumber[0]]} hundred ${decemalNames[arrayFromNumber[1]-2]} ${intNamingFirst[arrayFromNumber[2]]}`;
         }
        }    
    }
    
  return wordsFromInt(number).trim();
}
