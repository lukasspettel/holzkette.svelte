migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fhvla0mj4pkiz37")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fhvla0mj4pkiz37")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
