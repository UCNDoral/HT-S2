const elements = document.querySelectorAll(
    ".project-card, .skill-card, #sobre-mi, #contacto"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

elements.forEach(item=>{

    item.classList.add("fade-up");

    observer.observe(item);

});