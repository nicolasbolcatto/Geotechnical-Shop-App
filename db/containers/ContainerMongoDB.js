import mongoose from "mongoose";
mongoose.set('strictQuery', false)

class ContainerMongoDB {

    constructor(URL) {
        this.URL = URL
    }

    async connect() {
        await mongoose.connect(this.URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }

    async insertItems(object) {
        this.connect()
        let count = await this.model.count()
        object.id = count + 1
        await this.model.create(object)
        return object.id
    }

    async getById(id) {
        this.connect()
        return await this.model.find({ id: id })
    }

    async getAll() {
        this.connect()
        return await this.model.find({})
    }

    async updateItemById(id, data) {
        this.connect()
        let filter = { id: id }
        return await this.model.findOneAndUpdate(filter, data)

    }

    async deleteById(id) {
        this.connect()
        return await this.model.deleteOne({ id: id })
    }

    async deleteAll() {
        this.connect()
        return await this.model.deleteMany({})
    }


    disconnect() {
        mongoose.disconnect()
    }

}

export default ContainerMongoDB