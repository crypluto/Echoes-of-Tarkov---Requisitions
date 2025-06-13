"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTInstanceManager = void 0;
const path = __importStar(require("node:path"));
class WTTInstanceManager {
    //#region Accessible in or after preSptLoad
    modName;
    debug;
    // Useful Paths
    profilePath = path.join(process.cwd(), "\\user\\profiles");
    dbPath = path.join(__dirname, "../db");
    // Instances
    container;
    PreSptModLoader;
    configServer;
    saveServer;
    itemHelper;
    logger;
    staticRouter;
    dynamicRouter;
    profileController;
    profileCallbacks;
    //#endregion
    //#region Acceessible in or after postDBLoad
    database;
    customItem;
    imageRouter;
    jsonUtil;
    profileHelper;
    eventOutputHolder;
    ragfairPriceService;
    importerUtil;
    traderAssortService;
    applicationContext;
    //#endregion
    // Call at the start of the mods postDBLoad method
    preSptLoad(container, mod) {
        this.modName = mod;
        this.container = container;
        this.PreSptModLoader = container.resolve("PreSptModLoader");
        this.imageRouter = container.resolve("ImageRouter");
        this.configServer = container.resolve("ConfigServer");
        this.saveServer = container.resolve("SaveServer");
        this.itemHelper = container.resolve("ItemHelper");
        this.eventOutputHolder = container.resolve("EventOutputHolder");
        this.profileController = container.resolve("ProfileController");
        this.profileCallbacks = container.resolve("ProfileCallbacks");
        this.logger = container.resolve("WinstonLogger");
        this.staticRouter = container.resolve("StaticRouterModService");
        this.dynamicRouter = container.resolve("DynamicRouterModService");
        this.traderAssortService = container.resolve("TraderAssortService");
    }
    postDBLoad(container) {
        this.database = container.resolve("DatabaseServer").getTables();
        this.customItem = container.resolve("CustomItemService");
        this.jsonUtil = container.resolve("JsonUtil");
        this.profileHelper = container.resolve("ProfileHelper");
        this.ragfairPriceService = container.resolve("RagfairPriceService");
        this.importerUtil = container.resolve("ImporterUtil");
        this.applicationContext = container.resolve("ApplicationContext");
    }
    colorLog(message, color) {
        const colorCodes = {
            red: "\x1b[31m",
            green: "\x1b[32m",
            yellow: "\x1b[33m",
            blue: "\x1b[34m",
            magenta: "\x1b[35m",
            cyan: "\x1b[36m",
            white: "\x1b[37m",
            gray: "\x1b[90m",
            brightRed: "\x1b[91m",
            brightGreen: "\x1b[92m",
            brightYellow: "\x1b[93m",
            brightBlue: "\x1b[94m",
            brightMagenta: "\x1b[95m",
            brightCyan: "\x1b[96m",
            brightWhite: "\x1b[97m"
        };
        const resetCode = "\x1b[0m";
        const colorCode = colorCodes[color] || "\x1b[37m"; // Default to white if color is invalid.
        //console.log(`${colorCode}${message}${resetCode}`); // Log the colored message here
    }
}
exports.WTTInstanceManager = WTTInstanceManager;
//# sourceMappingURL=WTTInstanceManager.js.map