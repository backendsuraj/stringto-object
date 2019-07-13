/**
 *
 * @param outputHolder
 * @param objDefinition
 * @param objValue
 * @returns {*}
 */
function getObjectCustom(outputHolder, objDefinition, objValue) {
    if (validateString(objDefinition)) {
        makeObjectFromString(outputHolder, objDefinition, objValue);
        return outputHolder;
    } else {
        throw new TypeError("Invalid string passed.");
    }
}

/**
 *
 * @param objDefinition
 * @param objValue
 */
function getObject(objDefinition, objValue) {
    if (validateString(objDefinition)) {
        let outputHolder = {};

        makeObjectFromString(outputHolder, objDefinition, objValue);
        return outputHolder;
    } else {
        throw new TypeError("Invalid string passed.");
    }
}



/**
 *
 * @param string
 * @returns {boolean}
 */
function validateString(string) {
    if (typeof string === "string") {
        let regex = /^(\w+.)*\w+$/;

        return regex.test(string);
    } else {
        return false;
    }
}

/**
 *
 * @param outputHolder
 * @param definition
 * @param value
 */
function makeObjectFromString(outputHolder, definition, value) {
    const splitSting = definition.split('.');
    const lastKey = splitSting.pop();
    const lastObj = splitSting.reduce((obj, key) => obj[key] = obj[key] || {}, outputHolder);
    lastObj[lastKey] = value;
}


module.exports = {
    getObject: getObject,
    getObjectWithHolder: getObjectCustom
};
