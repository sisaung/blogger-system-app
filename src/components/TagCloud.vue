<template>
    <div class="tag-cloud">
        <h3>Tag Cloud</h3>
        <div v-for="tag in uniqueTags" :key="tag">
          <router-link :to="{ name:'Tag', params:{tag:tag}}" class="pill">{{tag}}</router-link>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getPosts from '../composables/getPosts'
export default {
  props: [ 'posts' ],

      setup(props) {
        let tags = ref([]);
          props.posts.forEach((post) => {
              // console.log(post);
              post.tags.forEach((tag) => {
                  // console.log(tag)
                  tags.value.push(tag)
              })
          })
          // console.log(tags.value);
          let uniqueTags = tags.value.filter((tag, index, array) => {
              return array.indexOf(tag) === index
          })

          return { uniqueTags }
      }    
}
</script>

<style>
  .tag-cloud {
      margin-top: 35px;
      
  }
  .tag-cloud h3 {
      border-bottom: 1px solid #ccc;
      margin-right: 10px;
      padding: 0px 10px 15px 0px;
      color: #555;
  }
  .tag-cloud div {
      display: inline-block;
  }
   .tag-cloud a{
      color: #01579B;
      text-decoration: none;
      margin-bottom: 20px;
    
  }
  .tag-cloud a.router-link-active {
      background-color: #ff8800;
      color: white;
      font-weight: bold;
  }
</style>