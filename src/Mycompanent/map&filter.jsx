import React from 'react'

export const Mf = () => {
    let products = [
        {id:1,name:'redmi 13',category:'mobile',price:13500},
        {id:2,name:'dell i5',category:'laptop',price:20000},
        {id:3,name:'vivo',category:'mobile',price:9000}
    ]
    // let products = [4,5,6,3,5,3,5,6,3,5,3]
    products = products.filter(prod => prod.category === 'mobile')
    // products = products.filter(prod => prod>=5)

  return (
    <>
    <div>
        {products.map((prods) =>
             <div><hr></hr>
              {/* <hr></hr><div>{prods}</div> */}
            <div>name = {prods.name} </div>
            <div>price = {prods.price} </div>
            </div>
        )}
        </div>
    </>
  )
}
