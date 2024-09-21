import { users } from '@/app/mock-data/users';

export async function GET() {
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}