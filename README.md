# file-transformer

Package for transforming many files using your templates (Mustache under).

## Usage

Install - `npm i many-file-transformer -g`

Using - `file-transformer -m ./my-dir/**/*.svg -o ../out-dir -t ./my-template.tmpl -n {{name}}-transformed.{{ext}}`

## CLI

`-m` - this package use glob.js for matching filenames, as `./*.svg`

`-t` - path to template file (this package use mustaches syntax). Available template variables - `raw`, `fileName`.

`-n` - template for output filenames, as `{{name}}-out.{{ext}}`

`-o` - output directory for transformed files.