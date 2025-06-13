/* eslint-disable @typescript-eslint/naming-convention */

import * as fs from "fs";
import * as path from "path";

import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { IpreSptLoadMod } from "@spt/models/external/IpreSptLoadMod";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";

// WTT imports
import { WTTInstanceManager } from "./WTTInstanceManager";
import { epicItemClass } from "./EpicsEdits";

// Boss imports
import { CustomItemService } from "./CustomItemService";

// Custom Trader Assort Items
import { CustomAssortSchemeService } from "./CustomAssortSchemeService";
import { CustomWeaponPresets } from "./CustomWeaponPresets";

import { ImageRouter } from "@spt/routers/ImageRouter";

class AAAViperItems implements IpreSptLoadMod, IPostDBLoadMod {
    private Instance: WTTInstanceManager = new WTTInstanceManager();
    private version: string;
    private modName = "AAAViperItems";
    private config;

    //#region CustomBosses
    private customItemService: CustomItemService = new CustomItemService();
    private epicItemClass: epicItemClass = new epicItemClass();
    //#endregion

    private customAssortSchemeService: CustomAssortSchemeService = new CustomAssortSchemeService();
    private customWeaponPresets: CustomWeaponPresets = new CustomWeaponPresets();

    debug = false;

    public preSptLoad(container: DependencyContainer): void {
        this.Instance.preSptLoad(container, this.modName);
        this.Instance.debug = this.debug;

        this.getVersionFromJson();

        this.customItemService.preSptLoad(this.Instance);
        this.customAssortSchemeService.preSptLoad(this.Instance);
        this.customWeaponPresets.preSptLoad(this.Instance);
        this.epicItemClass.preSptLoad(this.Instance);
    }

    public postDBLoad(container: DependencyContainer): void {
        this.Instance.postDBLoad(container);

        this.customItemService.postDBLoad();
        this.customAssortSchemeService.postDBLoad();
        this.customWeaponPresets.postDBLoad();
        this.epicItemClass.postDBLoad();

        // Inject bg.png override
        const imageRouter = container.resolve<ImageRouter>("ImageRouter");
        const imagePath = path.resolve(__dirname, "../assets/images/launcher/bg.png");

        if (fs.existsSync(imagePath)) {
            this.Instance.logger.log("Overriding launcher background with custom bg.png", LogTextColor.MAGENTA);
            imageRouter.addRoute("/files/launcher/bg", imagePath);
        } else {
            this.Instance.logger.warning("Custom bg.png not found at expected path: " + imagePath);
        }
    }

    private getVersionFromJson(): void {
        const packageJsonPath = path.join(__dirname, "../package.json");

        fs.readFile(packageJsonPath, "utf-8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                return;
            }

            const jsonData = JSON.parse(data);
            this.version = jsonData.version;
        });
    }
}

module.exports = { mod: new AAAViperItems() };
