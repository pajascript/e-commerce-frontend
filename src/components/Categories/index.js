import { Container } from './CategoriesElements';
import { categories } from '../../data';
import CategoryItem from '../CategoryItem';

const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    )
};

export default Categories;