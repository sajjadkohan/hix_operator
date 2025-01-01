import React, { createContext, useState } from 'react'

export const ViewContext = createContext();

const ViewWrapper = ({children}) => {

    const [showAddProductModal,setShowAddProductModal] = useState(false);
    const handleOpenAddPro = () => setShowAddProductModal(true);
    const handleCloseAddPro = () => setShowAddProductModal(false);

    const [showAddCategoryModal,setShowAddCategoryModal] = useState(false);
    const handleOpenAddCat = () => setShowAddCategoryModal(true);
    const handleCloseAdCat = () => setShowAddCategoryModal(false);

    const [showAddFeatureModal,setShowAddFeatureModal] = useState(false);
    const handleOpenAddFea = () => setShowAddFeatureModal(true);
    const handleCloseAdFea = () => setShowAddFeatureModal(false);

    
    const [showAddMessageModal,setShowAddMessageModal] = useState(false);
    const handleOpenAddMessage = () => setShowAddMessageModal(true);
    const handleCloseAdMessage = () => setShowAddMessageModal(false);

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
    <ViewContext.Provider value={{
        showAddProductModal,setShowAddProductModal,
        handleOpenAddPro,handleCloseAddPro,
        loading,setLoading,
        
        showAddCategoryModal,setShowAddCategoryModal,
        handleOpenAddCat,handleCloseAdCat,

        showAddFeatureModal,setShowAddFeatureModal,
        handleOpenAddFea,handleCloseAdFea,

        hasLogin,setHasLogin,
        hasoperator,setHasOperator,

        showAddMessageModal,setShowAddMessageModal,
        handleOpenAddMessage,handleCloseAdMessage
    }}>
        {children}
    </ViewContext.Provider>
  )
}

export default ViewWrapper