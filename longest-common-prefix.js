/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let answerStr = "";
    let char = "";

    if(strs.length == 1){
        return strs[0]
    }

    for(let i = 0; true; i++){
        for(let j = 0; j < strs.length -1; j++){
            if(strs[j][i] != strs[j+1][i]){
                return answerStr
            }
            else{
                if (strs[j][i] == undefined){
                    return answerStr + ""
                }
                char = strs[j][i];
            }
        }
        answerStr = answerStr + char
    }
};
