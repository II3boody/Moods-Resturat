document.addEventListener('DOMContentLoaded', function () {
    const reviewForm = document.getElementById('reviewForm');
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    let testimonials = [];

    // ✅ Load saved testimonials safely
    const saved = localStorage.getItem('restaurantTestimonials');
    try {
        const parsed = JSON.parse(saved);
        testimonials = Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        testimonials = [];
    }

    renderTestimonials();

    // Form submission
    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const comment = document.getElementById('comment').value.trim();
        const rating = document.querySelector('input[name="rating"]:checked')?.value;

        if (!name || !email || !comment || !rating) {
            alert('Please fill all fields and select a rating.');
            return;
        }

        const newTestimonial = {
            id: Date.now(),
            name,
            email,
            comment,
            rating: Number(rating),
            date: new Date().toLocaleDateString()
        };

        testimonials.unshift(newTestimonial);
        localStorage.setItem('restaurantTestimonials', JSON.stringify(testimonials));
        renderTestimonials();
        reviewForm.reset();
    });

    function renderTestimonials() {
        if (!testimonialsContainer) return;

        if (testimonials.length === 0) {
            testimonialsContainer.innerHTML = '<div class="no-testimonials">No testimonials yet. Be the first to share your experience!</div>';
            return;
        }

        testimonialsContainer.innerHTML = testimonials.map(t => {
            const stars = Array.from({ length: 5 }, (_, i) => i < t.rating ? '★' : '☆').join('');
            return `
        <div class="card">
          <div class="head">
            <div class="info"> 
              <div class="name">${t.name}</div>
              <div class="date">${t.date}</div>
            </div>
            <div class="mail" style="font-size:0.9rem;color:#555;">${t.email}</div>
          </div>
          <div class="comment">
            <div class="rating">${stars}</div>
            <p>${t.comment}</p>
          </div>
        </div>`;
        }).join('');
    }
});
