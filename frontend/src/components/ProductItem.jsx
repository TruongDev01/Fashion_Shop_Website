import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);
    const [isLoading, setIsLoading] = useState(true);
    return (
        <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
            <div className='overflow-hidden'>
                {/*Skeleton loading */}
                {isLoading && (
                    <div className="w-full bg-gray-200 animate-pulse aspect-[3/4]">
                        {/* Bạn có thể chỉnh 'aspect-[3/4]' thành tỷ lệ khác (vd: aspect-square) tùy theo ảnh của bạn */}
                    </div>
                )}
                <img className={`hover:scale-110 transition ease-in-out ${isLoading ? 'hidden' : 'block'}`} src={image[0]} alt={name}
                    onLoad={() => setIsLoading(false)} />
            </div>

            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>

        </Link>
    )
}

export default ProductItem
