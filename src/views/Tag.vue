<template>
   <div class="tag">
       <div v-if="error">

        </div>
        <div v-if="posts.length > 0" class="layout">
            <div>
                <PostLists :posts="filteredPosts"></PostLists>
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
import { computed } from '@vue/reactivity';
import getPosts from '../composables/getPosts'
export default {
  components: {
    Spinner,
    TagCloud, PostLists },
    props: [ 'tag' ],
    setup(props) {
        
       let { posts, error, load } = getPosts();
       load();
    
       let filteredPosts = computed(() => {
           return posts.value.filter((post) => {
               return post.tags.includes(props.tag)
           })
           
       })
        return { posts, error, filteredPosts }
    }
}
</script>

<style>
    .tag {
        max-width: 1100px;
        margin: 0 auto;
        padding: 10px
    }
</style>