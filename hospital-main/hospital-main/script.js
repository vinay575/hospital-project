// EmailJS Configuration (Replace with your actual IDs)
const EMAILJS_CONFIG = {
    serviceID: 'service_bu24qmp',
    appointmentTemplateID: 'template_2dfhoby',
    contactTemplateID: 'template_qy5hkq8',
    publicKey: 'gQLBJ63A0LLnA3FYQ'
};

// Initialize EmailJS
(function() {
    emailjs.init(EMAILJS_CONFIG.publicKey);
})();

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    initializeScrollAnimations();
    initializeNavigation();
    initializeForms();
    initializeScrollToTop();
    setMinDate();
});

// Carousel Functionality
let currentSlide = 0;
let carouselInterval;

function initializeCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    
    if (slides.length === 0) return;
    
    // Start carousel
    carouselInterval = setInterval(() => {
        nextSlide();
    }, 3000);
    
    // Pause on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });
        
        carouselContainer.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(() => {
                nextSlide();
            }, 3000);
        });
    }
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Smooth Scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            scrollToSection(targetId);
        }
        // else -> external link, do nothing, browser will navigate normally
    });
});

    
    // Active navigation highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile menu close on link click
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
}




// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add animation classes and observe elements
    const animateElements = document.querySelectorAll('.service-card, .department-card, .doctor-card, .mission-vision-card, .why-item, .contact-item');
    
    animateElements.forEach((el, index) => {
        // Add different animation classes
        if (index % 3 === 0) {
            el.classList.add('fade-in');
        } else if (index % 3 === 1) {
            el.classList.add('slide-in-left');
        } else {
            el.classList.add('slide-in-right');
        }
        
        observer.observe(el);
    });
    
    // Special animations for specific elements
    const aboutContent = document.querySelector('.about-content');
    const aboutImage = document.querySelector('.about-image-container');
    
    if (aboutContent) {
        aboutContent.classList.add('slide-in-right');
        observer.observe(aboutContent);
    }
    
    if (aboutImage) {
        aboutImage.classList.add('slide-in-left');
        observer.observe(aboutImage);
    }
}

