# vue-error-capturing

This repository is for testing `Vue.config.errorHandler` and `Vue.config.warnHandler`.

Test URL: https://clomie.github.io/vue-error-capturing/

## Vue.config.errorHandler can capture error thrown in

- render
- data function
- watcher function
- lifecycle hooks
- directive hooks
- custom event handlers
- nextTick callback

https://github.com/search?l=&q=handleError+repo%3Avuejs%2Fvue+path%3A%2Fsrc%2Fcore&type=Code

## Vue.config.errorHandler can NOT capture error thrown in

- DOM native event handlers
- setTimeout/setInterval callback
- async functions
- Promise callback ...etc
