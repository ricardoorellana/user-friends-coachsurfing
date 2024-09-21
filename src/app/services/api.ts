import { User, UserProfile } from "../types/user";

const baseURL = process.env.PUBLIC_API_URL || 'http://localhost:3000';

const handleResponse = async <T>(res: Response): Promise<T> => {
  if (!res.ok) {
    throw new Error(`API error status: ${res.status}`);
  }
  return res.json();
};

export const getUsers = async (): Promise<User[]> => {
  try {
    const res = await fetch(`${baseURL}/api/users`);
    return await handleResponse(res);
  } catch (error) {
    console.error('Error fetching usrs:', error);
    return [];
  }
};

export const getUserDetails = async (id: string): Promise<UserProfile | null> => {
  try {
    const res = await fetch(`${baseURL}/api/users/${id}`);
    return await handleResponse(res);
  } catch (error) {
    console.error(`Error fetching details for user ${id}:`, error);
    return null;
  }
};

export const getFriendsByName = async (friendIds: string[]): Promise<User[]> => {
  try {
    const users = await getUsers();
    const friendIdsSet = new Set(friendIds);

    return users.filter((user: User) => friendIdsSet.has(user._id));
  } catch (error) {
    console.error(`Error fetching friends by names`, error);
    return [];
  }
}