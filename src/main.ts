import gsap from "gsap";

const gbUsed = document.getElementById("gb-used")!;
const gbLeft = document.getElementById("gb-left")!;
const bar = document.getElementById("bar")!;
const barContainer = document.getElementById("bar-container")!

const used = 815;
const left = 1000 - used;
const ratio = used / 1000

gsap.to(gbUsed, {
    innerText: used,
    duration: 1,
    ease: "power1.inOut",
    snap: { innerText: 1 },
});

gsap.to(gbLeft, {
    innerText: left,
    duration: 1,
    ease: "power1.inOut",
    snap: { innerText: 1 },
});

const containerWidth = barContainer.offsetWidth

gsap.to(bar, {
    width: containerWidth * ratio,
    duration: 1,
    ease: "power1.inOut",
})