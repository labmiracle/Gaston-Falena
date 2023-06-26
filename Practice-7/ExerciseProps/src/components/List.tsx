import ItemList from './ItemList';

export default function List() {
    return (
        <ul>
            <ItemList>Observar el HTML</ItemList>
            <ItemList>
                Pensar en cómo puedo extraer cada parte en componentes
            </ItemList>
            <ItemList>Usarlos, o mejor dicho, reusarlos en React</ItemList>
        </ul>
    );
}
