import { serverSupabaseClient } from '#supabase/server'

import { serverSupabaseServiceRole } from '#supabase/server'




export default defineEventHandler(async (event) => {
    
    const supabase = await serverSupabaseServiceRole(event)

    const body = await readBody(event)

   // const body = await readBody(event)

   console.log(body)
  

   const { error } = await supabase.from('leagues').insert({ name: body.name })

   return { error }

        

  })