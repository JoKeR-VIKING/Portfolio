const typedText = document.querySelector(".text");

const textArr = ["Pratham", "A Programmer", "A Developer", "A Coding Enthusiast"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

let index = 0;
let charIndex = 0;

function type()
{
    if (charIndex < textArr[index].length)
    {
        typedText.textContent += textArr[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else
    {
        setTimeout(erase, newTextDelay);
    }
}

function erase()
{
    if (charIndex > 0)
    {
        typedText.textContent = textArr[index].substring(0, --charIndex);
        setTimeout(erase, erasingDelay);
    }
    else
    {
        index = (index + 1) % textArr.length;
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", function ()
{
    type();
});

function changePage(x, y)
{
    const homeDiv = document.getElementById("home");
    const aboutDiv = document.getElementById("about");
    const projectDiv = document.getElementById("project");
    const contactDiv = document.getElementById("contact");

    const homeBtn = document.getElementById("homeBtn");
    const aboutBtn = document.getElementById("aboutBtn");
    const projectBtn = document.getElementById("projectBtn");
    const contactBtn = document.getElementById("contactBtn");

    homeDiv.style.display = "none";
    aboutDiv.style.display = "none";
    projectDiv.style.display = "none";
    contactDiv.style.display = "none";

    homeBtn.style.opacity = "0.5";
    aboutBtn.style.opacity = "0.5";
    projectBtn.style.opacity = "0.5";
    contactBtn.style.opacity = "0.5";

    x.style.display = "block";
    y.style.opacity = "1";
}

document.getElementById("homeBtn").addEventListener("click", function ()
{
    changePage(document.getElementById("home"), document.getElementById("homeBtn"))
});

document.getElementById("aboutBtn").addEventListener("click", function ()
{
    changePage(document.getElementById("about"), document.getElementById("aboutBtn"))
});

document.getElementById("projectBtn").addEventListener("click", function ()
{
    changePage(document.getElementById("project"), document.getElementById("projectBtn"))
});

document.getElementById("contactBtn").addEventListener("click", function ()
{
    changePage(document.getElementById("contact"), document.getElementById("contactBtn"))
});