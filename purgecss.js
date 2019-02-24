const Purgecss = require('purgecss')
const fs = require('fs')
// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
    static extract(content) {
      return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
  };
const purgeCss = new Purgecss({
    content: ["./dist/**/*.html"],
    css: ['./dist/**/*.css'],
    whitelist: ["body", "html"],
    // whitelistPatternsChildren: [
    //   /^flip-container-/,
    //   /^donate-card__coin/,
    // ],
    extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html']
        }
      ]
})
const results = purgeCss.purge()
for(result of results){
  fs.writeFileSync(result.file,result.css)
}
