<template>
        <div v-if="error">
          {{error}}
        </div>

        <div v-if="post" class="post">

          <div>
              <h2>{{post.title}}</h2>
              <p>{{post.body}}</p>
          </div>

          <div class="post-delete">
              <span class="material-icons" @click="deletePost">clear</span>
          </div>
          
        </div>

        <div v-else>
            <Spinner></Spinner>
        </div>

      <div v-if="modalDelete">
        <DeleteModal :deleteId="id" :cancle="modalDelete" @cancle="canclePost"></DeleteModal>
      </div>

</template>

<script>
import DeleteModal from '../components/DeleteModal'
import { useRouter } from 'vue-router';
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost"
import { db } from '../firebase/config';
import { ref } from '@vue/reactivity';
export default {
  components: {
    DeleteModal, Spinner },
    props: [ 'id' ],

    setup(props) {
      let modalDelete = ref(false)
      let router = useRouter();
      let {post, error, load} = getPost(props.id); //{post, error,load}
      load();

      let deletePost = () => {
        modalDelete.value = true;
        
      }
      let canclePost = (value) => {
          modalDelete.value = value;
          // console.log(modalDelete.value);
      }
      return { post, error, deletePost, modalDelete, canclePost }
    }
}
</script>

<style>
  .post-delete {
    border-radius: 50%;
    position: absolute;
    right: 320px;
    top: 158px;
  }
  span:hover {
    background-color: crimson;
    color: white;
    cursor: pointer;
    border-radius: 50%;
  }
   
</style>