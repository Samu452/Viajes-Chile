const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = Array.from(tooltipTriggerList).map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
