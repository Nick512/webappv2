import { serverSupabaseServiceRole } from '#supabase/server'


export default defineEventHandler(async (event) => {
    
    const supabase = await serverSupabaseServiceRole(event)

    const { team } = await readBody(event)

    const { data } = await supabase.from('leagues').select('id, numOfTeams').eq('name', team.leagueName)

    let updatedNumber = data[0].numOfTeams + 1
    console.log(updatedNumber)

    const { data:error2 } = await supabase.from('leagues').update({numOfTeams: updatedNumber}).eq('name', team.leagueName)

   const { error } = await supabase.from('teams').insert({ name: team.name, leagueName: team.leagueName, leagueID: data[0].id })

   return { error }

        

  })