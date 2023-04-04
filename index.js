$(document).ready(() => {
    $('#selectInstrument').on('change', function() {
      var selectedValue = $(this).val();
      
      switch (selectedValue) {
        case 'pian':
            window.location.href = 'https://drive.google.com/drive/folders/1TuSe2R-kE9vE9x9rAOQjiLLbWeOqRmzA?usp=share_link';
            break;
        case 'chitara':
            window.location.href = 'https://drive.google.com/drive/folders/1xFVF2NrSonOos9ZPvSBYbxzGEli1E6H6?usp=share_link'; 
            break;
        case 'vioara1':
            window.location.href = 'https://drive.google.com/drive/folders/1Uvll-gF8wdfZd5p71qQWu4zOMe-DOlg9?usp=share_link'; 
            break;
        case 'vioara2':
            window.location.href = 'https://github.com/dCerQx/orchestra-filadelfia.gihub.io/Rapoarte/';
            break;
        case 'vioara3':
            window.location.href = 'https://drive.google.com/drive/folders/vioara3_folder_id';
            break;
        case 'mandolina':
            window.location.href = 'https://drive.google.com/drive/folders/1KNUQ6O_OLzyQwHbZ7sDKybYv0jgr1CXw?usp=share_link';
            break;
        case 'violoncel':
            window.location.href = 'https://drive.google.com/drive/folders/1hFIwG3G3_qnb0QN0CXx4e7ktO_h51DRn?usp=share_link';
            break;            
        default:
          console.log('Unknown option selected');
      }

    })

    $('#submitButton').click((event) => {
        const password = $('#password').val();


        var selectedValue = $('#selectDepartament').val();
        
        switch (selectedValue) {
            case 'Media':
            if(myModule.checkPassword(password, selectedValue)) {
                window.location.href = 'index.html'
            } 
            break;
            case 'Orchestra':
            window.location.href = 'index.html'
            break;
            case 'Compozitie':
            if(myModule.checkPassword(password, selectedValue)) {
                window.location.href = 'index.html'
            }
            break;          
            default:
            console.log('Unknown option selected');
        }
    });
});
  