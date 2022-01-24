export interface Product {
    id: number
    name: string
    description: string
    price: number
    SKU: string
    categoryName: 'Frango' | 'Carne' | 'Peixe'
    inventoryId: string
    discountId: string
    createdAt: string
    updatedAt: string    
}