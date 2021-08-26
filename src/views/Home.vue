<template>
  
    <div class="home">
      <div v-if="posts.length > 0 " class="layout" >
           <div>
             <PostLists :posts="posts"></PostLists>
           </div>

            <div>
               <TagCloud :posts="posts"></TagCloud>
            </div>
    </div>

    <div v-else>
        <Spinner></Spinner>
    </div>
  </div>

</template>

<script>
import Spinner from '../components/Spinner'
import TagCloud from '../components/TagCloud'
import PostLists from '../components/PostLists'
import getPosts from "../composables/getPosts"
export default {
  components: {
    Spinner,
    TagCloud, PostLists },
  
  setup(){
     let {posts, error, load}= getPosts(); //{posts,error,load}
     load();

     return { posts, error }
  }
}
</script>
<style>
  .home {
    max-width: 1100px;
    padding: 10px;
    margin:0 auto
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>
