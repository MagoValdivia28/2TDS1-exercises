const posts = [];
let indexpost = -1;

function savePost() {
    const fName = String(document.getElementById("fName").value);
    const lastName = String(document.getElementById("lastName").value);
    const age = document.getElementById("age").value;
    const eyeColor = String(document.getElementById("eyeColor").value);



    if (fName == "" || lastName == "" || age == "" || eyeColor == "") {
        document.getElementById("invalid").innerHTML = "Todos os campos devem ser preenchidos!";
    }

    else if(!isNaN(fName) ){
        document.getElementById("invalid").innerHTML = "estes campos devem ser preenchidos com textos e não números!";

    }
    else if(!isNaN(lastName) ){
        document.getElementById("invalid").innerHTML = "estes campos devem ser preenchidos com textos e não números!";

    }
    else if(!isNaN(eyeColor) ){
        document.getElementById("invalid").innerHTML = "estes campos devem ser preenchidos com textos e não números!";

    }
  else if (age == 0 || age < 0 || age > 100) {
        document.getElementById("invalid").innerHTML = "Está idade é inválida";

    } else {

        document.getElementById("invalid").innerHTML = "";

        if (indexpost == -1) {

            console.log(fName, lastName, age, eyeColor);

            if (fName && lastName && age && eyeColor) {
                storePost(fName, lastName, age, eyeColor);
                cleanField();
            }
        } else {
            if (fName && lastName && age && eyeColor) {
                posts[indexpost] = {
                    fName,
                    lastName,
                    age,
                    eyeColor
                }
                showPost();
                indexpost = -1
                cleanField();
            }
        }
    }
    function storePost(fName, lastName, age, eyeColor) {
        const post = {
            fName,
            lastName,
            age,
            eyeColor

        };

        posts.push(post)
        console.log(fName, lastName, age, eyeColor);
    }


    showPost();
    cleanField()
}

function showPost() {
    document.getElementById("list").classList.remove("hidden");
    let showcontent = "";

    posts.forEach((post, index) => {
        showcontent += `
            <div class = "post">
                <p><strong>Nome:</strong> ${post.fName} ${post.lastName} </p>

                <p><strong>Idade:</strong> ${post.age} </p>
                <p><strong>Cor dos olhos:</strong> ${post.eyeColor} </p>
           
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
    document.getElementById("fName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("eyeColor").value = "";

}

function editPost(index) {
    indexpost = index
    const post = posts[index];

    document.getElementById("fName").value = post.fName;
    document.getElementById("lastName").value = post.lastName;
    document.getElementById("age").value = post.age;
    document.getElementById("eyeColor").value = post.eyeColor;
}

function removePost(index) {
    posts.splice(index, 1);
    showPost();
}