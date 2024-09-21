import UserList from './components/user-list/user-list';
import { getUsers } from './services/api';

export default async function Home() {
  const users = await getUsers();

  return (
    <UserList users={users} />
  );
}
