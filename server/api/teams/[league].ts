import { serverSupabaseClient } from '#supabase/server'




export default defineEventHandler(async (event) => {
    
    const client = await serverSupabaseClient(event)


            const NBA = [ {name: 'Lakers'}, {name: 'Bucks'}, {name: 'Pacers'}, {name: '76ers'}, {name: 'Bulls'}]
            const NFL = [{name: '49ers'}, {name: 'Chiefs'},{name: 'Lions'},{name: 'Broncos'},{name: 'Ravens'}]
            const OHL = [{name: 'Spitfires'}, {name: 'Gernals'},{name: 'Grey Hounds'},{name: 'Sting'},{name: 'Frontiacs'}]

   // const body = await readBody(event)
   const { league } = event.context.params

   const { data } = await client.from('teams').select('*').eq('leagueName', league)

   return { teams: data }

        

  })