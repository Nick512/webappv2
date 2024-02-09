import { serverSupabaseClient } from '#supabase/server'


export default defineEventHandler(async (event) => {

    const supabase = await serverSupabaseClient(event)

    const { team } = getQuery(event)


    const { data, error } = await supabase.from('teams').select(`
    name,
    wins,
    loses,
    leagueName,
    players ( id, firstName, lastName, plusMinus, number )
    `).eq('name', team) 



    return { team: data }
    
})