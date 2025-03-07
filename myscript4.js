var arr = [
    {dp:"https://static.vecteezy.com/system/resources/thumbnails/035/814/648/small_2x/ai-generated-beautiful-asian-woman-wearing-dress-aesthetic-casual-fashion-style-everyday-elegant-ai-generated-free-photo.jpg",
    story:"https://images.unsplash.com/photo-1575439462433-8e1969065df7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1564038079594-99ba184fd036?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1525299374597-911581e1bdef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://plus.unsplash.com/premium_photo-1669343628944-d0e2d053a5e8?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1651917188921-f013522bfea3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]
var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story"><img id="${idx}" src="${elem.dp}" alt=""></div>`
})
 
storiyan.innerHTML = clutter

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display ="block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
setTimeout(function(){
    document.querySelector("#full-screen").style.display ="none"
},2000)

})