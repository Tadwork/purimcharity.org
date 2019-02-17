// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
    static extract(content) {
      return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
  };

module.exports = {
    content: ["./src/**/*.html"],
    whitelist: ["body", "html"],
    whitelistPatternsChildren: [
      /^flip-container-/,
      /^donate-card__coin/,
    ],
    extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html']
        }
      ]
}