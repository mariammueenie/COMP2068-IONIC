/* ============================================================
   Project Filtering with Ionic Chips
   - Smooth fade animations
   - Multi-category filtering
   - Chip highlighting state
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const chips = document.querySelectorAll(".filter-chip");
  const projects = document.querySelectorAll("#project-list .project-item");

  // Store active filters here
  let activeFilters = {
    language: null,
    concept: null,
    type: null
  };

  /* ------------------------------------------------------------
     Apply Filters
     ------------------------------------------------------------ */
  function applyFilters() {
    projects.forEach(project => {
      const langList = project.dataset.languages?.split(",") || [];
      const conceptList = project.dataset.concepts?.split(",") || [];
      const typeList = project.dataset.type?.split(",") || [];

      const matchLanguage =
        !activeFilters.language || langList.includes(activeFilters.language);

      const matchConcept =
        !activeFilters.concept || conceptList.includes(activeFilters.concept);

      const matchType =
        !activeFilters.type || typeList.includes(activeFilters.type);

      const isVisible = matchLanguage && matchConcept && matchType;

      // Smooth fade animation
      project.style.transition = "opacity 0.25s ease, transform 0.25s ease";
      project.style.opacity = isVisible ? "1" : "0";
      project.style.transform = isVisible ? "scale(1)" : "scale(0.96)";
      project.style.pointerEvents = isVisible ? "auto" : "none";

      setTimeout(() => {
        project.style.display = isVisible ? "block" : "none";
      }, 250);
    });
  }

  /* ------------------------------------------------------------
     Chip Click Handler (toggle states)
     ------------------------------------------------------------ */
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const filterType = chip.dataset.filter;  // language / concept / type
      const filterValue = chip.dataset.value;

      // Clicking the same chip again removes filter
      if (activeFilters[filterType] === filterValue) {
        activeFilters[filterType] = null;
        chip.classList.remove("chip-selected");
      } else {
        activeFilters[filterType] = filterValue;

        // Clear selection for other chips in this category
        chips.forEach(c => {
          if (c.dataset.filter === filterType) {
            c.classList.remove("chip-selected");
          }
        });

        chip.classList.add("chip-selected");
      }

      applyFilters();
    });
  });
});
