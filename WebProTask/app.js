
var dateTimeElement = null;

var currentIndex = 0;
var companyInfos = document.getElementsByClassName("company-info");
// "<" ">" 를 누르면 다음 div 태그가 보이게하는 function
function showCurrentCompany() {
    //Chapter6 자바스크립트(반복문) 사용
    for (var i = 0; i < companyInfos.length; i++) {
        companyInfos[i].classList.remove("active");
    }
    companyInfos[currentIndex].classList.add("active");
}

function showPrevCompany() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = companyInfos.length - 1;
    }
    showCurrentCompany();
}

function showNextCompany() {
    currentIndex++;
    if (currentIndex >= companyInfos.length) {
        currentIndex = 0;
    }
    showCurrentCompany();
}



// Chapter6, Chapter8 자바스크립트 함수와 getElementById 사용
function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}




//Chapter10 타이머 활용
function toggleCurrentDateTime() {
    if (dateTimeElement) {
        // 이미 날짜와 시각이 표시되고 있는 경우
        document.body.removeChild(dateTimeElement);
        dateTimeElement = null;
    } else {

        // 날짜와 시각을 표시하는 요소 생성
        // Chatper7 Date 객체 사용
        dateTimeElement = document.createElement('div');
        dateTimeElement.id = 'currentDateTime';
        document.body.appendChild(dateTimeElement);

        // 실시간으로 시간 업데이트
        setInterval(updateDateTime, 1000); // 1초마다 업데이트
        updateDateTime(); // 초기 업데이트
    }
}

// Chapter10 타이머 활용
function updateDateTime() {
    //Chapter7 Date 객체 사용
    var currentDate = new Date();
    var dateString = currentDate.toLocaleDateString();
    var timeString = currentDate.toLocaleTimeString();
    dateTimeElement.innerHTML =
        '현재 날짜는 ' + dateString + ' 현재 시각은 ' + timeString + '입니다.';
}


var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
// Chapter11 Canvas를 이용한 이미지 꽉차게 넣기
var imgA = new Image();
imgA.onload = function () {
    context.drawImage(imgA, 0, 0, canvas.width, canvas.height);
}
imgA.src = "images/내얼굴.jpg";


//Chapter10 onomuseover 사용
var scale = 1;
var targetScale = 1;
var scaleSpeed = 0.02;

canvas.addEventListener("mousemove", function (event) {
    targetScale = 1.2; // 마우스를 올릴 때 이미지 크기가 얼마나 커질지 조절합니다.
});

canvas.addEventListener("mouseleave", function (event) {
    targetScale = 1; // 마우스를 떼면 이미지 크기가 원래대로 돌아옵니다.
});

function animate() {
    if (scale < targetScale) {
        scale += scaleSpeed;
        if (scale > targetScale) {
            scale = targetScale;
        }
    } else if (scale > targetScale) {
        scale -= scaleSpeed;
        if (scale < targetScale) {
            scale = targetScale;
        }
    }

    var scaledWidth = canvas.width * scale;
    var scaledHeight = canvas.height * scale;
    var x = (canvas.width - scaledWidth) / 2;
    var y = (canvas.height - scaledHeight) / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imgA, x, y, scaledWidth, scaledHeight);

    requestAnimationFrame(animate);
}

animate();

//쓴 글자만큼 div 태그의 크기가 결정되는 function
function adjustSize() {
    var div = document.getElementById("myDiv");
    var text = div.innerText;
    var textLength = text.length;
    var fontSize = parseFloat(getComputedStyle(div).fontSize);
    var maxWidth = textLength * fontSize; // 텍스트 길이에 따라 최대 너비 계산

    div.style.width = maxWidth + "px";
}


