# Portfolio

Test some stuff on a small codebase.

## Showcase bad dependcy injection.

The `EnvironmentService` is used as a `provider` in 3 modules: `app.module`, `chat.module` and `shared.module`.
Every time it is used as a provider, the constructor is called.
This can cause problem, when calling `app.get(EnvironmentService)` you get a different instance that the one used in `PostMessageService`.
However, across the app, the same `EnvironmentService` instance is used.

When done properly, `BetterEnvService` is put only once in a `provider`, then it is reused thanks to the `imports`/`exports` directive. 

To verify this, run `yarn test` and watch the logs.
