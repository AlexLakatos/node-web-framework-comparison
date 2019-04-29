// Uncomment these imports to begin using these cool features!

import { get, post, requestBody } from '@loopback/rest';

export class MainController {
  constructor() { }

  @get('/')
  hello(): Object {
    return {
      talk: "Hello from loopback"
    };
  }

  @post('/')
  log(@requestBody() body: Object) {
    console.log(body);
    return ""
  }
}
