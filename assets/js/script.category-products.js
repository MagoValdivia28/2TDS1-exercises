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

    //CRUD => create
    //C => CREAT
    addCategory(name) {
        const id = this.nextCategoryId;
        this.nextCategoryId++;

        const category = new Category(id, name);
        this.categories.push(category);
    }

    // R => READ
    getCategoriesById(id){
        return this.categories.find((category) => category.id == id);
    }

    //U =>  UPDATE
    updateCategory(id, name){
        const category = this.getCategoriesById(id);
        category.name = name
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

        this.products.push(product);
        category.products.push(product);
    }
}

const categoriesList = new CategoryService();
const productsList = new productService();

function creatCategory(){
    const categoryName = `candies`;

    categoriesList.addCategory(categoryName);

}

function creatProduct(){
    const productName = "choco";
    const productPrice = 0.5;
    const productCategory = categoriesList.categories[0];

    productsList.addProduct(productName, productPrice, productCategory)

   // console.log(productsList.products)
}

function findcategory(id){
    const category = categoriesList.getCategoriesById(id);
    console.log(category.name);
}