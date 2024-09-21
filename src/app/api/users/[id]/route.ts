import { userProfiles } from "@/app/mock-data/user-profiles";
import { UserProfile } from "@/app/types/user";

function getUserById(userId: string, userProfiles: UserProfile[]): UserProfile | undefined {
  return userProfiles.find(user => userId === user._id);
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const userProfile = getUserById(params.id, userProfiles);

  if (!userProfile) {
    // User not found
    return new Response(JSON.stringify({ error: 'User not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return new Response(JSON.stringify(userProfile), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
