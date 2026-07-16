import { Link } from 'react-router';
import Styles from './CardItem.module.css';

type CardItemProps = {
    href: string;
    children: React.ReactNode;
}

function CardItem(props: CardItemProps) {
    return(
        <Link to={props.href} className={Styles.cardItem}>
            {props.children} 
        </Link>
    )
}

export default CardItem;