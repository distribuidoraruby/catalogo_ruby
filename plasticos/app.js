const contenedorProductos = document.getElementById("contenedor-productos");
const menuCategorias = document.getElementById("menu-categorias");

function formatearPrecio(precio) {
    return Number(precio).toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function renderizarProductos(categoriaFiltro) {
    contenedorProductos.innerHTML = ""; 
    
    const productosFiltrados = productos.filter(p => p.categoria === categoriaFiltro);

    const gruposMap = {};
    productosFiltrados.forEach(producto => {
        const g = producto.grupo;
        if (!gruposMap[g]) {
            gruposMap[g] = [];
        }
        gruposMap[g].push(producto);
    });

    Object.keys(gruposMap).forEach(nombreGrupo => {
        const itemsDelGrupo = gruposMap[nombreGrupo];
        
        const divGrupo = document.createElement("div");
        divGrupo.classList.add("grupo-card");

        let htmlItems = '';

        const familiasMap = {};
        const itemsSueltos = [];

        itemsDelGrupo.forEach(item => {
            if (item.tituloFamilia) {
                if (!familiasMap[item.tituloFamilia]) {
                    familiasMap[item.tituloFamilia] = [];
                }
                familiasMap[item.tituloFamilia].push(item);
            } else {
                itemsSueltos.push(item);
            }
        });

        // 1. Renderizamos las familias
        Object.keys(familiasMap).forEach(nombreFamilia => {
            const variantes = familiasMap[nombreFamilia];
            htmlItems += `<div class="familia-bloque">`;
            htmlItems += `<span class="familia-titulo">${nombreFamilia}</span>`;
            
            variantes.forEach(item => {
                htmlItems += `
                    <div class="item-fila-familia">
                        <div class="item-info-superior">
                            <span class="item-codigo-familia">${item.codigo}</span>
                            <span class="item-volumen">${item.descripcion}</span>
                        </div>
                        <span class="item-precio">$${formatearPrecio(item.precio)}</span>
                    </div>
                `;
            });
            htmlItems += `</div>`;
        });

        // 2. Renderizamos los productos sueltos
        itemsSueltos.forEach(item => {
            htmlItems += `
                <div class="item-suelto">
                    <span class="item-codigo">Cód: ${item.codigo}</span>
                    <div class="item-info-superior">
                        <span class="item-descripcion">${item.descripcion}</span>
                    </div>
                    <span class="item-precio">$${formatearPrecio(item.precio)}</span>
                </div>
            `;
        });

        divGrupo.innerHTML = `
            <img src="imagenes/${nombreGrupo}.jpg" alt="Grupo ${nombreGrupo}" onerror="this.onerror=null; this.src='sin-foto.jpg'">
            <div class="grupo-items">
                ${htmlItems}
            </div>
        `;

        contenedorProductos.appendChild(divGrupo);
    });
}

function renderizarCategorias() {
    menuCategorias.innerHTML = ""; 
    
    const categorias = [...new Set(productos.map(p => p.categoria))];
    
    categorias.forEach((cat, index) => {
        const btn = document.createElement("button");
        btn.classList.add("btn-categoria");
        if(index === 0) btn.classList.add("activo");
        btn.innerText = cat;
        
        btn.onclick = () => {
            document.querySelectorAll(".btn-categoria").forEach(b => b.classList.remove("activo"));
            btn.classList.add("activo");
            renderizarProductos(cat);
        };
        menuCategorias.appendChild(btn);
    });

    if (categorias.length > 0) {
        renderizarProductos(categorias[0]);
    }
}

renderizarCategorias();
