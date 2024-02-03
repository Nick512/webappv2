export default defineEventHandler(() => {
    return {
        users: [{id: 1, username: 'user1', role: 'Global Admin'}, {id: 2, username: 'user2', role: 'League Editor'}, {id: 4, username: 'user2', role: 'Team Editor'}]
    }
})