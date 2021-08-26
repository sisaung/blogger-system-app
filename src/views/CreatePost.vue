<template>   
      <form @submit.prevent="createPost">
           <div class="profile">
               Profile <img src="https://previews.123rf.com/images/nadianb/nadianb1709/nadianb170900256/86443804-idyllic-landscape-in-mountains-rural-scene-beautiful-nature-image-toned-square.jpg" alt="">
            </div>
      <label>Title</label>
      <input type="text" required v-model="title">
      
      <label>Body</label>
      <textarea required v-model="body"></textarea>

      <label>Tags(hit enter to add a tag)</label>
      <input type="text" v-model="tag" @keydown.enter.prevent="tagKeyDown">
      
      <div v-for="tag in tags" :key="tag" class="pill">
            {{tag}}
      </div>
      <button>create post</button>

  </form>
  
</template>

<script>
import { db } from "../firebase/config"
import { ref } from '@vue/reactivity'
import  { useRouter }  from 'vue-router'
export default {

    setup() {
        let router = useRouter();
        let title = ref(""); //title
        let body = ref(""); //body
        let tag = ref(""); //eg vue,node
        let tags = ref([]);

        let tagKeyDown = ()=> {

            if(!tags.value.includes(tag.value)) {
            
                tags.value.push(tag.value)
                tag.value = ""
            }
        }

        let createPost = async()=>{
            let newPost = {
                        title: title.value,
                        body: body.value,
                        tags: tags.value
                    }

           let res = await db.collection("posts").add(newPost) //res return new id
            // console.log(res);
            
            //redirect createpost page to homepage
            router.push('/');
        }
        return { tagKeyDown,tags,title,body,tag,createPost }
    }

}
</script>

<style>
     form {
        max-width: 500px;
        margin: 20px auto;
        padding-top: 10px;
        border: 1px solid gray;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .profile {
        width: 40px;
        height: 40px;
        margin: 20px;
    }
    .profile img {
        width: 40px;
        border-radius: 50%;
    }
    
    label {
        display: block;
        padding: 15px;
        text-transform: uppercase;
        color: #424242;
        width: 400px;
        font-size: 15px;
        font-weight: bold;
    }
    input {
        outline: none;
        padding: 10px;
        margin: 20px;
        width: 80%;
        border-top-left-radius: 10px;
        border-color: white;
    }
    textarea {
        padding: 30px;
        width: 70%;
        margin-left: 20px;
        outline: none;
        border-top-left-radius: 10px;
        border-bottom-color: white;

    }
    form .pill {
        display: inline-block;
        margin-left: 18px;
        background-color: grey;
        padding: 7px;
        border-radius: 20px;
        color: white;
        font-size: 15px;
    }
    form button {  
        display: block;
        padding: 15px;
        margin: 20px;
        border: 0;
        background-color: #1565C0;
        color: white;
        border-radius: 10px;
        cursor: pointer;
    }
    
    button:hover {
        background-color: #0D47A1;
        transition: 0.6s;
    }
</style>