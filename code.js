const postsContainer = document.getElementById('posts-container')

const posts = [
    {
        id: 0,
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        liked: false,
        likes: 21
    },
    {
        id: 1,
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        liked: false,
        likes: 4
    },
    {
        id: 2,
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        liked: false,
        likes: 152
    }
]


posts.forEach((post, index) => {
    postsContainer.innerHTML += `
        <div class="post">
            <div class="post-header">
                <img class="avatar" src="${post.avatar}">
                <div class="post-info">
                    <p class="post-name">${post.name}</p>
                    <p>${post.location}</p>
                </div>
            </div>
            <img class="post-img" src="${post.post}">
            <div class="interact-bar">
                <img class="heart-btn" src="images/icon-heart.png">
                <img src="images/icon-comment.png">
                <img src="images/icon-dm.png">
            </div>
            <p class="like-count" id="like-count-${post.id}">${post.likes} likes</p>
            <p class="post-comment"><span>${post.username}</span> ${post.comment}</p>
        </div>
    `
})

const heartBtns = document.querySelectorAll('.heart-btn')

heartBtns.forEach((heartBtn, index) => {
    heartBtn.postObj = posts[index]
    heartBtn.addEventListener('click', function(e){
        target = e.target
        if(!target.postObj.liked){
            target.src = "images/icon-heart-liked.png";
            target.postObj.likes++
        } else {
            target.src= "images/icon-heart.png";
            target.postObj.likes--
        }
        target.postObj.liked = !target.postObj.liked;
        document.getElementById(`like-count-${target.postObj.id}`).textContent = `${target.postObj.likes} likes`
    })
})