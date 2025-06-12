window.onload = function () {
    const form = document.getElementById("contact");
    form.onsubmit = function (e) {
        e.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const msg = document.getElementById("msg").value.trim();

        if (nom && msg) {
            console.log("enregistrer");
        } else {
            console.log("erreur");
        }
    };
};
