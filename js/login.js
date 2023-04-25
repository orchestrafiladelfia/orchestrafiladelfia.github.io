const loginModule = (function() {

    // Private variables and functions
    let department = {
        "Orchestra": "60dbe37afa564de00b2086c0340a33f5cf81628693f241940bab49a4200d6d39",
        "Media": "6f90017ddb0f24ecf657cccf5477695fa8ae47390281e963f1a7d78683c571a3",
        "Compozitie": "28804b60bfe4934a50eaea8b2e961c02e1f3eb2ee2e76a840d31dd61782a38d5"
    };

    async function generateHash(message) {
        const encoder = new TextEncoder();
        const data = encoder.encode(message);
        const hash = await crypto.subtle.digest('SHA-256', data);
        return hex(hash);
    }

    function hex(buffer) {
        const hexCodes = [];
        const view = new DataView(buffer);
        for (let i = 0; i < view.byteLength; i += 4) {
            const value = view.getUint32(i);
            const stringValue = value.toString(16);
            const padding = '00000000';
            const paddedValue = (padding + stringValue).slice(-padding.length);
            hexCodes.push(paddedValue);
        }
        return hexCodes.join('');
    }

    //public functions

    function publicCheckPassword(password, deparmentOption, targetHref) {
        const hashPass = Promise.resolve(generateHash(password));
        hashPass.then(value => {
            if(department[deparmentOption] === value) {
                if (deparmentOption === "Orchestra") {
                    $("#selectDepartmentDiv").hide();
                    $("#selectInstrumentDiv").show();
                } else {
                    window.location.href = targetHref;
                }
            } else {
                $("#wrongPassword").show();
            }
        });
    }

    // Expose public variables and functions
    return {
        checkPassword: publicCheckPassword
    };

})();