export interface User {
    id: number
    name: string
    lastName: string
    email: string
    phone: string
    role: 'admin' | 'user'
    createdAt: string
    updatedAt: string
}