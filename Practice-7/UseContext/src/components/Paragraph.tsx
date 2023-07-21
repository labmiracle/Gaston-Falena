import { ReactNode } from 'react';
interface ParagraphProps {
    children: ReactNode;
}
export default function Paragraph(props: ParagraphProps) {
    return <p>{props.children}</p>;
}
