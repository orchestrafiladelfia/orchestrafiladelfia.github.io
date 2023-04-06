$(document).ready(() => {
    $("#selectInstrumentDiv").hide();
    $("#wrongPassword").hide();

    let hrefObject = {
        "Media": "https://drive.google.com/drive/u/3/folders/1eMNKkdSkBSvXaZdVXcPy_48Z_V7KFoqf",
        "pian": "https://drive.google.com/drive/folders/1TuSe2R-kE9vE9x9rAOQjiLLbWeOqRmzA?usp=share_link",
        "Compozitie": "https://drive.google.com/drive/folders/13c76J7bKIjrlapRr8vvLgc2Ft9AtX3NZ?usp=sharing",
        "violoncel": "https://drive.google.com/drive/folders/1hFIwG3G3_qnb0QN0CXx4e7ktO_h51DRn?usp=sharing",
        "mandolina": "https://drive.google.com/drive/folders/1KNUQ6O_OLzyQwHbZ7sDKybYv0jgr1CXw?usp=share_link",
        "vioara1": "https://drive.google.com/drive/folders/1tZ5Q2Se85n15cBtJlDqpKbtfdMvse7Nd?usp=sharing",
        "vioara2": "https://drive.google.com/drive/folders/1dBFXUw7qJIxP8FEChXoqu5WEgTb9bD-J?usp=sharing",
        "vioara3": "https://drive.google.com/drive/folders/1_n_UnbRJorNuSBAatRyQ6Bs9BQJP5Zow?usp=sharing",
        "chitara": "https://drive.google.com/drive/folders/1xFVF2NrSonOos9ZPvSBYbxzGEli1E6H6?usp=share_link"
    }

    $('#selectInstrument').on('change', function() {
      var selectedValue = $(this).val();
      
      switch (selectedValue) {
        case 'pian':
            window.location.href = hrefObject[selectedValue];
            break;
        case 'chitara':
            window.location.href = hrefObject[selectedValue];; 
            break;
        case 'vioara1':
            window.location.href = hrefObject[selectedValue];; 
            break;
        case 'vioara2':
            window.location.href = hrefObject[selectedValue];;
            break;
        case 'vioara3':
            window.location.href = hrefObject[selectedValue];;
            break;
        case 'mandolina':
            window.location.href = hrefObject[selectedValue];
            break;
        case 'violoncel':
            window.location.href = hrefObject[selectedValue];
            break;            
        default:
          console.log('Unknown option selected');
      }

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
  