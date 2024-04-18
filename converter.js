
    /**
     * Converts a value to boolean
     * - "1", true, "true", "on", "yes", 1 converts to true while every other value converts to false
     * - value is not case sensitive
     * @param value the value (of type string|boolean|number) to be converted
     * @returns  a boolean
    */
    const convertToBoolean = (value) => {
        try {

            if(value == undefined) throw new Error("No value provided");

            if (typeof value === "string") value = value.toLowerCase();
            const allowedTruthValues = ["1", "true", "on", "yes", 1, true];
            
            if (allowedTruthValues.includes(value)) return true;
            return false;
            
        } catch (error) {
            throw error;
        }
    }

module.exports = {convertToBoolean};