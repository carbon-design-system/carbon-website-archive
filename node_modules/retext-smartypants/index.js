'use strict'

var visit = require('unist-util-visit')
var nlcstToString = require('nlcst-to-string')

module.exports = smartypants

var punctuation = 'PunctuationNode'
var symbol = 'SymbolNode'
var word = 'WordNode'
var whiteSpace = 'WhiteSpaceNode'

var decadeExpression = /^\d\ds$/
var threeFullStopsExpression = /^\.{3,}$/
var fullStopsExpression = /^\.+$/
var threeDashes = '---'
var twoDashes = '--'
var emDash = '—'
var enDash = '–'
var ellipsis = '…'
var twoBackticks = '``'
var backtick = '`'
var twoSingleQuotes = "''"
var singleQuote = "'"
var apostrophe = '’'
var doubleQuote = '"'
var openingDoubleQuote = '“'
var closingDoubleQuote = '”'
var openingSingleQuote = '‘'
var closingSingleQuote = '’'
var closingQuotes = {}
var openingQuotes = {}

openingQuotes[doubleQuote] = openingDoubleQuote
closingQuotes[doubleQuote] = closingDoubleQuote
openingQuotes[singleQuote] = openingSingleQuote
closingQuotes[singleQuote] = closingSingleQuote

var educators = {}

// Expose educators.
educators.dashes = {
  true: dashes,
  oldschool: oldschool,
  inverted: inverted
}

educators.backticks = {
  true: backticks,
  all: all
}

educators.ellipses = {
  true: ellipses
}

educators.quotes = {
  true: quotes
}

// Attacher.
function smartypants(options) {
  var methods = []
  var quotes
  var ellipses
  var backticks
  var dashes

  if (!options) {
    options = {}
  }

  if ('quotes' in options) {
    quotes = options.quotes

    if (quotes !== Boolean(quotes)) {
      throw new TypeError(
        'Illegal invocation: `' +
          quotes +
          '` ' +
          'is not a valid value for `quotes` in ' +
          '`smartypants`'
      )
    }
  } else {
    quotes = true
  }

  if ('ellipses' in options) {
    ellipses = options.ellipses

    if (ellipses !== Boolean(ellipses)) {
      throw new TypeError(
        'Illegal invocation: `' +
          ellipses +
          '` ' +
          'is not a valid value for `ellipses` in ' +
          '`smartypants`'
      )
    }
  } else {
    ellipses = true
  }

  if ('backticks' in options) {
    backticks = options.backticks

    if (backticks !== Boolean(backticks) && backticks !== 'all') {
      throw new TypeError(
        'Illegal invocation: `' +
          backticks +
          '` ' +
          'is not a valid value for `backticks` in ' +
          '`smartypants`'
      )
    }

    if (backticks === 'all' && quotes === true) {
      throw new TypeError(
        'Illegal invocation: `backticks: ' +
          backticks +
          '` is not a valid value ' +
          'when `quotes: ' +
          quotes +
          '` in ' +
          '`smartypants`'
      )
    }
  } else {
    backticks = true
  }

  if ('dashes' in options) {
    dashes = options.dashes

    if (
      dashes !== Boolean(dashes) &&
      dashes !== 'oldschool' &&
      dashes !== 'inverted'
    ) {
      throw new TypeError(
        'Illegal invocation: `' +
          dashes +
          '` ' +
          'is not a valid value for `dahes` in ' +
          '`smartypants`'
      )
    }
  } else {
    dashes = true
  }

  if (quotes !== false) {
    methods.push(educators.quotes[quotes])
  }

  if (ellipses !== false) {
    methods.push(educators.ellipses[ellipses])
  }

  if (backticks !== false) {
    methods.push(educators.backticks[backticks])
  }

  if (dashes !== false) {
    methods.push(educators.dashes[dashes])
  }

  return transformFactory(methods)
}

// Create a transformer for the bound methods.
function transformFactory(methods) {
  var length = methods.length

  return transformer

  // Transformer.
  function transformer(tree) {
    visit(tree, visitor)
  }

  function visitor(node, position, parent) {
    var index = -1

    if (node.type === punctuation || node.type === symbol) {
      while (++index < length) {
        methods[index](node, position, parent)
      }
    }
  }
}

