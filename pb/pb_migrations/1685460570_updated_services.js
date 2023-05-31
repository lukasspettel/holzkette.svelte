migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fhvla0mj4pkiz37")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jvbgvghu",
    "name": "headline",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lxoyayrw",
    "name": "subheadline",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fhvla0mj4pkiz37")

  // remove
  collection.schema.removeField("jvbgvghu")

  // remove
  collection.schema.removeField("lxoyayrw")

  return dao.saveCollection(collection)
})
