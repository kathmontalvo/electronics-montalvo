import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [items, setItems] = useState([])

    const addToPreviousItem = (itemId, item, newQty) => {

        const newItems = items.filter(itemInfo => itemInfo.item.id !== itemId);
        const { qty: currentQty } = items.find(itemInfo => itemInfo.item.id === itemId);
        setItems([...newItems, {
            item,
            qty: currentQty + newQty
        }])

    }

    const methods = {
        isInCart: (id) => items.find(itemInfo => itemInfo.item.id === id),
        addItem: (item, qty) => {
            methods.isInCart(item.id) ?
            addToPreviousItem(item.id, item, qty)
            : setItems([...items, {
                item,
                qty
            }])
        }
        ,
        removeItem: (itemId) => {
            const newItems = items.filter(itemInfo => itemInfo.item.id !== itemId);
            setItems(newItems)
        },    
        clear: () => setItems([]),   
    }



    return (
        <CartContext.Provider value={{ items, ...methods }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
