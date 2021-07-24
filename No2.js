function Switch(nilaiAngka) {
    let nilai = nilaiAngka;
    let grade = ''
    let text = 'Grade : '

    switch(nilai){
        case 90:
            grade = 'A'
            console.log(text + grade);
        break;

        case 80:
            grade = 'B+'
            console.log(text + grade);
            break;

        case 70:
            grade = 'B'
            console.log(text + grade);
        break;
        default:
            grade = 'F'
            console.log(text + grade);
            break;
    }
}

Switch(80)