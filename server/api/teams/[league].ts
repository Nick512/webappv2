export default defineEventHandler(async (event) => {
    
        
            const NBA = [ {name: 'Lakers'}, {name: 'Bucks'}, {name: 'Pacers'}, {name: '76ers'}, {name: 'Bulls'}]
            const NFL = [{name: '49ers'}, {name: 'Chiefs'},{name: 'Lions'},{name: 'Broncos'},{name: 'Ravens'}]
            const OHL = [{name: 'Spitfires'}, {name: 'Gernals'},{name: 'Grey Hounds'},{name: 'Sting'},{name: 'Frontiacs'}]

   // const body = await readBody(event)
   const { league } = event.context.params

        if (league == "NBA") {
            const team = NBA
            return team
        }

        if (league == "NFL") {
            const team = NFL
            return team
        }

        if (league == "OHL") {
            const team = OHL
            return team
        }

  })