import { FlatList, View } from 'react-native'
import posts from '../../../../assets/data/posts.json'
import PostListItem from '../../../components/PostListItem'
import { supabase } from "../../../lib/supabase";
import { useState, useEffect } from 'react';
import { Tables } from '../../../database.types';

type Post = Tables<"posts"> & {
    user: Tables<"users">;
    group: Tables<"groups">;
}

export default function HomeScreen() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetchPosts();
    }, [])

    const fetchPosts = async () => {
        const { data, error } = await supabase.from("posts").select("*, group:groups(*), user: users!posts_user_id_fkey(*)");

        console.log(error);
        console.log("data", JSON.stringify(data, null, 2));
    }

    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <PostListItem post={item} />}
            />
        </View>
    )
}
