/* eslint-disable @typescript-eslint/naming-convention */

import * as fs from "fs";
import * as path from "path";

import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { ConfigTypes } from "@spt/models/enums/ConfigTypes";
import { ITraderConfig } from "@spt/models/spt/config/ITraderConfig";
import { Traders } from "@spt/models/enums/Traders";

// WTT / Viper Item Imports
import { WTTInstanceManager } from "./WTTInstanceManager";
import { epicItemClass } from "./EpicsEdits";
import { CustomItemService } from "./CustomItemService";
import { CustomAssortSchemeService } from "./CustomAssortSchemeService";
import { CustomWeaponPresets } from "./CustomWeaponPresets";

// Trader Imports
import { References } from "./Refs/References";
import { TraderData } from "./Trader/TraderTemplate";
import { TraderUtils } from "./Refs/Utils";
import * as baseJson from "../db/base.json";
import * as questAssort from "../db/questassort.json";

class EchoesOfTarkovMod implements IPreSptLoadMod, IPostDBLoadMod {
	private modName = "Echoes of Tarkov - Requisitions & hoser";
	private version: string;
	private debug = false;

	// WTT-related Services
	private Instance: WTTInstanceManager = new WTTInstanceManager();
	private customItemService: CustomItemService = new CustomItemService();
	private customAssortSchemeService: CustomAssortSchemeService = new CustomAssortSchemeService();
	private customWeaponPresets: CustomWeaponPresets = new CustomWeaponPresets();
	private epicItemClass: epicItemClass = new epicItemClass();

	// Trader-related Services
	private ref: References = new References();

	public preSptLoad(container: DependencyContainer): void {
		// WTT Initializations
		this.Instance.preSptLoad(container, this.modName);
		this.Instance.debug = this.debug;
		this.getVersionFromJson();

		this.customItemService.preSptLoad(this.Instance);
		this.customAssortSchemeService.preSptLoad(this.Instance);
		this.customWeaponPresets.preSptLoad(this.Instance);
		this.epicItemClass.preSptLoad(this.Instance);

		// Trader Initializations
		this.ref.preSptLoad(container);
		const ragfair = this.ref.configServer.getConfig(ConfigTypes.RAGFAIR);
		const traderConfig: ITraderConfig = this.ref.configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER);
		const traderUtils = new TraderUtils();
		const traderData = new TraderData(traderConfig, this.ref, traderUtils);

		traderData.registerProfileImage();
		traderData.setupTraderUpdateTime();

		// Register hoser for Ragfair
		Traders[baseJson._id] = baseJson._id;
		ragfair.traders[baseJson._id] = true;
	}

	public postDBLoad(container: DependencyContainer): void {
		// WTT Initializations
		this.Instance.postDBLoad(container);

		console.log(`\x1b[94m[Echoes of Tarkov] \x1b[93m Requisitions Loaded | Got something I'm supposed to deliver - your hands only.`);

		this.customItemService.postDBLoad();
		this.customAssortSchemeService.postDBLoad();
		this.customWeaponPresets.postDBLoad();
		this.epicItemClass.postDBLoad();

		// Trader Setup
		this.ref.postDBLoad(container);
		const traderConfig: ITraderConfig = this.ref.configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER);
		const traderUtils = new TraderUtils();
		const traderData = new TraderData(traderConfig, this.ref, traderUtils);

		traderData.pushTrader();
		this.ref.tables.traders[baseJson._id].questassort = questAssort;

		traderData.addTraderToLocales(
			this.ref.tables,
			baseJson.name,
			"Hoser",
			baseJson.nickname,
			baseJson.location,
			"Hoser is a profit-driven ex-Canadian combat engineer turned black market mod dealer, selling high-end gun parts to anyone with the cash—no loyalties, no questions."
		);

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

module.exports = { mod: new EchoesOfTarkovMod() };
