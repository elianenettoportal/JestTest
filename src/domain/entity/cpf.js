function areDigitEqual (cpf){
    const [firstDigit, seconddigit, thirdDigit] = cpf;
    return [...cpf].every(c => c === firstDigit);
}


const stringCPFValidation = (str)=> {
    if (!str) return false;
    str=str.replace(/\D/g,""); 
    if (str.length != 11) return false;
    if (areDigitEqual(str)) return false;
    try{  
        let d1=0;
        let d2=0;   
        let digito;        
        for (let nCount = 1; nCount < str.length -1; nCount++) {  
            digito = parseInt(str.substring(nCount -1, nCount));  							
            d1 = d1 + ( 11 - nCount ) * digito;  
            d2 = d2 + ( 12 - nCount ) * digito;  
        }; 
        let rest = (d1 % 11);
        let dg1  = (rest < 2) ? 0 : 11 - rest;       
        rest = (d1 % 11);    
        d2 += 2 * dg1;  
        rest = (d2 % 11);  
        let dg2 = (rest < 2) ? 0 : 11- rest;                 
        let nDigVerific = str.substring(str.length-2, str.length);  
        let nDigResult = "" + dg1 + "" + dg2;  
        return nDigVerific == nDigResult;
    }catch (e){  
        console.error("Erro !"+e);     
        return false;  
    }      
}

module.exports = {
    stringCPFValidation,
}