

function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        let postLayout = document.getElementById("post-layout")
        let html =""
        data.forEach(e => {
            // console.log(element)
            html += `
            <div class="col-md-4 mb-3 posts">
                  <div class="text-decoration-none">
                     <div class="card h-100">
                            <div class="card-body text-dark">
                                <div class="d-flex justify-content-end">
                                <h6 class = text-success>${e.id}</h6>
                                </div>
                                    <h5 class="post-title mb-4">${e.title}</h5>
                                    <p class="post-body">${e.body}</p>
                            </div>
                        </div>
                    </div>
            </div>
            `
            postLayout.innerHTML = html
        });
        getPost();
    }) 
}

getPosts();


function getPost() {
    let posts = document.querySelectorAll('.posts')
    posts.forEach((e,index) => {
        e.addEventListener('click', () => {
            localStorage.setItem('postId', index + 1)
            window.location.href = 'blogpost.html';
        })
    }) 
}
