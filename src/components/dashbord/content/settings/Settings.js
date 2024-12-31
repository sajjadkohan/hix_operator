import React, { useEffect, useState } from 'react'
import styles from "./settings.module.css"
import { requestData } from '../../../../utils/functions';
import toast from 'react-hot-toast';

const Settings = () => {

    const [options,setOptions] = useState({
        language:"",
        description:"",
        showform:false,
        fields:[],
    });
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    console.log(options)

    // Get All Options
    const getData = async () => {
        setLoading(true)
        const finall = await requestData("/option/getOptions","get");
        if(finall.data.success){
            setOptions(finall.data.data.options)
        }else{
            setError(finall.data.message)
        }
        setLoading(false)
    }

    // Change Handler For Fields
    const handleChange = (e) => {
        if(e.target.name === "showform"){
            setOptions({...options,[e.target.name]:!options.showform})
        }else{
            setOptions({...options,[e.target.name]:e.target.value})
        }
    }

    // Save Changs
    const saveChange = async (e) => {
        e.preventDefault();
        setLoading(true)
        const finall = await requestData("/option/saveOptions","POST",options);
        if(finall.data.success){
            toast.success(finall.data.message)
        }else{
            toast.error(finall.data.message)
        }
        setLoading(false)
    }

    // Add Field For Form
    const addField = () => {
        if(options.fields){
            setOptions({...options,fields:[...options.fields,{
                id:Date.now(),
                nameField:"",
                type:"text",
                placeHolder:"",
                require:false,
            }]})
        }else{
            setOptions({...options,fields:[{
                nameField:"",
                type:"text",
                placeHolder:"",
                require:false,
            }]})
        }
    }

    // Edit value Field Items
    const changeValueFieldItem = (e,index) => {
        if(e.target.name === "require"){
            let fields = options.fields;
            fields[index][e.target.name] = !fields[index][e.target.name];
            setOptions({...options,fields})
        }else{
            let fields = options.fields;
            fields[index][e.target.name] = e.target.value;
            setOptions({...options,fields})
        }
    }

    // Delete Item Fields
    const deleteField = (id) => {
        let fields = options.fields.filter(item => item.id !== id );
        setOptions({...options,fields})
    }

    useEffect(() => {
        getData()
    }, [])
    

  return (
    <div className={styles.all}>
        {
            loading?
            <h2>Loading ...</h2>:
            error?
            <p>{error}</p>:
            <form onSubmit={saveChange}>
                <div className={styles.items}>

                    {/* Language */}
                    <div className={styles.item}>
                        <label>زبان</label>
                        <select 
                        name='language'
                        value={options.language}
                        onChange={handleChange}
                        >
                            <option value="farsi">فارسی</option>
                            <option value="انگلیسی">انگلیسی</option>
                        </select>
                        
                    </div>
                    
                    {/* Description */}
                    <div className={styles.item}>
                        <label>توضیحات</label>
                        <input 
                        name='description'
                        value={options.description}
                        onChange={handleChange}
                        />
                    </div>

                    {/* Show Welcome Form */}
                    <div className={styles.item}>
                        <label>نمایش فیلد های احراز هویت</label>
                        <input 
                        name='showform'
                        checked={options.showform}
                        onChange={handleChange}
                        type='checkbox'
                        />
                    </div>

                    {/* Fiels for Show Form */}
                    {
                        options.showform && 
                        <div className={styles.item}>
                            <label>فیلد ها</label>
                            <div className={styles.fItemsList}>
                                {
                                    options?.fields?.map((item1,index1) => 
                                    <div className={styles.fItems} key={index1}>
                                        <input
                                        onChange={(e) => changeValueFieldItem(e,index1)}
                                        value={item1.nameField} 
                                        name='nameField' 
                                        placeholder='name' />

                                        <select
                                        onChange={(e) => changeValueFieldItem(e,index1)}
                                        value={item1.type} 
                                        name='type'
                                        >
                                            <option value={"text"}>تکست</option>
                                            <option value={"checkBox"}>چک باکس</option>
                                        </select>
                                        <input
                                        name='placeHolder'
                                        onChange={(e) => changeValueFieldItem(e,index1)}
                                        value={item1.placeHolder} 
                                        placeholder='placeHolder' />

                                        <input 
                                        name='require'
                                        onChange={(e) => changeValueFieldItem(e,index1)}
                                        // value={item1.require} 
                                        checked={item1.require}
                                        type='checkbox'  />

                                        <button type='button' onClick={() => deleteField(item1.id)}>حذف</button>
                                    </div>
                                    )
                                }
                                <button type='button' onClick={addField}>افزودن</button>
                            </div>
                        </div>

                    }


                    <button type='submit' className={styles.btnChange}>ذخیره تغییرات</button>
                </div>
            </form>
        }
    </div>
  )
}

export default Settings