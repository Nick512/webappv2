import { serverSupabaseClient } from '#supabase/server'


export default defineEventHandler(async (event) => {

    const supabase = await serverSupabaseClient(event)

    const { team } = getQuery(event)


    const { data, error } = await supabase.from('teams').select(`
    name,
    wins,
    loses,
    leagueName,
    disabled,
    players ( id, firstName, lastName, plusMinus, number )
    `).eq('id', team) 




    return { team: data }
    
})