import { db } from "../_lib/prisma";
import CategoryItem from "./category-item";


// apenas server component pode ser async
const CategoryList = async () => {
    // acessa todas as categorias do banco de dados
    const categories = await db.category.findMany({})
    
    // pega as categorias do banco de daos
    // pra cada cateogira renderiza um item

    return (  
        <div className="flex overflow-scroll gap-3">
        {categories.map((category) =>(
            <CategoryItem key={category.id} category={category} />
        
        ))}
        </div>
    );
}
 
export default CategoryList;