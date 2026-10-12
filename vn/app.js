// 1. Renderizamos las familias (Código arriba, descripción y precio abajo en línea)
        Object.keys(familiasMap).forEach(nombreFamilia => {
            const variantes = familiasMap[nombreFamilia];
            htmlItems += `<div class="familia-bloque">`;
            htmlItems += `<span class="familia-titulo">${nombreFamilia}</span>`;
            
            variantes.forEach(item => {
                htmlItems += `
                    <div class="item-suelto">
                        <span class="item-codigo">Cód: ${item.codigo}</span>
                        <div class="item-linea-principal">
                            <span class="item-descripcion">${item.descripcion}</span>
                            <span class="item-precio">$${formatearPrecio(item.precio)}</span>
                        </div>
                    </div>
                `;
            });
            htmlItems += `</div>`;
        });
