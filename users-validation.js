db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "hobbies", "address", "networth"],
      properties: {
        name: {
          bsonType: "string",
          description: "this should be of type string and is required",
        },
        age: {
          bsonType: "int",
          description: "this should be of type int and is required",
        },
        hobbies: {
          bsonType: "array",
          description: "this should be of type array and is required",
          items: {
            bsonType: "object",
            description: "this should be of object string and is required",
            required: ["title", "description"],
            properties: {
              title: {
                bsonType: "string",
                description: "this should be of type string and is required",
              },
              description: {
                bsonType: "string",
                description: "this should be of type string and is required",
              },
            },
          },
        },
        address: {
          bsonType: "object",
          description: "this should be of type object and is required",
          required: ["city", "street"],
          properties: {
            city: {
              bsonType: "string",
              description: "this should be of type string and is required",
            },
            street: {
              bsonType: "string",
              description: "this should be of type string and is required",
            },
          },
        },
        networth: {
          bsonType: "long",
          description: "this should be of type long and is required",
        },
      },
    },
  },
});
