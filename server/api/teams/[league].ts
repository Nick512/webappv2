export default defineEventHandler(async (event) => {
    const leagues = [
        {
            name: 'NBA',
            teams: [
                {name: 'Lakers'}, {name: 'Bucks'},{name: 'Pacers'},{name: '76ers'},{name: 'Bulls'},
            ]
        },
        {
            name: 'NFL',
            teams: [
                {name: '49ers'}, {name: 'Chiefs'},{name: 'Lions'},{name: 'Broncos'},{name: 'Ravens'},
            ]
        },
        {
            name: 'OHL',
            teams: [
                {name: 'Spitfires'}, {name: 'Gernals'},{name: 'Grey Hounds'},{name: 'Sting'},{name: 'Frontiacs'},
            ]
        },

    ]

    const body = await readBody(event)
    return {
        
    }
  })