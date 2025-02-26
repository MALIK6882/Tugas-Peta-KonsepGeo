function toggleChildren(element) {
    let children = element.querySelector(".children");
    if (children) {
        if (children.style.display === "block") {
            children.style.display = "none";
            element.classList.remove("show");
        } else {
            children.style.display = "block";
            element.classList.add("show");
        }
    }
}