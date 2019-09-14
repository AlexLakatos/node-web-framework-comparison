"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boot_1 = require("@loopback/boot");
const rest_explorer_1 = require("@loopback/rest-explorer");
const rest_1 = require("@loopback/rest");
const path = require("path");
const sequence_1 = require("./sequence");
class LoopbackApplication extends boot_1.BootMixin(rest_1.RestApplication) {
    constructor(options = {}) {
        super(options);
        this.sequence(sequence_1.MySequence);
        this.static('/static', path.join(__dirname, '../public'));
        this.bind(rest_explorer_1.RestExplorerBindings.CONFIG).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        this.bootOptions = {
            controllers: {
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
}
exports.LoopbackApplication = LoopbackApplication;
//# sourceMappingURL=application.js.map