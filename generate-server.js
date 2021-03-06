const fs = require('fs')

const { CodeGenerator } = require("@himenon/openapi-typescript-code-generator")
const Templates = require("@himenon/openapi-typescript-code-generator/templates")

const main = () => {
  const codeGenerator = new CodeGenerator('./openapi.yml')
  const apiClientGeneratorTemplate = {
    generator: Templates.ApiClient.generator,
    option: {},
  };

  const code = codeGenerator.generateTypeDefinition([
    codeGenerator.getAdditionalTypeDefinitionCustomCodeGenerator(),
    apiClientGeneratorTemplate,
  ]);

  fs.writeFileSync("server/index.ts", code, { encoding: "utf-8" });
}

main()
