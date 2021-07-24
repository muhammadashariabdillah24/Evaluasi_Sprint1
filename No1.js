function Ifelseif(nilaiAngka) {
    let nilai = nilaiAngka;
    let grade = ''
    let text = 'Grade : '

    if(nilai > 90){
        grade = 'A'
        console.log(text + grade);
    } else if(nilai > 80){
        grade = 'B+'
        console.log(text + grade);
    } else if(nilai > 70){
        grade = 'B'
        console.log(text + grade);
    } else {
        grade = 'F'
        console.log(text + grade);
    }
}

Ifelseif(100)