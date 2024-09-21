import UserProfile from "@/app/components/user-profile/user-profile"
import { getFriendsByName, getUserDetails } from "@/app/services/api";

const UserProfilePage = async ({ params }: { params: { id: string } }) => {
  const userDetail = await getUserDetails(params.id);

  if (!userDetail) {
    return <div>User not found or unable to fetch user details.</div>;
  }

  const friendNames = await getFriendsByName(userDetail.friends);

  return <UserProfile user={userDetail} friends={friendNames} />;
}

export default UserProfilePage;