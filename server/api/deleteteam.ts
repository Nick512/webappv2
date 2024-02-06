import { serverSupabaseServiceRole } from '#supabase/server'


export default defineEventHandler(async (event) => {

  const supabase = await serverSupabaseServiceRole(event)

  const { team } = await readBody(event)

  const { data } = await supabase.from('leagues').select('numOfTeams').eq('name', team.leagueName)


    let updatedNumber = data[0].numOfTeams - 1

    const { data:error2 } = await supabase.from('leagues').update({numOfTeams: updatedNumber}).eq('name', team.leagueName)

 


  const { error } = await supabase.from('teams').delete().eq('name', team.name)

    return { error }
    
})