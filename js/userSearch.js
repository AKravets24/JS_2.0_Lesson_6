Vue.component ('seeker', {
    data(){
        return {
            userSearch: '',
        }
    },

    mounted() {
        console.log(this.$root.$refs.products.filter);
    },


    template: `
    <form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter(userSearch)">
                <input type="text" class="search-field" v-model="userSearch">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>

    `
});

