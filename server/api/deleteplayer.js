import { serverSupabaseServiceRole } from '#supabase/server'


export default defineEventHandler(async (event) => {

    const supabase = await serverSupabaseServiceRole(event)

    const {player} = await readBody(event)

    const { error } = await supabase.from('players').delete().eq('id', player.id)

    return { error }    
    
})