import { serverSupabaseClient } from '#supabase/server'


export default defineEventHandler(async (event) => {

  const client = await serverSupabaseClient(event)

  const { league } = getQuery(event)

  console.log(league)

  const { data } = await client.from('teams').select('*').eq('leagueName', league)


    return { teams: data }
    
})