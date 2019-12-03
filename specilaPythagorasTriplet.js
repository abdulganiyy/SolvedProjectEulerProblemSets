function specialPythagorasTriplet() {
    let sum = 1000;
    let a = 0;
    let b = 0;
    let c = 0;
    let found = false;

    for(let i = 1; i < sum / 3; i++) {
        for(let j = 1; j < sum / 2; j++) {
            c = sum - i - j;

            if(i**2 + j**2 === c**2) {
                a = i;
                b = j;
                found = true;
                break;
                
            }
        }

        if(found) break;
    }

    return [a,b,c];
}

console.log(specialPythagorasTriplet());