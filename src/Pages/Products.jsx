import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct'


const Products = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams();
  const product = all_product.find(p => p.id === Number(productId))
  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Products