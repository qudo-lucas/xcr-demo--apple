# XCR Template --- Svelte
Compose an event driven UI powered by a finite state machine with support for URLs.

*Huge thanks to [XState](https://xstate.js.org/docs/) and [xstate-component-tree](https://github.com/tivac/xstate-component-tree) for making this project possible.*

[Documentation](https://github.com/qudo-lucas/xcr/tree/master/packages/xcr-core)

Custom autofix settings located in `./vscode/settings.json`. While this is a good solution for most cases, feel free to remove the following lines if they conflict with existing extensions like Prettier. 
```
"editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true,
    "source.fixAll.eslint": true,
},
```

## Development
`npm install`
`npm run dev`
`npm run build`