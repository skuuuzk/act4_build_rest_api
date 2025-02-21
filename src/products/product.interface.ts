export interface Product {
    name: string, 
    price: number,
    quantity: number,
    image: string    
}

export interface UnitProduct extends Product {
    id: string
}

export interface Products { 
        [key : string]: UnitProduct
}

export function remove(id: string) {
    throw new Error("Function not implemented.")
}
export function findAll() {
    throw new Error("Function not implemented.")
}

export function findOne(id: string) {
    throw new Error("Function not implemented.")
}

export function create(arg0: any) {
    throw new Error("Function not implemented.")
}

export function update(id: string, newProduct: any) {
    throw new Error("Function not implemented.")
}

