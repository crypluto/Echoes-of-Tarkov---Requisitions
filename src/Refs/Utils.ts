import { PreSptModLoader } from "@spt/loaders/PreSptModLoader"
import { ITraderBase, ITraderAssort } from "@spt/models/eft/common/tables/ITrader"
import { ITraderConfig, UpdateTime } from "@spt/models/spt/config/ITraderConfig"
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables"
import { ImageRouter } from "@spt/routers/ImageRouter"
import { JsonUtil } from "@spt/utils/JsonUtil"

export class TraderUtils {
	/**
	 * Add profile picture to our trader
	 * @param baseJson json file for trader (db/base.json)
	 * @param preAkiModLoader mod loader class - used to get the mods file path
	 * @param imageRouter image router class - used to register the trader image path so we see their image on trader page
	 * @param traderImageName Filename of the trader icon to use
	 */
	public registerProfileImage(baseJson: any, modName: string, preSptModLoader: PreSptModLoader, imageRouter: ImageRouter, traderImageName: string): void {
		// Reference the mod "res" folder
		const imageFilepath = `./${preSptModLoader.getModPath(modName)}res`

		// Register a route to point to the profile picture - remember to remove the .jpg from it
		imageRouter.addRoute(baseJson.avatar.replace(".jpg", ".png"), `${imageFilepath}/${traderImageName}`)
	}

	/**
	 * Add record to trader config to set the refresh time of trader in seconds (default is 60 minutes)
	 * @param traderConfig trader config to add our trader to
	 * @param baseJson json file for trader (db/base.json)
	 * @param refreshTimeSeconds How many sections between trader stock refresh
	 */
	public setTraderUpdateTime(traderConfig: ITraderConfig, baseJson: any, minSeconds: number, maxSeconds: number): void {
		const traderRefreshRecord: UpdateTime = {
			traderId: baseJson._id,
			seconds: {
				min: minSeconds,
				max: maxSeconds,
			},
		}
		traderConfig.updateTime.push(traderRefreshRecord)
	}

	/**
	 * Add our new trader to the database
	 * @param traderDetailsToAdd trader details
	 * @param tables database
	 * @param jsonUtil json utility class
	 */
	// rome-ignore lint/suspicious/noExplicitAny: traderDetailsToAdd comes from base.json, so no type
	public addTraderToDb(traderDetailsToAdd: any, assort, tables: IDatabaseTables, jsonUtil: JsonUtil): void {
		tables.traders[traderDetailsToAdd._id] = {
			assort: jsonUtil.deserialize(jsonUtil.serialize(assort)) as ITraderAssort,
			base: jsonUtil.deserialize(jsonUtil.serialize(traderDetailsToAdd)) as ITraderBase,
			questassort: {
				started: {},
				success: {},
				fail: {},
			},
		}
	}

	/**
	 * Add traders name/location/description to the locale table
	 * @param baseJson json file for trader (db/base.json)
	 * @param tables database tables
	 * @param fullName Complete name of trader
	 * @param firstName First name of trader
	 * @param nickName Nickname of trader
	 * @param location Location of trader (e.g. "Here in the cat shop")
	 * @param description Description of trader
	 */
	public addTraderToLocales(
		baseJson: any,
		tables: IDatabaseTables,
		fullName: string,
		firstName: string,
		nickName: string,
		location: string,
		description: string
	) {
		// For each language, add locale for the new trader
		const locales = Object.values(tables.locales.global) as Record<string, string>[]
		for (const locale of locales) {
			locale[`${baseJson._id} FullName`] = fullName
			locale[`${baseJson._id} FirstName`] = firstName
			locale[`${baseJson._id} Nickname`] = nickName
			locale[`${baseJson._id} Location`] = location
			locale[`${baseJson._id} Description`] = description
		}
	}
}
