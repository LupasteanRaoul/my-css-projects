// Initialize the book inventory
document.addEventListener('DOMContentLoaded', function() {
    initializeRatings();
    setupEventListeners();
    updateStats();
});

// Set up all event listeners
function setupEventListeners() {
    // Filter functionality
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            filterBooks(filter);
        });
    });

    // Add book button
    document.getElementById('addBookBtn').addEventListener('click', addNewBook);

    // Edit and delete buttons (using event delegation)
    document.getElementById('bookTable').addEventListener('click', function(e) {
        if (e.target.classList.contains('edit-btn')) {
            editBook(e.target.closest('tr'));
        }
        
        if (e.target.classList.contains('delete-btn')) {
            deleteBook(e.target.closest('tr'));
        }
        
        if (e.target.classList.contains('star')) {
            rateBook(e.target);
        }
    });

    // Initialize rating hover effects
    document.querySelectorAll('.rating').forEach(rating => {
        setupRatingHover(rating);
    });
}

// Filter books based on status
function filterBooks(filter) {
    const rows = document.querySelectorAll('#bookTable tbody tr');
    
    rows.forEach(row => {
        if (filter === 'all' || row.classList.contains(filter)) {
            row.style.display = '';
            setTimeout(() => {
                row.style.opacity = '1';
                row.style.transform = 'translateY(0)';
            }, 10);
        } else {
            row.style.opacity = '0';
            row.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                row.style.display = 'none';
            }, 300);
        }
    });
}

// Initialize star ratings based on data-rating attribute
function initializeRatings() {
    document.querySelectorAll('.rating').forEach(ratingElement => {
        const rating = parseInt(ratingElement.dataset.rating);
        const stars = ratingElement.querySelectorAll('.star');
        
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('filled');
            }
        });
    });
}

// Setup hover effects for star ratings
function setupRatingHover(ratingElement) {
    const stars = ratingElement.querySelectorAll('.star');
    
    stars.forEach((star, index) => {
        star.addEventListener('mouseover', function() {
            // Highlight stars up to this one
            for (let i = 0; i <= index; i++) {
                stars[i].style.transform = 'scale(1.3)';
                stars[i].style.color = '#ffc107';
            }
            // Reset stars after this one
            for (let i = index + 1; i < stars.length; i++) {
                stars[i].style.transform = 'scale(1)';
                stars[i].style.color = '#ddd';
            }
        });
        
        star.addEventListener('mouseout', function() {
            // Reset all stars to their original state
            stars.forEach(s => {
                s.style.transform = 'scale(1)';
                const isFilled = s.classList.contains('filled');
                s.style.color = isFilled ? '#ffc107' : '#ddd';
            });
        });
    });
}

