<template>
  
    <div class="home">
      <FilterNav @filter="current = $event" :current="current"></FilterNav>
      <div v-if="posts.length > 0 " class="layout" >
           <div>
             <PostLists :posts="filterPost"></PostLists>
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
import FilterNav from '../components/FilterNav'
import Spinner from '../components/Spinner'
import TagCloud from '../components/TagCloud'
import PostLists from '../components/PostLists'
import getPosts from "../composables/getPosts"
import { computed, ref } from '@vue/reactivity'
import { db } from '../firebase/config'
export default {
  components: {
    FilterNav,
    Spinner,
    TagCloud, PostLists },
  
  setup(props, { emit }){
    let recent = ref([]);
    let current = ref("recent");
    let {posts, error, load}= getPosts(); //{posts,error,load}
     load();

     let filterPost =  computed(() => {

        if( current.value === 'recent') {
            let recentPost = async () => {
            let res = await db.collection("posts").orderBy("created_at", "desc").limit(4).get()
              recent.value = res.docs.map((doc) => {
                return { id:doc.id, ...doc.data()}
               })
           }
            recentPost();
                
          return recent.value
        }
        
        else if ( current.value === 'all') {
            return posts.value
        }
     })
      
     return { posts, error, current, filterPost }
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
