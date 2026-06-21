window.addEventListener("load", () => {

    const model = document.querySelector("#myModel");

    model.addEventListener("model-loaded", () => {
        console.log("GLB model successfully loaded.");
    });

    model.addEventListener("model-error", (error) => {
        console.log("GLB ERROR:", error);
    });

});