import antfu from "@antfu/eslint-config"

export default antfu({
  react: true,
  stylistic: {
    quotes: "double",
    overrides: {
      "max-len": [
        "error",
        {
          code: 120,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreTemplateLiterals: true,
          ignoreStrings: true,
        },
      ],
    },
  },
  rules: {
    "react/prop-types": "off",
    "eslint-comments/no-unlimited-disable": "off",
    "react-refresh/only-export-components": "off",
  },
})
