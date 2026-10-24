const productos = [
    // Grupo A: Contenedores (Agrupados por familia)
    { grupo: "a", codigo: "10001", tituloFamilia: "CONTENEDOR", descripcion: "N°1 1.5L", precio: 5224.7, categoria: "Contenedores" },
    { grupo: "a", codigo: "10002", tituloFamilia: "CONTENEDOR", descripcion: "N°2 3L", precio: 6487, categoria: "Contenedores" },
    { grupo: "a", codigo: "10003", tituloFamilia: "CONTENEDOR", descripcion: "N°3 5.5L", precio: 8648.9, categoria: "Contenedores" },
    { grupo: "a", codigo: "10004", tituloFamilia: "CONTENEDOR", descripcion: "N°4 9L", precio: 11892.4, categoria: "Contenedores" },
    { grupo: "a", codigo: "10005", tituloFamilia: "CONTENEDOR", descripcion: "N°5 16L", precio: 14774.5, categoria: "Contenedores" },
    
    // Grupo B: Contenedores chicos (Agrupados por familia)
    { grupo: "b", codigo: "10006", tituloFamilia: "CONTENEDOR", descripcion: "N°1 400CC", precio: 1007.5, categoria: "Contenedores" },
    { grupo: "b", codigo: "10007", tituloFamilia: "CONTENEDOR", descripcion: "N°2 700CC", precio: 1534, categoria: "Contenedores" },
    { grupo: "b", codigo: "10008", tituloFamilia: "CONTENEDOR", descripcion: "N°3 1300CC", precio: 1935.7, categoria: "Contenedores" },
    
    // Grupos C1 al C6 (Productos sueltos / únicos)
    { grupo: "c1", codigo: "10009", descripcion: "SET 5 CONTENEDORES RECTANGULARES TRANSP.", precio: 27869.4, categoria: "Contenedores" },
    { grupo: "c2", codigo: "10010", descripcion: "SET 3 CONTENEDORES HERMETICOS", precio: 4180.8, categoria: "Contenedores" },
    { grupo: "c3", codigo: "10011", descripcion: "SET 3 CONTENEDORES RECTANGULARES TRANSP.S", precio: 13161.2, categoria: "Contenedores" },
    { grupo: "c4", codigo: "10012", descripcion: "CAJA NEGRAB70", precio: 20127.9, categoria: "Contenedores" },
    { grupo: "c5", codigo: "10013", descripcion: "CAJA TRANSP. 70", precio: 32823.7, categoria: "Contenedores" },
    { grupo: "c6", codigo: "10014", descripcion: "FRASCO HERMÉTICO 1.4L", precio: 8516.3, categoria: "Contenedores" },
    
    // Grupo D: Herméticos rectangulares (Agrupados por familia)
    { grupo: "d", codigo: "10015", tituloFamilia: "HERMÉTICO RECTANGULAR", descripcion: "1.5L", precio: 1474.2, categoria: "Contenedores" },
    { grupo: "d", codigo: "10016", tituloFamilia: "HERMÉTICO RECTANGULAR", descripcion: "2.5L", precio: 2050.1, categoria: "Contenedores" },
    { grupo: "d", codigo: "10017", tituloFamilia: "HERMÉTICO RECTANGULAR", descripcion: "3,5L", precio: 2476.5, categoria: "Contenedores" },
    { grupo: "d", codigo: "10018", tituloFamilia: "HERMÉTICO RECTANGULAR", descripcion: "6L", precio: 3585.4, categoria: "Contenedores" },
    { grupo: "d", codigo: "10019", tituloFamilia: "HERMÉTICO RECTANGULAR", descripcion: "8L", precio: 4429.1, categoria: "Contenedores" },
    
    // Grupo D1: Herméticos redondos (Agrupados por familia)
    { grupo: "d1", codigo: "10020", tituloFamilia: "HERMÉTICO REDONDO", descripcion: "750ml", precio: 1534, categoria: "Contenedores" },
    { grupo: "d1", codigo: "10021", tituloFamilia: "HERMÉTICO REDONDO", descripcion: "1L", precio: 1935.7, categoria: "Contenedores" },
    
    // Productos sueltos y otros grupos
    { grupo: "e", codigo: "10022", descripcion: "HERMÉTICO REDONDO PIZZA O TORTA", precio: 4525.3, categoria: "Contenedores" },
    { grupo: "f", codigo: "10023", descripcion: "CONTENEDOR REDONDO TORTERO 10L", precio: 4407, categoria: "Contenedores" },
    
    // Grupo G: Organizadores (Agrupados por familia)
    { grupo: "g", codigo: "10024", tituloFamilia: "ORGANIZADOR MULTIUSO", descripcion: "60L", precio: 25005.5, categoria: "Contenedores" },
    { grupo: "g", codigo: "10025", tituloFamilia: "ORGANIZADOR MULTIUSO", descripcion: "25L", precio: 14365, categoria: "Contenedores" },
    { grupo: "g", codigo: "10026", tituloFamilia: "ORGANIZADOR MULTIUSO", descripcion: "50L", precio: 25183.6, categoria: "Contenedores" },
    { grupo: "g", codigo: "10027", tituloFamilia: "ORGANIZADOR MULTIUSO", descripcion: "32L", precio: 16083.6, categoria: "Contenedores" },
    
    { grupo: "h", codigo: "10028", descripcion: "EXPRIMIDOR 1lts", precio: 943.8, categoria: "Contenedores" },
    { grupo: "i", codigo: "10029", descripcion: "BOLS CARIOCA SUPER CON TAPA", precio: 5466.5, categoria: "Contenedores" },
    { grupo: "j", codigo: "10030", tituloFamilia: "CONTENEDOR", descripcion: "RECTANGULAR CON TAPA 8L", precio: 4709.9, categoria: "Contenedores" },
    
    // Grupo K: Herméticos K (Agrupados por familia)
    { grupo: "k", codigo: "10031", tituloFamilia: "HERMETICO RECTANGULAR", descripcion: "400 ml", precio: 895.7, categoria: "Contenedores" },
    { grupo: "k", codigo: "10032", tituloFamilia: "HERMETICO RECTANGULAR", descripcion: "750 ml", precio: 975, categoria: "Contenedores" },
    { grupo: "k", codigo: "10033", tituloFamilia: "HERMETICO RECTANGULAR", descripcion: "1.2 lts", precio: 1277.9, categoria: "Contenedores" },
    { grupo: "k", codigo: "10034", tituloFamilia: "HERMETICO RECTANGULAR", descripcion: "2 lts", precio: 1671.8, categoria: "Contenedores" },
    { grupo: "k", codigo: "10035", tituloFamilia: "HERMETICO RECTANGULAR", descripcion: "3 lts", precio: 2113.8, categoria: "Contenedores" },
    { grupo: "k", codigo: "10036", tituloFamilia: "HERMETICO RECTANGULAR", descripcion: "4.5 lts", precio: 2584.4, categoria: "Contenedores" },
    
    // Grupo L: Contenedores redondos (Agrupados por familia)
    { grupo: "l", codigo: "10037", tituloFamilia: "CONTENEDOR REDONDO", descripcion: "200ml", precio: 426.4, categoria: "Contenedores" },
    { grupo: "l", codigo: "10038", tituloFamilia: "CONTENEDOR REDONDO", descripcion: "375ml", precio: 730.6, categoria: "Contenedores" },
    { grupo: "l", codigo: "10039", tituloFamilia: "CONTENEDOR REDONDO", descripcion: "600ml", precio: 730.6, categoria: "Contenedores" },
    
    // Demás productos sueltos anteriores
    { grupo: "m1", codigo: "10040", descripcion: "TUPPER CUADRADO 1.7 lts", precio: 1829.1, categoria: "Contenedores" },
    { grupo: "m2", codigo: "10041", descripcion: "TUPPER RECTANGULAR 2.25 lts", precio: 2263.3, categoria: "Contenedores" },
    { grupo: "m3", codigo: "10042", descripcion: "TUPPER REDONDO 1.3 lts", precio: 1639.3, categoria: "Contenedores" },
    { grupo: "m4", codigo: "10043", descripcion: "TUPPER REDONDO CON CIERRE", precio: 2002, categoria: "Contenedores" },

    { grupo: "n1", codigo: "10044", descripcion: "CESTO CALADO FLORIDA", precio: 14594, categoria: "Contenedores" },
    { grupo: "n2", codigo: "10045", descripcion: "CESTO REDONDO honguito FLORIDA", precio: 13803, categoria: "Contenedores" },
    { grupo: "n3", codigo: "10046", descripcion: "CESTO RECTANGULAR CALADO PARA ROPA", precio: 20731, categoria: "Contenedores" },
    { grupo: "n4", codigo: "10047", descripcion: "BALDE MOPA + ESC FLORIDA", precio: 9181, categoria: "Contenedores" },
    { grupo: "n5", codigo: "10048", descripcion: "REPUESTO ESCURRIDOR FLORIDA", precio: 2131, categoria: "Contenedores" },
    { grupo: "n6", codigo: "10049", descripcion: "BATEA MULTIUSO BLANCA FLORIDA", precio: 3419, categoria: "Contenedores" },
    
    { grupo: "o", codigo: "10050", tituloFamilia: "RESIDUO VAI VÉN FLORIDA", descripcion: "6 L", precio: 4844, categoria: "Contenedores" },
    { grupo: "o", codigo: "10051", tituloFamilia: "RESIDUO VAI VÉN FLORIDA", descripcion: "8 L", precio: 7177, categoria: "Contenedores" },
    
    { grupo: "p", codigo: "10052", tituloFamilia: "RECIPIENTE RESIDUO FLORIDA", descripcion: "22 L", precio: 10336, categoria: "Contenedores" },
    { grupo: "p", codigo: "10053", tituloFamilia: "RECIPIENTE RESIDUO FLORIDA", descripcion: "34 L", precio: 20952, categoria: "Contenedores" },
    { grupo: "p", codigo: "10054", tituloFamilia: "RECIPIENTE RESIDUO FLORIDA", descripcion: "70 L", precio: 31272, categoria: "Contenedores" },
    
    { grupo: "q1", codigo: "10055", descripcion: "RECIPIENTE CUADRADO VAIVÉN FLORIDA 60 L", precio: 30411, categoria: "Contenedores" },
    { grupo: "q2", codigo: "10056", descripcion: "RECIPIENTE REDONDO VAIVÉN FLORIDA 10 L", precio: 8184, categoria: "Contenedores" },
    { grupo: "q3", codigo: "10057", descripcion: "RECIPIENTE PEDAL FLORIDA 13 L", precio: 15330, categoria: "Contenedores" },
    
    { grupo: "r1", codigo: "10058", tituloFamilia: "RECIPIENTE PARA RESIDUOS TAPA", descripcion: "7 L", precio: 4585, categoria: "Contenedores" },
    { grupo: "r1", codigo: "10059", tituloFamilia: "RECIPIENTE PARA RESIDUOS TAPA", descripcion: "12 L", precio: 6798, categoria: "Contenedores" },
    { grupo: "r1", codigo: "10060", tituloFamilia: "RECIPIENTE PARA RESIDUOS TAPA", descripcion: "16 L", precio: 7922, categoria: "Contenedores" },
    { grupo: "r1", codigo: "10061", tituloFamilia: "RECIPIENTE PARA RESIDUOS TAPA", descripcion: "120 L", precio: 75934, categoria: "Contenedores" },
    
    { grupo: "r2", codigo: "10062", descripcion: "RECIPIENTE PARA RESIDUOS TAPA V/V FLORIDA L120", precio: 83525, categoria: "Contenedores" },
    
    { grupo: "r3", codigo: "10063", tituloFamilia: "CANASTO CALADO FLORIDA", descripcion: "CHICO", precio: 7444, categoria: "Contenedores" },
    { grupo: "r3", codigo: "10064", tituloFamilia: "CANASTO CALADO FLORIDA", descripcion: "GRANDE", precio: 11222, categoria: "Contenedores" },

    // Nuevos productos (t6 a t69)
    { grupo: "t6", codigo: "10109", descripcion: "SORBITO LUZU C/TETINA MIS PLAST 240 CC", precio: 2019, categoria: "Contenedores" },
    { grupo: "t7", codigo: "10110", descripcion: "EMBUDOS CÓNICOS X 4UNIDADES MIS PLAST", precio: 2024, categoria: "Contenedores" },
    { grupo: "t8", codigo: "10111", descripcion: "BOLS CARIOCA SUPER CON TAPA 10L MIS PLAST", precio: 9369, categoria: "Contenedores" },
    { grupo: "t9", codigo: "10112", descripcion: "MATAMOSCA PALMETA MIS PLAST", precio: 789, categoria: "Contenedores" },
    { grupo: "t10", codigo: "10113", descripcion: "CUBIERTERO RECTANGULAR GRANDE MIS PLAST 5DIV.", precio: 3930, categoria: "Contenedores" },
    { grupo: "t11", codigo: "10114", descripcion: "CENTRIFUGADOR DE VERDURAS MIS PLAST", precio: 11162, categoria: "Contenedores" },
    { grupo: "t12", codigo: "10115", descripcion: "JABONERA CARIOCA MIS PLAST", precio: 754, categoria: "Contenedores" },
    { grupo: "t13", codigo: "10116", descripcion: "JARRA PLÁSTICA CON 3 POSICIONES 2.250L", precio: 3931, categoria: "Contenedores" },
    { grupo: "t14", codigo: "10117", descripcion: "PORTA SACHET DE PLÁSTICO CON AZA 1L", precio: 1615, categoria: "Contenedores" },
    { grupo: "t15", codigo: "10118", descripcion: "SECA PLATO CON BANDEJA GRANDE", precio: 14697, categoria: "Contenedores" },
    
    { grupo: "t16", codigo: "10119", tituloFamilia: "BATEA RECTANGULAR", descripcion: "CHICO 3L", precio: 2469, categoria: "Contenedores" },
    { grupo: "t16", codigo: "10120", tituloFamilia: "BATEA RECTANGULAR", descripcion: "MEDIANO 8L", precio: 5049, categoria: "Contenedores" },
    { grupo: "t16", codigo: "10121", tituloFamilia: "BATEA RECTANGULAR", descripcion: "GRANDE 12L", precio: 6867, categoria: "Contenedores" },
    { grupo: "t16", codigo: "10122", tituloFamilia: "BATEA RECTANGULAR", descripcion: "EXTRA GRANDE 20L", precio: 8889, categoria: "Contenedores" },
    
    { grupo: "t17", codigo: "10123", descripcion: "BALDE MOPA + ESC DESES PLAST", precio: 8294, categoria: "Contenedores" },
    { grupo: "t18", codigo: "10124", descripcion: "REPUESTO ESCURRIDOR DESES PLAST", precio: 4005, categoria: "Contenedores" },
    { grupo: "t19", codigo: "10125", descripcion: "CONSERVADORA DESES PLAST 28L", precio: 47228, categoria: "Contenedores" },
    { grupo: "t20", codigo: "10126", descripcion: "TERMO CAMPING DESES PLAST 3L", precio: 11703, categoria: "Contenedores" },
    { grupo: "t21", codigo: "10127", descripcion: "TERMO WEEKEND DESES PLAST 2L", precio: 8724, categoria: "Contenedores" },
    { grupo: "t22", codigo: "10128", descripcion: "TERMO FAMILY DESES PLAST 4L", precio: 1303, categoria: "Contenedores" },
    { grupo: "t23", codigo: "10129", descripcion: "BAÑERA BEBÉ DESESPLAST", precio: 12602, categoria: "Contenedores" },
    { grupo: "t24", codigo: "10130", descripcion: "CANASTO CALADO P/ROPA CON TAPA", precio: 11320, categoria: "Contenedores" },
    { grupo: "t25", codigo: "10131", descripcion: "BANQUETA REFORZADA COLORES DESES PLAST", precio: 8317, categoria: "Contenedores" },
    { grupo: "t26", codigo: "10132", descripcion: "RESIDUO VAI VEN DESES PLAST 6L", precio: 6763, categoria: "Contenedores" },
    { grupo: "t27", codigo: "10133", descripcion: "RESIDUO VAIVEN DESESPLAST 10L", precio: 9224, categoria: "Contenedores" },
    
    { grupo: "t28", codigo: "10134", tituloFamilia: "BACINILLA MEDIANA POP", descripcion: "MEDIANA", precio: 1212, categoria: "Contenedores" },
    { grupo: "t28", codigo: "10135", tituloFamilia: "BACINILLA MEDIANA POP", descripcion: "GRANDE", precio: 1307, categoria: "Contenedores" },
    { grupo: "t28", codigo: "10136", tituloFamilia: "BACINILLA MEDIANA POP", descripcion: "ADULTO", precio: 1897, categoria: "Contenedores" },
    
    { grupo: "t29", codigo: "10137", tituloFamilia: "BALDE REDONDO POP", descripcion: "9L", precio: 2154, categoria: "Contenedores" },
    { grupo: "t29", codigo: "10138", tituloFamilia: "BALDE REDONDO POP", descripcion: "12L", precio: 2517, categoria: "Contenedores" },
    { grupo: "t29", codigo: "10139", tituloFamilia: "BALDE REDONDO POP", descripcion: "14L", precio: 3043, categoria: "Contenedores" },
    
    { grupo: "t30", codigo: "10140", tituloFamilia: "FUENTON CON ASAS POP", descripcion: "15L", precio: 3129, categoria: "Contenedores" },
    { grupo: "t30", codigo: "10141", tituloFamilia: "FUENTON CON ASAS POP", descripcion: "20L", precio: 3865, categoria: "Contenedores" },
    { grupo: "t30", codigo: "10142", tituloFamilia: "FUENTON CON ASAS POP", descripcion: "30L", precio: 6332, categoria: "Contenedores" },
    
    { grupo: "t31", codigo: "10143", descripcion: "FUENTON OVAL POP 16L", precio: 3826, categoria: "Contenedores" },
    
    { grupo: "t32", codigo: "10144", tituloFamilia: "PALANGANA POP", descripcion: "4L", precio: 1307, categoria: "Contenedores" },
    { grupo: "t32", codigo: "10145", tituloFamilia: "PALANGANA POP", descripcion: "6L", precio: 1535, categoria: "Contenedores" },
    { grupo: "t32", codigo: "10146", tituloFamilia: "PALANGANA POP", descripcion: "9L", precio: 2124, categoria: "Contenedores" },
    { grupo: "t32", codigo: "10147", tituloFamilia: "PALANGANA POP", descripcion: "12L", precio: 2833, categoria: "Contenedores" },
    
    { grupo: "t33", codigo: "10148", tituloFamilia: "RECIPIENTE RESIDUOS POP", descripcion: "5L", precio: 2454, categoria: "Contenedores" },
    { grupo: "t33", codigo: "10149", tituloFamilia: "RECIPIENTE RESIDUOS POP", descripcion: "12L", precio: 4003, categoria: "Contenedores" },
    
    { grupo: "t34", codigo: "10150", descripcion: "PERCHA X 4 ECO", precio: 1041, categoria: "Contenedores" },
    { grupo: "t35", codigo: "10151", descripcion: "PERCHA X 4 NEGRA", precio: 1201, categoria: "Contenedores" },
    { grupo: "t36", codigo: "10152", descripcion: "PERCHA X 4 COLOR", precio: 1660, categoria: "Contenedores" },
    { grupo: "t37", codigo: "10153", descripcion: "MATE COLOR ECONÓMICO", precio: 841, categoria: "Contenedores" },
    { grupo: "t38", codigo: "10154", descripcion: "MATE COLOR GOTA", precio: 2302, categoria: "Contenedores" },
    
    { grupo: "t39", codigo: "10155", tituloFamilia: "TAZA PLÁSTICA COLORES", descripcion: "GRANDE", precio: 1382, categoria: "Contenedores" },
    { grupo: "t39", codigo: "10156", tituloFamilia: "TAZA PLÁSTICA COLORES", descripcion: "MEDIANAS", precio: 901, categoria: "Contenedores" },
    
    { grupo: "t40", codigo: "10157", descripcion: "JARRO TÉRMICO COLORES", precio: 3804, categoria: "Contenedores" },
    { grupo: "t41", codigo: "10158", descripcion: "PAPALERO COLORES8L", precio: 4685, categoria: "Contenedores" },
    { grupo: "t42", codigo: "10159", descripcion: "BOTELLAS PLÁSTICO COLORES ECO", precio: 1382, categoria: "Contenedores" },
    { grupo: "t43", codigo: "10160", descripcion: "CORTINA ANTIMOSCA ECONÓMICA 0,8X2,00", precio: 3006, categoria: "Contenedores" },
    
    { grupo: "t44", codigo: "10161", tituloFamilia: "CORTINA ANTIMOSCA DANFORTH", descripcion: "0,8X2,00", precio: 3929, categoria: "Contenedores" },
    { grupo: "t44", codigo: "10162", tituloFamilia: "CORTINA ANTIMOSCA DANFORTH", descripcion: "H0,9X200", precio: 4442, categoria: "Contenedores" },
    { grupo: "t44", codigo: "10163", tituloFamilia: "CORTINA ANTIMOSCA DANFORTH", descripcion: "1,00X2X00", precio: 5019, categoria: "Contenedores" },
    
    { grupo: "t45", codigo: "10164", descripcion: "MOLDE SILICONA 4 DIVISIÓN", precio: 5577, categoria: "Contenedores" },
    
    { grupo: "t46", codigo: "10165", tituloFamilia: "CUBETERAS", descripcion: "DE COLORES", precio: 845, categoria: "Contenedores" },
    { grupo: "t46", codigo: "10166", tituloFamilia: "CUBETERAS", descripcion: "X2", precio: 943, categoria: "Contenedores" },
    { grupo: "t46", codigo: "10167", tituloFamilia: "CUBETERAS", descripcion: "CORAZÓN", precio: 1082, categoria: "Contenedores" },
    
    { grupo: "t47", codigo: "10168", tituloFamilia: "PULVERIZADOR", descripcion: "1 L", precio: 2002, categoria: "Contenedores" },
    { grupo: "t47", codigo: "10169", tituloFamilia: "PULVERIZADOR", descripcion: "800 ML", precio: 1931, categoria: "Contenedores" },
    { grupo: "t47", codigo: "10170", tituloFamilia: "PULVERIZADOR", descripcion: "500 ML", precio: 1859, categoria: "Contenedores" },
    { grupo: "t47", codigo: "10171", tituloFamilia: "PULVERIZADOR", descripcion: "250 ML", precio: 1788, categoria: "Contenedores" },
    
    { grupo: "t48", codigo: "10172", tituloFamilia: "ENVASE + BOMBA", descripcion: "250 CC", precio: 2145, categoria: "Contenedores" },
    { grupo: "t48", codigo: "10173", tituloFamilia: "ENVASE + BOMBA", descripcion: "500 CC", precio: 2288, categoria: "Contenedores" },
    { grupo: "t48", codigo: "10174", tituloFamilia: "ENVASE + BOMBA", descripcion: "800 CC", precio: 2431, categoria: "Contenedores" },
    { grupo: "t48", codigo: "10175", tituloFamilia: "ENVASE + BOMBA", descripcion: "1 L", precio: 2646, categoria: "Contenedores" },
    
    { grupo: "t49", codigo: "10176", tituloFamilia: "ENVASE+ATOMIZADOR", descripcion: "250 CC", precio: 1001, categoria: "Contenedores" },
    { grupo: "t49", codigo: "10177", tituloFamilia: "ENVASE+ATOMIZADOR", descripcion: "500 CC", precio: 1216, categoria: "Contenedores" },
    { grupo: "t49", codigo: "10178", tituloFamilia: "ENVASE+ATOMIZADOR", descripcion: "800 CC", precio: 1287, categoria: "Contenedores" },
    { grupo: "t49", codigo: "10179", tituloFamilia: "ENVASE+ATOMIZADOR", descripcion: "1 L", precio: 1359, categoria: "Contenedores" },
    
    { grupo: "t50", codigo: "10180", tituloFamilia: "ENVASE+TAPA PUSH", descripcion: "250 CC", precio: 715, categoria: "Contenedores" },
    { grupo: "t50", codigo: "10181", tituloFamilia: "ENVASE+TAPA PUSH", descripcion: "500 CC", precio: 787, categoria: "Contenedores" },
    { grupo: "t50", codigo: "10182", tituloFamilia: "ENVASE+TAPA PUSH", descripcion: "800 CC", precio: 858, categoria: "Contenedores" },
    { grupo: "t50", codigo: "10183", tituloFamilia: "ENVASE+TAPA PUSH", descripcion: "1 L", precio: 930, categoria: "Contenedores" },
    
    { grupo: "t51", codigo: "10184", descripcion: "GATILLO REPUESTO UNIVERSAL", precio: 605, categoria: "Contenedores" },
    { grupo: "t52", codigo: "10185", descripcion: "BROCHE REFORZADO plástico", precio: 1182, categoria: "Contenedores" },
    { grupo: "t53", codigo: "10186", descripcion: "BALDE MOPA CENTRÍFUGO", precio: 33605, categoria: "Contenedores" },
    { grupo: "t54", codigo: "10187", descripcion: "BALDE REDONDO COLORES 13L", precio: 8198, categoria: "Contenedores" },
    { grupo: "t55", codigo: "10188", descripcion: "ESCOBILLA BAÑO BLANCA", precio: 3303, categoria: "Contenedores" },
    { grupo: "t56", codigo: "10189", descripcion: "BANQUETA NIÑOS COLORES", precio: 4234, categoria: "Contenedores" },
    { grupo: "t57", codigo: "10190", descripcion: "JARRA MEDIDORA", precio: 1673, categoria: "Contenedores" },
    { grupo: "t58", codigo: "10191", descripcion: "VASO MEDIDOR", precio: 1052, categoria: "Contenedores" },
    { grupo: "t59", codigo: "10192", descripcion: "TABLA PIZZERA CIRCULAR", precio: 1968, categoria: "Contenedores" },
    { grupo: "t60", codigo: "10193", descripcion: "TABLA PARA PICAR RECTANGULAR", precio: 1609, categoria: "Contenedores" },
    
    { grupo: "t61", codigo: "10194", tituloFamilia: "TAPER", descripcion: "CUADRADO 1,7 L", precio: 2703, categoria: "Contenedores" },
    { grupo: "t61", codigo: "10195", tituloFamilia: "TAPER", descripcion: "RECTANGULAR 2,5L", precio: 3604, categoria: "Contenedores" },
    { grupo: "t61", codigo: "10196", tituloFamilia: "TAPER", descripcion: "REDONDO 1,3L", precio: 2253, categoria: "Contenedores" },
    { grupo: "t61", codigo: "10197", tituloFamilia: "TAPER", descripcion: "REDONDO CON CIERRE", precio: 2522, categoria: "Contenedores" },
    
    { grupo: "t62", codigo: "10198", tituloFamilia: "ORGANIZADOR X 3", descripcion: "TRANSP.", precio: 26597, categoria: "Contenedores" },
    { grupo: "t62", codigo: "10199", tituloFamilia: "ORGANIZADOR X 3", descripcion: "COLOR", precio: 27347, categoria: "Contenedores" },
    
    { grupo: "t63", codigo: "10200", tituloFamilia: "ORGANIZADOR", descripcion: "TRANSP. CHICO", precio: 6761, categoria: "Contenedores" },
    { grupo: "t63", codigo: "10201", tituloFamilia: "ORGANIZADOR", descripcion: "TRANSP. MEDIANO", precio: 8122, categoria: "Contenedores" },
    { grupo: "t63", codigo: "10202", tituloFamilia: "ORGANIZADOR", descripcion: "TRANSP. GRANDE", precio: 11710, categoria: "Contenedores" },
    { grupo: "t63", codigo: "10203", tituloFamilia: "ORGANIZADOR", descripcion: "COLOR CHICO", precio: 6941, categoria: "Contenedores" },
    { grupo: "t63", codigo: "10204", tituloFamilia: "ORGANIZADOR", descripcion: "COLOR MEDIANO", precio: 8338, categoria: "Contenedores" },
    { grupo: "t63", codigo: "10205", tituloFamilia: "ORGANIZADOR", descripcion: "COLOR GRANDE", precio: 12064, categoria: "Contenedores" },
    
    { grupo: "t64", codigo: "10206", tituloFamilia: "CANASTA RATTAN", descripcion: "CHICA SIN TAPA", precio: 7827, categoria: "Contenedores" },
    { grupo: "t64", codigo: "10207", tituloFamilia: "CANASTA RATTAN", descripcion: "CHICA CON TAPA", precio: 11811, categoria: "Contenedores" },
    { grupo: "t64", codigo: "10208", tituloFamilia: "CANASTA RATTAN", descripcion: "SIN TAPA", precio: 18218, categoria: "Contenedores" },
    
    { grupo: "t65", codigo: "10209", tituloFamilia: "BOYA ARO PILETA", descripcion: "GRANDE", precio: 6681, categoria: "Contenedores" },
    { grupo: "t65", codigo: "10210", tituloFamilia: "BOYA ARO PILETA", descripcion: "MEDIANO", precio: 5346, categoria: "Contenedores" },
    { grupo: "t65", codigo: "10211", tituloFamilia: "BOYA ARO PILETA", descripcion: "MINI", precio: 3433, categoria: "Contenedores" },
    
    { grupo: "t66", codigo: "10212", tituloFamilia: "BOYA HONGUITO", descripcion: "CHICA", precio: 1850, categoria: "Contenedores" },
    { grupo: "t66", codigo: "10213", tituloFamilia: "BOYA HONGUITO", descripcion: "GRANDE", precio: 2512, categoria: "Contenedores" },
    
    { grupo: "t67", codigo: "10214", descripcion: "SACA HOJA", precio: 3072, categoria: "Contenedores" },
    
    { grupo: "t68", codigo: "10215", tituloFamilia: "CABOS SACA HOJA", descripcion: "ALUMINIO 1,5 MTS", precio: 9438, categoria: "Contenedores" },
    { grupo: "t68", codigo: "10216", tituloFamilia: "CABOS SACA HOJA", descripcion: "PLASTICO 1,4 MTS", precio: 6249, categoria: "Contenedores" },
    
    { grupo: "t69", codigo: "10217", descripcion: "SAPITO RIEGO", precio: 841, categoria: "Contenedores" }
];
