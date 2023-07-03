import styles from './Button.module.css';

interface Props {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    onClick: () => void;
}

const Button = ({onClick, color='primary'}) => {
    return(
        <button className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}>Alert</button>
    )
}

export default Button;