import type Category from './category'
import type ProductPhoto from './photos'

declare interface Product {
  id?: number
  name: string
  sku: string
  quantity: number
  price: number
  status?: string
  category_id: number | null
  category?: Category | null
  // we use [] because we want to check the object inside the array[]
  photos?: ProductPhoto[]
}

export default Product
