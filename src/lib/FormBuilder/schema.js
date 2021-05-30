const schema = {
  title: "JsonValidation",
  type: "array",
  items: {
    type: "object",
    properties: {
      id: { type: "integer" },
      type: { type: "string" },
      hasChild: { type: "boolean" },
      name: { type: "string" },
      choices: { type: "array" },
      required: { type: "boolean" },
    },
    required: ["id", "type", "hasChild", "name", "choices", "required"],
    additionalProperties: false,
  },
};

export default schema;
