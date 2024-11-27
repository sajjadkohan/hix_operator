import React, { createContext, useState } from 'react'

export const ViewCtx = createContext();

const ViewContext = ({children}) => {

    const [showAddProductModal,setShowAddProductModal] = useState(false);
    const handleOpenAddPro = () => setShowAddProductModal(true);
    const handleCloseAddPro = () => setShowAddProductModal(false);

    const [showAddCategoryModal,setShowAddCategoryModal] = useState(false);
    const handleOpenAddCat = () => setShowAddCategoryModal(true);
    const handleCloseAdCat = () => setShowAddCategoryModal(false);

    const [showAddFeatureModal,setShowAddFeatureModal] = useState(false);
    const handleOpenAddFea = () => setShowAddFeatureModal(true);
    const handleCloseAdFea = () => setShowAddFeatureModal(false);

    const [hasLogin,setHasLogin] = useState(true);
    const [hasoperator,setHasOperator] = useState(false);

    const [loading,setLoading] = useState({
      login:false,
      register : false,
      addOperator : false,
      plans : false,
      setPlans : false
    });




  return (
    <ViewCtx.Provider value={{
        showAddProductModal,setShowAddProductModal,
        handleOpenAddPro,handleCloseAddPro,
        loading,setLoading,
        
        showAddCategoryModal,setShowAddCategoryModal,
        handleOpenAddCat,handleCloseAdCat,

        showAddFeatureModal,setShowAddFeatureModal,
        handleOpenAddFea,handleCloseAdFea,

        hasLogin,setHasLogin,
        hasoperator,setHasOperator
    }}>
        {children}
    </ViewCtx.Provider>
  )
}

export default ViewContext