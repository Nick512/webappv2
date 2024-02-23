import { serverSupabaseClient } from '#supabase/server'
import protectRoute from '../protectRoute'


export default defineEventHandler(async (event) => {

    await protectRoute(event)

    const supabase = await serverSupabaseClient(event)

    const {player} = await readBody(event)

    const { error } = await supabase.from('players').delete().eq('id', player.id)

    return { error }    
    
})