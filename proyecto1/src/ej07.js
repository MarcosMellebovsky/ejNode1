import { getCurrency } from 'currency-map-country';

let monedaDelPais, codigoPais;
codigoPais = 'AR';
monedaDelPais = getCountry(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = getCountry(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function getCountry(codigo){
    let moneda;
    moneda=getCurrency(codigo); 
    return moneda;
}

//no anda la libreria