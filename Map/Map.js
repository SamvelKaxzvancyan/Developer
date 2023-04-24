//Առաջադրանք 1 Բառերի առաջին տաոերը դարձնել մեծատառ։

let text = "the delaware tercentenary half dollar is a commemorative fifty-cent coin designed by carl l. schmitz and minted by the united states bureau of the mint to mark the 300th anniversary of new sweden, the first successful european settlement in delaware. also known as the swedish delaware half dollar, the coin was produced by the philadelphia mint in march 1937, though that year appears nowhere on the piece.";

let words = text.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}

let word1 = words.join(" ");

console.log(word1);

//Առաջադրանք 2 mapi շնորհիվ սարքել filter-anagrams բառերի դասավորվածություն ։

let words1 = ["angel", "glean", "arc", "car", "brag", "grab", "cat", "act" ]

const sorted = words1.map((item) => {
    return item.map.split(" ").sort().join(" ");
});
const map = sorted.reduce(() =>{
    if (!acc.has(item)){
        acc.set(item,[])
    }
    acc.get(item).push(words1[index])
    return acc;
},new Map());

console.log(words1);
console.log(sorted)
console.log(map);
