import { useContext } from 'react';
import Paragraph from './Paragraph';
import { languageContext } from '../App';
export default function MainText() {
    const language = useContext(languageContext);
    return (
        <>
            <Paragraph>{language === 'es' ? 'Hola' : 'Hello'}</Paragraph>
            <Paragraph>
                {language === 'es' ? '¿Cómo estás?' : 'How are you?'}
            </Paragraph>
        </>
    );
}
