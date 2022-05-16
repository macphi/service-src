//up load file anh
var upload = document.querySelector("#mypicture");
var preview = document.querySelector(".preview");
var error = document.querySelector(".error");

upload.addEventListener("change", function (e) {
  var file = upload.files[0];

  if (!file)
   return;
  console.log(file);
  if (file.name.endsWith(".png")) {
      error.innerHTML = `Hinh anh phai thuoc dinh dang jpeg`
    return;
  }else{
      error.innerHTML=``
  }
  console.log(file);


  if (!file)
   return;
  console.log(file);
  if (file.size / (1024 *1024 ) > 5) {
      error.innerHTML = `chi duoc upload anh < 5MB`
    return;
  }else{
      error.innerHTML=``
  }

  var fileReader = new FileReader(file)
  var img = document.createElement("img");

  fileReader.readAsDataURL(file)
  fileReader.onloadend = function(e){
      console.log('load ok',e.target.result)
      img.src = e.target.result
  }
//   fileReader.onload = function(e){
//     console.log('load',e)
//   }
//   img.src = URL.createObjectURL(upload.files[0]);
  preview.appendChild(img);
  //   console.log(URL.createObjectURL(upload.files[0]));
});
