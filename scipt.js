let  Search_form=document.getElementById("search_form");
function Search_btn(){
    if(Search_form.style.width==="0px"){
        Search_form.style.width="500px"
    }else{
        Search_form.style.width="0px"
    }
}


var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});


  let menu_bar=document.getElementById("menu");

  function ResMenu(){


                  if(menu_bar.style.height==="0px"){

                                  menu_bar.style.height="170px"


                  }else{
                    menu_bar.style.height="0px"
                  }


  }