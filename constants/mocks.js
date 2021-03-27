const categories = [
    {
        id: 'plants',
        name: 'Plants',
        tags: ['products', 'inspirations'],
        cont: 147,
        image: require('../assets/icons/plants.png')
    },
    {
        id: 'seeds',
        name: 'Seeds',
        tags: ['products', 'shop'],
        cont: 16,
        image: require('../assets/icons/seeds.png')
    },
    {
        id: 'flowers',
        name: 'Flowers',
        tags: ['products', 'inspirations'],
        cont: 68,
        image: require('../assets/icons/flowers.png')
    },
    {
        id: 'sprayers',
        name: 'Sprayers',
        tags: ['products', 'shop'],
        cont: 17,
        image: require('../assets/icons/sprayers.png')
    },
    {
        id: 'pots',
        name: 'Pots',
        tags: ['products', 'shop'],
        cont: 47,
        image: require('../assets/icons/pots.png')
    },
    {
        id: 'fertilizers',
        name: 'Fertilizers',
        tags: ['products', 'shop'],
        cont: 47,
        image: require('../assets/icons/fertilizers.png')
    }
];

const products = [
    {
        id: 1,
        name: "16 mejores plantas que prosperan en tu habitación",
        description:
            "Las habitaciones merecen estar decoradas con exuberante vegetación como cualquier otra habitación de la casa, pero puede ser difícil encontrar una planta que prospere aquí. La poca luz, la alta humedad y las temperaturas cálidas significan que solo florecerán ciertas plantas de interior.",
        tags: ["Interior", "27 m²", "Ideas"],
        gallery: [
            require("../assets/images/plants_1.png"),
            require("../assets/images/plants_2.png"),
            require("../assets/images/plants_3.png"),
            // showing only 3 images, show +6 for the rest
            require("../assets/images/plants_1.png"),
            require("../assets/images/plants_2.png"),
            require("../assets/images/plants_3.png"),
            require("../assets/images/plants_1.png"),
            require("../assets/images/plants_2.png"),
            require("../assets/images/plants_3.png")
        ]
    }
];

const explore = [
    // Images
    require('../assets/images/explore_1.png'),
    require('../assets/images/explore_2.png'),
    require('../assets/images/explore_3.png'),
    require('../assets/images/explore_4.png'),
    require('../assets/images/explore_5.png'),
    require('../assets/images/explore_6.png')
];

const profile = {
    username: 'Luis',
    location: 'Cancún',
    email: 'luis@mail.com',
    avatar: require('../assets/images/avatar.gif'),
    budget: 1000,
    montly_cap: 5000,
    notifications: true,
    newslatter: false
};

export {
    categories,
    explore,
    products,
    profile
};