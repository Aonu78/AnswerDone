// When the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var closeBtn = document.getElementById("closemodelbtn");
    
    // Get the modal
    var modal = document.getElementById("myModal");
    try{
        btn.addEventListener("click", function() {
            modal.style.display = "block";
          });
    }
    catch{

    }
    try{
        closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        });
    }
    catch{

    }
  });

  // JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    // Fetch the user's profile image
    fetch('/api/profile-user-image/', {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'  // Add this header to indicate an AJAX request
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to fetch user profile image');
        }
    })
    .then(data => {
        const userAvatar = document.querySelector('.user-avatar');
        try{
        if (data && data.user && data.user.profile_image) {
            const img = document.createElement('img');
            img.src = data.user.profile_image;
            img.classList.add('avatar-btn-img')
            img.alt = 'User Profile Image';
            img.style.width = '50px'
            img.style.height = '50px'
            userAvatar.innerHTML = ''; 
            userAvatar.appendChild(img);
        }}
        catch{

        }
    })
    .catch(error => {
        //console.error('Error fetching user profile image:', error);
    });
});
