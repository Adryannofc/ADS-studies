async function get() {
    const responsePost = await fetch('https://jsonplaceholder.typicode.com/posts/comments');
    const post = await responsePost.json();
    console.log(post);
}

get()