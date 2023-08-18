//cada categoria possui varios produtos
//cada produto pertence a uma categoria

class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 1;
    }

    addCategory(name) {
        const id = this.nextCategoryId;
        this.nextCategoryId++;

        const category = new Category(id, name);
        this.categories.push(category);
    }
}

class productService{
    constructor(){
        this.products = [];
        this.nextproductsId = 1;
    }

    addProduct(name, price, category){
        const id = this.nextproductsId;
        this.nextproductsId++;

        const product = new Product(id, name, price, category);


        this.products.push(product)
    }
}

const categoriesList = new CategoryService();

function creatCategory(){
    const categoryName = `candies`;

    categoriesList.addCategory(categoryName);

    console.log(categoriesList.categories);
}