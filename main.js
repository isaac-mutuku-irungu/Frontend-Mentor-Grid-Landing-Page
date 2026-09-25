const shareIcon = document.getElementById("shareIcon");
const socialsPanel = document.getElementById("socialsPanel");

shareIcon.addEventListener('click', () => {
    if(socialsPanel.classList.contains('active')){
        socialsPanel.classList.remove('active');
    }
    else {
        socialsPanel.classList.add('active');
    }
})
