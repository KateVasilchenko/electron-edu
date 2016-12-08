// const fs = require('fs');
//
// function renderDir() {
//
// }
//
// function renderFiles() {
//
// }
//
// function render (o) {
//   const data = o.root;
//   // if ()
// }
//
// module.exports = function(o) {
//   console.log(o.root);
//   render(o);
// };
// const electron = require('electron')
// const fs = require('fs')
// const events = require('events')
// const vdom = require('virtual-dom')
// const hyperx = require('hyperx')
// const main = require('main-loop')
//
// const hx = hyperx(vdom.h)
//
// module.exports = function (opts) {
//   const self = new events.EventEmitter()
//   const root = opts.root
//   const filter = opts.filter
//
//   const renderRoot = opts.renderRoot || ((hx, children) => {
//     return hx`<ul class="tree-view files-list">${children}</ul>`
//   })
//
//   const renderItem = opts.renderItem || ((hx, data, children, loadHook, clickElem, createChild) => {
//     return hx`<li class="elem files-list__item--has-child" loaded=${loadHook}>
//       <label class="header" onclick=${clickElem}>
//          ${children.length === 0 ? '' : hx`<i class="icon fa fa-folder"></i>`}
//          <span class="label-text">${opts.label ? opts.label(data) : data.name}</span>
//       </label>
//       <input type="checkbox" class="hidden files-list__checkbox" />
//       <ul class="files__list files-list--inner">${children.map(createChild)}</ul>
//     </li>`
//   })
//
//   const renderChild = opts.renderChild || ((hx, children) => {
//     return hx`<li class="files-list__item--has-child">
//       <ul class="files__list files-list--inner">
//         <li class="files-list__item">
//           ${children.length === 0 ? '' : hx`<i class="icon fa fa-file"></i>`}
//           <span class="label-text">File 1</span>
//         </li>
//         <li class="files-list__item">
//           <i class="icon fa fa-file"></i>
//           <span class="label-text">File 2</span>
//         </li>
//       </ul>
//       ${children}
//      </li>`
//   })
//
//   var selected = null
//   var selectedDom = null
//
//   // injecting css
//   // const browser = opts.browser || electron.remote.getCurrentWindow()
//   // const data = fs.readFileSync(`../../assets/css/style.css`, 'utf8')
//   // browser.webContents.insertCSS(data)
//
//   const traverse = data => {
//     let children = opts.children ? opts.children(data) : (data.children || [])
//     if (filter) {
//       children = children.filter(filter)
//     }
//     var elem = null
//
//     var LoadHook = function () {}
//     LoadHook.prototype.hook = function (node) { elem = node }
//
//     const clickElem = event => {
//       if (selected === data) {
//         elem.classList.remove('selected')
//
//         self.emit('deselected', data)
//
//         selected = null
//         selectedDom = null
//       } else {
//         elem.classList.add('selected')
//
//         self.emit('selected', data)
//         if (selected) self.emit('deselected', selected)
//
//         selected = data
//         selectedDom = elem
//       }
//
//       const elems = opts.container.querySelectorAll('.tree-view .elem')
//       for (let i = 0; i < elems.length; ++i) {
//         elems[i].classList.remove('active')
//       }
//
//       elem.classList.add('active')
//     }
//
//     return createItem()
//
//     function createItem () {
//       const loadHook = new LoadHook()
//       return renderItem(hx, data, children, loadHook, clickElem, createChild)
//     }
//
//     function createChild (c) {
//       return renderChild(hx, traverse(c))
//     }
//   }
//
//   const render = self.render = state => {
//     return renderRoot(hx, traverse(state.root))
//   }
//
//   const loop = self.loop = main({ root }, render, vdom)
//   opts.container.appendChild(loop.target)
//
//   const selectTraverse = (current, node, dom) => {
//     if (current === node) {
//       dom.classList.add('selected')
//       dom.classList.add('active')
//
//       self.emit('selected', node)
//       if (selected) {
//         self.emit('deselected', selected)
//         selectedDom.classList.remove('active')
//         selectedDom.classList.remove('selected')
//       }
//       selected = node
//       selectedDom = dom
//
//       return true
//     }
//
//     let children = opts.children ? opts.children(current)
//       : (current.children || [])
//     if (filter) {
//       children = children.filter(filter)
//     }
//
//     if (children) {
//       var shouldSelect = false
//       children.forEach((c, ix) => {
//         const didFound = selectTraverse(c, node
//           , dom.querySelectorAll(':scope > ul > li > .elem')[ix])
//         if (didFound) shouldSelect = true
//       })
//
//       if (shouldSelect) {
//         dom.classList.add('selected')
//       }
//       return shouldSelect
//     }
//   }
//
//   self.select = node => {
//     selectTraverse(root, node
//       , opts.container.querySelector('.tree-view > .elem'))
//   }
//
//   return self
// }