// Department Modal Data
const departmentData = {
    pediatrics: {
        title: '👶 Pediatrics Department',
        content: `
            <div class="row">
                <div class="col-md-6">
                    <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Pediatrics" class="img-fluid rounded mb-3">
                </div>
                <div class="col-md-6">
                    <h4>Comprehensive Pediatric Care</h4>
                    <p>Our Pediatrics department provides comprehensive healthcare services for infants, children, and adolescents from birth to 18 years of age.</p>
                    
                    <h5>Services Include:</h5>
                    <ul>
                        <li>Well-child checkups and developmental assessments</li>
                        <li>Immunizations and vaccinations</li>
                        <li>Treatment of acute and chronic illnesses</li>
                        <li>Growth and nutrition counseling</li>
                        <li>Behavioral and developmental support</li>
                        <li>Adolescent medicine</li>
                    </ul>
                    
                    <h5>Our Team:</h5>
                    <p>Board-certified pediatricians with specialized training in child development, nutrition, and family-centered care.</p>
                    
                    <h5>Hours:</h5>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br>
                    Saturday: 9:00 AM - 4:00 PM<br>
                    Emergency services available 24/7</p>
                </div>
            </div>
        `
    },
    dentistry: {
        title: '🦷 Pediatric Dentistry',
        content: `
            <div class="row">
                <div class="col-md-6">
                    <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Pediatric Dentistry" class="img-fluid rounded mb-3">
                </div>
                <div class="col-md-6">
                    <h4>Child-Friendly Dental Care</h4>
                    <p>Our pediatric dentistry department creates a fun, comfortable environment where children can receive excellent dental care without fear or anxiety.</p>
                    
                    <h5>Services Include:</h5>
                    <ul>
                        <li>Routine cleanings and checkups</li>
                        <li>Fluoride treatments and sealants</li>
                        <li>Cavity treatment and fillings</li>
                        <li>Orthodontic evaluations</li>
                        <li>Emergency dental care</li>
                        <li>Oral health education</li>
                    </ul>
                    
                    <h5>Special Features:</h5>
                    <ul>
                        <li>Child-sized equipment and furniture</li>
                        <li>Colorful, themed treatment rooms</li>
                        <li>Sedation options for anxious children</li>
                        <li>Reward system for good behavior</li>
                    </ul>
                    
                    <h5>Age Range:</h5>
                    <p>We see children from their first tooth (around 6 months) through age 18.</p>
                </div>
            </div>
        `
    },
    cardiology: {
        title: '🫀 Pediatric Cardiology',
        content: `
            <div class="row">
                <div class="col-md-6">
                    <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Pediatric Cardiology" class="img-fluid rounded mb-3">
                </div>
                <div class="col-md-6">
                    <h4>Expert Heart Care for Children</h4>
                    <p>Our pediatric cardiology department specializes in diagnosing and treating heart conditions in infants, children, and adolescents.</p>
                    
                    <h5>Services Include:</h5>
                    <ul>
                        <li>Congenital heart defect evaluation</li>
                        <li>Echocardiograms and EKGs</li>
                        <li>Heart murmur assessment</li>
                        <li>Arrhythmia management</li>
                        <li>Pre-surgical cardiac evaluation</li>
                        <li>Post-operative cardiac care</li>
                    </ul>
                    
                    <h5>Advanced Technology:</h5>
                    <ul>
                        <li>3D echocardiography</li>
                        <li>Cardiac catheterization lab</li>
                        <li>24-hour Holter monitoring</li>
                        <li>Exercise stress testing</li>
                    </ul>
                    
                    <h5>Conditions Treated:</h5>
                    <p>Heart murmurs, congenital heart defects, arrhythmias, cardiomyopathy, and acquired heart diseases.</p>
                </div>
            </div>
        `
    },
    ophthalmology: {
        title: '👀 Pediatric Ophthalmology',
        content: `
            <div class="row">
                <div class="col-md-6">
                    <img src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Pediatric Ophthalmology" class="img-fluid rounded mb-3">
                </div>
                <div class="col-md-6">
                    <h4>Comprehensive Eye Care for Children</h4>
                    <p>Our pediatric ophthalmology department provides specialized eye care for infants, children, and teens with vision problems and eye diseases.</p>
                    
                    <h5>Services Include:</h5>
                    <ul>
                        <li>Comprehensive eye examinations</li>
                        <li>Vision screening and testing</li>
                        <li>Treatment of lazy eye (amblyopia)</li>
                        <li>Strabismus (crossed eyes) correction</li>
                        <li>Pediatric cataract surgery</li>
                        <li>Glaucoma management</li>
                    </ul>
                    
                    <h5>Specialized Equipment:</h5>
                    <ul>
                        <li>Child-friendly examination tools</li>
                        <li>Advanced imaging technology</li>
                        <li>Specialized surgical equipment</li>
                        <li>Vision therapy resources</li>
                    </ul>
                    
                    <h5>Early Detection:</h5>
                    <p>We emphasize early detection and treatment of vision problems to ensure proper visual development in children.</p>
                </div>
            </div>
        `
    },
    neurology: {
        title: '🧠 Pediatric Neurology',
        content: `
            <div class="row">
                <div class="col-md-6">
                    <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Pediatric Neurology" class="img-fluid rounded mb-3">
                </div>
                <div class="col-md-6">
                    <h4>Neurological Care for Children</h4>
                    <p>Our pediatric neurology department specializes in diagnosing and treating disorders of the brain, spinal cord, and nervous system in children.</p>
                    
                    <h5>Services Include:</h5>
                    <ul>
                        <li>Seizure and epilepsy management</li>
                        <li>Developmental delay evaluation</li>
                        <li>Headache and migraine treatment</li>
                        <li>Movement disorder assessment</li>
                        <li>Neuromuscular disease care</li>
                        <li>Sleep disorder evaluation</li>
                    </ul>
                    
                    <h5>Diagnostic Tools:</h5>
                    <ul>
                        <li>EEG (electroencephalogram)</li>
                        <li>EMG (electromyography)</li>
                        <li>MRI and CT imaging</li>
                        <li>Sleep studies</li>
                    </ul>
                    
                    <h5>Multidisciplinary Approach:</h5>
                    <p>We work closely with other specialists, therapists, and educators to provide comprehensive care for children with neurological conditions.</p>
                </div>
            </div>
        `
    },
    orthopedics: {
        title: '🦴 Pediatric Orthopedics',
        content: `
            <div class="row">
                <div class="col-md-6">
                    <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Pediatric Orthopedics" class="img-fluid rounded mb-3">
                </div>
                <div class="col-md-6">
                    <h4>Bone and Joint Care for Children</h4>
                    <p>Our pediatric orthopedics department specializes in treating musculoskeletal problems in growing children, from infants to teenagers.</p>
                    
                    <h5>Services Include:</h5>
                    <ul>
                        <li>Fracture care and casting</li>
                        <li>Scoliosis treatment</li>
                        <li>Hip dysplasia management</li>
                        <li>Sports injury treatment</li>
                        <li>Limb deformity correction</li>
                        <li>Clubfoot treatment</li>
                    </ul>
                    
                    <h5>Treatment Options:</h5>
                    <ul>
                        <li>Non-surgical treatments</li>
                        <li>Minimally invasive procedures</li>
                        <li>Advanced surgical techniques</li>
                        <li>Physical therapy programs</li>
                    </ul>
                    
                    <h5>Growing Bones Expertise:</h5>
                    <p>Our specialists understand the unique needs of growing bones and joints, providing age-appropriate treatments that support healthy development.</p>
                </div>
            </div>
        `
    }
};

