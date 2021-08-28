import { ref } from "vue"
import { db } from "../firebase/config"

let getRecentPosts = () => {
    let recent = ref([]);
    let recentPost = async () => {
        let res = await db.collection("posts").orderBy("created_at", "desc").limit(4).get()
        console.log(res);
           recent.value = res.docs.map((doc) => {
                return { id:doc.id, ...doc.data()}
            })
    }
    return { recent, recentPost }
}
export default getRecentPosts