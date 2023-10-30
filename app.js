/* Created by Tivotal */
let tags = document.querySelectorAll("li");

tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    tag.classList.add("active");
  });
});
