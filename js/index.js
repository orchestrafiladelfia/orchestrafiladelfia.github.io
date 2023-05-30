$(document).ready(() => {
    $("#selectInstrumentDiv").hide();
    $("#wrongPassword").hide();

    let input = document.getElementById("password");
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          // Cancel the default action, if needed
          event.preventDefault();
          $("#submitButton").click();
        }
    });

    let hrefObject = {
        "Media": atob(obfuscator.decryptString("anVtcEFzSGlnaEFzWW91Q2FufMW0hMR6Qd9phrq2EX5sg29sgLZzD29yQ2WdfCEqQ2EagLWqhsRaRBASYpyanVtcEFzSGlnaEFzWW91Q2FuwEKSwVqS2BLKfEKEDD1G5CeV4Bq9BS0yLg3KrU3AehI1efLKdEA9xfB5wanVtcEFzSGlnaEFzWW91Q2Fu", "anVtcEFzSGlnaEFzWW91Q2Fu")),
        "Compozitie": atob(obfuscator.decryptString("anVtcEFzSGlnaEFzWW91Q2FufMW0hMR6Qd9phrq2EX5sg29sgLZzD29yQ2WdfCEqQ2EagLWqhsRaRYSoSeEanVtcEFzSGlnaEFzWW91Q2FuPS2OQXBudgLKbZsN4isERE2RdWsV5VCWDR05fU3AehI1efLKdEA9xfB5wanVtcEFzSGlnaEFzWW91Q2Fu", "anVtcEFzSGlnaEFzWW91Q2Fu")),
        "pian": atob(obfuscator.decryptString("anVtcEFzSGlnaEFzWW91Q2FufMW0hMR6Qd9phrq2EX5sg29sgLZzD29yQ2WdfCEqQ2EagLWqhsRaRAOHYYGanVtcEFzSGlnaEFzWW91Q2FuGjIAYf2RbjJqcg0D1jByqEJ0egCSHjMWWEAOAU3AehI1efLKdEA9xfB5wanVtcEFzSGlnaEFzWW91Q2Fu", "anVtcEFzSGlnaEFzWW91Q2Fu")),
        "chitara": atob(obfuscator.decryptString("anVtcEFzSGlnaEFzWW91Q2FufMW0hMR6Qd9phrq2EX5sg29sgLZzD29yQ2WdfCEqQ2EagLWqhsRaRCmLApDanVtcEFzSGlnaEFzWW91Q2FudYsOYg25Ug3R5BqG2Z0OEDsm6W0AxfYKKSpl2U3AehI1efLKdEA9xfB5wanVtcEFzSGlnaEFzWW91Q2Fu", "anVtcEFzSGlnaEFzWW91Q2Fu")),
        "bass": atob(obfuscator.decryptString("anVtcEFzSGlnaEFzWW91Q2FufMW0hMR6Qd9phrq2EX5sg29sgLZzD29yQ2WdfCEqQ2EagLWqhsRaRCqYSIAanVtcEFzSGlnaEFzWW91Q2FuSh2EKYqW2DA9SWoEEYeGcEZ5TYLunZ2cuSp5QU3AehI1efLKdEA9xfB5wanVtcEFzSGlnaEFzWW91Q2Fu", "anVtcEFzSGlnaEFzWW91Q2Fu")),
        "acorduri": atob(obfuscator.decryptString("anVtcEFzSGlnaEFzWW91Q2FufMW0hMR6Qd9phrq2EX5sg29sgLZzD29yQ2WdfCEqQ2EagLWqhsRaRAW1Z2ZanVtcEFzSGlnaEFzWW91Q2FudZn1wWYq2WYq4TCOGY1KvfZcRDqiqY3KXgCuGU3AehI1efLKdEA9xfB5wanVtcEFzSGlnaEFzWW91Q2Fu", "anVtcEFzSGlnaEFzWW91Q2Fu")),
        "vioara1": atob(obfuscator.decryptString("anVtcEFzSGlnaEFzWW91Q2FufMW0hMR6Qd9phrq2EX5sg29sgLZzD29yQ2WdfCEqQ2EagLWqhsRaRCWfSAJanVtcEFzSGlnaEFzWW91Q2FudZ2Z4SB4cSBSHiJuxWMKbX2O0ErWSisSqS05pU3AehI1efLKdEA9xfB5wanVtcEFzSGlnaEFzWW91Q2Fu", "anVtcEFzSGlnaEFzWW91Q2Fu")),
        "vioara2": atob(obfuscator.decryptString("anVtcEFzSGlnaEFzWW91Q2FufMW0hMR6Qd9phrq2EX5sg29sgLZzD29yQ2WdfCEqQ2EagLWqhsRaRBWHWqmanVtcEFzSGlnaEFzWW91Q2FuAieicXpq4ZImLWZStBL9ciYACWBiZDoqnWH1PU3AehI1efLKdEA9xfB5wanVtcEFzSGlnaEFzWW91Q2Fu", "anVtcEFzSGlnaEFzWW91Q2Fu")),
        "vioara3": atob(obfuscator.decryptString("anVtcEFzSGlnaEFzWW91Q2FufMW0hMR6Qd9phrq2EX5sg29sgLZzD29yQ2WdfCEqQ2EagLWqhsRaRB56XrSanVtcEFzSGlnaEFzWW91Q2FubfsmkhruHAZAIC0WfYIAxW3i2ZAimipyqRepeU3AehI1efLKdEA9xfB5wanVtcEFzSGlnaEFzWW91Q2Fu", "anVtcEFzSGlnaEFzWW91Q2Fu")),
        "flaut": atob(obfuscator.decryptString("anVtcEFzSGlnaEFzWW91Q2FufMW0hMR6Qd9phrq2EX5sg29sgLZzD29yQ2WdfCEqQ2EagLWqhsRaRAtdZ3OanVtcEFzSGlnaEFzWW91Q2FumgBKLBIAXBJqySpATTZS2Wem4Y3ici1KzELJ2U3AehI1efLKdEA9xfB5wanVtcEFzSGlnaEFzWW91Q2Fu", "anVtcEFzSGlnaEFzWW91Q2Fu")),
        "mandolina1": atob(obfuscator.decryptString("anVtcEFzSGlnaEFzWW91Q2FufMW0hMR6Qd9phrq2EX5sg29sgLZzD29yQ2WdfCEqQ2EagLWqhsRaRZyTAAJanVtcEFzSGlnaEFzWW91Q2Fu2Y19UYMu5ZCiNDqt3h0WQjBOEioGvE3NcV1m3U3AehI1efLKdEA9xfB5wanVtcEFzSGlnaEFzWW91Q2Fu", "anVtcEFzSGlnaEFzWW91Q2Fu")),
        "mandolina2": atob(obfuscator.decryptString("anVtcEFzSGlnaEFzWW91Q2FufMW0hMR6Qd9phrq2EX5sg29sgLZzD29yQ2WdfCEqQ2EagLWqhsRaRBt5D09anVtcEFzSGlnaEFzWW91Q2FuBBMExiCSIEJ05VeiJAKuRVASGgKKERpSMjMAsU3AehI1efLKdEA9xfB5wanVtcEFzSGlnaEFzWW91Q2Fu", "anVtcEFzSGlnaEFzWW91Q2Fu")),
        "viola": atob(obfuscator.decryptString("anVtcEFzSGlnaEFzWW91Q2FufMW0hMR6Qd9phrq2EX5sg29sgLZzD29yQ2WdfCEqQ2EagLWqhsRaRA9zC1AanVtcEFzSGlnaEFzWW91Q2FuzDqOPg3OTiASHVBK0ZsqWSpOeTZOWXqF1Br93U3AehI1efLKdEA9xfB5wanVtcEFzSGlnaEFzWW91Q2Fu", "anVtcEFzSGlnaEFzWW91Q2Fu")),
        "saxofon": atob(obfuscator.decryptString("anVtcEFzSGlnaEFzWW91Q2FufMW0hMR6Qd9phrq2EX5sg29sgLZzD29yQ2WdfCEqQ2EagLWqhsRaRYECgBNanVtcEFzSGlnaEFzWW91Q2FudYKtefeVdjAusBB5CQZmmY29PYZReRMWwEIiYU3AehI1efLKdEA9xfB5wanVtcEFzSGlnaEFzWW91Q2Fu", "anVtcEFzSGlnaEFzWW91Q2Fu")),
        "violoncel": atob(obfuscator.decryptString("anVtcEFzSGlnaEFzWW91Q2FufMW0hMR6Qd9phrq2EX5sg29sgLZzD29yQ2WdfCEqQ2EagLWqhsRaRBmLXCianVtcEFzSGlnaEFzWW91Q2FuMR0heC3KzDoGWYoGIBMl0EYiwiJ9kfIZcWKOzU3AehI1efLKdEA9xfB5wanVtcEFzSGlnaEFzWW91Q2Fu", "anVtcEFzSGlnaEFzWW91Q2Fu")),
        "acordeon": atob(obfuscator.decryptString("anVtcEFzSGlnaEFzWW91Q2FufMW0hMR6Qd9phrq2EX5sg29sgLZzD29yQ2WdfCEqQ2EagLWqhsRaRBAYS08anVtcEFzSGlnaEFzWW91Q2Fu2VsWMD2SZjAu4W2qDR1S6AJAtiqi5DYi2DpqPU3AehI1phrq2EA9xfB5wanVtcEFzSGlnaEFzWW91Q2Fu", "anVtcEFzSGlnaEFzWW91Q2Fu")),
        "audio": atob(obfuscator.decryptString("anVtcEFzSGlnaEFzWW91Q2FufMW0hMR6Qd9phrq2EX5sg29sgLZzD29yQ2WdfCEqQ2EagLWqhsRaRByJR1ZanVtcEFzSGlnaEFzWW91Q2FucfBSSZJhygLqbDBmIfCA4gKKEBMiGZ3EXfJusU3AehI1phrq2EA9xfB5wanVtcEFzSGlnaEFzWW91Q2Fu", "anVtcEFzSGlnaEFzWW91Q2Fu"))
    }

    $('#selectInstrument').on('change', function() {
      var selectedValue = $(this).val();
      window.location.href = hrefObject[selectedValue];
    })

    $('#selectDepartment').on('change', function() {
        $("#wrongPassword").hide();
        $("#password").val("");
    });

    $('#submitButton').click(() => {
        const password = $('#password').val();
        let selectedValue = $('#selectDepartment').val();
        
        switch (selectedValue) {
            case 'Media':
                loginModule.checkPassword(password, selectedValue, hrefObject[selectedValue]);
                break;
            case 'Orchestra':
                loginModule.checkPassword(password, selectedValue, "");
                break;
            case 'Compozitie':
                loginModule.checkPassword(password, selectedValue, hrefObject[selectedValue]);
                break;          
            default:
                console.log('Unknown option selected');
                break;
        }
    });
});
  