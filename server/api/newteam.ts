import { serverSupabaseServiceRole } from '#supabase/server'


export default defineEventHandler(async (event) => {
    
    const supabase = await serverSupabaseServiceRole(event)

    const { team } = await readBody(event)

    console.log(team)

    const { data } = await supabase.from('leagues').select('id').eq('name', team.leagueName)

    console.log(data[0].id)

   const { error } = await supabase.from('teams').insert({ name: team.name, leagueName: team.leagueName, leagueID: data[0].id })

   return { error }

        

  })