// Transform three dahes into an em-dash, and two into an en-dash.
function oldschool(node) {
  if (node.value === threeDashes) {
    node.value = emDash
  } else if (node.value === twoDashes) {
    node.value = enDash
  }
}

// Transform two dahes into an em-dash.
function dashes(node) {
  if (node.value === twoDashes) {
    node.value = emDash
  }
}

// Transform three dahes into an en-dash, and two into an em-dash.
function inverted(node) {
  if (node.value === threeDashes) {
    node.value = enDash
  } else if (node.value === twoDashes) {
    node.value = emDash
  }
}

// Transform double backticks and single quotes into smart quotes.
function backticks(node) {
  if (node.value === twoBackticks) {
    node.value = openingDoubleQuote
  } else if (node.value === twoSingleQuotes) {
    node.value = closingDoubleQuote
  }
}

// Transform single and double backticks and single quotes into smart quotes.
function all(node) {
  backticks(node)

  if (node.value === backtick) {
    node.value = openingSingleQuote
  } else if (node.value === singleQuote) {
    node.value = closingSingleQuote
  }
}

// Transform multiple dots into unicode ellipses.
function ellipses(node, index, parent) {
  var value = node.value
  var siblings = parent.children
  var position
  var nodes
  var sibling
  var type
  var count
  var queue

  // Simple node with three dots and without white-space.
  if (threeFullStopsExpression.test(node.value)) {
    node.value = ellipsis
    return
  }

  if (!fullStopsExpression.test(value)) {
    return
  }

  // Search for dot-nodes with white-space between.
  nodes = []
  position = index
  count = 1

  // It’s possible that the node is merged with an adjacent word-node.  In that
  // code, we cannot transform it because there’s no reference to the
  // grandparent.
  while (--position > 0) {
    sibling = siblings[position]

    if (sibling.type !== whiteSpace) {
      break
    }

    queue = sibling
    sibling = siblings[--position]
    type = sibling && sibling.type

    if (
      sibling &&
      (type === punctuation || type === symbol) &&
      fullStopsExpression.test(sibling.value)
    ) {
      nodes.push(queue, sibling)

      count++

      continue
    }

    break
  }

  if (count < 3) {
    return
  }

  siblings.splice(index - nodes.length, nodes.length)

  node.value = ellipsis
}

// Transform straight single- and double quotes into smart quotes.
// eslint-disable-next-line complexity
function quotes(node, index, parent) {
  var siblings = parent.children
  var value = node.value
  var next
  var nextNext
  var prev
  var nextValue

  if (value !== doubleQuote && value !== singleQuote) {
    return
  }

  prev = siblings[index - 1]
  next = siblings[index + 1]
  nextNext = siblings[index + 2]
  nextValue = next && nlcstToString(next)

  if (
    next &&
    nextNext &&
    (next.type === punctuation || next.type === symbol) &&
    nextNext.type !== word
  ) {
    // Special case if the very first character is a quote followed by
    // punctuation at a non-word-break. Close the quotes by brute force.
    node.value = closingQuotes[value]
  } else if (
    nextNext &&
    (nextValue === doubleQuote || nextValue === singleQuote) &&
    nextNext.type === word
  ) {
    // Special case for double sets of quotes:
    // `He said, "'Quoted' words in a larger quote."`
    node.value = openingQuotes[value]
    next.value = openingQuotes[nextValue]
  } else if (next && decadeExpression.test(nextValue)) {
    // Special case for decade abbreviations: `the '80s`
    node.value = closingQuotes[value]
  } else if (
    prev &&
    next &&
    (prev.type === whiteSpace ||
      prev.type === punctuation ||
      prev.type === symbol) &&
    next.type === word
  ) {
    // Get most opening single quotes.
    node.value = openingQuotes[value]
  } else if (
    prev &&
    (prev.type !== whiteSpace &&
      prev.type !== symbol &&
      prev.type !== punctuation)
  ) {
    // Closing quotes.
    node.value = closingQuotes[value]
  } else if (
    !next ||
    next.type === whiteSpace ||
    ((value === singleQuote || value === apostrophe) && nextValue === 's')
  ) {
    node.value = closingQuotes[value]
  } else {
    node.value = openingQuotes[value]
  }
}
