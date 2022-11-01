const markAll = document.getElementById("markall");
const unreadMessages = document.querySelectorAll(".unread");
const notiCounter = document.getElementById("noticounter");

notiCounter.innerHTML = unreadMessages.length;

unreadMessages.forEach((message) => {
  message.addEventListener("click", () => {
    message.classList.remove("unread");

    const newUnReadMessages = document.querySelectorAll(".unread");
    notiCounter.innerHTML = newUnReadMessages.length;
  });
});

markAll.addEventListener("click", () => {
  unreadMessages.forEach((message) => {
    message.classList.remove("unread");
  });
  const newUnReadMessages = document.querySelectorAll(".unread");
  notiCounter.innerHTML = newUnReadMessages.length;
});
