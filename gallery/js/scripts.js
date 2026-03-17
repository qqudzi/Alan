// console.log("Подкоючено")

const galleryData= [
   {
    scr: "images/град.jpg",
    title: "Ледяные иглы",
    desciption: "23123213123",
   },
    {
    scr: "images/гроза.jpg",
    title: "гроза",
    desciption: "2313123213",
    },  
   /*
    {
    scr: "",
    title: "",
    desciption: "",
   }, 
     {
    scr: "",
    title: "",
    desciption: "",
   },   
   {
    scr: "",
    title: "",
    desciption: "",
   },  
    {
    scr: "",
    title: "",
    desciption: "",
   },  
    {
    scr: "",
    title: "",
    desciption: "",
   },  
    {
    scr: "",
    title: "",
    desciption: "",
   },
     {
    scr: "",
    title: "",
    desciption: "",
   },  
    {
    scr: "",
    title: "",
    desciption: "",
   },  
    {
    scr: "",
    title: "",
    desciption: "",
   },
   */
                   ]; 

document.addEventListener(
    'DOMContentLoaded',
    function() {
        const gallery = document.body.querySelector("#gallery");

        galleryData.forEach((item, index) => {
             //console.log(item);
            // console.log(index);
             const galleryItem = document.createElement("div");
             galleryItem.classList.add("gallery-item")
             galleryItem.ariaDetailsElements.index = index; //data-index="0"
            
             galleryItem.innerHTML = `
                  <img scr="${item.src}"  alt="${item.title}"  class="gallery-image">
                  <div class="gallery-caption">
                      <h3>${item.title}</h3>
                      <p>${item.desciption</p>
                   </div>
                          `;
             gallery.appendChild(galleryItem)

                      }

                                             }

                          );
               }
                           );                  