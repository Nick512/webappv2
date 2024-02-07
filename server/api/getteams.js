import { serverSupabaseClient } from '#supabase/server'


export default defineEventHandler(async (event) => {

  const client = await serverSupabaseClient(event)

  const { league } = getQuery(event)


  const { data } = await client.from('teams').select('*').eq('leagueName', league)


    return { teams: data }
    
})