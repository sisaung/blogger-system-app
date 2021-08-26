<template>
      <div class="">

        <div v-if="error">
        </div>

        <div v-if="post" class="post">
          <h2>{{post.title}}</h2>
          <p>{{post.body}}</p>
        </div>

        <div v-else>
            <Spinner></Spinner>
        </div>
     
    </div>

</template>

<script>
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost"
export default {
  components: { Spinner },
    props: [ 'id' ],

    setup(props) {
      let {post, error, load} = getPost(props.id); //{post, error,load}
      load();

      return { post, error }
    }
}
</script>

<style>
  
</style>