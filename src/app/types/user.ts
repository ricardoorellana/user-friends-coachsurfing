export interface User {
  _id: string;
  name: string;
}

export interface UserProfile {
  _id: string;
  name: string;
  email: string;
  profileImage: string;
  age: number;
  friends: string[]
}

export interface UserListProps {
  users: User[];
}

export interface UserProfileProps {
  user: UserProfile
  friends: User[]
}
