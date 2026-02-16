import { Vegetable } from "../model/vegetable.interfaces";


export const VEGGIE_LIST_FEATURE_KEY = 'veggieList'; //DEFINE FEATURE KEY NAME WHEN USE NGRX STANDALONE STORE

export interface VeggieListState {
    veggieList: Vegetable[];
}

export const initialState: VeggieListState = {
    veggieList: [
        {
            "id": 1,
            "veggiePic": "https://images.unsplash.com/photo-1584868792839-bff69783216a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyb2Njb2xpfGVufDB8fDB8fHww",
            "veggieName": "Broccoli",
            "usage": "Broccoli is a nutritious green vegetable from the cabbage family, known for its dense florets and stalks, packed with vitamins (C, K, A), minerals, fiber, and antioxidants, supporting immunity, digestion, bone, and heart health",
            "price": 29.03
        },
        {
            "id": 2,
            "veggiePic": "https://images.unsplash.com/photo-1611105637889-3afd7295bdbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FiYmFnZXxlbnwwfHwwfHx8MA%3D%3D",
            "veggieName": "cabbage",
            "usage": "Cabbage is a popular, nutrient-rich leafy green or purple vegetable from the Brassica family (like broccoli and kale) known for its dense, edible heads, used raw in salads (coleslaw) or cooked in dishes like sauerkraut, often prized for its Vitamin K, antioxidants, and fiber, supporting digestion and heart health. It comes in varieties like green, red, and crinkly Savoy, offering a crunchy texture and versatile culinary uses.",
            "price": 49.03
        },
        {
            "id": 3,
            "veggiePic": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww",
            "veggieName": "carrot",
            "usage": "A carrot is a popular root vegetable, typically orange but also found in purple, red, white, and yellow, known for being rich in beta-carotene (Vitamin A) for vision and skin, fiber, and other vitamins, eaten raw, cooked, or juiced, and originating from the wild carrot (Queen Anne's Lace) in Europe/Asia.",
            "price": 9.03
        }
    ],
}