// Doctor Modal Data
// const doctorData = {
//     'dr-smith': {
//         name: 'Dr. Sarah Smith',
//         specialty: 'Chief Pediatrician',
//         image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
//         experience: '15 years',
//         department: 'Pediatrics',
//         qualifications: 'MD, Board Certified Pediatrician, Fellowship in Pediatric Emergency Medicine',
//         bio: 'Dr. Sarah Smith is our Chief Pediatrician with over 15 years of experience in pediatric care. She specializes in emergency pediatric medicine and has a passion for making healthcare comfortable and accessible for children and their families.',
//         education: 'Harvard Medical School, Boston Children\'s Hospital Residency',
//         specialties: ['General Pediatrics', 'Emergency Medicine', 'Adolescent Health', 'Preventive Care']
//     },
//     'dr-johnson': {
//         name: 'Dr. Michael Johnson',
//         specialty: 'Pediatric Cardiologist',
//         image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
//         experience: '12 years',
//         department: 'Cardiology',
//         qualifications: 'MD, Board Certified Pediatric Cardiologist, Fellowship in Congenital Heart Disease',
//         bio: 'Dr. Michael Johnson is a renowned pediatric cardiologist specializing in congenital heart defects and pediatric cardiac surgery. He has performed over 500 successful cardiac procedures in children.',
//         education: 'Johns Hopkins Medical School, Children\'s Hospital of Philadelphia Fellowship',
//         specialties: ['Congenital Heart Defects', 'Cardiac Surgery', 'Interventional Cardiology', 'Heart Failure Management']
//     },
//     'dr-davis': {
//         name: 'Dr. Emily Davis',
//         specialty: 'Pediatric Neurologist',
//         image: 'https://images.unsplash.com/photo-1594824475317-d0d4e0b0e0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
//         experience: '10 years',
//         department: 'Neurology',
//         qualifications: 'MD, PhD, Board Certified Pediatric Neurologist, Fellowship in Pediatric Epilepsy',
//         bio: 'Dr. Emily Davis is a pediatric neurologist with expertise in epilepsy and seizure disorders. She is actively involved in research and has published numerous papers on pediatric neurological conditions.',
//         education: 'Stanford Medical School, UCSF Neurology Residency',
//         specialties: ['Epilepsy', 'Seizure Disorders', 'Developmental Neurology', 'Headache Management']
//     },
//     'dr-wilson': {
//         name: 'Dr. James Wilson',
//         specialty: 'Pediatric Dentist',
//         image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
//         experience: '8 years',
//         department: 'Dentistry',
//         qualifications: 'DDS, Pediatric Dentistry Residency, Sedation Certification',
//         bio: 'Dr. James Wilson is a pediatric dentist who specializes in creating positive dental experiences for children. He uses the latest techniques in pediatric sedation and behavior management.',
//         education: 'UCLA School of Dentistry, Children\'s Hospital Los Angeles Residency',
//         specialties: ['Preventive Dentistry', 'Pediatric Sedation', 'Special Needs Dentistry', 'Orthodontic Evaluation']
//     },
//     'dr-brown': {
//         name: 'Dr. Lisa Brown',
//         specialty: 'Pediatric Ophthalmologist',
//         image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
//         experience: '11 years',
//         department: 'Ophthalmology',
//         qualifications: 'MD, Board Certified Ophthalmologist, Fellowship in Pediatric Ophthalmology',
//         bio: 'Dr. Lisa Brown is a pediatric ophthalmologist specializing in strabismus and amblyopia treatment. She has extensive experience in pediatric eye surgery and vision therapy.',
//         education: 'Mayo Medical School, Cincinnati Children\'s Hospital Fellowship',
//         specialties: ['Strabismus Surgery', 'Amblyopia Treatment', 'Pediatric Cataracts', 'Vision Therapy']
//     },
//     'dr-taylor': {
//         name: 'Dr. Robert Taylor',
//         specialty: 'Pediatric Orthopedist',
//         image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
//         experience: '14 years',
//         department: 'Orthopedics',
//         qualifications: 'MD, Board Certified Orthopedic Surgeon, Fellowship in Pediatric Spine Surgery',
//         bio: 'Dr. Robert Taylor is a pediatric orthopedic surgeon with expertise in spine deformities and sports injuries. He has pioneered several minimally invasive techniques for pediatric orthopedic conditions.',
//         education: 'Duke Medical School, Hospital for Special Surgery Fellowship',
//         specialties: ['Scoliosis Surgery', 'Sports Medicine', 'Trauma Surgery', 'Limb Reconstruction']
//     }
// };

