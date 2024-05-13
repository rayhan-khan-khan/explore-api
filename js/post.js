function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dispalyPosts(data))
}

function dispalyPosts(posts) {
    const divContainer = document.getElementById('post-container');
    for (const post of posts) {
        console.log(post);
        const postsDiv = document.createElement('div');
        postsDiv.innerHTML = `
        <h1>User-${post.userId}</h1>
        <p>Post: ${post.title}</p>
        <p>Post Description</p>
        `
        divContainer.appendChild(postsDiv)
    }
}

loadPosts()