<template>
    <NavBar />
    <AdminButtons />

    
    <table v-if="mode == 'view'" class="table table-striped table-hover w-75 mx-auto">
        <thead>
    <tr>
        <th scope="col">UID</th>
        <th scope="col">UserName</th>
        <th scope="col">Role</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in users" v-bind:key="user.id">
        <th scope="row">{{ user.id }}</th>
        <td >{{ user.username }}</td>
        <td>{{ user.role }}</td>
    </tr>
    </tbody>

    </table>

    <form v-if="mode == 'add'" class="w-75 mx-auto rounded">
        <div class="form-group w-75 p-2 mx-auto">
            <input v-model="newUser.username" type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username">
        </div>
        <div class="form-group w-75 p-2 mx-auto">
            <input v-model="newUser.Password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group w-75 p-2 mx-auto">
            <input v-model="newUser.role" type="text" class="form-control" id="role" placeholder="Role">
        </div>
        <button @click="newUserSubmit" class="btn btn-success">Add User</button>
    </form>

    <div class="button-row w-50 mx-auto">
        <button @click="mode = 'add'" v-if="mode == 'view'" class="btn btn-success w-50 m-2">Add New User</button>
        <button v-if="mode == 'view'" class="btn btn-success w-50 m-2">Edit Users</button>
    </div>

    
</template>

<script setup>

   

    let { data } = await useFetch('/api/getusers')
    const initUsers = useState('users', () => data.value.users)



    //let users = data.users

    let mode = useState('mode', () => 'view')

    let newUser = ref({ username: '', Password: '', role: ''})

    let newUserSubmit = () => {
        users.push(newUser)
        console.log(users)
            newUser = {
                username: '',
                Password: '',
                role: ''
            }
            mode = 'view'
            
    }

</script>

<style scoped>
    table {
        margin-top: 30px;
        border: 1px solid rgb(151, 144, 144)
      }

    form {
        margin-top: 20px;
    }
    input {
        border: 1px solid darkgray
    }
</style>