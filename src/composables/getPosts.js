import { ref } from "vue"
import { db } from "../firebase/config"
let getPosts = ()=> {

    let posts = ref([]);
    let error = ref("");
    let load = async()=> {
        try{
           let res = await db.collection('posts').orderBy("created_at", "desc").get()
                    // console.log(res.docs);
              posts.value = res.docs.map((doc) => {
                    return {id:doc.id ,...doc.data()}
                })
           
        }catch(err){
            error.value = err.message
        }
    }
    return { posts, error, load }
    
}
export default getPosts