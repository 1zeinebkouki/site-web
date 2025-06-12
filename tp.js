window.onload = function () {
    const form = document.querySelector("form");
    const message = document.querySelector("#messageAffichage");

    form.onsubmit = function (e) {
        e.preventDefault();

        const nom = document.querySelector("#nom").value.trim();
        const email = document.querySelector("#email").value.trim();
        const msg = document.querySelector("#msg").value.trim();

        if (nom && email && msg) {
           alert("Message envoyé avec succès");
            form.reset(); 
        } else {
            lert("Veuillez remplir tous les champs");
        }
    };
};
