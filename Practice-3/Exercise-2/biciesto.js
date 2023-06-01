function anioBiciesto(anio) {
    if (typeof anio !== 'number' || anio === 0) {
        return false;
    }
    if (anio % 100 === 0) {
        if (anio % 400 === 0) {
            return true;
        }
        return false;
    }
    if (anio % 4 === 0) {
        return true;
    }
    return false;
}
console.log(anioBiciesto(500));
export default anioBiciesto;
