const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Nav Section
const navTxt = document.querySelectorAll("nav a");

// Nav color changed to green
navTxt.forEach(element => {
  element.style.color = "green";
});

navTxt[0].textContent = siteContent["nav"]["nav-item-1"];
navTxt[1].textContent = siteContent["nav"]["nav-item-2"];
navTxt[2].textContent = siteContent["nav"]["nav-item-3"];
navTxt[3].textContent = siteContent["nav"]["nav-item-4"];
navTxt[4].textContent = siteContent["nav"]["nav-item-5"];
navTxt[5].textContent = siteContent["nav"]["nav-item-6"];


// Adding to Nav using `.appendChild()` and `.prepend()`
const navInfo = document.querySelector("nav");
const newElementInfo = document.createElement("a");
newElementInfo.href = "#";
newElementInfo.style.color = "green";
newElementInfo.textContent = "More Info";

const navHome = document.querySelector("nav");
const newElementHome = document.createElement("a");
newElementHome.href = "#";
newElementHome.style.color = "green";
newElementHome.textContent = "Home";

navInfo.appendChild(newElementInfo);
navHome.prepend(newElementHome);

// CTA Section
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const ctaTxt = document.querySelector(".cta-text h1");
ctaTxt.textContent = siteContent.cta["h1"];


const ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent.cta["button"];


// Top-Content Section
const topHeaders = document.querySelectorAll(".main-content h4");
topHeaders[0].textContent = siteContent["main-content"]["features-h4"];
topHeaders[1].textContent = siteContent["main-content"]["about-h4"];

const topTxt = document.querySelectorAll(".main-content p");
topTxt[0].textContent = siteContent["main-content"]["features-content"];
topTxt[1].textContent = siteContent["main-content"]["about-content"];


// Middle-Content Section
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// Bottom-Content Section
const bottomHeaders = document.querySelectorAll(".main-content h4");
bottomHeaders[2].textContent = siteContent["main-content"]["product-h4"];
bottomHeaders[3].textContent = siteContent["main-content"]["services-h4"];
bottomHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

const bottomTxt = document.querySelectorAll(".main-content p");
bottomTxt[2].textContent = siteContent["main-content"]["product-content"];
bottomTxt[3].textContent = siteContent["main-content"]["services-content"];
bottomTxt[4].textContent = siteContent["main-content"]["vision-content"];


// Contact Section
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

const contactTxt = document.querySelectorAll(".contact p");
contactTxt[0].textContent = siteContent["contact"]["address"];
contactTxt[1].textContent = siteContent["contact"]["phone"];
contactTxt[2].textContent = siteContent["contact"]["email"];


// Footer Section
const footerTxt = document.querySelector("footer p");
footerTxt.textContent = siteContent["footer"]["copyright"];