import EventEmitter from "events";
class FirestoreOperationEmitter extends EventEmitter {
}
const firestoreOperationEmitter = new FirestoreOperationEmitter();
let readCount = 0;
let writeCount = 0;
firestoreOperationEmitter.on("read", () => {
    readCount++;
    console.log(`Total Reads: ${readCount}`);
});
firestoreOperationEmitter.on("write", () => {
    writeCount++;
    console.log(`Total Writes: ${writeCount}`);
});
export const getReadCount = () => readCount;
export const getWriteCount = () => writeCount;
export default firestoreOperationEmitter;
