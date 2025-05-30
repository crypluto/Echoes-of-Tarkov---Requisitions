import { WTTInstanceManager } from "./WTTInstanceManager";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";

export class epicItemClass {

    private Instance: WTTInstanceManager = new WTTInstanceManager(); // Based upon EpicRangeTime's edits. Cheers, epic! --Maple

    public preSptLoad(Instance: WTTInstanceManager): void {
        this.Instance = Instance;
    }

    public postDBLoad(): void {

        this.epicEdits();
    }

    public epicEdits(): void {
        const db: IDatabaseTables = this.Instance.database;
        const dbItems = db.templates.items;
        for (let file in dbItems) {
            let fileData = dbItems[file];
            if (fileData._id === "5d25a6538abbc306c62e630d") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5d25a4a98abbc30b917421a4") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5d25a7b88abbc3054f3e60bc") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5ce69cbad7f00c00b61c5098") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5d25a6a48abbc306c62e6310") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5d25af8f8abbc3055079fec5") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5cf12a15d7f00c05464b293f") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5bfeaa0f0db834001b734927") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5bfea7ad0db834001c38f1ee") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5df8f535bb49d91fb446d6b0") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to SR-25 Mags
            if (fileData._id === "5df8f541c41b2312ea3335e3") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to SR-25 Mags
            if (fileData._id === "5a3501acc4a282000d72293a") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to SR-25 Mags
            if (fileData._id === "65293c38fc460e50a509cb25") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to SR-25 Mags
            if (fileData._id === "65293c7a17e14363030ad308") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to SR-25 Mags
            if (fileData._id === "6761770e48fa5c377e06fc3c") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to SR-25 Mags
            if (fileData._id === "683997f125039545c12878e9") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to L7AWM Retextured Mags
            if (fileData._id === "683998905b1e1abba12906fa") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to L7AWM Retextured Mags
            if (fileData._id === "683998a2a3d4391d033bfd14") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to L7AWM Retextured Mags
            if (fileData._id === "683998dc60787632112a564b") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2");
            } //Pushing 6.5x48mm to L7AWM Retextured Mags
            if (fileData._id === "5fbbfacda56d053a3543f799") {
                fileData._props.Slots[0]._props.filters[0].Filter.push("68343b29f48104d3a6265db3",
                    "68343c10334d72dc0066a8f3");
            } //Pushing Smoke Stack Suppressor to .300BLK
            if (fileData._id === "5fbbfabed5cb881a7363194e") {
                fileData._props.Slots[0]._props.filters[0].Filter.push("68343b29f48104d3a6265db3",
                    "68343c10334d72dc0066a8f3");
            } //Pushing Smoke Stack Suppressor to .300BLK
            if (fileData._id === "5fbbfacda56d053a3543f799") {
                fileData._props.Slots[0]._props.filters[0].Filter.push("68395bb9f92a92ea0555e4a1",
                    "68395c7abb2e79c208842d7e",
                    "56ea6fafd2720b844b8b4593");
            } //Pushing Noveske KX3 to .300BLK (5/8"x24)
            if (fileData._id === "5fbbfabed5cb881a7363194e") {
                fileData._props.Slots[0]._props.filters[0].Filter.push("68395bb9f92a92ea0555e4a1",
                    "68395c7abb2e79c208842d7e",
                    "56ea6fafd2720b844b8b4593");
            } //Pushing Noveske KX3 to .300BLK (5/8"x24)
            if (fileData._id === "652910565ae2ae97b80fdf35") {
                fileData._props.Slots[0]._props.filters[0].Filter.push("68395bb9f92a92ea0555e4a1",
                    "68395c7abb2e79c208842d7e",
                    "56ea6fafd2720b844b8b4593");
            } //Pushing Noveske KX3 to 6.8 (5/8"x24)
            if (fileData._id === "5dcbe9431e1f4616d354987e") {
                fileData._props.Slots[0]._props.filters[0].Filter.push("68395bb9f92a92ea0555e4a1",
                    "68395c7abb2e79c208842d7e",
                    "56ea6fafd2720b844b8b4593");
            } //Pushing Noveske KX3 to 308 MDR (5/8"x24)
            if (fileData._id === "6183b084a112697a4b3a6e6c") {
                fileData._props.Slots[0]._props.filters[0].Filter.push("68395bb9f92a92ea0555e4a1",
                    "68395c7abb2e79c208842d7e",
                    "56ea6fafd2720b844b8b4593");
            } //Pushing Noveske KX3 to SCAR-H (5/8"x24)
            if (fileData._id === "618168b350224f204c1da4d8") {
                fileData._props.Slots[0]._props.filters[0].Filter.push("68395bb9f92a92ea0555e4a1",
                    "68395c7abb2e79c208842d7e",
                    "56ea6fafd2720b844b8b4593");
            } //Pushing Noveske KX3 to SCAR-H (5/8"x24)
            if (fileData._id === "6183b0711cb55961fa0fdcad") {
                fileData._props.Slots[0]._props.filters[0].Filter.push("68395bb9f92a92ea0555e4a1",
                    "68395c7abb2e79c208842d7e",
                    "56ea6fafd2720b844b8b4593");
            } //Pushing Noveske KX3 to SCAR-H (5/8"x24)
            if (fileData._id === "5bfebc320db8340019668d79") {
                fileData._props.Slots[0]._props.filters[0].Filter.push("68395bb9f92a92ea0555e4a1",
                    "68395c7abb2e79c208842d7e",
                    "56ea6fafd2720b844b8b4593");
            } //Pushing Noveske KX3 to M700 (5/8"x24)
            if (fileData._id === "5d2703038abbc3105103d94c") {
                fileData._props.Slots[0]._props.filters[0].Filter.push("68395bb9f92a92ea0555e4a1",
                    "68395c7abb2e79c208842d7e",
                    "56ea6fafd2720b844b8b4593");
            } //Pushing Noveske KX3 to M700 (5/8"x24)
        }
    }
}
