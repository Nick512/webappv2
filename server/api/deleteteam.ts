import { serverSupabaseServiceRole } from '#supabase/server'


export default defineEventHandler(async (event) => {

  const supabase = await serverSupabaseServiceRole(event)

  const { team } = await readBody(event)

  console.log(team)


  const { error } = await supabase.from('teams').delete().eq('name', team)

    return { error }
    
})