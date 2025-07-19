document.addEventListener('DOMContentLoaded', function() {
    const publishForm = document.getElementById('publish-form');
    const feedContainer = document.getElementById('feed-container');

    publishForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(publishForm);
        const outfitData = {
            image: formData.get('image'),
            description: formData.get('description')
        };

        fetch('/publish', {
            method: 'POST',
            body: JSON.stringify(outfitData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                addOutfitToFeed(data.outfit);
                publishForm.reset();
            } else {
                alert('Error publishing outfit');
            }
        })
        .catch(error => console.error('Error:', error));
    });

    function addOutfitToFeed(outfit) {
        const outfitElement = document.createElement('div');
        outfitElement.classList.add('outfit');
        outfitElement.innerHTML = `
            <img src="${outfit.image}" alt="Outfit Image">
            <p>${outfit.description}</p>
        `;
        feedContainer.prepend(outfitElement);
    }

    function loadFeed() {
        fetch('/feed')
            .then(response => response.json())
            .then(data => {
                data.outfits.forEach(outfit => {
                    addOutfitToFeed(outfit);
                });
            })
            .catch(error => console.error('Error loading feed:', error));
    }

    loadFeed();
});