import { serverSupabaseClient } from '#supabase/server'
import protectRoute from '../protectRoute'


export default defineEventHandler(async (event) => {

    await protectRoute(event)

    const supabase = await serverSupabaseClient(event)

    const body = await readBody(event)

    //Update name only then update teams to new league name
    if (body.name != body.newName && body.disabled == body.status) {
        const { error } = await supabase.from('teams').update({name: body.newName}).eq('id', body.id)
        return { error }
    }

    //Update status only
    if (body.name == body.newName && body.disabled != body.status) {
        const { error } = await supabase.from('teams').update({disabled: body.status }).eq('id', body.id)
        return { error }
    }

    //Update name and status then edit team to new league name
    if (body.name != body.newName && body.disabled != body.status) {
        const { error } = await supabase.from('teams').update({name: body.newName, disabled: body.status }).eq('id', body.id)
        return { error }
    }

    
})