migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xav8zxc3mzkhomc")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xav8zxc3mzkhomc")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
