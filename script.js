let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letters)=>{
        let span = document.createElement("span");
        span.textContent = letters;
        span.className = "letter";
        word.append(span);
    })
})

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letters,i)=>{
        setTimeout(()=>{
            letters.className = "letter out";
        },i*80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letters,i)=>{
        letters.className = "letter behind";
        setTimeout(()=>{
            letters.className = "letter in";
        },340 + i*80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000);


//circle skill ///////////////////////////////////////////////////////////////////
const circle = document.querySelectorAll('.circle');
circle.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i < percent; i++){
        pointsMarked[i].classList.add('marked')
    }
})

// mix it up portofolio section
var mixer = mixitup('.portofolio-gallery');