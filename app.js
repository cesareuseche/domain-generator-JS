let articles = ["the"];
let names = [
    "Irish",
    "lady",
    "techno",
    "New York",
    "Canada",
    "ReactJS",
    "Coding",
    "MMA",
    "UFC"
];
let adjectives = [
    "Big",
    "times",
    "expensive",
    "green",
    "round",
    "fun",
    "loud",
    "quick",
    "slow"
];
let domains = [".com", ".net", ".co", ".gov", ".org", ".io", ".on"];

for (let i = 0; i < articles.length; i++) {
    for (let n = 0; n < names.length; n++) {
        for (let a = 0; a < adjectives.length; a++) {
            for (let d = 0; d < domains.length; d++) {
                console.log(articles[i] + names[n] + adjectives[a] + domains[d]);
            }
        }
    }
}

