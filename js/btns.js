document.addEventListener("DOMContentLoaded", function() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectRows = document.querySelectorAll(".project-cards");
    let allCards = [];
  
    projectRows.forEach(function(row) {
      const cards = row.querySelectorAll(".project-card");
      allCards = allCards.concat(Array.from(cards));
    });
  
    filterBtns.forEach(function(btn) {
      btn.addEventListener("click", function() {
        const filter = this.dataset.filter;
  
        // Remove 'active' class from all buttons
        filterBtns.forEach(function(btn) {
          btn.classList.remove("active");
        });
  
        // Add 'active' class to the clicked button
        this.classList.add("active");
  
        // Remove all cards from display
        allCards.forEach(function(card) {
          card.style.display = "none";
        });
  
        // Show cards based on the selected filter
        if (filter === "all") {
          allCards.forEach(function(card) {
            card.style.display = "flex";
          });
        } else {
          const filteredCards = allCards.filter(function(card) {
            return card.classList.contains(filter);
          });
          filteredCards.forEach(function(card) {
            card.style.display = "flex";
          });
        }
      });
    });
  });
  