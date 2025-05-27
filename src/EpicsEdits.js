"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.epicItemClass = void 0;
const WTTInstanceManager_1 = require("./WTTInstanceManager");
class epicItemClass {
    Instance = new WTTInstanceManager_1.WTTInstanceManager(); // Based upon EpicRangeTime's edits. Cheers, epic! --Maple
    preSptLoad(Instance) {
        this.Instance = Instance;
    }
    postDBLoad() {
        this.epicEdits();
    }
    epicEdits() {
        const db = this.Instance.database;
        const dbItems = db.templates.items;
        for (let file in dbItems) {
            let fileData = dbItems[file];
            if (fileData._id === "5d25a6538abbc306c62e630d") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f", "68325a63730b17c69ee176eb");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5d25a4a98abbc30b917421a4") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f", "68325a63730b17c69ee176eb");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5d25a7b88abbc3054f3e60bc") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f", "68325a63730b17c69ee176eb");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5ce69cbad7f00c00b61c5098") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f", "68325a63730b17c69ee176eb");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5d25a6a48abbc306c62e6310") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f", "68325a63730b17c69ee176eb");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5d25af8f8abbc3055079fec5") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f", "68325a63730b17c69ee176eb");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5cf12a15d7f00c05464b293f") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f", "68325a63730b17c69ee176eb");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5bfeaa0f0db834001b734927") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f", "68325a63730b17c69ee176eb");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5bfea7ad0db834001c38f1ee") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f", "68325a63730b17c69ee176eb");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5df8f535bb49d91fb446d6b0") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f", "68325a63730b17c69ee176eb");
            } //Pushing 6.5x48mm to SR-25 Mags
            if (fileData._id === "5df8f541c41b2312ea3335e3") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f", "68325a63730b17c69ee176eb");
            } //Pushing 6.5x48mm to SR-25 Mags
            if (fileData._id === "5a3501acc4a282000d72293a") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f", "68325a63730b17c69ee176eb");
            } //Pushing 6.5x48mm to SR-25 Mags
            if (fileData._id === "65293c38fc460e50a509cb25") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f", "68325a63730b17c69ee176eb");
            } //Pushing 6.5x48mm to SR-25 Mags
            if (fileData._id === "65293c7a17e14363030ad308") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f", "68325a63730b17c69ee176eb");
            } //Pushing 6.5x48mm to SR-25 Mags
            if (fileData._id === "6761770e48fa5c377e06fc3c") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f", "68325a63730b17c69ee176eb");
            } //Pushing 6.5x48mm to SR-25 Mags
        }
    }
}
exports.epicItemClass = epicItemClass;
//# sourceMappingURL=EpicsEdits.js.map