document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for drug navigation
  const drugNavLinks = document.querySelectorAll(".drug-nav a")

  drugNavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      // Remove active class from all links
      drugNavLinks.forEach((l) => l.classList.remove("active"))

      // Add active class to clicked link
      link.classList.add("active")

      const targetId = link.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight
        const navHeight = document.querySelector(".drug-navigation").offsetHeight
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - navHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Update active navigation on scroll
  const sections = document.querySelectorAll(".drug-section")
  const navLinks = document.querySelectorAll(".drug-nav a")

  window.addEventListener("scroll", () => {
    let current = ""
    const headerHeight = document.querySelector("header").offsetHeight
    const navHeight = document.querySelector(".drug-navigation").offsetHeight

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset
      const sectionHeight = section.offsetHeight

      if (window.pageYOffset >= sectionTop - headerHeight - navHeight - 100) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active")

      // Close all FAQ items
      faqItems.forEach((faq) => {
        faq.classList.remove("active")
      })

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add("active")
      }
    })
  })

  // Print functionality
  const printBtn = document.querySelector(".print-btn")
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print()
    })
  }

  // Share functionality
  const shareBtn = document.querySelector(".share-btn")
  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: document.title,
            text: document.querySelector(".drug-summary").textContent,
            url: window.location.href,
          })
        } catch (err) {
          console.log("Error sharing:", err)
          fallbackShare()
        }
      } else {
        fallbackShare()
      }
    })
  }

  function fallbackShare() {
    const url = window.location.href
    navigator.clipboard
      .writeText(url)
      .then(() => {
        showSuccessMessage("Link copied to clipboard!")
      })
      .catch(() => {
        showSuccessMessage(`Share this link: ${url}`)
      })
  }

  // Save functionality
  const saveBtn = document.querySelector(".save-btn")
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const drugName = document.querySelector(".drug-hero h1").textContent
      const savedDrugs = JSON.parse(localStorage.getItem("savedDrugs") || "[]")

      if (!savedDrugs.includes(drugName)) {
        savedDrugs.push(drugName)
        localStorage.setItem("savedDrugs", JSON.stringify(savedDrugs))
        saveBtn.innerHTML = '<i class="fas fa-bookmark"></i> Saved'
        saveBtn.style.backgroundColor = "var(--secondary-color)"
        showSuccessMessage("Drug saved to your favorites!")
      } else {
        showSuccessMessage("Drug is already in your favorites!")
      }
    })

    // Check if drug is already saved
    const drugName = document.querySelector(".drug-hero h1").textContent
    const savedDrugs = JSON.parse(localStorage.getItem("savedDrugs") || "[]")
    if (savedDrugs.includes(drugName)) {
      saveBtn.innerHTML = '<i class="fas fa-bookmark"></i> Saved'
      saveBtn.style.backgroundColor = "var(--secondary-color)"
    }
  }

  // Utility function to show success messages
  function showSuccessMessage(message) {
    // Create a temporary notification
    const notification = document.createElement("div")
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background-color: var(--secondary-color);
      color: white;
      padding: 15px 20px;
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      z-index: 9999;
      animation: slideInRight 0.3s ease;
    `
    notification.textContent = message

    document.body.appendChild(notification)

    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease"
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }

  // Add CSS for notification animations
  const style = document.createElement("style")
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `
  document.head.appendChild(style)

  // Mobile navigation for drug nav
  const drugNav = document.querySelector(".drug-nav ul")
  let isDown = false
  let startX
  let scrollLeft

  if (drugNav) {
    drugNav.addEventListener("mousedown", (e) => {
      isDown = true
      startX = e.pageX - drugNav.offsetLeft
      scrollLeft = drugNav.scrollLeft
    })

    drugNav.addEventListener("mouseleave", () => {
      isDown = false
    })

    drugNav.addEventListener("mouseup", () => {
      isDown = false
    })

    drugNav.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - drugNav.offsetLeft
      const walk = (x - startX) * 2
      drugNav.scrollLeft = scrollLeft - walk
    })
  }
})
