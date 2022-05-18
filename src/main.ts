import { join, parse } from "path";
import { cliArgs } from "./cli/cli-args";
import { readFileSync, existsSync, writeFileSync, mkdirSync } from "fs";
import glob from "glob";
import Mustache from "mustache";



const outDir = join(process.cwd(), cliArgs.outDir);
const matches: string[] = glob.sync(cliArgs.match) || [];
const templatePath = join(process.cwd(), cliArgs.template);
const templateFileName = cliArgs.nameTemplate;

if (!existsSync(templatePath)) {
  throw new Error("Template file does not found. Got template path - " + templatePath);
}

if (!existsSync(outDir)) {
  mkdirSync(outDir);
}

const template = readFileSync(templatePath).toString();

matches.forEach(filePath => {
  const content = readFileSync(filePath);
  const parsedFileName = parse(filePath);
  const fileName = parsedFileName.name;
  const fileExt = parsedFileName.ext;
  const view = {
    raw: content,
    fileName
  };
  const renderedContent = Mustache.render(template, view);
  const renderedFileName = Mustache.render(templateFileName, {
    name: fileName,
    ext: fileExt
  });
  writeFileSync(join(outDir, renderedFileName), renderedContent);
});