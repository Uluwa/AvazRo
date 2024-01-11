document.addEventListener("DOMContentLoaded", function () {
    const images = [src="./img/changeImages/2.jpg",src="./img/changeImages/3.jpg",src="./img/changeImages/4.jpg"
  ,src="./img/changeImages/5.jpg",src="./img/changeImages/6.jpg",src="./img/changeImages/7.jpg"
,src="./img/changeImages/8.jpg",src="./img/changeImages/9.jpg",src="./img/changeImages/10.jpg"
,src="./img/changeImages/11.jpg",src="./img/changeImages/12.jpg",src="./img/changeImages/13.jpg"
,src="./img/changeImages/14.jpg",src="./img/changeImages/15.jpg",src="./img/changeImages/16.jpg"
,src="./img/changeImages/17.jpg",src="./img/changeImages/18.jpg",src="./img/changeImages/19.jpg",src="./img/changeImages/20.jpg"]; // Замените на ваши пути к картинкам
    let currentImageIndex = 0;
  
    const imageElement = document.getElementById("image");
  
    function changeImage() {
        imageElement.style.opacity = 0; // Установка нулевой прозрачности
        setTimeout(function () {
          imageElement.src = images[currentImageIndex];
          currentImageIndex = (currentImageIndex + 1) % images.length;
          imageElement.style.opacity = 1; // Установка полной прозрачности после загрузки новой картинки
        }, 500); // Задержка в 500 миллисекунд (половина секунды)
      }
  
    setInterval(changeImage, 3000); // Смена картинки каждые 2 секунды
  });

  // const animItems = document.querySelectorAll('.anim-items');
  // if (animItems.length > 0){
  //   window.addEventListener('scroll', animOnScroll)
  //   function animOnScroll(params){
  //     for (let i = 0; i < animItems.length; i++){
  //       const animItem = animItems[i];
  //       const animItemHeight = animItem.offsetHeight;
  //       const animItemOffset = offset(animItem).top;
  //       const animStart = 4;

  //       let animItemPoint = window.innerHeight - animItemHeight / animStart;

  //       if(animItemHeight > window.innerHeight) {
  //         animItemPoint = window.innerHeight - window.innerHeight / animStart;
  //       }

  //       if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
  //         animItem.classList.add('active');
  //       } else {
  //         animItem.classList.remove('active')
  //       }
  //     }
  //   }
  //   function offset(el) {
  //     const rect = el.getBoundingClientRect(),
  //     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  //     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  //   }
  //   setTimeout(() => {
  //     animOnScroll();
  //   }, 2000)
    
  // }