const fs = require('fs');
const fs1 = require('fs').promises;

// Write File (Async)
async function datawrite() {
    try {
        await fs1.writeFile(
            'data.txt',
            'Hello world, welcome to Node.js file system module'
        );
        return "File created successfully";
    }
    catch (err) {
        return err.message;
    }
}

// Read File (Sync)
function dataread() {
    try {
        const fileData = fs.readFileSync('data.txt', 'utf-8');
        return fileData;
    }
    catch (err) {
        return err.message;
    }
}

// Delete File (Sync)
function dataDelete() {
    try {
        fs.unlinkSync('data.txt');
        return "File deleted successfully";
    }
    catch (err) {
        return err.message;
    }
}

// Read JSON File (Async)
async function readFileAsync() {
    try {
        const data = await fs1.readFile("student.json", { encoding: "utf-8" });
        return data;
    } catch (e) {
        return e.message;
    }
}

module.exports = { datawrite, dataread, dataDelete, readFileAsync };