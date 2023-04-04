const myModule = (function() {

    // Private variables and functions
    let department = {
        "Orchestra": "c1f9b6f4bab91e1e191b6f9fb998b59e7bb993c2e4bf7c39c745511fb505b886",
        "Media": "6f501c825bc65017eb03b486beb156328f45d4f158a536cab80fd2e9fd6ab4ee",
        "Compozitie": "503d722782fde7ed407dde933d08085cc71b8a583bb6ef3ca9d72fd2db27359c"
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

    function publicCheckPassword(password, deparmentOption) {
        const hashPass = Promise.resolve(generateHash(password));
        hashPass.then(value => {
            if(department[deparmentOption] === value) {
                window.location.href = 'index.html'
            }
        });
    }

    
    function publicGeneratePasswords() {
        const orchestraPass = Promise.resolve(generateHash(department.orchestra));
        const mediaPass = Promise.resolve(generateHash(department.media));
        const compozitiePass = Promise.resolve(generateHash(department.compozitie));
        //Promise.all([orchestraPass, mediaPass, compozitiePass]).then(values => console.log(values));
    }

    // Expose public variables and functions
    return {
        generatePasswords: publicGeneratePasswords,
        checkPassword: publicCheckPassword
    };

})();