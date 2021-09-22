
import Category from "./Category";
import {getCategories,getCategory} from "../../js/actions/category";
import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import ReactLoading from "react-loading";
import AddCategory from "./AddCategory";
import Footer from "../Footer"


function Services() {
    const dispatch = useDispatch()
    const categories= useSelector(state => state.categoryReducer.categories);
    const loadCategory= useSelector(state => state.categoryReducer.loadCategory);

    useEffect(()=>{
        dispatch(getCategories())},[]
    )
    


    return (
        <div style={{marginTop:100}}>
            <AddCategory />
             <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around", margin:40}}>
            {loadCategory ? <h2 style={{marginTop:150}}>  <ReactLoading type={"spokes"} color={"blue"} height={50} width={50} /></h2> : categories.map(el=> <Category key={el._id} category={el}/>)}
        </div>
        <Footer/> 
       </div>
    )
}

export default Services
