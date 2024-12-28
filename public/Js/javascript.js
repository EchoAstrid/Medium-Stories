
    document.addEventListener('DOMContentLoaded', () => {
        const searchInput = document.getElementById('search');
        const articles = document.querySelectorAll('.author');

        searchInput.addEventListener('input', (event) => {
            const query = event.target.value.toLowerCase();

            articles.forEach(article => {
                const title = article.querySelector('h2').textContent.toLowerCase();
                const description = article.querySelector('p').textContent.toLowerCase();
                if (title.includes(query) || description.includes(query)) {
                    article.style.display = '';
                } else {
                    article.style.display = 'none'; 
                }
            });
        });
    });

/*Readmore*/

function toggleReadMore(event) {
    event.preventDefault(); 
    const parent = event.target.closest('.author'); 
    const summary = parent.querySelector('.summary'); 
    const fullContent = parent.querySelector('.full-content');

    if (fullContent.style.display === 'none') {
        fullContent.style.display = 'block'; 
        summary.style.display = 'none'; 
        event.target.textContent = 'Read Less'; 
    } else {
        fullContent.style.display = 'none'; 
        summary.style.display = 'block';
        event.target.textContent = 'Read More'; 
    }
}
/*upload story*/

document.addEventListener("DOMContentLoaded", () => {
    const coverContainer = document.getElementById("coverContainer");
    const coverInput = document.getElementById("coverInput");
    const coverPreview = document.getElementById("coverPreview");
    const coverText = document.getElementById("coverText");
    const form = document.getElementById("storyForm");
    const cancelButton = document.getElementById("cancelButton");
  
    // Handle clicking the cover container
    coverContainer.addEventListener("click", () => {
      coverInput.click();
    });
  
    // Handle file selection for the cover
    coverInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          coverPreview.src = e.target.result;
          coverPreview.style.display = "block";
          coverText.style.display = "none";
        };
        reader.readAsDataURL(file);
      }
    });
  
    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const mainCharacters = document.getElementById("author").value;
      const coverFile = coverInput.files[0];
  
      // Basic validation
      if (!title || !description) {
        alert("Title and Description are required!");
        return;
      }
  
      // Prepare form data
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("author", author);
      if (coverFile) {
        formData.append("cover", coverFile);
      }
  
      // Submit data to server (replace with your server endpoint)
      fetch("/upload-story", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Story uploaded successfully!");
            form.reset();
            coverPreview.style.display = "none";
            coverText.style.display = "block";
          } else {
            alert("Failed to upload story.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred while uploading the story.");
        });
    });
  
    // Handle cancel button
    cancelButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to cancel?")) {
        form.reset();
        coverPreview.style.display = "none";
        coverText.style.display = "block";
      }
    });
  });
  function changeHref(storiesName) {
    const links = document.querySelectorAll('.story-link');
    links.forEach(link => {
        if (link.innerText.trim() === storiesName) {
            link.href = `/story-details/${storiesName}`;
        }
    });
}

//detail view
function Storyview() {
  const storyview = document.getElementById('stories');
  stories.forEach(story => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<a href="#" onclick="showStoryDetail(${story.id})">${story.title}</a>`;
      storyList.appendChild(listItem);
  });
}

let slideIndex = 0;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n >= slides.length) {slideIndex = 0}    
    if (n < 0) {slideIndex = slides.length - 1}    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}

showSlides(slideIndex); // Start the slideshow on page load

