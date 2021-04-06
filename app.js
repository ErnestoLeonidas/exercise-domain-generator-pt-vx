
var pronoun = ['my', 'your', 'his', 'her', 'its', 'our','your' ,'their'];
var adj = ['adorable', 'floppy', 'foolish', 'lucky', 'tender', 'terrible'];
var noun = ['musician','model','gloves','ears', 'fox','kid'];

let domain;

for (let x in pronoun) {
    for (let y in adj) {
        for (let z in noun) {
            domain = pronoun[x]+adj[y]+noun[z];
            //console.log(domain.slice(-2));
            console.log(dot(domain));
            //console.log(pronoun[x]+adj[y]+noun[z]+domain(noun[z]));
        }
    }
}

function dot(val){
    if (val.slice(-2) == 'es') {
        return val.substring(val.length-2,-1)+'.es';
    } else if (val.slice(-2) == 'el') {
        return val.substring(val.length-2,-1)+'.el';
    } else {
        return val+'.com';
    }
}