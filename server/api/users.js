import { serverSupabaseServiceRole } from '#supabase/server'
import protectRoute from '../protectRoute'


export default defineEventHandler(async (event) => {

  await protectRoute(event)

  const client = await serverSupabaseServiceRole(event)

  const { data } = await client.auth.admin.listUsers()

    const users = data.users
    console.log(users)
    return { users }
    
})