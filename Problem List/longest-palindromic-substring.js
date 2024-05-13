/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let map = new Map()
    let left;
    let right;
    let maxPalindromic = '';
    let subString = null;

    for(let i=0; i<s.length; i++){
        left = i;
        right = i+1;
        subString = s.substring(left, right);
 
        while(left >= 0 && right <= s.length){
            if(isPalindrome(subString, map)){
                if(subString.length > maxPalindromic.length){
                    maxPalindromic = subString;
                }
            }
            
            if(right + 1 < s.length){
                right ++;
            }
            else  if(left - 1 >= 0){
                left --;
                right ++;
            }else{
                break;
            }
            subString = s.substring(left, right);
        }

        if(isPalindrome(subString, map)){
            if(subString.length > maxPalindromic.length){
                maxPalindromic = subString;
            }
        }

    }

    console.log(maxPalindromic);
    return maxPalindromic;

};

var isPalindrome = function(s, map) {
    let mapeado = map.get(s);
    if (mapeado !== undefined){
        return mapeado;
    }

    let left;
    let right;

    if(s.length === 1){
        map.set(s, true);
        return true;
    }

    if(s.length % 2 === 0){
        right = s.length/2;
        left = right - 1;
    }else{
        right = Math.floor(s.length/2)+1;
        left = right-2;
    }

    while(left >= 0){
        if(s[left] !== s[right]) {
            map.set(s, false);
            return false;
        }
        left--;
        right++;
    }
    map.set(s, true);
    return true;
}

const s = 'whdqcudjpisufnrtsyupwtnnbsvfptrcgvobbjglmpynebblpigaflpbezjvjgbmofejyjssdhbgghgrhzuplbeptpaecfdanhlylgusptlgobkqnulxvnwuzwauewcplnvcwowmbxxnhsdmgxtvbfgnuqdpxennqglgmspbagvmjcmzmbsuacxlqfxjggrwsnbblnnwisvmpwwhomyjylbtedzrptejjsaiqzprnadkjxeqfdpkddmbzokkegtypxaafodjdwirynzurzkjzrkufsokhcdkajwmqvhcbzcnysrbsfxhfvtodqabvbuosxtonbpmgoemcgkudandrioncjigbyizekiakmrfjvezuzddjxqyevyenuebfwugqelxwpirsoyixowcmtgosuggrkdciehktojageynqkazsqxraimeopcsjxcdtzhlbvtlvzytgblwkmbfwmggrkpioeofkrmfdgfwknrbaimhefpzckrzwdvddhdqujffwvtvfyjlimkljrsnnhudyejcrtrwvtsbkxaplchgbikscfcbhovlepdojmqybzhbiionyjxqsmquehkhzdiawfxunguhqhkxqdiiwsbuhosebxrpcstpklukjcsnnzpbylzaoyrmyjatuovmaqiwfdfwyhugbeehdzeozdrvcvghekusiahfxhlzclhbegdnvkzeoafodnqbtanfwixjzirnoaiqamjgkcapeopbzbgtxsjhqurbpbuduqjziznblrhxbydxsmtjdfeepntijqpkuwmqezkhnkwbvwgnkxmkyhlbfuwaslmjzlhocsgtoujabbexvxweigplmlewumcone';



longestPalindrome(s);