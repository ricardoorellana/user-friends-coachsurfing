import Image from 'next/image';
import { User, UserProfileProps } from '@/app/types/user';
import styles from './user-profile.module.css';
import Link from 'next/link';
import HomeLink from '../home-link/home-link';

const UserProfile = ({ user, friends }: UserProfileProps) : React.JSX.Element => {
  if (!user) {
    return (
      <div className={styles.container}>
        <HomeLink />
        <h2 className={styles.name}>User not found</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <HomeLink />
      <Image
        src={user.profileImage}
        alt={user.name}
        className={styles.image}
        width={128}
        height={128}
      />
      <div className={styles.content}>
        <h2 className={styles.name}>{user.name}</h2>
        <p className={styles.age}>Age: {user.age}</p>
        <p className={styles.email}>Email: {user.email}</p>
        
        <div className={styles.friendsList}>
          <h3 className={styles.friends}>{friends.length > 0 ? `Friends:` : 'No friends available'}</h3>
          <ul>
            {friends.map((friend: User) => (
              <li key={friend._id} className={styles.friendItem}>
                Friend: <Link className={styles.link} href={`/users/${friend._id}`}>{friend.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
