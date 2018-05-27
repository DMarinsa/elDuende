import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { Kinvey } from 'kinvey-nativescript-sdk';
import * as dialogs from 'ui/dialogs'

Kinvey.init({
  appKey: 'kid_rJLHYj4y7',
  appSecret: 'bf91817c9ce44b15a2b9495680819cb3'
});


Kinvey.ping()
  .then((response) => {
      dialogs.alert(`Kinvey Ping Success. Kinvey Service is alive, version: ${response.version}, response: ${response.kinvey}`);
  })
  .catch((error) => {
      dialogs.alert(`Kinvey Ping Failed. Response: ${error.description}`);
  });

platformNativeScriptDynamic().bootstrapModule(AppModule);