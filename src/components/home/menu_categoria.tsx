import Link from 'next/link'; 
import styles from './NavBar.module.css';

const NavBar = ({ onSelectCategory }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><button onClick={() => onSelectCategory('todos')}>Todos</button></li>
        <li><button onClick={() => onSelectCategory('animais')}>Animais</button></li>
        <li><button onClick={() => onSelectCategory('textura')}>Texturas</button></li>
        <li><button onClick={() => onSelectCategory('plantas_flores')}>Plantas & Flores</button></li>
        <li><button onClick={() => onSelectCategory('povo_pessoas')}>Povo & Pessoas</button></li>
        <li><button onClick={() => onSelectCategory('comida_bebida')}>Comida & Bebidas</button></li>
      </ul>
    </nav>
  );
};

export default NavBar;
