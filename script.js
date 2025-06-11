document.addEventListener("DOMContentLoaded", () => {
  // Drug Database (Mock Data) - Enhanced for GenuineMeds.in
  const drugDatabase = {
    paracetamol: {
      name: "Paracetamol",
      type: "Analgesic/Antipyretic",
      uses: [
        "Pain relief (headaches, toothaches, muscle aches)",
        "Reducing fever",
        "Cold and flu symptoms",
        "Post-operative pain management",
      ],
      dosage: {
        adults: "500mg-1000mg every 4-6 hours (max 4000mg/day)",
        children: "10-15mg/kg every 4-6 hours",
        elderly: "Reduced dose may be required",
      },
      sideEffects: [
        "Rare: Skin rash, blood disorders",
        "Overdose: Liver damage",
        "Very rare: Severe allergic reactions",
      ],
      precautions: [
        "Do not exceed recommended dose",
        "Avoid alcohol while taking this medication",
        "Consult doctor if symptoms persist",
        "Check other medications for paracetamol content",
      ],
      contraindications: ["Severe liver disease", "Known hypersensitivity to paracetamol"],
      url: "drugs/paracetamol.html",
    },
    ibuprofen: {
      name: "Ibuprofen",
      type: "NSAID (Non-Steroidal Anti-Inflammatory Drug)",
      uses: [
        "Pain relief and inflammation reduction",
        "Fever reduction",
        "Arthritis and joint pain",
        "Menstrual pain",
        "Dental pain",
      ],
      dosage: {
        adults: "200mg-400mg every 4-6 hours (max 1200mg/day)",
        children: "5-10mg/kg every 6-8 hours",
        elderly: "Start with lower doses",
      },
      sideEffects: [
        "Common: Stomach upset, nausea",
        "Less common: Dizziness, headache",
        "Rare: Stomach ulcers, kidney problems",
        "Very rare: Severe allergic reactions",
      ],
      precautions: [
        "Take with food to reduce stomach irritation",
        "Avoid if you have stomach ulcers",
        "Monitor blood pressure if hypertensive",
        "Stay hydrated",
      ],
      contraindications: [
        "Active peptic ulcer",
        "Severe heart failure",
        "Severe kidney disease",
        "Third trimester of pregnancy",
      ],
      url: "drugs/ibuprofen.html",
    },
    amoxicillin: {
      name: "Amoxicillin",
      type: "Antibiotic (Penicillin)",
      uses: [
        "Bacterial infections of ear, nose, throat",
        "Respiratory tract infections",
        "Urinary tract infections",
        "Skin and soft tissue infections",
        "Dental infections",
      ],
      dosage: {
        adults: "250mg-500mg every 8 hours",
        children: "20-40mg/kg/day divided into 3 doses",
        severe: "Up to 1000mg every 8 hours for severe infections",
      },
      sideEffects: [
        "Common: Nausea, diarrhea, stomach upset",
        "Less common: Skin rash, vomiting",
        "Rare: Severe allergic reactions",
        "Very rare: Liver problems",
      ],
      precautions: [
        "Complete the full course even if feeling better",
        "Take with food if stomach upset occurs",
        "Inform doctor of any allergies",
        "May reduce effectiveness of oral contraceptives",
      ],
      contraindications: [
        "Allergy to penicillin or amoxicillin",
        "History of severe allergic reactions to antibiotics",
      ],
      url: "drugs/amoxicillin.html",
    },
    omeprazole: {
      name: "Omeprazole",
      type: "Proton Pump Inhibitor (PPI)",
      uses: [
        "Gastroesophageal reflux disease (GERD)",
        "Peptic ulcers",
        "Zollinger-Ellison syndrome",
        "Prevention of NSAID-induced ulcers",
        "H. pylori eradication (with antibiotics)",
      ],
      dosage: {
        adults: "20mg-40mg once daily before breakfast",
        maintenance: "10mg-20mg daily",
        severe: "Up to 80mg daily in divided doses",
      },
      sideEffects: [
        "Common: Headache, nausea, diarrhea",
        "Less common: Dizziness, constipation",
        "Rare: Vitamin B12 deficiency (long-term use)",
        "Very rare: Severe allergic reactions",
      ],
      precautions: [
        "Take before meals for best effect",
        "Long-term use may affect bone density",
        "May interact with other medications",
        "Regular monitoring for long-term use",
      ],
      contraindications: ["Known hypersensitivity to omeprazole", "Concurrent use with certain HIV medications"],
      url: "drugs/omeprazole.html",
    },
    aspirin: {
      name: "Aspirin",
      type: "NSAID / Antiplatelet Agent",
      uses: [
        "Pain relief and fever reduction",
        "Anti-inflammatory effects",
        "Prevention of heart attacks and strokes",
        "Blood clot prevention",
        "Rheumatic conditions",
      ],
      dosage: {
        adults: "300mg-600mg every 4 hours for pain (max 4g/day)",
        cardioprotective: "75mg-100mg once daily",
        children: "Not recommended under 16 years due to Reye's syndrome risk",
      },
      sideEffects: [
        "Common: Stomach irritation, nausea",
        "Less common: Bleeding, bruising",
        "Rare: Stomach ulcers, allergic reactions",
        "Very rare: Reye's syndrome in children",
      ],
      precautions: [
        "Take with food to reduce stomach irritation",
        "Avoid in children under 16 years",
        "Monitor for bleeding if on anticoagulants",
        "Stop before surgery if advised by doctor",
      ],
      contraindications: [
        "Active peptic ulcer",
        "Bleeding disorders",
        "Children under 16 years",
        "Third trimester of pregnancy",
      ],
      url: "drugs/aspirin.html",
    },
    metformin: {
      name: "Metformin",
      type: "Antidiabetic (Biguanide)",
      uses: [
        "Type 2 diabetes mellitus",
        "Polycystic ovary syndrome (PCOS)",
        "Prediabetes prevention",
        "Weight management in diabetes",
      ],
      dosage: {
        adults: "500mg twice daily with meals, gradually increased",
        maximum: "Up to 2000mg daily in divided doses",
        elderly: "Start with lower doses",
      },
      sideEffects: [
        "Common: Nausea, diarrhea, stomach upset",
        "Less common: Metallic taste, vitamin B12 deficiency",
        "Rare: Lactic acidosis (serious)",
        "Very rare: Liver problems",
      ],
      precautions: [
        "Take with meals to reduce stomach upset",
        "Monitor kidney function regularly",
        "Stop before contrast procedures",
        "Monitor vitamin B12 levels with long-term use",
      ],
      contraindications: ["Severe kidney disease", "Severe liver disease", "Heart failure", "Diabetic ketoacidosis"],
      url: "drugs/metformin.html",
    },
    atorvastatin: {
      name: "Atorvastatin",
      type: "Statin (HMG-CoA Reductase Inhibitor)",
      uses: [
        "High cholesterol (hypercholesterolemia)",
        "Prevention of cardiovascular disease",
        "Familial hypercholesterolemia",
        "Mixed dyslipidemia",
      ],
      dosage: {
        adults: "10mg-80mg once daily in the evening",
        starting: "Usually 20mg once daily",
        maximum: "80mg daily",
      },
      sideEffects: [
        "Common: Muscle pain, headache",
        "Less common: Digestive problems, fatigue",
        "Rare: Liver enzyme elevation, muscle breakdown",
        "Very rare: Memory problems, diabetes",
      ],
      precautions: [
        "Take in the evening for best effect",
        "Monitor liver function tests",
        "Report unexplained muscle pain",
        "Avoid grapefruit juice",
      ],
      contraindications: ["Active liver disease", "Pregnancy and breastfeeding", "Unexplained muscle enzyme elevation"],
      url: "drugs/atorvastatin.html",
    },
    amlodipine: {
      name: "Amlodipine",
      type: "Calcium Channel Blocker",
      uses: [
        "High blood pressure (hypertension)",
        "Angina (chest pain)",
        "Coronary artery disease",
        "Prevention of stroke and heart attack",
      ],
      dosage: {
        adults: "5mg-10mg once daily",
        starting: "Usually 5mg once daily",
        elderly: "Start with 2.5mg daily",
      },
      sideEffects: [
        "Common: Ankle swelling, flushing, fatigue",
        "Less common: Dizziness, headache",
        "Rare: Gum swelling, palpitations",
        "Very rare: Liver problems, mood changes",
      ],
      precautions: [
        "Can be taken with or without food",
        "Rise slowly from sitting/lying position",
        "Monitor blood pressure regularly",
        "Report severe swelling to doctor",
      ],
      contraindications: ["Severe aortic stenosis", "Cardiogenic shock", "Severe hypotension"],
      url: "drugs/amlodipine.html",
    },
    azithromycin: {
      name: "Azithromycin",
      type: "Macrolide Antibiotic",
      uses: [
        "Respiratory tract infections",
        "Skin and soft tissue infections",
        "Sexually transmitted infections",
        "Ear infections",
        "Pneumonia",
      ],
      dosage: {
        adults: "500mg on day 1, then 250mg daily for 4 days",
        children: "10mg/kg on day 1, then 5mg/kg for 4 days",
        alternative: "500mg daily for 3 days",
      },
      sideEffects: [
        "Common: Nausea, diarrhea, stomach pain",
        "Less common: Headache, dizziness",
        "Rare: Heart rhythm changes, liver problems",
        "Very rare: Severe allergic reactions",
      ],
      precautions: [
        "Complete the full course of treatment",
        "Can be taken with or without food",
        "Monitor for heart rhythm changes",
        "Inform doctor of other medications",
      ],
      contraindications: [
        "Allergy to macrolide antibiotics",
        "Severe liver disease",
        "History of heart rhythm problems with azithromycin",
      ],
      url: "drugs/azithromycin.html",
    },
    pantoprazole: {
      name: "Pantoprazole",
      type: "Proton Pump Inhibitor (PPI)",
      uses: [
        "Gastroesophageal reflux disease (GERD)",
        "Peptic ulcers",
        "Zollinger-Ellison syndrome",
        "Prevention of NSAID-induced ulcers",
        "H. pylori eradication therapy",
      ],
      dosage: {
        adults: "40mg once daily before breakfast",
        maintenance: "20mg daily",
        severe: "Up to 80mg daily in divided doses",
      },
      sideEffects: [
        "Common: Headache, diarrhea, nausea",
        "Less common: Dizziness, flatulence",
        "Rare: Vitamin B12 deficiency, bone fractures",
        "Very rare: Severe allergic reactions",
      ],
      precautions: [
        "Take before meals for best effect",
        "Long-term use may affect nutrient absorption",
        "Monitor magnesium levels with prolonged use",
        "May interact with other medications",
      ],
      contraindications: ["Known hypersensitivity to pantoprazole", "Concurrent use with certain HIV medications"],
      url: "drugs/pantoprazole.html",
    },
    ciprofloxacin: {
      name: "Ciprofloxacin",
      type: "Fluoroquinolone Antibiotic",
      uses: [
        "Urinary tract infections",
        "Respiratory tract infections",
        "Gastrointestinal infections",
        "Skin and soft tissue infections",
        "Bone and joint infections",
      ],
      dosage: {
        adults: "250mg-750mg twice daily",
        uti: "250mg-500mg twice daily for 3-7 days",
        severe: "Up to 750mg twice daily",
      },
      sideEffects: [
        "Common: Nausea, diarrhea, dizziness",
        "Less common: Headache, insomnia",
        "Rare: Tendon rupture, nerve damage",
        "Very rare: Severe allergic reactions",
      ],
      precautions: [
        "Avoid dairy products and antacids",
        "Stay hydrated and avoid excessive sun exposure",
        "Stop if tendon pain occurs",
        "Complete the full course of treatment",
      ],
      contraindications: [
        "Allergy to fluoroquinolones",
        "Pregnancy and breastfeeding",
        "Children under 18 years (except specific conditions)",
        "History of tendon disorders",
      ],
      url: "drugs/ciprofloxacin.html",
    },
    diclofenac: {
      name: "Diclofenac",
      type: "NSAID (Non-Steroidal Anti-Inflammatory Drug)",
      uses: [
        "Arthritis and joint pain",
        "Muscle and back pain",
        "Dental pain",
        "Post-operative pain",
        "Inflammatory conditions",
      ],
      dosage: {
        adults: "50mg 2-3 times daily with food",
        topical: "Apply 2-4 times daily to affected area",
        maximum: "150mg daily (oral)",
      },
      sideEffects: [
        "Common: Stomach upset, nausea",
        "Less common: Dizziness, headache",
        "Rare: Stomach ulcers, kidney problems",
        "Very rare: Liver problems, heart issues",
      ],
      precautions: [
        "Take with food to reduce stomach irritation",
        "Monitor blood pressure and kidney function",
        "Use lowest effective dose for shortest time",
        "Avoid in late pregnancy",
      ],
      contraindications: [
        "Active peptic ulcer",
        "Severe heart failure",
        "Severe kidney or liver disease",
        "Third trimester of pregnancy",
      ],
      url: "drugs/diclofenac.html",
    },
    cetirizine: {
      name: "Cetirizine",
      type: "Antihistamine (H1 Receptor Antagonist)",
      uses: [
        "Allergic rhinitis (hay fever)",
        "Chronic urticaria (hives)",
        "Allergic conjunctivitis",
        "Skin allergies and itching",
        "Seasonal allergies",
      ],
      dosage: {
        adults: "10mg once daily",
        children: "5mg once daily (6-12 years)",
        elderly: "5mg once daily or 10mg every other day",
      },
      sideEffects: [
        "Common: Drowsiness, fatigue, dry mouth",
        "Less common: Headache, dizziness",
        "Rare: Confusion, tremor",
        "Very rare: Severe allergic reactions",
      ],
      precautions: [
        "May cause drowsiness - avoid driving",
        "Avoid alcohol while taking",
        "Reduce dose in kidney impairment",
        "Can be taken with or without food",
      ],
      contraindications: ["Severe kidney disease", "Known hypersensitivity to cetirizine", "End-stage renal disease"],
      url: "drugs/cetirizine.html",
    },
    losartan: {
      name: "Losartan",
      type: "Angiotensin Receptor Blocker (ARB)",
      uses: [
        "High blood pressure (hypertension)",
        "Diabetic nephropathy",
        "Heart failure",
        "Prevention of stroke",
        "Kidney protection in diabetes",
      ],
      dosage: {
        adults: "50mg-100mg once daily",
        starting: "Usually 50mg once daily",
        maximum: "100mg daily",
      },
      sideEffects: [
        "Common: Dizziness, fatigue, cough",
        "Less common: Headache, nausea",
        "Rare: Kidney problems, high potassium",
        "Very rare: Severe allergic reactions",
      ],
      precautions: [
        "Monitor blood pressure and kidney function",
        "Rise slowly from sitting/lying position",
        "Monitor potassium levels",
        "Avoid salt substitutes containing potassium",
      ],
      contraindications: ["Pregnancy and breastfeeding", "Severe kidney disease", "Bilateral renal artery stenosis"],
      url: "drugs/losartan.html",
    },
  }

  // Update search suggestions to include all new drugs
  const searchSuggestions = [
    "Paracetamol",
    "Ibuprofen",
    "Amoxicillin",
    "Omeprazole",
    "Aspirin",
    "Metformin",
    "Atorvastatin",
    "Amlodipine",
    "Azithromycin",
    "Pantoprazole",
    "Ciprofloxacin",
    "Diclofenac",
    "Cetirizine",
    "Losartan",
    "Crocin",
    "Dolo",
    "Calpol",
    "Brufen",
    "Combiflam",
    "Disprin",
    "Glucophage",
    "Lipitor",
    "Norvasc",
    "Zithromax",
    "Pantocid",
    "Cipro",
    "Voveran",
    "Zyrtec",
    "Cozaar",
  ]

  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      hamburger.classList.toggle("active")
    })
  }

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      // Close mobile menu if open
      if (navLinks && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active")
        hamburger.classList.remove("active")
      }

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Enhanced Search Functionality
  const searchBar = document.querySelector(".search-bar input")
  const searchButton = document.querySelector(".search-bar button")
  const searchContainer = document.querySelector(".search-container")

  if (searchBar && searchButton && searchContainer) {
    // Create suggestions dropdown
    const suggestionsDiv = document.createElement("div")
    suggestionsDiv.className = "search-suggestions"
    searchContainer.appendChild(suggestionsDiv)

    searchBar.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase()
      if (query.length > 0) {
        const matches = searchSuggestions.filter((drug) => drug.toLowerCase().includes(query))
        showSuggestions(matches)
      } else {
        hideSuggestions()
      }
    })

    searchBar.addEventListener("blur", () => {
      setTimeout(() => hideSuggestions(), 200)
    })

    function showSuggestions(suggestions) {
      if (suggestions.length > 0) {
        suggestionsDiv.innerHTML = suggestions
          .slice(0, 8) // Limit to 8 suggestions
          .map((suggestion) => `<div class="search-suggestion">${suggestion}</div>`)
          .join("")
        suggestionsDiv.style.display = "block"

        // Add click handlers to suggestions
        suggestionsDiv.querySelectorAll(".search-suggestion").forEach((item) => {
          item.addEventListener("click", () => {
            searchBar.value = item.textContent
            hideSuggestions()
            handleSearch()
          })
        })
      } else {
        hideSuggestions()
      }
    }

    function hideSuggestions() {
      suggestionsDiv.style.display = "none"
    }

    searchButton.addEventListener("click", handleSearch)
    searchBar.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleSearch()
      }
    })

    function handleSearch() {
      const searchTerm = searchBar.value.trim().toLowerCase()
      if (searchTerm) {
        showLoading()

        setTimeout(() => {
          hideLoading()

          // Check if we have a direct match and redirect to drug page
          const directMatch = Object.keys(drugDatabase).find(
            (key) => key === searchTerm || drugDatabase[key].name.toLowerCase() === searchTerm,
          )

          if (directMatch && drugDatabase[directMatch].url) {
            window.location.href = drugDatabase[directMatch].url
            return
          }

          // Otherwise show search results
          const results = findDrugs(searchTerm)
          showSearchResults(results)
        }, 500) // Simulate loading time
      } else {
        alert("Please enter a search term.")
      }
    }

    function findDrugs(searchTerm) {
      const results = []
      for (const key in drugDatabase) {
        if (
          drugDatabase[key].name.toLowerCase().includes(searchTerm) ||
          drugDatabase[key].type.toLowerCase().includes(searchTerm) ||
          drugDatabase[key].uses.some((use) => use.toLowerCase().includes(searchTerm))
        ) {
          results.push(drugDatabase[key])
        }
      }
      return results
    }

    function showSearchResults(results) {
      searchContainer.innerHTML = "" // Clear previous content

      if (results.length > 0) {
        const resultsList = document.createElement("ul")
        resultsList.className = "search-results-list"

        results.forEach((drug) => {
          const listItem = document.createElement("li")
          listItem.className = "search-result-item"

          const link = document.createElement("a")
          link.href = drug.url
          link.textContent = drug.name
          listItem.appendChild(link)

          resultsList.appendChild(listItem)
        })

        searchContainer.appendChild(resultsList)
      } else {
        searchContainer.textContent = "No results found."
      }
    }

    function showLoading() {
      searchContainer.textContent = "Loading..."
    }

    function hideLoading() {
      searchContainer.textContent = "" // Clear loading message
    }
  }

  // Add mobile-specific functionality at the end of the DOMContentLoaded event listener

  // Enhanced mobile navigation
  function setupMobileNavigation() {
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
    const navItems = document.querySelectorAll(".nav-links a")

    if (hamburger && navLinks) {
      // Close menu when clicking on nav items
      navItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active")
            hamburger.classList.remove("active")
          }
        })
      })

      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
          navLinks.classList.remove("active")
          hamburger.classList.remove("active")
        }
      })

      // Handle escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navLinks.classList.contains("active")) {
          navLinks.classList.remove("active")
          hamburger.classList.remove("active")
        }
      })
    }
  }

  // Touch-friendly search suggestions
  function setupTouchFriendlySearch() {
    const searchSuggestions = document.querySelector(".search-suggestions")
    const searchBar = document.querySelector(".search-bar input") // Access searchBar here
    const hideSuggestions = () => {
      // Define hideSuggestions here
      suggestionsDiv.style.display = "none"
    }
    const handleSearch = () => {
      // Define handleSearch here
      const searchTerm = searchBar.value.trim().toLowerCase()
      if (searchTerm) {
        showLoading()

        setTimeout(() => {
          hideLoading()

          // Check if we have a direct match and redirect to drug page
          const directMatch = Object.keys(drugDatabase).find(
            (key) => key === searchTerm || drugDatabase[key].name.toLowerCase() === searchTerm,
          )

          if (directMatch && drugDatabase[directMatch].url) {
            window.location.href = drugDatabase[directMatch].url
            return
          }

          // Otherwise show search results
          const results = findDrugs(searchTerm)
          showSearchResults(results)
        }, 500) // Simulate loading time
      } else {
        alert("Please enter a search term.")
      }
    }
    const showLoading = () => {
      searchContainer.textContent = "Loading..."
    }

    const hideLoading = () => {
      searchContainer.textContent = "" // Clear loading message
    }
    const findDrugs = (searchTerm) => {
      const results = []
      for (const key in drugDatabase) {
        if (
          drugDatabase[key].name.toLowerCase().includes(searchTerm) ||
          drugDatabase[key].type.toLowerCase().includes(searchTerm) ||
          drugDatabase[key].uses.some((use) => use.toLowerCase().includes(searchTerm))
        ) {
          results.push(drugDatabase[key])
        }
      }
      return results
    }
    const showSearchResults = (results) => {
      searchContainer.innerHTML = "" // Clear previous content

      if (results.length > 0) {
        const resultsList = document.createElement("ul")
        resultsList.className = "search-results-list"

        results.forEach((drug) => {
          const listItem = document.createElement("li")
          listItem.className = "search-result-item"

          const link = document.createElement("a")
          link.href = drug.url
          link.textContent = drug.name
          listItem.appendChild(link)

          resultsList.appendChild(listItem)
        })

        searchContainer.appendChild(resultsList)
      } else {
        searchContainer.textContent = "No results found."
      }
    }
    const suggestionsDiv = document.querySelector(".search-suggestions")
    if (searchSuggestions) {
      // Add touch event listeners for better mobile interaction
      searchSuggestions.addEventListener("touchstart", (e) => {
        e.preventDefault()
        if (e.target.classList.contains("search-suggestion")) {
          e.target.style.backgroundColor = "var(--primary-light)"
        }
      })

      searchSuggestions.addEventListener("touchend", (e) => {
        e.preventDefault()
        if (e.target.classList.contains("search-suggestion")) {
          e.target.style.backgroundColor = ""
          searchBar.value = e.target.textContent
          hideSuggestions()
          handleSearch()
        }
      })
    }
  }

  // Responsive testimonial slider
  function setupResponsiveTestimonials() {
    const testimonialSlides = document.querySelectorAll(".testimonial-slide")
    const dots = document.querySelectorAll(".dot")
    const prevBtn = document.querySelector(".prev-btn")
    const nextBtn = document.querySelector(".next-btn")
    let currentSlide = 0

    if (testimonialSlides.length > 0) {
      function showSlide(index) {
        testimonialSlides.forEach((slide, i) => {
          slide.classList.toggle("active", i === index)
        })
        dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index)
        })
      }

      function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialSlides.length
        showSlide(currentSlide)
      }

      function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length
        showSlide(currentSlide)
      }

      // Auto-advance slides on mobile
      let autoSlideInterval
      function startAutoSlide() {
        if (window.innerWidth <= 768) {
          autoSlideInterval = setInterval(nextSlide, 5000)
        }
      }

      function stopAutoSlide() {
        clearInterval(autoSlideInterval)
      }

      // Touch/swipe support for testimonials
      let touchStartX = 0
      let touchEndX = 0

      const testimonialSlider = document.querySelector(".testimonial-slider")
      if (testimonialSlider) {
        testimonialSlider.addEventListener("touchstart", (e) => {
          touchStartX = e.changedTouches[0].screenX
          stopAutoSlide()
        })

        testimonialSlider.addEventListener("touchend", (e) => {
          touchEndX = e.changedTouches[0].screenX
          handleSwipe()
          startAutoSlide()
        })

        function handleSwipe() {
          const swipeThreshold = 50
          const diff = touchStartX - touchEndX

          if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
              nextSlide()
            } else {
              prevSlide()
            }
          }
        }
      }

      // Button event listeners
      if (nextBtn)
        nextBtn.addEventListener("click", () => {
          nextSlide()
          stopAutoSlide()
          startAutoSlide()
        })

      if (prevBtn)
        prevBtn.addEventListener("click", () => {
          prevSlide()
          stopAutoSlide()
          startAutoSlide()
        })

      // Dot navigation
      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          currentSlide = index
          showSlide(currentSlide)
          stopAutoSlide()
          startAutoSlide()
        })
      })

      // Start auto-slide on load
      startAutoSlide()

      // Handle window resize
      window.addEventListener("resize", () => {
        stopAutoSlide()
        startAutoSlide()
      })
    }
  }

  // Smooth scroll with offset for mobile
  function setupSmoothScrollWithOffset() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          const headerHeight = document.querySelector("header").offsetHeight
          const extraOffset = window.innerWidth <= 768 ? 20 : 0
          const targetPosition =
            targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - extraOffset

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  }

  // Optimize form interactions for mobile
  function setupMobileFormOptimizations() {
    const formInputs = document.querySelectorAll("input, textarea")

    formInputs.forEach((input) => {
      // Prevent zoom on focus for iOS
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        input.addEventListener("focus", () => {
          input.style.fontSize = "16px"
        })

        input.addEventListener("blur", () => {
          input.style.fontSize = ""
        })
      }

      // Add visual feedback for touch
      input.addEventListener("touchstart", () => {
        input.style.transform = "scale(1.02)"
      })

      input.addEventListener("touchend", () => {
        input.style.transform = ""
      })
    })
  }

  // Lazy loading for images on mobile
  function setupLazyLoading() {
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.classList.remove("lazy")
              observer.unobserve(img)
            }
          }
        })
      })

      document.querySelectorAll("img[data-src]").forEach((img) => {
        imageObserver.observe(img)
      })
    }
  }

  // Performance optimization for mobile
  function setupPerformanceOptimizations() {
    // Debounce scroll events
    let scrollTimeout
    const animateOnScroll = () => {
      // Your scroll-dependent animation logic here
      // For example:
      // document.querySelectorAll('.fade-in').forEach(element => {
      //   if (elementIsVisible(element)) {
      //     element.classList.add('active');
      //   }
      // });
    }
    window.addEventListener("scroll", () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
      scrollTimeout = setTimeout(() => {
        // Scroll-dependent functions here
        animateOnScroll()
      }, 16) // ~60fps
    })

    // Optimize animations for mobile
    if (window.innerWidth <= 768) {
      // Reduce animation complexity on mobile
      const style = document.createElement("style")
      style.textContent = `
        * {
          animation-duration: 0.2s !important;
          transition-duration: 0.2s !important;
        }
      `
      document.head.appendChild(style)
    }
  }

  // Initialize all mobile enhancements
  setupMobileNavigation()
  setupTouchFriendlySearch()
  setupResponsiveTestimonials()
  setupSmoothScrollWithOffset()
  setupMobileFormOptimizations()
  setupLazyLoading()
  setupPerformanceOptimizations()

  // Handle orientation change
  window.addEventListener("orientationchange", () => {
    setTimeout(() => {
      // Recalculate layouts after orientation change
      window.scrollTo(0, window.scrollY)
    }, 100)
  })

  // Add viewport meta tag if missing (for proper mobile rendering)
  if (!document.querySelector('meta[name="viewport"]')) {
    const viewport = document.createElement("meta")
    viewport.name = "viewport"
    viewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    document.head.appendChild(viewport)
  }
})
