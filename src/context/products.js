import React,{useContext} from "react";
import data from '../data/localCart'
const ProductContext = React.createContext();
// Provider,Consumer,useContext
export default function ProductProvider({ children }) {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {       
        setProducts(data);
  },[]);
  return (
    <ProductContext.Provider value={{ products}}>
      {children}
    </ProductContext.Provider>
  );
}
export const useGlobalContextProducts=()=>{
  return useContext(ProductContext)
}
export { ProductContext, ProductProvider };