// Modal Functions
function openDepartmentModal(departmentId) {
    const data = departmentData[departmentId];
    if (!data) return;
    
    document.getElementById('departmentModalTitle').textContent = data.title;
    document.getElementById('departmentModalBody').innerHTML = data.content;
    
    const modal = new bootstrap.Modal(document.getElementById('departmentModal'));
    modal.show();
}

function openDoctorModal(doctorId) {
    const data = doctorData[doctorId];
    if (!data) return;
    
    document.getElementById('doctorModalTitle').textContent = data.name;
    document.getElementById('doctorModalBody').innerHTML = `
        <div class="row">
            <div class="col-md-4">
                <img src="${data.image}" alt="${data.name}" class="img-fluid rounded mb-3">
                <div class="text-center">
                    <div class="doctor-rating mb-2">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                    </div>
                    <span class="badge bg-primary">${data.department}</span>
                </div>
            </div>
            <div class="col-md-8">
                <h4>${data.specialty}</h4>
                <p class="text-muted mb-3">${data.experience} of experience</p>
                
                <h5>About</h5>
                <p>${data.bio}</p>
                
                <h5>Education</h5>
                <p>${data.education}</p>
                
                <h5>Qualifications</h5>
                <p>${data.qualifications}</p>
                
                <h5>Specialties</h5>
                <ul>
                    ${data.specialties.map(specialty => `<li>${specialty}</li>`).join('')}
                </ul>
                
                <div class="mt-4">
                    <button class="btn btn-primary btn-3d" onclick="scrollToSection('appointment'); bootstrap.Modal.getInstance(document.getElementById('doctorModal')).hide();">
                        <i class="fas fa-calendar-plus me-2"></i>Book Appointment
                    </button>
                </div>
            </div>
        </div>
    `;
    
    const modal = new bootstrap.Modal(document.getElementById('doctorModal'));
    modal.show();
}

