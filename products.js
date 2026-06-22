// Base de datos de productos - Zapatillas, Ropa y Accesorios
const products = [
    // ========== ZAPATILLAS ==========
    
    // Nike
    {
        id: 1,
        category: "zapatillas",
        brand: "Nike",
        name: "Nike LeBron 21",
        price: 185,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Zapatilla de alto rendimiento para basquetbol"
    },
    {
        id: 2,
        category: "zapatillas",
        brand: "Nike",
        name: "Nike Kyrie 8",
        price: 160,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Diseñada para velocidad y agilidad"
    },
    {
        id: 3,
        category: "zapatillas",
        brand: "Nike",
        name: "Nike Zoom Freak 4",
        price: 170,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Zapatilla versátil para juego rápido"
    },
    {
        id: 4,
        category: "zapatillas",
        brand: "Nike",
        name: "Nike Phantom GT",
        price: 155,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Comodidad y soporte excepcional"
    },

    // Adidas
    {
        id: 5,
        category: "zapatillas",
        brand: "Adidas",
        name: "Adidas Dame 8",
        price: 175,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Excelente tracción y estabilidad"
    },
    {
        id: 6,
        category: "zapatillas",
        brand: "Adidas",
        name: "Adidas Harden Vol. 7",
        price: 180,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Diseño perfecto para scorers"
    },
    {
        id: 7,
        category: "zapatillas",
        brand: "Adidas",
        name: "Adidas D.O.N Issue 4",
        price: 165,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Ligereza y maniobrabilidad"
    },
    {
        id: 8,
        category: "zapatillas",
        brand: "Adidas",
        name: "Adidas Exhibit A 2.0",
        price: 150,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Precio accesible sin sacrificar calidad"
    },

    // Jordan
    {
        id: 9,
        category: "zapatillas",
        brand: "Jordan",
        name: "Air Jordan 38",
        price: 195,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Tecnología Jordan de última generación"
    },
    {
        id: 10,
        category: "zapatillas",
        brand: "Jordan",
        name: "Air Jordan 37",
        price: 180,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Icónica línea Jordan"
    },
    {
        id: 11,
        category: "zapatillas",
        brand: "Jordan",
        name: "Jordan Zion 3",
        price: 170,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Diseñada para potencia"
    },
    {
        id: 12,
        category: "zapatillas",
        brand: "Jordan",
        name: "Jordan Luka 2",
        price: 160,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Versatilidad para todos los estilos"
    },

    // Puma
    {
        id: 13,
        category: "zapatillas",
        brand: "Puma",
        name: "Puma Dreamer 2",
        price: 145,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Comodidad premium a buen precio"
    },
    {
        id: 14,
        category: "zapatillas",
        brand: "Puma",
        name: "Puma Stewie 3",
        price: 155,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Diseño moderno y elegante"
    },
    {
        id: 15,
        category: "zapatillas",
        brand: "Puma",
        name: "Puma Playmaker Pro",
        price: 165,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Zapatilla versátil de alto rendimiento"
    },
    {
        id: 16,
        category: "zapatillas",
        brand: "Puma",
        name: "Puma MB.03",
        price: 170,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Velocidad y control"
    },

    // Reebok
    {
        id: 17,
        category: "zapatillas",
        brand: "Reebok",
        name: "Reebok Shaq Attaq",
        price: 155,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Clásico retro con tecnología moderna"
    },
    {
        id: 18,
        category: "zapatillas",
        brand: "Reebok",
        name: "Reebok Pump Omni Zone",
        price: 160,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Sistema de ajuste innovador"
    },
    {
        id: 19,
        category: "zapatillas",
        brand: "Reebok",
        name: "Reebok Question Mid",
        price: 165,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Icónica zapatilla de basquetbol"
    },
    {
        id: 20,
        category: "zapatillas",
        brand: "Reebok",
        name: "Reebok Floatride Energy",
        price: 150,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Amortiguación reactiva"
    },

    // Under Armour
    {
        id: 21,
        category: "zapatillas",
        brand: "UnderArmour",
        name: "UA Curry Flow 10",
        price: 175,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Flujo de juego extremo"
    },
    {
        id: 22,
        category: "zapatillas",
        brand: "UnderArmour",
        name: "UA Hovr Havoc 5",
        price: 160,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Tecnología Hovr"
    },
    {
        id: 23,
        category: "zapatillas",
        brand: "UnderArmour",
        name: "UA Embiid 1",
        price: 170,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Diseñada para bígmens"
    },
    {
        id: 24,
        category: "zapatillas",
        brand: "UnderArmour",
        name: "UA Jet 23",
        price: 155,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Velocidad extrema"
    },

    // New Balance
    {
        id: 25,
        category: "zapatillas",
        brand: "NewBalance",
        name: "New Balance TWO WXY v4",
        price: 165,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Rendimiento y estilo"
    },
    {
        id: 26,
        category: "zapatillas",
        brand: "NewBalance",
        name: "New Balance Omn1s",
        price: 170,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Zapatilla versátil premium"
    },
    {
        id: 27,
        category: "zapatillas",
        brand: "NewBalance",
        name: "New Balance Kawhi",
        price: 160,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Comodidad defensiva"
    },
    {
        id: 28,
        category: "zapatillas",
        brand: "NewBalance",
        name: "New Balance 990v6",
        price: 175,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Clásico que sigue siendo relevante"
    },

    // Anta
    {
        id: 29,
        category: "zapatillas",
        brand: "Anta",
        name: "Anta KT7",
        price: 140,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Zapatilla de calidad a precio competitivo"
    },
    {
        id: 30,
        category: "zapatillas",
        brand: "Anta",
        name: "Anta Shock The Game",
        price: 145,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Impacto en la cancha"
    },
    {
        id: 31,
        category: "zapatillas",
        brand: "Anta",
        name: "Anta Kai 2",
        price: 150,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Rendimiento asiático de clase mundial"
    },
    {
        id: 32,
        category: "zapatillas",
        brand: "Anta",
        name: "Anta Flash",
        price: 135,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Velocidad suprema"
    },

    // 361
    {
        id: 33,
        category: "zapatillas",
        brand: "361",
        name: "361 Degrees Space",
        price: 138,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Tecnología espacial en el piso"
    },
    {
        id: 34,
        category: "zapatillas",
        brand: "361",
        name: "361 Degrees Wind",
        price: 145,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Ligereza extrema"
    },
    {
        id: 35,
        category: "zapatillas",
        brand: "361",
        name: "361 Degrees Storm",
        price: 150,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Potencia y control"
    },
    {
        id: 36,
        category: "zapatillas",
        brand: "361",
        name: "361 Degrees Nova",
        price: 142,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Innovación en cada paso"
    },

    // AND1
    {
        id: 37,
        category: "zapatillas",
        brand: "AND1",
        name: "AND1 Tai Chi",
        price: 130,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Estilo callejero de AND1"
    },
    {
        id: 38,
        category: "zapatillas",
        brand: "AND1",
        name: "AND1 Chosen One",
        price: 135,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Icónica línea de AND1"
    },
    {
        id: 39,
        category: "zapatillas",
        brand: "AND1",
        name: "AND1 Streetball",
        price: 128,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Clásico del streetball"
    },
    {
        id: 40,
        category: "zapatillas",
        brand: "AND1",
        name: "AND1 Rocket",
        price: 132,
        image: "👟",
        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
        description: "Velocidad en la cancha"
    },

    // ========== CAMISETAS NBA ==========
    {
        id: 41,
        category: "ropa",
        type: "camiseta",
        brand: "Lakers",
        name: "Lakers #23 - LeBron James",
        price: 89,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Camiseta oficial Lakers"
    },
    {
        id: 42,
        category: "ropa",
        type: "camiseta",
        brand: "Celtics",
        name: "Celtics #4 - Jayson Tatum",
        price: 89,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Camiseta oficial Celtics"
    },
    {
        id: 43,
        category: "ropa",
        type: "camiseta",
        brand: "Heat",
        name: "Heat #3 - D. Wade",
        price: 89,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Camiseta oficial Heat"
    },
    {
        id: 44,
        category: "ropa",
        type: "camiseta",
        brand: "Knicks",
        name: "Knicks #34 - Julius Randle",
        price: 89,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Camiseta oficial Knicks"
    },
    {
        id: 45,
        category: "ropa",
        type: "camiseta",
        brand: "Nets",
        name: "Nets #7 - Kevin Durant",
        price: 89,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Camiseta oficial Nets"
    },
    {
        id: 46,
        category: "ropa",
        type: "camiseta",
        brand: "Warriors",
        name: "Warriors #30 - Stephen Curry",
        price: 89,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Camiseta oficial Warriors"
    },
    {
        id: 47,
        category: "ropa",
        type: "camiseta",
        brand: "Mavericks",
        name: "Mavericks #77 - Luka Doncic",
        price: 89,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Camiseta oficial Mavericks"
    },
    {
        id: 48,
        category: "ropa",
        type: "camiseta",
        brand: "Suns",
        name: "Suns #1 - Devin Booker",
        price: 89,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Camiseta oficial Suns"
    },
    {
        id: 49,
        category: "ropa",
        type: "camiseta",
        brand: "Nuggets",
        name: "Nuggets #15 - Nikola Jokic",
        price: 89,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Camiseta oficial Nuggets"
    },
    {
        id: 50,
        category: "ropa",
        type: "camiseta",
        brand: "Bulls",
        name: "Bulls #23 - Michael Jordan",
        price: 89,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Camiseta clásica Bulls"
    },

    // ========== REMERAS MANGA CORTA ==========
    {
        id: 51,
        category: "ropa",
        type: "remera",
        brand: "Lakers",
        name: "Lakers Shooting Shirt - Purple",
        price: 45,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Remera de entrenamiento Lakers"
    },
    {
        id: 52,
        category: "ropa",
        type: "remera",
        brand: "Celtics",
        name: "Celtics Practice Tee - Green",
        price: 45,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Remera de entrenamiento Celtics"
    },
    {
        id: 53,
        category: "ropa",
        type: "remera",
        brand: "Heat",
        name: "Heat Training Shirt - Red",
        price: 45,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Remera de entrenamiento Heat"
    },
    {
        id: 54,
        category: "ropa",
        type: "remera",
        brand: "Knicks",
        name: "Knicks Casual Tee - Orange",
        price: 45,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Remera casual Knicks"
    },
    {
        id: 55,
        category: "ropa",
        type: "remera",
        brand: "Nets",
        name: "Nets Graphix Tee - Black",
        price: 45,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Remera gráfica Nets"
    },
    {
        id: 56,
        category: "ropa",
        type: "remera",
        brand: "Warriors",
        name: "Warriors Performance Tee - Blue",
        price: 50,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Remera de performance Warriors"
    },
    {
        id: 57,
        category: "ropa",
        type: "remera",
        brand: "Mavericks",
        name: "Mavericks Classic Tee - White",
        price: 45,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Remera clásica Mavericks"
    },
    {
        id: 58,
        category: "ropa",
        type: "remera",
        brand: "Suns",
        name: "Suns Retro Tee - Orange",
        price: 45,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Remera retro Suns"
    },
    {
        id: 59,
        category: "ropa",
        type: "remera",
        brand: "Nuggets",
        name: "Nuggets Gold Tee - Yellow",
        price: 48,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Remera oro de Nuggets"
    },
    {
        id: 60,
        category: "ropa",
        type: "remera",
        brand: "Bulls",
        name: "Bulls Legendary Tee - Red",
        price: 50,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Remera legendaria Bulls"
    },

    // ========== BUZOS ==========
    {
        id: 61,
        category: "ropa",
        type: "buzo",
        brand: "Lakers",
        name: "Lakers Warm-Up Hoodie",
        price: 95,
        image: "🧥",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Buzo calentamiento Lakers"
    },
    {
        id: 62,
        category: "ropa",
        type: "buzo",
        brand: "Celtics",
        name: "Celtics Full-Zip Jacket",
        price: 95,
        image: "🧥",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Buzo con cierre completo Celtics"
    },
    {
        id: 63,
        category: "ropa",
        type: "buzo",
        brand: "Heat",
        name: "Heat Team Hoodie",
        price: 100,
        image: "🧥",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Buzo oficial del equipo Heat"
    },
    {
        id: 64,
        category: "ropa",
        type: "buzo",
        brand: "Knicks",
        name: "Knicks Championship Hoodie",
        price: 105,
        image: "🧥",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Buzo campeonato Knicks"
    },
    {
        id: 65,
        category: "ropa",
        type: "buzo",
        brand: "Nets",
        name: "Nets Windbreaker",
        price: 90,
        image: "🧥",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Rompevientos Nets"
    },
    {
        id: 66,
        category: "ropa",
        type: "buzo",
        brand: "Warriors",
        name: "Warriors Tech Hoodie",
        price: 110,
        image: "🧥",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Buzo tech Warriors"
    },
    {
        id: 67,
        category: "ropa",
        type: "buzo",
        brand: "Mavericks",
        name: "Mavericks Premium Jacket",
        price: 115,
        image: "🧥",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Chaqueta premium Mavericks"
    },
    {
        id: 68,
        category: "ropa",
        type: "buzo",
        brand: "Suns",
        name: "Suns Fleece Hoodie",
        price: 85,
        image: "🧥",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Buzo polar Suns"
    },
    {
        id: 69,
        category: "ropa",
        type: "buzo",
        brand: "Nuggets",
        name: "Nuggets Rain Jacket",
        price: 100,
        image: "🧥",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Chaqueta para lluvia Nuggets"
    },
    {
        id: 70,
        category: "ropa",
        type: "buzo",
        brand: "Bulls",
        name: "Bulls Alumni Hoodie",
        price: 120,
        image: "🧥",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Buzo alumni Bulls"
    },

    // ========== ACCESORIOS ==========
    
    // Rodilleras
    {
        id: 71,
        category: "ropa",
        type: "accesorios",
        brand: "Nike",
        name: "Nike Pro Knee Sleeve",
        price: 35,
        image: "🦵",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Rodillera compresiva Nike"
    },
    {
        id: 72,
        category: "ropa",
        type: "accesorios",
        brand: "Adidas",
        name: "Adidas Knee Support",
        price: 32,
        image: "🦵",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Soporte de rodilla Adidas"
    },
    {
        id: 73,
        category: "ropa",
        type: "accesorios",
        brand: "UnderArmour",
        name: "UA Compression Knee Sleeve",
        price: 38,
        image: "🦵",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Manga de compresión rodilla UA"
    },
    {
        id: 74,
        category: "ropa",
        type: "accesorios",
        brand: "Puma",
        name: "Puma Knee Wrap",
        price: 28,
        image: "🦵",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Envoltorio de rodilla Puma"
    },

    // Muñequeras
    {
        id: 75,
        category: "ropa",
        type: "accesorios",
        brand: "Nike",
        name: "Nike Wristband",
        price: 15,
        image: "💪",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Muñequera Nike"
    },
    {
        id: 76,
        category: "ropa",
        type: "accesorios",
        brand: "Adidas",
        name: "Adidas Wrist Support",
        price: 18,
        image: "💪",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Soporte de muñeca Adidas"
    },
    {
        id: 77,
        category: "ropa",
        type: "accesorios",
        brand: "UnderArmour",
        name: "UA Compression Wristband",
        price: 20,
        image: "💪",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Muñequera compresiva UA"
    },
    {
        id: 78,
        category: "ropa",
        type: "accesorios",
        brand: "Puma",
        name: "Puma Wrist Wrap",
        price: 14,
        image: "💪",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Envoltorio de muñeca Puma"
    },

    // Cubrebrazos
    {
        id: 79,
        category: "ropa",
        type: "accesorios",
        brand: "Nike",
        name: "Nike Shooting Sleeve",
        price: 25,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Manga de tiro Nike"
    },
    {
        id: 80,
        category: "ropa",
        type: "accesorios",
        brand: "Adidas",
        name: "Adidas Arm Sleeve",
        price: 22,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Manga de brazo Adidas"
    },
    {
        id: 81,
        category: "ropa",
        type: "accesorios",
        brand: "UnderArmour",
        name: "UA Compression Sleeve",
        price: 28,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Manga compresiva UA"
    },
    {
        id: 82,
        category: "ropa",
        type: "accesorios",
        brand: "Puma",
        name: "Puma Arm Compression",
        price: 20,
        image: "👕",
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        description: "Compresión de brazo Puma"
    }
];

// Exportar para usar en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
