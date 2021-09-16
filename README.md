# FE-37-practice-module-9

`npm i pnotify @pnotify/core @pnotify/mobile`

```
import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});
```

error({ text: 'Too many matches found. Please enter a more specific query!', })
