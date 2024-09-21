import styles from './home-link.module.css';
import Link from 'next/link';

const HomeLink = () : React.JSX.Element => {
  return (
    <Link href={'/'} replace={true} className={styles.homeButton}>
      Return to home
    </Link>
  );
};

export default HomeLink;