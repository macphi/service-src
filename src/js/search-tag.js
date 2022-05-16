var content = document.querySelector(".content");
var input = document.querySelector(".content input");
var btnRemoveAll = document.querySelector('.remove-all')

var tags = ["Node js", "Reactjs"];
//bat su kien
function render() {
  content.innerHTML = "";
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    content.innerHTML += `<li>
                        ${tag}
                            <i class="fa-solid fa-x" onclick ="removeTag(${i})"></i>
                        </li>
        `;
  }
  content.appendChild(input);
  input.focus();
}

//Xoa su kien
function removeTag(index){
    tags.splice(index,1)
    render()
}

render();
//add su kien
input.addEventListener('keydown',function(event){
    if(event.key == 'Enter'){
        tags.push(input.value.trim())
        input.value=''
        render()
    }
})
//remove all
btnRemoveAll.addEventListener('click',function(){
    tags=[]
    render()
})