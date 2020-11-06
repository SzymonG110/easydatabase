const { existsSync, writeFileSync, readFileSync } = require("fs")

module.exports = class EasyDB {
    constructor(filePath, options) {
        this.DBfile = filePath || "./db.json";
        this.options = options;
        this.data = {};

        if (!existsSync(this.DBfile)) {
            writeFileSync(this.DBfile, "{}", "utf-8");
        } else {
            this.fetchDataFromFile();
        }
    }

    fetchDataFromFile() {
        const savedData = JSON.parse(readFileSync(this.DBfile));
        if (typeof savedData === "object") {
            this.data = savedData;
        }
    }

    save() {
        writeFileSync(this.DBfile, JSON.stringify(this.data, null, 2), "utf-8");
    }

    set(key, value) {
        this.data[key] = value;
        this.save();
    }

    push(key, element) {
        if (!this.data[key]) this.data[key] = [];
        this.data[key].push(element);
        this.save();
    }

    depush(key, element) {
        if (!this.data[key]) return
        const pos = this.data[key].indexOf(element)
        this.data[key].splice(pos, 1)
        this.save();
    }

    add(key, count) {
        if (!this.data[key]) this.data[key] = 0;
        this.data[key] += count;
        this.save();
    }

    subtract(key, count) {
        if (!this.data[key]) this.data[key] = 0;
        this.data[key] -= count;
        this.save();
    }

    get(key) {
        return this.data[key];
    }

    has(key) {
        return Boolean(this.data[key]);
    }

    delete(key) {
        delete this.data[key];
        this.save();
    }

    clear() {
        this.data = {};
        this.save();
    }
}
