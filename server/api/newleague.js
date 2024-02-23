import { serverSupabaseClient } from '#supabase/server'
import protectRoute from '../protectRoute'




export default defineEventHandler(async (event) => {
    
    await protectRoute(event)

    const supabase = await serverSupabaseClient(event)

    const body = await readBody(event)

   // const body = await readBody(event)

   console.log(body)
  

   const { error } = await supabase.from('leagues').insert({ name: body.name })

   return { error }

        

  })