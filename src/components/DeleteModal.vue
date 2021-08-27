<template>
  <div class="modal">
      <p>Are you sure want to delete?</p>
      <button class="btn-del" @click="deletePost">Delete</button>
      <button class="btn-cancle" @click="canclePost">Cancle</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { db } from '../firebase/config';
export default {
    props: [ 'deleteId', 'cancle' ],
    setup(props , { emit }) {
    
        let router = useRouter();
        let deletePost = async() => {
        let id = props.deleteId;
        // console.log(id);
          await db.collection("posts").doc(id).delete();
          router.push("/")
      }
      let canclePost = ()=> {
          let cancle = !props.cancle;
          emit("cancle",cancle)
      }
      return { deletePost, canclePost }
    }

}

</script>

<style>
   .modal {
        width: 350px;
        height: 150px;
        background-color: #ddd;
        border-radius: 15px;
        margin: 20px auto;
    }
    .modal p {
        text-align: center;
        padding-top: 30px;
        margin-top: 20px;
    }
    .modal .btn-del {
        display: inline-block;
        background-color: crimson;
        color: white;
        padding: 10px;
        margin-left: 60px;
    }
    .modal .btn-cancle {
        display: inline-block;
        background-color: #757575;
        color: white;
        padding: 10px;
        margin-left: 88px;
    }
</style>