// Form Handling
function initializeForms() {
    // Appointment Form
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', handleAppointmentSubmit);
    }
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

function handleAppointmentSubmit(e) {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<span class="loading"></span> Booking...';
    submitBtn.disabled = true;
    
    // Get form data
    const formData = {
        parent_name: document.getElementById('parentName').value,
        email: document.getElementById('email').value,
        child_name: document.getElementById('childName').value,
        child_age: document.getElementById('childAge').value,
        department: document.getElementById('department').value,
        appointment_date: document.getElementById('appointmentDate').value,
        message: document.getElementById('message').value || 'No additional message'
    };
    
    // Send email using EmailJS
    emailjs.send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.appointmentTemplateID,
        formData
    ).then(
        function(response) {
            showMessage('Success!', 'Your appointment request has been submitted successfully. We will contact you soon to confirm your appointment.', 'success');
            e.target.reset();
        },
        function(error) {
            console.error('EmailJS error:', error);
            showMessage('Error', 'There was an error submitting your appointment request. Please try again or call us directly.', 'error');
        }
    ).finally(() => {
        // Restore button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    // Get form data
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        message: document.getElementById('contactMessage').value
    };
    
    // Send email using EmailJS
    emailjs.send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.contactTemplateID,
        formData
    ).then(
        function(response) {
            showMessage('Message Sent!', 'Thank you for contacting us. We will get back to you as soon as possible.', 'success');
            e.target.reset();
        },
        function(error) {
            console.error('EmailJS error:', error);
            showMessage('Error', 'There was an error sending your message. Please try again or call us directly.', 'error');
        }
    ).finally(() => {
        // Restore button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
}

function showMessage(title, message, type) {
    const modal = document.getElementById('messageModal');
    const modalTitle = document.getElementById('messageModalTitle');
    const modalBody = document.getElementById('messageModalBody');
    
    modalTitle.textContent = title;
    modalBody.innerHTML = `
        <div class="alert ${type === 'success' ? 'alert-success' : 'alert-danger'}" role="alert">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'} me-2"></i>
            ${message}
        </div>
    `;
    
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}

// Set minimum date for appointment form
function setMinDate() {
    const dateInput = document.getElementById('appointmentDate');
    if (dateInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const minDate = tomorrow.toISOString().split('T')[0];
        dateInput.setAttribute('min', minDate);
    }
}

// Scroll to Top Button
function initializeScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top btn btn-primary btn-3d';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: none;
        z-index: 1000;
        padding: 0;
        font-size: 1.2rem;
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization for scroll events
const debouncedScrollHandler = debounce(() => {
    // Handle scroll events here if needed
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add ripple effect to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-3d')) {
        const button = e.target;
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Preload images for better performance
function preloadImages() {
    const images = [
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadImages();

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close modals with Escape key
    if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal.show');
        openModals.forEach(modal => {
            const bootstrapModal = bootstrap.Modal.getInstance(modal);
            if (bootstrapModal) {
                bootstrapModal.hide();
            }
        });
    }
});

// Add focus management for accessibility
document.addEventListener('DOMContentLoaded', function() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only sr-only-focusable';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.cssText = `
            position: absolute;
            top: 6px;
            left: 6px;
            width: auto;
            height: auto;
            padding: 8px 16px;
            margin: 0;
            overflow: visible;
            clip: auto;
            background: #000;
            color: #fff;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
        `;
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0,0,0,0);
            border: 0;
        `;
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.id = 'main-content';
        homeSection.setAttribute('tabindex', '-1');
    }
});

console.log('🌈 Rainbow Children\'s Hospital website loaded successfully! 🏥');