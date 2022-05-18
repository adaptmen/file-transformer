import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";


export const cliArgs = yargs(hideBin(process.argv))
.option("match", {
  alias: "m",
  type: "string",
  require: true,
  description: "File names mask, as './*.svg'",
  showInHelp: true,
})
.option("template", {
  alias: "t",
  type: "string",
  require: true,
  description: "Template for transforming files content",
  showInHelp: true,
})
.option("name-template", {
  alias: "n",
  type: "string",
  require: true,
  description: "File name template, as '{{name}}-out.{{ext}}'",
  showInHelp: true,
})
.option("outDir", {
  alias: "o",
  type: "string",
  require: true,
  description: "Output directory for transformed files",
  showInHelp: true,
})
.parseSync();
