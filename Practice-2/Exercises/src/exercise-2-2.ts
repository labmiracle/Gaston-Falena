
function padLeft(value: string, padding: number): string;
function padLeft(value: string, padding: string): string; 
function padLeft(value: any, padding: any): any {
    if(typeof padding === 'number'){
    return `${Array(padding + 1).join(' ')}${value}`
    }
    return padding + value
} 


console.log('[Ejercicio 4.2]',`
${padLeft('',0)}
${padLeft('','')}
${padLeft('','')}
${padLeft('','')}
${padLeft('','')}
`)
