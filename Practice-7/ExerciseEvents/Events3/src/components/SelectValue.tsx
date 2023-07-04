import { useState, ChangeEvent } from 'react';

export default function SelectValue() {
    const [selectedValue, setSelectedValue] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };
    const estiloOpcion = {
        color: 'green',
    };
    return (
        <>
            <select value={selectedValue} onChange={handleChange}>
                <option value=''>Seleccionar opción</option>
                <option value='opcion1'>Opción 1</option>
                <option value='opcion2'>Opción 2</option>
                <option value='opcion3'>Opción 3</option>
            </select>
            <p style={estiloOpcion}>Valor seleccionado: {selectedValue}</p>
        </>
    );
}
