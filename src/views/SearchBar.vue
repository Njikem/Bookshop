<!---<template>
    <div>
        <input v-model="searchTerm" @input="search_bar" placeholder="Search authors, titles" />
        <ul>
            <li v-for="(item, i) in searchResults" :key="i">
                {{ item.title }} by {{ item.author }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'search-bar',
    data() {
        return {
            searchTerm: '',
            searchResults: []
        }
    },

    methods: {
        search_bar() {
            if (this.searchTerm === '') {
                this.searchResults = [];
                return;
            }

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `http://127.0.0.1:5000/api/search?q=${encodeURIComponent(this.searchTerm)}`,
                headers: {},
            };

            axios.request(config)
                .then(this.success)
                .catch(this.failure);
        },

        success(response) {
            console.log(response);
            if (response.status === 200) {
                this.searchResults = response.data;
            }
        },

        failure(error) {
            console.log(error);
        }
    },

    mounted () {
        this.search_bar();
    },
};
</script>

<style scoped>

</style>--->