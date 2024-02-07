import { serverSupabaseServiceRole } from '#supabase/server'


export default defineEventHandler(async (event) => {
    //Get db connection
    const supabase = await serverSupabaseServiceRole(event)

    //Get team object from request body
    const { team } = await readBody(event)

    //Get league
    const { data } = await supabase.from('leagues').select('numOfTeams').eq('name', team.leagueName)

    //Update number of teams in league
    let updatedNumber = data[0].numOfTeams - 1

    //Delete team from db
    const { data:error2 } = await supabase.from('leagues').update({numOfTeams: updatedNumber}).eq('name', team.leagueName)

 


  const { error } = await supabase.from('teams').delete().eq('name', team.name)

    return { error }
    
})