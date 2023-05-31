migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8uadufabyl9lhsy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "izchm59d",
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
    "id": "2bocebdk",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ostsssxz",
    "name": "description",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8uadufabyl9lhsy")

  // remove
  collection.schema.removeField("izchm59d")

  // remove
  collection.schema.removeField("2bocebdk")

  // remove
  collection.schema.removeField("ostsssxz")

  return dao.saveCollection(collection)
})
