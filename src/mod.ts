/* eslint-disable @typescript-eslint/naming-convention */

import * as fs from "fs";
import * as path from "path";

import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { IpreSptLoadMod } from "@spt/models/external/IpreSptLoadMod";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";

// WTT imports
import { WTTInstanceManager } from "./WTTInstanceManager";
import { epicItemClass } from  "./EpicsEdits"

// Boss imports
import { CustomItemService } from "./CustomItemService";

// Custom Trader Assort Items
import { CustomAssortSchemeService } from "./CustomAssortSchemeService";
import { CustomWeaponPresets } from "./CustomWeaponPresets";



class AAAViperItems
    implements IpreSptLoadMod, IPostDBLoadMod {
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

    // Anything that needs done on preSptLoad, place here.
    public preSptLoad(container: DependencyContainer): void {
        // Initialize the instance manager DO NOTHING ELSE BEFORE THIS
        this.Instance.preSptLoad(container, this.modName);
        this.Instance.debug = this.debug;
        // EVERYTHING AFTER HERE MUST USE THE INSTANCE

        this.getVersionFromJson();


        // Custom Bosses
        this.customItemService.preSptLoad(this.Instance);

        this.customAssortSchemeService.preSptLoad(this.Instance);

        this.customWeaponPresets.preSptLoad(this.Instance);

        this.epicItemClass.preSptLoad(this.Instance);
    }

    // Anything that needs done on postDBLoad, place here.
    postDBLoad(container: DependencyContainer): void {
        // Initialize the instance manager DO NOTHING ELSE BEFORE THIS
        this.Instance.postDBLoad(container);
        // EVERYTHING AFTER HERE MUST USE THE INSTANCE

        console.log(`\x1b[94m[Echoes of Tarkov] \x1b[93m Requisitions Loaded | Got a package for ya Rook`)

        // Bosses
        this.customItemService.postDBLoad();

        this.customAssortSchemeService.postDBLoad();
        this.customWeaponPresets.postDBLoad();
        this.epicItemClass.postDBLoad();
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
