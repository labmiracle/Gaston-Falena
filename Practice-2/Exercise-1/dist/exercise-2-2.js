"use strict";
// function padLeft(value: string, padding: number | string): string 
// {3// si padding es un numero, return `${Array(padding + 1).join(' ')}${value}`
//  si padding es una cadena, return padding + value} 
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return `${Array(padding + 1).join(' ')}${value}`;
    }
    return padding + value;
}
console.log('[Ejercicio 4.2]', `
${padLeft('', 0)}
${padLeft('', '')}
${padLeft('', '')}
${padLeft('', '')}
${padLeft('', '')}
`);
