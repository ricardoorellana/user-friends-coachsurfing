import { LoadingIndicatorProps } from '@/app/types/loading-indicator';
import styles from './loading-indicator.module.css';

const LoadingIndicator = ({ msg }: LoadingIndicatorProps) : React.JSX.Element => {
  return (
    <div className={styles.container}>
      <p>{msg}</p>
    </div>
  );
};

export default LoadingIndicator;