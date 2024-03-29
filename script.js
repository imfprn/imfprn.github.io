var childData = [
    { name: 'Porsche', id: '1129902510105', image1: 'assets/img/1.jpg', image2: 'assets/img/1_th.jpg' },
    { name: 'Andaman', id: '1129902493201', image1: 'assets/img/2.jpg', image2: 'assets/img/2_th.jpg' },
    { name: 'Marwin', id: '1102004737279', image1: 'assets/img/3.jpg', image2: 'assets/img/3_th.jpg' },
    { name: 'Mai-eak', id: '1139800233048', image1: 'assets/img/4.jpg', image2: 'assets/img/4_th.jpg' },
    { name: 'Bpandin', id: '1104800036302', image1: 'assets/img/5.jpg', image2: 'assets/img/5_th.jpg' },
    { name: 'Anna', id: '1669300032219', image1: 'assets/img/6.jpg', image2: 'assets/img/6_th.jpg' },
    { name: 'Bella', id: '1102900264577', image1: 'assets/img/7.jpg', image2: 'assets/img/7_th.jpg' },
    { name: 'Bonas', id: '1103705161447', image1: 'assets/img/8.jpg', image2: 'assets/img/8_th.jpg' },
    { name: 'Nam', id: '1129902471401', image1: 'assets/img/9.jpg', image2: 'assets/img/9_th.jpg' },
    { name: 'Aya', id: '1100202184045', image1: 'assets/img/10.jpg', image2: 'assets/img/10_th.jpg' },
    { name: 'Sangkhaya', id: '1129902486522', image1: 'assets/img/11.jpg', image2: 'assets/img/11_th.jpg' },
    { name: 'Moto', id: '1102500146739', image1: 'assets/img/12.jpg', image2: 'assets/img/12_th.jpg' },
    { name: 'Newton', id: '1129701684611', image1: 'assets/img/13.jpg', image2: 'assets/img/13_th.jpg' },
    { name: 'Nakun', id: '1102500141320', image1: 'assets/img/14.jpg', image2: 'assets/img/14_th.jpg' },
    { name: 'Maikhao', id: '1103705103871', image1: 'assets/img/15.jpg', image2: 'assets/img/15_th.jpg' },
    { name: 'Cena', id: '1102900265131', image1: 'assets/img/16.jpg', image2: 'assets/img/16_th.jpg' },
    { name: 'Anda', id: '1104100114521', image1: 'assets/img/17.jpg', image2: 'assets/img/17_th.jpg' },
    { name: 'Yaya', id: '1539901265740', image1: 'assets/img/18.jpg', image2: 'assets/img/18_th.jpg' },
    { name: 'Khunkao', id: '1129902491305', image1: 'assets/img/19.jpg', image2: 'assets/img/19_th.jpg' },
    { name: 'Nene', id: '1100704595793', image1: 'assets/img/20.jpg', image2: 'assets/img/20_th.jpg' },
    { name: 'Bright', id: '1129902507384', image1: 'assets/img/21.jpg', image2: 'assets/img/21_th.jpg' },
    { name: 'Ice', id: '1120300263969', image1: 'assets/img/22.jpg', image2: 'assets/img/22_th.jpg' },
    { name: 'Shertam', id: '1101402542914', image1: 'assets/img/23.jpg', image2: 'assets/img/23_th.jpg' },
    { name: 'Aileen', id: '1749901583537', image1: 'assets/img/24.jpg', image2: 'assets/img/24_th.jpg' },
    { name: 'Tonkhaow', id: '1129902504890', image1: 'assets/img/25.jpg', image2: 'assets/img/25_th.jpg' },
    { name: 'Numop', id: '1120300266283', image1: 'assets/img/26.jpg', image2: 'assets/img/26_th.jpg' },
    { name: 'Wawa', id: '1103705135471', image1: 'assets/img/27.jpg', image2: 'assets/img/27_th.jpg' },
    { name: 'Jayda', id: '1129701703330', image1: 'assets/img/28.jpg', image2: 'assets/img/28_th.jpg' },
    { name: 'NamPunch', id: '1729901060330', image1: 'assets/img/29.jpg', image2: 'assets/img/29_th.jpg' }
    // Add more child data as needed
];
function toggleImageSize(imageId) {
    var image = document.getElementById(imageId);
    image.classList.toggle('enlarged');
}
function showPasswordPrompt(name) {
    var child = childData.find(child => child.name === name);
    if (!child) {
        alert('Child data not found.');
        return;
    }
    
    var last3Digits = child.id.slice(-3);
    
    // Hide the images initially
    document.getElementById('reportCardImage1').style.display = 'none';
    document.getElementById('reportCardImage2').style.display = 'none';
    
    // Assign image paths to the image elements
    document.getElementById('reportCardImage1').src = child.image1;
    document.getElementById('reportCardImage2').src = child.image2;
    
    document.getElementById('passwordModal').style.display = 'block';
    document.getElementById('passwordInput').focus();
    document.getElementById('passwordInput').setAttribute('data-name', name);
    document.getElementById('passwordInput').setAttribute('data-password', last3Digits);
}

function checkPassword() {
    var name = document.getElementById('passwordInput').getAttribute('data-name');
    var enteredPassword = document.getElementById('passwordInput').value;
    var correctPassword = document.getElementById('passwordInput').getAttribute('data-password');
    
    if (enteredPassword === correctPassword) {
        // If password is correct, display the report card images
        document.getElementById('reportCardImage1').style.display = 'block';
        document.getElementById('reportCardImage2').style.display = 'block';
        document.getElementById('reportCardContainer').style.display = 'block';
        
        // Hide the table containing child names
        document.getElementById('childTable').style.display = 'none';
        
        // Hide the password prompt
        document.getElementById('passwordModal').style.display = 'none';
        
    } else {
        alert('Incorrect password. Please try again.');
    }
}
function closePasswordPrompt() {
    // Clear the password input field
    document.getElementById('passwordInput').value = '';
    // Hide the password prompt
    document.getElementById('passwordModal').style.display = 'none';
}

