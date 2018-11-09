/**
 * Example
 * const { transformSync } = require('@babel/core')
 * const t = require('@babel/types')
 * const traverse = require('@babel/traverse').default
 * const generate = require('@babel/generator').default
 * const dirMap = require('./dirMap')
 * 
 * const code = `
 * import { Button, Alert, NavbarContext, NavItem, NavItemStyles } from 'xbrick'
 * import { get, omit } from 'lodash'
 * `
 * 
 * const result = transformSync(code, {ast: true})
 * traverse(result.ast, {
 *  enter(path) {
 *    if (t.isImportDeclaration(path.node)) {
 *      const specifiers = path.node.specifiers || []
 *      const source = path.node.source
 *      if (source.value !== 'xbrick') {
 *        return
 *      }
 *      if (!t.isImportDefaultSpecifier(specifiers[0])) {
 *        const declarations = specifiers.map(spec => {
 *          return t.importDeclaration(
 *            [spec],
 *            t.stringLiteral(`${source.value}/lib/${dirMap[spec.local.name]}`)
 *          )
 *        })
 *        path.replaceWithMultiple(declarations)
 *      }
 *    }
 *  },
 * })
 * const output = generate(result.ast, {}, code)
 * console.log(output)
 */

export default function ({ types: t }) {
  return {
    visitor: {
      ImportDeclaration(path) {
        const specifiers = path.node.specifiers || []
        const source = path.node.source
        if (source.value !== 'xbrick') {
          return
        }
        const declarations = specifiers.map(spec => {
            return t.importDeclaration(
              [spec],
              t.stringLiteral(`${source.value}/lib/${dirMap[spec.local.name]}`)
            )
          })
        path.replaceWithMultiple(declarations)
      }
    }
  }
}
