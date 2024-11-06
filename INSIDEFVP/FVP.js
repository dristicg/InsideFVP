const slides=document.querySelectorAll(".slide")
var counter=0;

slides.foreach(
    (slide,index) => {
        slide.style.left=`${index * 100}%`
    }
)

const goNext=() =>{
    counter++
    slideImage()
}

const goPre=() => {
    counter--
    slideImage()
}

const slideImage= () => {
    slides.foreach(
        (slide) => {
            slide.style.transform=`translateX(-${counter * 100}%)`
        }
    )
}