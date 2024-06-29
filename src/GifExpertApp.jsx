import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (item) => {
        if (categories.includes(item)) return;
        setCategories(cat => [item, ...cat]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={ onAddCategory } />

            { categories.map( (cat) => ( 
                <GifGrid key={ cat } category={ cat } /> 
            ) ) }
    
        </>
    );

}