// Rate a book
function rateBook(starElement) {
    const ratingElement = starElement.closest('.rating');
    const stars = ratingElement.querySelectorAll('.star');
    const starIndex = Array.from(stars).indexOf(starElement);
    
    // Update visual rating
    stars.forEach((star, index) => {
        if (index <= starIndex) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
    
    // Update data-rating attribute
    ratingElement.dataset.rating = starIndex + 1;
    
    // Update statistics
    updateStats();
    
    // Show feedback
    showNotification(`Rated ${starIndex + 1} star(s)`, 'success');
}

// Add a new book
function addNewBook() {
    const bookData = {
        title: prompt('Enter book title:'),
        author: prompt('Enter author name:'),
        category: prompt('Enter category:'),
        status: prompt('Enter status (read/to-read/in-progress):'),
        rating: prompt('Enter rating (1-5):')
    };
    
    if (!bookData.title || !bookData.author || !bookData.category || !bookData.status) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Validate rating
    let rating = parseInt(bookData.rating);
    if (isNaN(rating) || rating < 1 || rating > 5) {
        rating = 3;
    }
    
    // Create new table row
    const newRow = document.createElement('tr');
    newRow.className = bookData.status.toLowerCase().replace(' ', '-');
    
    newRow.innerHTML = `
        <td><strong>${bookData.title}</strong></td>
        <td>${bookData.author}</td>
        <td><span class="category-tag">${bookData.category}</span></td>
        <td><span class="status">${bookData.status}</span></td>
        <td>
            <div class="rating" data-rating="${rating}">
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
            </div>
        </td>
        <td>
            <div class="actions">
                <button class="action-btn edit-btn">Edit</button>
                <button class="action-btn delete-btn">Delete</button>
            </div>
        </td>
    `;
    
    // Add to table
    document.querySelector('#bookTable tbody').appendChild(newRow);
    
    // Initialize rating for the new row
    initializeRatings();
    setupRatingHover(newRow.querySelector('.rating'));
    
    // Update statistics
    updateStats();
    
    showNotification(`"${bookData.title}" added successfully!`, 'success');
}

// Edit a book
function editBook(row) {
    const title = row.querySelector('td:nth-child(1) strong').textContent;
    const author = row.querySelector('td:nth-child(2)').textContent;
    const category = row.querySelector('.category-tag').textContent;
    const status = row.querySelector('.status').textContent;
    const rating = row.querySelector('.rating').dataset.rating;
    
    const newTitle = prompt('Edit title:', title);
    const newAuthor = prompt('Edit author:', author);
    const newCategory = prompt('Edit category:', category);
    const newStatus = prompt('Edit status (read/to-read/in-progress):', status);
    const newRating = prompt('Edit rating (1-5):', rating);
    
    if (newTitle && newAuthor && newCategory && newStatus) {
        // Update row data
        row.querySelector('td:nth-child(1) strong').textContent = newTitle;
        row.querySelector('td:nth-child(2)').textContent = newAuthor;
        row.querySelector('.category-tag').textContent = newCategory;
        row.querySelector('.status').textContent = newStatus;
        
        // Update rating
        if (newRating && !isNaN(newRating) && newRating >= 1 && newRating <= 5) {
            row.querySelector('.rating').dataset.rating = newRating;
            
            const stars = row.querySelectorAll('.star');
            stars.forEach((star, index) => {
                if (index < newRating) {
                    star.classList.add('filled');
                } else {
                    star.classList.remove('filled');
                }
            });
        }
        
        // Update row class for status
        row.className = newStatus.toLowerCase().replace(' ', '-');
        
        // Update statistics
        updateStats();
        
        showNotification(`"${newTitle}" updated successfully!`, 'success');
    }
}

// Delete a book
function deleteBook(row) {
    const title = row.querySelector('td:nth-child(1) strong').textContent;
    
    if (confirm(`Are you sure you want to delete "${title}" from your inventory?`)) {
        // Add fade out animation
        row.style.opacity = '0';
        row.style.transform = 'translateX(-100px)';
        
        setTimeout(() => {
            row.remove();
            updateStats();
            showNotification(`"${title}" deleted successfully!`, 'success');
        }, 300);
    }
}

// Update statistics
function updateStats() {
    const rows = document.querySelectorAll('#bookTable tbody tr');
    let readCount = 0;
    let toReadCount = 0;
    let inProgressCount = 0;
    let totalRating = 0;
    let ratedBooks = 0;
    
    rows.forEach(row => {
        if (row.classList.contains('read')) readCount++;
        if (row.classList.contains('to-read')) toReadCount++;
        if (row.classList.contains('in-progress')) inProgressCount++;
        
        const rating = parseInt(row.querySelector('.rating').dataset.rating);
        if (!isNaN(rating)) {
            totalRating += rating;
            ratedBooks++;
        }
    });
    
    // Update stats cards
    document.querySelectorAll('.stat-card')[0].querySelector('h3').textContent = readCount;
    document.querySelectorAll('.stat-card')[1].querySelector('h3').textContent = toReadCount;
    document.querySelectorAll('.stat-card')[2].querySelector('h3').textContent = inProgressCount;
    
    // Calculate average rating
    const avgRating = ratedBooks > 0 ? (totalRating / ratedBooks).toFixed(1) : '0.0';
    document.querySelectorAll('.stat-card')[3].querySelector('h3').textContent = avgRating;
}

// Show notification
function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #ff6b6b, #ff5252)';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}