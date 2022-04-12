<template>
  <section class="dropdown-wrapper">
      <div class="dropdown-popover">
        <input v-model="searchQuery" type="text" placeholder="Search Item">
        <span v-if="filteredItems.length === 0">No Data available</span>
        <div class="card" v-for="post in filteredItems" :key="post.id">
          <img :src="post.image_url" style="width:50%;">
          <p class="price">{{ post.brand }}</p>
          <p>From £{{ post.price.max }}</p>
          <p><button>View</button></p>
        </div>
      </div>
  </section>
</template>

<script>
  export default {
    
    data(){
      return{
        searchQuery: '',
      }
    },

    computed: {
      filteredItems() {
          const query = this.searchQuery.toLowerCase();
          if (this.searchQuery === "") {
            return this.$store.getters.posts
          }
          return this.$store.getters.posts.filter((posts) => {
            return Object.values(posts).some((word => 
              String(word).toLowerCase().includes(query))
              );
          });
      },
    },

    methods: {
      selectItem(post){
        this.selectedItem = post
      },
    },

    created() {
      this.$store.dispatch('loadPosts');  
    },
    
  };
</script>

<style scoped lang="css">
    @import "../styles/main.css";
</style>