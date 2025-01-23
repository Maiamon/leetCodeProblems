/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    
    let startWindow = 0;
    let endWindow = 0;
    let lenghtOfLongestSubstring = 0;
    let visitados = new Map();

    //para cada caractere em S
    for(let char of s){
        while(visitados.has(char)){
            //diminui a janela até se enquadrar
            visitados.delete(s[startWindow]);
            startWindow ++;
        }

        visitados.set(char);
        endWindow++;
        

        if(lenghtOfLongestSubstring < endWindow - startWindow){
            lenghtOfLongestSubstring = endWindow - startWindow;
        }
    }

    return lenghtOfLongestSubstring;
    // console.log(lenghtOfLongestSubstring);
};

const s = 'aab';

lengthOfLongestSubstring(s);