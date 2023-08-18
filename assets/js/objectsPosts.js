const posts = [];
let indexpost = -1;

function savePost() {
    const title = document.getElementById("title").value;
    const resume = document.getElementById("resume").value;
    const publisher = document.getElementById("publisher").value;
    const date = document.getElementById("date").value;

    if (indexpost == -1) {

        console.log(title, resume, publisher, date);

        if (title && resume && publisher && date) {
            storePost(title, resume, publisher, date);
            cleanField();
        }
    } else {
        if (title && resume && publisher && date) {
            posts[indexpost] = {
                title,
                resume,
                publisher,
                date
            }
            showPost();
            indexpost = -1
            cleanField();
        }
    }
}
function storePost(title, resume, publisher, date) {
    const post = {
        title,
        resume,
        publisher,
        date

    };

    posts.push(post)
    console.log(title, resume, publisher, date);

    showPost();
    cleanField()
}

function showPost() {
    document.getElementById("list").classList.remove("hidden");
    let showcontent = "";

    posts.forEach((post, index) => {
        showcontent += `
            <div class = "post">
                <h2>${post.title}</h2>
                <p> <strong> resumo:</strong> ${post.resume} </p>
                <p> <strong> autor:</strong> ${post.publisher}  </p>
                <p> <strong> data de publicação: </strong> ${post.date}</p>
           
                <button onclick="editPost(${index})">editar</button>      
                <button onclick="removePost(${index})">remover</button>      
                </div>
        `;
    })
    if (posts == 0) {
        document.getElementById("list").classList.add("hidden");
    }

        document.getElementById("list").innerHTML = showcontent;
    }


function cleanField() {
    document.getElementById("title").value = "";
    document.getElementById("resume").value = "";
    document.getElementById("publisher").value = "";
    document.getElementById("date").value = "";

}

function editPost(index) {
    indexpost = index
    const post = posts[index];

    document.getElementById("title").value = post.title;
    document.getElementById("resume").value = post.resume;
    document.getElementById("publisher").value = post.publisher;
    document.getElementById("date").value = post.date;
}

function removePost(index) {
    posts.splice(index, 1);
    showPost();
}