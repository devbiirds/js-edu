/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      {
        let weeks = 0;
        let OurLevel = 1300;
        let timekill = config[focus];
        if(knowsProgramming) OurLevel-=500;
  
        
        for(let i = 0; i < OurLevel; i+=timekill) weeks++; 
  
        return weeks;
  }
}
