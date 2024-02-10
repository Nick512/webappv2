import { serverSupabaseServiceRole } from '#supabase/server'


export default defineEventHandler(async (event) => {

    const supabase = await serverSupabaseServiceRole(event)

    const {player} = await readBody(event)
    console.log(player)

   // const { error } = await supabase.from('players').update({firstName: player.firstName, lastName: player.lastName, number: player.number, plusMinus: player.plusMinus}).eq('id', player.id)

  //  return { error }    
    
})