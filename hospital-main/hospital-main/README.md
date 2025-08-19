# 🌈 Andhra Children's Hospital Website

A modern, responsive Andhra Children's Hospital website built with HTML, CSS, JavaScript, and Bootstrap. Features beautiful animations, 3D hover effects, and smooth transitions designed to create a welcoming experience for families.

## ✨ Features

### 🏠 Home Section
- **Auto-rotating carousel** with 3-second intervals
- **Smooth fade-in/slide animations**
- **Bright, cheerful color scheme** (light blue, pastel green, soft yellow, white)
- **3D hover effects** on buttons and elements

### ℹ️ About Us Section
- **Modal-style layout** with image and text side-by-side
- **Mission & Vision cards** with hover effects and glow borders
- **Animated statistics** showing years of experience, doctors, and happy families

### 🛎️ Services Section
- **Grid layout** of hospital services (Pediatric Care, Vaccinations, Dental, Cardiology, Eye Check-up, Emergency Care)
- **Animated icons** for each service
- **"Why Choose Us" section** with stylish animated bullet points and hover glow

### 🏥 Departments Section
- **Interactive department cards** (Pediatrics, Dentistry, Cardiology, Ophthalmology, Neurology, Orthopedics)
- **Click to open detailed modals** with comprehensive department information
- **3D hover effects** and smooth transitions

### 👨‍⚕️ Doctors Section
- **Doctor profile cards** with photos, names, and specialties
- **Click to open detailed modals** with doctor information, experience, qualifications, and specialties
- **5-star rating displays** and department tags

### 📅 Appointment Booking
- **Comprehensive form** with fields for parent name, email, child's name/age, department selection, and preferred date
- **EmailJS integration** for sending appointment requests
- **Success/failure popup modals**
- **Modern, kid-friendly design** with 3D button effects

### 📞 Contact Form
- **Contact form** with name, email, and message fields
- **EmailJS integration** for sending messages
- **Success/failure popup notifications**
- **Contact information display** with address, phone, email, and hours

## 🎨 Design Features

### Theme & Colors
- **Dark hospital theme** with deep navy (#2c3e50) and dark purple (#34495e)
- **Bright accent colors**: mint green (#1abc9c), light blue (#3498db), soft pink (#e91e63)
- **Gradient backgrounds** for modern visual appeal

### Typography
- **Primary font**: Poppins (clean, modern)
- **Heading font**: Fredoka (playful, child-friendly)
- **Responsive text sizing** for all devices

### Animations & Effects
- **Navbar links**: Underline glow animation on hover
- **Buttons**: Ripple effect and 3D press animation
- **Cards**: Lift and shadow glow on hover
- **Smooth scroll transitions** between sections
- **Fade-in, slide-up, and zoom animations** triggered by scroll

### 📱 Responsive Design
- **Mobile-first approach** with collapsible navbar
- **Stacked layouts** on mobile devices
- **Grid layouts** with proper spacing on desktop
- **Touch-friendly** button sizes and interactions

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN resources)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Or serve using the included Python server:
   ```bash
   python3 server.py
   ```

### EmailJS Setup
To enable the contact and appointment forms, you need to set up EmailJS:

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/)

2. **Create a service** (Gmail, Outlook, etc.)

3. **Create email templates**:
   - **Appointment Template** with variables: `{{parent_name}}`, `{{email}}`, `{{child_name}}`, `{{child_age}}`, `{{department}}`, `{{appointment_date}}`, `{{message}}`
   - **Contact Template** with variables: `{{name}}`, `{{email}}`, `{{message}}`

4. **Update the configuration** in `script.js`:
   ```javascript
   const EMAILJS_CONFIG = {
       serviceID: 'YOUR_SERVICE_ID',
       appointmentTemplateID: 'YOUR_APPOINTMENT_TEMPLATE_ID',
       contactTemplateID: 'YOUR_CONTACT_TEMPLATE_ID',
       publicKey: 'YOUR_PUBLIC_KEY'
   };
   ```

## 📁 File Structure
```
project/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── server.py           # Python development server
└── README.md           # This file
```

## 🌟 Key Features Implemented

### ✅ Technical Requirements Met
- ✅ **Pure HTML, CSS, JavaScript** (no React, Python backend)
- ✅ **Bootstrap integration** for responsive grid system
- ✅ **Modern, responsive design** (mobile + desktop)
- ✅ **3D hover effects** on cards, buttons, and icons
- ✅ **Smooth scroll animations** (fade, zoom, slide)
- ✅ **3-second auto-rotating carousel**
- ✅ **EmailJS integration** for form submissions
- ✅ **Modal popups** for departments and doctors
- ✅ **Success/failure message handling**

### ✅ Design Requirements Met
- ✅ **Child-friendly color scheme** with bright, cheerful colors
- ✅ **Professional yet playful typography**
- ✅ **Comprehensive navigation** with smooth scrolling
- ✅ **Interactive elements** with hover effects
- ✅ **Accessibility features** (keyboard navigation, focus management)
- ✅ **Performance optimizations** (image preloading, debounced scroll events)

## 🎯 Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Features
- **Responsive navigation** with hamburger menu
- **Touch-friendly interactions**
- **Optimized layouts** for small screens
- **Fast loading** with optimized images
- **Smooth scrolling** on mobile devices

## 🔧 Customization
- **Colors**: Update CSS variables in `:root` selector
- **Images**: Replace Unsplash URLs with your own images
- **Content**: Modify text content in HTML
- **Animations**: Adjust timing and effects in CSS
- **EmailJS**: Configure with your own service credentials

## 🏥 Perfect for Andhra Children's Hospitals
This website template is specifically designed for Andhra Children's Hospitals and pediatric clinics, featuring:
- **Welcoming, non-intimidating design**
- **Easy appointment booking**
- **Comprehensive service information**
- **Doctor profiles with credentials**
- **Mobile-friendly for busy parents**
- **Professional yet approachable aesthetic**

## 📞 Support
For questions or customization requests, please refer to the code comments or create an issue in the repository.

---

**Made with 💖 for children's health and happiness!** 🌈🏥