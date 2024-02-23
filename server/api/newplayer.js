import { serverSupabaseClient } from '#supabase/server'
import protectRoute from '../protectRoute'


export default defineEventHandler(async (event) => {
    
    await protectRoute(event)

    const supabase = await serverSupabaseClient(event)

    const { player } = await readBody(event)

    console.log(player)

    const { error } = await supabase.from('players').insert({ teamName: player.teamName, firstName: player.firstName, lastName: player.lastName, number: player.number, plusMinus: player.plusMinus })

   return { error }

        

  })