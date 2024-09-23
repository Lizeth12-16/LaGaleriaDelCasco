document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal-login");
    const closeModal = modal.querySelector(".close");
    const modalTabs = modal.querySelectorAll(".tab a");
    const modalContents = modal.querySelectorAll(".contenido-tab > div");
    
    // Abre el modal
    document.querySelector("#open-modal").addEventListener("click", function(event) {
        event.preventDefault();
        modal.style.display = "flex";
        showTabContent("#iniciar-sesion");
    });

    // Cierra el modal
    closeModal.addEventListener("click", function(event) {
        event.preventDefault();
        modal.style.display = "none";
    });

    // Cambia el contenido de las pestañas
    modalTabs.forEach(function(tab) {
        tab.addEventListener("click", function(event) {
            event.preventDefault();
            const targetContent = this.getAttribute("href");
            showTabContent(targetContent);
            modalTabs.forEach(function(t) { t.parentElement.classList.remove("active"); });
            this.parentElement.classList.add("active");
        });
    });

    // Muestra el contenido de la pestaña activa
    function showTabContent(selector) {
        modalContents.forEach(function(content) {
            content.style.display = "none";
        });
        document.querySelector(selector).style.display = "block";
    }

    // Maneja el enfoque y la interactividad de los campos de entrada
    modal.querySelectorAll("input, textarea").forEach(function(input) {
        input.addEventListener("keyup", handleFocus);
        input.addEventListener("blur", handleFocus);
        input.addEventListener("focus", handleFocus);
    });

    function handleFocus(e) {
        const label = e.target.previousElementSibling;
        if (e.type === "keyup") {
            if (e.target.value === "") {
                label.classList.remove("active", "highlight");
            } else {
                label.classList.add("active", "highlight");
            }
        } else if (e.type === "blur") {
            if (e.target.value === "") {
                label.classList.remove("active", "highlight");
            } else {
                label.classList.remove("highlight");
            }
        } else if (e.type === "focus") {
            if (e.target.value === "") {
                label.classList.remove("highlight");
            } else {
                label.classList.add("highlight");
            }
        }
    }
});


/* Modal inicio */

window.onload = function() {
    document.getElementById('modal-inicio').style.display = 'block';
};

document.querySelector('.close').onclick = function() {
    document.getElementById('modal-inicio').style.display = 'none';
    document.getElementById('barra-lateral').style.display = 'block';
};

document.getElementById('barra-lateral').onclick = function() {
    document.getElementById('modal-inicio').style.display = 'block';
    document.getElementById('barra-lateral').style.display = 'none';
};
document.getElementById('Abrir-Registro').onclick = function(){
    document.getElementById('modal-login').style.display = 'flex';
    document.getElementById('modal-inicio').style.display = 'none';
    document.getElementById('barra-lateral').style.display = 'block';
    
}