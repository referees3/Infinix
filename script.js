        // Função para alternar a imagem principal ao clicar nas imagens pequenas do carrossel
        function changeMainImage(imgElement) {
            var mainImage = document.getElementById('mainImage');
            mainImage.src = imgElement.src;
        }


        // Função para abrir o modal de comentários
        function openComments() {
            var commentsModal = document.getElementById("commentsModal");
            commentsModal.style.display = "block";
        }

        // Função para fechar o modal de comentários
        function closeComments() {
            var commentsModal = document.getElementById("commentsModal");
            commentsModal.style.display = "none";
        }

        // Função para embaralhar e exibir os produtos em ordem aleatória
        function shuffleProducts() {
            const productsContainer = document.getElementById('productsContainer');
            const products = Array.from(productsContainer.children);
            
            // Embaralha os produtos
            function shuffle(array) {
                let currentIndex = array.length, randomIndex;
                while (currentIndex !== 0) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;
                    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
                }
                return array;
            }

            const shuffledProducts = shuffle(products);

            // Remove todos os produtos do container
            productsContainer.innerHTML = '';

            // Adiciona os produtos embaralhados de volta ao container
            shuffledProducts.forEach(product => productsContainer.appendChild(product));
        }

        // Embaralha e exibe produtos ao carregar a página
        document.addEventListener('DOMContentLoaded', shuffleProducts);

// Função para pesquisar produtos pelo nome
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.querySelector('h2').textContent.toLowerCase();
        
        // Verifica se o nome do produto contém o texto pesquisado
        if (productName.includes(query)) {
            product.style.display = 'block'; // Mostra o produto
        } else {
            product.style.display = 'none'; // Oculta o produto
        }
    });

    // Mensagem caso não encontre produtos correspondentes
    if (!Array.from(products).some(product => product.style.display === 'block')) {
        alert('Nenhum produto encontrado.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const categoryLinks = document.querySelectorAll('.footer-menu a');
    const products = document.querySelectorAll('.product');

    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const category = link.id.replace('categoria-', '');
            filterProducts(category);
        });
    });

    function filterProducts(category) {
        products.forEach(product => {
            if (category === 'all' || product.getAttribute('data-category') === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
});
