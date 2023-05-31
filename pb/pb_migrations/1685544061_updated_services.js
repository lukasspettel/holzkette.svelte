migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fhvla0mj4pkiz37")

  collection.name = "products"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fhvla0mj4pkiz37")

  collection.name = "services"

  return dao.saveCollection(collection)
})
