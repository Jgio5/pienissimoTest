<template>
    <div>
        <div class="text-2xl text-black-800">
            <div class="text-center pt-10">
                <h1>Ciao, {{user.name}}!</h1>
                <p>Qui puoi trovare i tuoi ultimi Tasks.</p>
            </div>
        </div>

        <div class="flex justify-center pt-20 text-2xl text-black-800">
            <table class="table-auto">
                <thead>
                    <tr class="mx-10">
                        <th class="rounded-l-lg px-2 bg-green-400" >Id</th>
                        <th class="px-2 bg-green-400">Title</th>
                        <th class="rounded-r-lg px-2 bg-green-400">View</th>
                    </tr>
                </thead>

                <tbody class="m-4" v-for="task in tasks" :key="task">
                    <tr v-if="(user.id) == (task.user_id)">
                        <td class="text-center">{{ task.id }}</td>
                        <td class="text-left">{{ task.title }}</td>
                        <td class="text-center"><button class="text-green-400" @click.prevent="details">More</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="flex justify-center pt-20">
            <button @click.prevent="logout" class="text-white bg-indigo-500 border-0 p-2 px-8 focus:outline-none hover:bgindigo-600 rounded text-lg">Logout</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: null,
                tasks: []
            }
        },
        methods: {
            logout() {
                axios.post('/api/logout').then(() =>{
                    this.$router.push({ name: "Home"})
                })
            }
        },
        mounted() {
            axios.get('/api/user').then((res)=> {
                this.user = res.data
            });
            axios.get('/api/tasks').then((post)=> {
                this.tasks = post.data
            });
        }
    }
</script>