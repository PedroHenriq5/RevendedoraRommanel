import Styles from './CardItem.module.css';

type CardItemProps = {
    href: string;
    children: React.ReactNode;
}

function CardItem(props: CardItemProps) {
    return(
        <a href={props.href} className={Styles.cardItem}>
            {props.children} 
        </a>
    )
}

export default CardItem;