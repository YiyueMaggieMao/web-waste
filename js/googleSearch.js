const co2PerGoogleSearch = 6.0;
const histCO2GoogleSearch = 4.0;
const key = "carbon";

chrome.storage.sync.get([key], (result) => {
    let val = (result[key] ? result[key] : 0) + co2PerGoogleSearch;
    let obj = {};
    obj[key] = val;
    console.log(obj);
    chrome.storage.sync.set(obj, () => {
        console.log("we did it");
    });
});