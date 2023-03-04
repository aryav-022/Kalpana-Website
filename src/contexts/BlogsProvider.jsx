import { useContext, createContext } from 'react'
import { useFetch } from '../hooks/useFetch';

const BlogsContext = createContext();

export function useBlogs() {
    return useContext(BlogsContext);
}

export default function BlogsProvider({ children }) {
    const init = [{
        "id": 1,
        "heading": "CANSAT 2023 IS COMING",
        "content": "# CANSAT 2023 is coming. \n ** this is a great opurtunity. ** This is a very great oppurtunity for our first years * Frank knew there was a correct time and place to reveal his secret * and this wasn't it. \n !!! Logo/kalpanacaps.png !!! \n The issue was that the secret might be revealed despite his best attempt to keep it from coming out. At this point, it was out of his control and completely dependant on those around him who also knew the secret. !-- They wouldn't purposely reveal !-- !__ it !__, or at least he believed that, but they could easily inadvertently expose it. It was going to be a long hour as he nervously eyed everyone around the table hoping they would keep their mouths shut. \nFrank knew there was a correct time and place to reveal his secret and this wasn't it. The issue was that the secret might be revealed despite his best attempt to keep it from coming out. At this point, it was out of his control and completely dependant on those around him who also knew the secret. They wouldn't purposely reveal it, or at least he believed that, but they could easily inadvertently expose it. It was going to be a long hour as he nervously eyed everyone around the table hoping they would keep their mouths shut.",
        "image": "https://source.unsplash.com/1400x500",
        "date": "2022-05-15",
        "description": "Hello This is description. Lazy peopled dont write or typed and this random is rndom"
    }]
    const Blogs = useFetch(process.env.REACT_APP_BLOGS_URL, init);

    return (
        <BlogsContext.Provider value={Blogs}>
            {children}
        </BlogsContext.Provider>
    )
}
