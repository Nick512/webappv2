import { serverSupabaseServiceRole } from '#supabase/server'


export default defineEventHandler(async (event) => {

  const supabase = await serverSupabaseServiceRole(event)

  const body = await readBody(event)

  console.log(body)


  const { error } = await supabase.from('leagues').delete().eq('name', body.name)

    return { error }
    
})