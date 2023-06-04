import CategoryItem from "./CategoryItem";

export default function CategoryList({ filteredCatalog }) {
    return (
        <div className="list">
            {filteredCatalog.map((el) => {
                return <CategoryItem key={el.idCategory} {...el} />
            })}
        </div>)
}