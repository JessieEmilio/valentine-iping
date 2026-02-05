// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 90;
    const max = 90;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked
const handleMouseEnter = () => {
    yesBtn.style.transform = "scale(1.2)";
};

const handleMouseLeave = () => {
    yesBtn.style.transform = "scale(1)";
};

yesBtn.addEventListener("mouseenter", handleMouseEnter);
yesBtn.addEventListener("mouseleave", handleMouseLeave);



yesBtn.addEventListener("click", () => {
    title.textContent = "Ooopp!";

    // catImg.src = "cat_dance.gif";
    catImg.src = "photoBox.jpeg";
    catImg.style.width = "300px";
    catImg.style.height = "auto";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";

    // hover
    // simpan handler ke variable
    const handleMouseEnter = () => {
        catImg.style.transform = "scale(1.2)";
    };

    const handleMouseLeave = () => {
        catImg.style.transform = "scale(1)";
    };

    catImg.addEventListener("mouseenter", handleMouseEnter);
    catImg.addEventListener("mouseleave", handleMouseLeave);

    catImg.addEventListener("click", () => {
        catImg.src = "qrcodeFinal.png";
        catImg.style.width = "400px";
        catImg.style.height = "auto";
        catImg.style.transform = "scale(1)";
        catImg.style.transition = "none";
        catImg.removeEventListener("mouseenter", handleMouseEnter);
        catImg.removeEventListener("mouseleave", handleMouseLeave);
        finalText.style.display = "none";
        title.textContent = null;
        // window.open("https://www.canva.com/design/DAHAQch9PUQ/VK5TuocdSJpixiM6c5-qpQ/view?utm_content=DAHAQch9PUQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h997522742a", "_blank");
      });

});
