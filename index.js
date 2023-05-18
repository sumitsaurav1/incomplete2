function func(){
    promiseApi1()
    .then(loadPromise1)
    .then(async()=>{
      return promiseApi2().then(loadPromise2)
    })
    .then(async()=>{
       return promiseApi3().then(loadPromise3)
    })
    .catch(error=>console.log(error));
}

function promiseApi1(){
    return new Promise((resolve,reject)=>{
        async function f1(){
            try{
                let url1= `https://dummyjson.com/posts`;
                let response = await fetch(url1);
                let data = await response.json();
                console.log(data)
                resolve(data);
            }
            catch(error){
                console.log(error);
            }
        }
        setTimeout(f1,1000)
    })
}

function loadPromise1(data){
    let postss = document.getElementById("post");
    // data.posts.forEach((e)=>{
    //     let postItems = document.createElement("div");
    //     postItems.classList.add("post-items")

    //     let h3 = document.createElement("h3");
    //     h3.innerText=e.id;
    //     postItems.appendChild(h3)

    //     let h2 = document.createElement("h2");
    //     h2.innerText=e.title;
    //     postItems.appendChild(h2);

    //     let p = document.createElement("p");
    //     p.innerText=e.body;
    //     postItems.appendChild(p);

    //     let span = document.createElement("span");
    //     span.innerText=e.userId;
    //     postItems.appendChild(span);

    //     let div1 = document.createElement("div");
    //     let div1Text = "";

    //     e.tag.forEach((i)=>{
    //         div1Text += i+" ";
    //     })
    //     div1.innerText=div1Text;
    //     div1.classList.add("tag")
    //     postItems.appendChild(div1);

    //     let div2 = document.createElement("div");
    //         let i= document.createElement("i");
    //         i.classList.add("bx bxs-like");
    //         div2.appendChild(i);
    //         let span2 = document.createElement("span");
    //         span2.innerText=e.reactions;
    //     postItems.appendChild(div2);

    //     postss.appendChild(postItems)
    // })

    for(let k=0;k<data.posts.length;k++){
        let e = data.posts[k];
        let postItems = document.createElement("div");
        postItems.classList.add("post-items")

        let h3 = document.createElement("h3");
        h3.innerText=e.id;
        postItems.appendChild(h3)

        let h2 = document.createElement("h2");
        h2.innerText=e.title;
        postItems.appendChild(h2);

        let p = document.createElement("p");
        p.innerText=e.body;
        postItems.appendChild(p);

        let span = document.createElement("span");
        span.innerText="User Id: "+e.userId;
        span.style.fontSize="20px"
        span.style.color="#ff6347"
        postItems.appendChild(span);

        let div1 = document.createElement("div");
        let div1Text = "";

        // e.tag.forEach((i)=>{
        //     div1Text += i+" ";
        // })
        for(let j=0;j<e.tags.length;j++){
            div1Text +="#"+ e.tags[j]+" ";
        }
        div1.innerText=div1Text;
        div1.classList.add("tag")
        postItems.appendChild(div1);

        let div2 = document.createElement("div");
           let i1= document.createElement("i");
           i1.classList.add("bx", "bxs-like");
           div2.appendChild(i1);
            let span2 = document.createElement("span");
            span2.innerText=e.reactions;
            div2.appendChild(span2)
        postItems.appendChild(div2);

        postss.appendChild(postItems)
    }
}

function promiseApi2(){
    return new Promise((resolve,reject)=>{
        async function f2(){
            try{
                let url2= `https://dummyjson.com/products`;
                let response = await fetch(url2);
                let data1 = await response.json();
                console.log(data1)
                resolve(data1);
            }
            catch(error){
                console.log(error);
            }
        }
        setTimeout(f2,1000)
    })
}

function promiseApi3(){
    return new Promise((resolve,reject)=>{
        async function f2(){
            try{
                let url2= `https://dummyjson.com/todos`;
                let response = await fetch(url2);
                let data1 = await response.json();
                console.log(data1)
                resolve(data1);
            }
            catch(error){
                console.log(error);
            }
        }
        setTimeout(f2,1000)
    })
}
function loadPromise2(data){
    let productsList = document.getElementById("product-container");
    for(let i=0;i<data.products.length;i++){
        let product = document.createElement("div");

        let e = data.products[i];

        let h3 = document.createElement("h3");
        h3.innerText=e.id;
        product.appendChild(h3);
        productsList.appendChild(product)
    }
}

function loadPromise3(data){
    console.log(data)
}