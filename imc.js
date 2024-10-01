function CalculateIMC(){
    let weigth = document.getElementById('weigth').value;
    let heigth = document.getElementById('heigth').value;

    if (weigth !== '' && heigth !== ''){
        let bmi = weigth / ((heigth / 100)**2);
        let result =   document.getElementById('result');
        result.innerHTML = 'Tu IMC Es: '+ bmi.toFixed(2);

        // clasificacion del imc
        if(bmi < 18.5){
            result.innerHTML += '- Bajo Peso'
        }
        else if(bmi < 25){
            result.innerHTML += '- Peso Normal'
        }
        else if(bmi < 30){
            result.innerHTML +='- SobrePeso'
        }
        else if(bmi < 35){
            result.innerHTML += '- Osesidad Tipo 1'
        }
    }
}