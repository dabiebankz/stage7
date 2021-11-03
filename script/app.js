function myfunction(num) {
    localStorage.setItem("createid", num);
}


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
            <div class="col-md-4 mb-3">
                  <a class="text-decoration-none" href="blogpost.html"
                   onClick="myfuction(${e.id}")>
                     <div class="card h-100">
                            <div class="card-body text-dark">
                                <div class="d-flex justify-content-end">
                                <h6 class = text-success>${e.id}</h6>
                                </div>
                                    <h5 class="post-title mb-4">${e.title}</h5>
                                    <p class="post-body">${e.body}</p>
                            </div>
                        </div>
                    </a>
            </div>
            `
            postLayout.innerHTML = html
        });
    }) 
}

getPosts();
