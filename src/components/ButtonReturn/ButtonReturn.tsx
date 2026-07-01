
import { ArrowLeftIcon } from 'lucide-react';
import Styles from './ButtonReturn.module.css';

function ButtonReturn() {
    return(
        <div className={Styles.mainLink}>
            <div className={Styles.link}>
                <ArrowLeftIcon/>
                <a href="/" className={Styles.LinkVoltar}>voltar para Home</a>
            </div>
        </div>
    )
}

export default ButtonReturn;