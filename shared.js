const {MongoClient} = require('mongodb');

module.exports = {
    SelectedDB : {},
    async connect (){
        try{
              const client =  await MongoClient.connect("mongodb://localhost:27017");
              this.SelectedDB = client.db('products');
              console.log(this.SelectedDB);
        }
        catch(err){
            console.log(err);
        }
    }

}