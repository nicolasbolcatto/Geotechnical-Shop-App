import ContainerMongoDB from "../../containers/ContainerMongoDB.js"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({
    path: "./keys.env"
})

let instance = null

class CartsDaoMongoDB extends ContainerMongoDB {
    constructor() {
        super(process.env.MONGO_DB)
        this.model = this.createModel()
    }

    createModel() {
        let schemaStructure = {
            products: { type: Object, required: true },
            id: { type: Number, required: true },
            timestamp: { type: String, required: true },
            userEmail: { type: String, required: true }
        }
        let schema = new mongoose.Schema(schemaStructure)
        return mongoose.model("carts", schema)
    }

    static getInstance() {
        if (!instance) {
            instance = new CartsDaoMongoDB()
        }
        return instance
    }

    async addCart(userEmail) {
        this.connect()
        let count = await this.model.count()
        let id = count + 1
        return await this.model.create({ products: [], id: id, timestamp: new Date().toUTCString(), userEmail: userEmail })
    }

    async addItemToCart(item, idCart) {
        this.connect()
        let filter = { id: idCart }
        return await this.model.findOneAndUpdate(filter, { $push: { products: item[0] } })
    }

    async deleteItemFromCart(idProd, idCart) {
        this.connect()
        return await this.model.updateOne({ id: idCart }, { $pull: { products: { id: idProd } } })
    }

}

export default CartsDaoMongoDB