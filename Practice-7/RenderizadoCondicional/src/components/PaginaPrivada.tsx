import { useState } from 'react';
import Button from './Button';

export default function PaginaPrivada() {
    const [isLogged, setIsLogged] = useState(false);

    const handleLogin = () => {
        setIsLogged(true);
    };

    const handleLogout = () => {
        setIsLogged(false);
    };

    return (
        <div>
            {isLogged ? (
                <div>
                    <h1>Contenido privado</h1>
                    <Button onClick={handleLogout} label='Salir' />
                </div>
            ) : (
                <div>
                    <h1>Iniciar sesión para ver el contenido privado</h1>
                    <Button onClick={handleLogin} label='Iniciar sesion' />
                </div>
            )}
        </div>
    );
}
