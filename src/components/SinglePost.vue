<template>
       <div class="post"> 
            <router-link :to="{name:'Detail',params:{id:post.id}}"> 
                <h2>{{post.title}}</h2>
            </router-link>
             <p>{{postCutBody}}</p>

             <div v-for="tag in post.tags" :key="tag" class="pill">
                 <router-link :to="{ name:'Tag', params:{tag:tag}}" class="router-tag">{{tag}}</router-link>
             </div>
       </div>
    
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
    props:['post'],

    setup(props) {
        
        let postCutBody = computed(()=> {
             
             return props.post.body.substring(0,100)+"...";
        })
    
        return { postCutBody };
    }

}

    
</script>

<style>

    .post {
        width: 700px;
        background-color: #E0E0E0;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;    
        margin: 0 auto;
        }
    .post h2 {
        width: 200px;
        background-color: yellow;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 20px 20px 0px 30px;
        color: #01579B;
    }
    
    .post a {
        text-decoration: none;
    }
    .post p {
        padding: 15px 20px 12px 30px;
        text-align: justify;
        line-height: 1.5em;
    }
    .pill {
        display: inline-block;
        /* margin-left: 18px; */
        /* margin-bottom: 20px; */
        margin:0px 0px 20px 18px;
        background-color: #FFFF00;
        padding: 7px;
        border-radius: 20px;
        font-size: 15px;
    }
    .router-tag {
        color: #01579B;
        
    }

</style>