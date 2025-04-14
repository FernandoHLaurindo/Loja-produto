document.getElementById("show-comment-form").addEventListener("click", function() {
    document.getElementById("comment-form").style.display = "block";
});

document.getElementById("submit-comment").addEventListener("click", function() {
    var comment = document.getElementById("user-comment").value;
    if (comment) {
        var newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = "<p><strong>Usuário:</strong> " + comment + "</p>";
        document.querySelector(".comments").appendChild(newComment);
        document.getElementById("user-comment").value = "";
        document.getElementById("comment-form").style.display = "none";
    }
});

// Função para abrir o modal de imagem
function openModal() {
    var modal = document.getElementById("image-modal");
    var modalImage = document.getElementById("modal-image");
    var productImage = document.getElementById("product-image");

    modal.style.display = "block";
    modalImage.src = productImage.src;
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("image-modal");
    modal.style.display = "none";
}
