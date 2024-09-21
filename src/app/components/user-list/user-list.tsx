import { UserListProps } from '@/app/types/user';
import styles from './user-list.module.css';
import Link from 'next/link';

const UserList = ({ users } : UserListProps) : React.JSX.Element => {
  if (!users.length) {
    return <p className={styles.title}>No users found.</p>;
  }

  return (
    <main className={styles.container}>
      <p className={styles.title}>User list:</p>
      <ul className={styles.list}>
        {users.map(user => (
          <li
            className={styles.item} 
            key={user._id}>
              <Link
                className={styles.link}
                href={`/users/${user._id}`}>
                {user.name}
              </Link>
            </li>
        ))}
      </ul>
    </main>
  );
}

export default UserList;