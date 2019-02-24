
module.exports = {
  plugins: {

    "posthtml-partials":{
      "delimiters": ['{{', '}}']
    },
    "posthtml-include": {
			"root": "src"
		},
    // "posthtml-block": true
  }
}