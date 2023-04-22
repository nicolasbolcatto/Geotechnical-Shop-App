import CartsDaoMongoDB from "./carts/CartsDaoMongoDB.js"
import CartsDaoFile from "./carts/CartsDaoFile.js"
import ProductsDaoMongoDB from "./products/ProductsDaoMongoDB.js"
import ProductsDaoFile from "./products/ProductsDaoFile.js"
import UsersDaoMongoDB from "./users/UsersDaoMongoDB.js"
import UsersDaoFile from "./users/UsersDaoFile.js"
import dotenv from "dotenv"

//Get enviroment variables
dotenv.config()


const choice = process.env.DATABASE || 'FILE'
let daoUsers
let daoCarts
let daoProducts
switch (choice) {
    case 'MONGO':
        daoProducts = ProductsDaoMongoDB.getInstance()
        daoProducts.connect()
        daoCarts = CartsDaoMongoDB.getInstance()
        daoCarts.connect()
        daoUsers = UsersDaoMongoDB.getInstance()
        daoUsers.connect()
        break
    case 'FILE':
        daoProducts = ProductsDaoFile.getInstance()
        daoProducts.connect()
        daoCarts = CartsDaoFile.getInstance()
        daoCarts.connect()
        daoUsers = UsersDaoFile.getInstance()
        daoUsers.connect()
}


export {daoCarts,daoProducts,daoUsers}
