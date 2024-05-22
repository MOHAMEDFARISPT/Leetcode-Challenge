
// 819. Most Common Word

// Given a string paragraph and a string array of the banned words banned,
//  return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, 
//  and that the answer is unique.





var mostCommonWord = function(p,b) {
    p=p.toLowerCase()
    let symb="!?',;. "
    let s=''
    let obj={}
    for(let i=0;i<p.length;i++){
        if(!symb.includes(p[i])){
            s+=p[i]
        }else if(s){
            obj[s]=(obj[s]||0)+1
            s=''
        }
    }
    if(s!='') obj[s]=(obj[s]||0)+1
    let c=0
    let res=''
    for(let key in obj){
        if(obj[key]>c&&!b.includes(key)){
                c=obj[key]
                res=key  
        }
    }
    return res
};

paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.",
 banned = ["hit"]

console.log(`The most common word is: ${mostCommonWord(paragraph,banned)}`);