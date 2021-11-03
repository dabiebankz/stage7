let post = localStorage.getItem("postId")

     fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        let postLayout = document.getElementById("post-layout")
        let html = `
        <div class="col-md-12 mb-3">
                 <div class="card h-100 shadow">
                        <div class="card-body">
                            <div class="d-flex justify-content-end">
                            <h6 class="text-success">${data.id}</h6>
                            </div>
                                <h5 class="post-title mb-4">${data.title}</h5>
                                <p class="post-body">${data.body}</p>
                        </div>
                    </div>
        </div>
        `
            postLayout.innerHTML = html
        });
