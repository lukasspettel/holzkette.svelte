migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bpkiwbvamlkmom")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "km3kgco1",
    "name": "partners",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "xav8zxc3mzkhomc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bpkiwbvamlkmom")

  // remove
  collection.schema.removeField("km3kgco1")

  return dao.saveCollection(collection)
})
