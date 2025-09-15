const React = require("react")
const Layout = require("./src/components/layout")

/*exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
  setBodyAttributes({
    "style": "margin: 0",
  })
}*/

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}