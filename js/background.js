function updateElementSize() {
      const element = document.getElementById("bgImage");
      const aspectRatio = 1358 / 783; // Original aspect ratio
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let newWidth, newHeight;

      if (viewportWidth / viewportHeight > aspectRatio) {
        // Fit by height
        element.style.width = `100%`;
        element.style.height = `auto`;
      } else {
        // Fit by width
        element.style.width = `auto`;
        element.style.height = `100%`;
      }
    }

// Initial setup
updateElementSize();

// Update element size when the viewport changes
window.addEventListener("resize", updateElementSize);
