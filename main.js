const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// function sendMail(){
//   let parms = {
//     name : document.getElementById("from_name").value,
//     email : document.getElementById("email_id").value,
//     message : document.getElementById("message").value,
//     //subject : document.getElementById("from_name").value,
    
//     time : document.getElementById("time").value,
//     skank : document.getElementById("stank").value,
//   }
//   //  emailjs.send("service_ufeio04","template_c78ou65",parms).then(function (res) { 
//   //    alert("Email Sent!" + res.status);
//   //  })
//      emailjs.send("service_ufeio04","template_c78ou65",parms).then(alert("Email Sent!"));
// }

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});

function sendMail(){
  var parms = {
  name : document.getElementById("name").value,
  email : document.getElementById("email").value,
  message : document.getElementById("message").value,
 // datetimes : document.getElementById("date_time").value,
  stank : document.getElementById("stank").value,
};
  const ServiceID = "service_jufstng";
  const TemplateID = "template_pnuepvs";

  emailjs
 // emailjs.send("service_3nu9b1s","template_lca9zyb", parms).then(alert("Email sent")
  .send(ServiceID, TemplateID, parms)
  .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
     // document.getElementById("date_time").value = "";
      document.getElementById("stank").value = "";
      alert("Email sent");
  })
  .catch((err) => console.log(err));
}
