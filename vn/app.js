document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-productos") || document.body;

    // Si no encuentra un contenedor específico, creamos uno dentro del body
    let targetContainer = document.getElementById("contenedor-productos");
    if (!targetContainer) {
        targetContainer = document.createElement("div");
        targetContainer.id = "contenedor-productos";
        targetContainer.className = "catalogo-container";
        document.body.appendChild(targetContainer);
    } else {
        targetContainer.className = "catalogo-container";
    }

    targetContainer.innerHTML = ""; // Limpiar antes de renderizar

    productos.forEach(producto => {
        const card = document.createElement("div");
        card.className = "producto-card";

        // Si la familia está vacía, ocultamos esa línea para que no quede espacio en blanco
        const htmlFamilia = producto.tituloFamilia ? `<span class="producto-familia">${producto.tituloFamilia}</span>` : '';

        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.descripcion}" onerror="this.src='https://via.placeholder.com/140?text=Sin+Imagen'">
            <div class="producto-info">
                ${htmlFamilia}
                <span class="producto-codigo">Cód: ${producto.codigo}</span>
                <span class="producto-descripcion">${producto.descripcion}</span>
                <span class="producto-precio">$${producto.precio.toLocaleString('es-AR')}</span>
            </div>
        `;

        targetContainer.appendChild(card);
    });
});
