import { serverSupabaseServiceRole } from '#supabase/server'


export default defineEventHandler(async (event) => {

    const supabase = await serverSupabaseServiceRole(event)

    const body = await readBody(event)

    console.log(body)

    //Update name only then update teams to new league name
    if (body.name != body.newName && body.disabled == body.status) {
        const { error } = await supabase.from('leagues').update({name: body.newName}).eq('name', body.name)
        const { error: error2 } = await supabase.from('teams').update({leagueName: body.newName }).eq('leagueName', body.name)
    }

    //Update status only
    if (body.name == body.newName && body.disabled != body.status) {
        const { error } = await supabase.from('leagues').update({disabled: body.status }).eq('name', body.name)
    }

    //Update name and status then edit team to new league name
    if (body.name != body.newName && body.disabled != body.status) {
        const { error } = await supabase.from('leagues').update({name: body.newName, disabled: body.status }).eq('name', body.name)
        const { error: error2 } = await supabase.from('teams').update({leagueName: body.newName }).eq('leagueName', body.name)
    }


  //const { error } = await supabase.from('leagues').delete().eq('name', body.name)

//  return { error }
    
})