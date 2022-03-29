let postsArray = []
const form = document.getElementById('new-post')

 renderPosts = () => {
   let html = ""
   for(let post of postsArray){
     html+=
   `<div class="post-list">
            <h2> ${post.title} </h2>
             <p> ${post.body} </p>
     </div>`
    }
   document.querySelector(".posts").innerHTML = html
   console.log(postsArray)
   }
  



fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(res => res.json()) 
.then(data => {
    postsArray = data.slice(0,5)
   renderPosts()
  
})

form.addEventListener("submit",(event)=>{
  event.preventDefault()
  const postTitle = document.getElementById("post-title").value
  const postArea = document.getElementById('post-area').value
  const userPost = {
    title: postTitle,
    body: postArea
   
  }
  
  fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
       method:"POST",
      body:JSON.stringify(userPost),
       completed: false,
      headers: {
       "Content-Type": "application/json"
      }
  })
    
      .then(res => res.json())
      .then(post => { 
         postsArray.unshift(post)
         renderPosts()
    form.reset()
    
      })
    })
