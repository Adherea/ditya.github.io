const menu = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const submit = document.getElementById("submit");

menu.addEventListener("click", () => {
  nav.classList.toggle("slide");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("slide");
  }

  if (popup.style.display === "block" && !popup.contains(e.target) && e.target !== openPopupButton) {
    popup.style.display = "none";
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
});

function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_qggz7tn";
  const templateID = "template_c5zm7eg";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("メッセージが送信されました！　ありがとうございます！");
    })
    .catch((err) => console.log(err));
}
