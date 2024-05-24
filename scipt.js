let  Search_form=document.getElementById("search_form");
function Search_btn(){
    if(Search_form.style.width==="0px"){
        Search_form.style.width="500px"
    }else{
        Search_form.style.width="0px"
    }
}


var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });


  let menu_bar=document.getElementById("menu");

  function ResMenu(){


                  if(menu_bar.style.height==="0px"){

                                  menu_bar.style.height="220px"


                  }else{
                    menu_bar.style.height="0px"
                  }


  }