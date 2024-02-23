import { serverSupabaseClient } from '#supabase/server'
import protectRoute from '../protectRoute'


export default defineEventHandler(async (event) => {

  await protectRoute(event)

  const client = await serverSupabaseClient(event)

  const { data } = await client.from('leagues').select('*')


    return { leagues: data }
    
})