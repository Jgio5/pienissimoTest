<template>
    <div class="text-2xl text-black-800">
        <div class="flex justify-center pt-20 text-2xl text-black-800">
            <div class="m-4" v-for="(task, index) in tasks" :key="index">
                <div v-if="(user.id) == (task.user_id) && (task.id) == 2">
                    <p>ID: {{ task.id }}</p>
                    <p>Title: {{ task.title }}</p>
                    <p>Note: {{ task.note }}</p>
                </div>
            </div>
        </div>

        <div class="flex justify-center pt-20">
            <button class="text-white bg-indigo-500 border-0 p-2 px-8 focus:outline-none hover:bgindigo-600 rounded text-lg"><router-link to='/dashboard' exact>Come Back</router-link></button>
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