import { ref } from "vue"
import { db } from "../firebase/config"
    let getPost = (id)=> {

        let post = ref(null);
        let error = ref("");
        let load = async()=> {
           try {

            let docs = await db.collection("posts").doc(id).get()
                // console.log(docs.data());
                // console.log(docs.id);
                post.value = {id:docs.id, ...docs.data()}
           }catch(err) {
                error.value = err.message
           }
        }

        return { post, error, load }

    }
export default getPost