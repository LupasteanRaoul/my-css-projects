# Café Delight - CSS Mastery Project

[![View Live](https://img.shields.io/badge/view-live-brightgreen)](https://lupasteanraoul.github.io/my-css-projects/cafe-delight/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<div align="center">
  <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Café Delight Preview" width="800" style="border-radius: 10px; margin: 20px 0;">
</div>

## 🌐 **View Live**
➡️ **[Click here to view the live demo](https://lupasteanraoul.github.io/my-css-projects/cafe-delight/)**

> *Note: This project is part of my CSS portfolio. The live demo is hosted on GitHub Pages.*

## 📖 **Project Overview**

**Café Delight** is a responsive coffee shop menu designed as a **CSS showcase project**. The focus is on demonstrating advanced CSS techniques, modern layout methods, and responsive design principles while creating a functional, beautiful user interface.

This project is part of my **[my-css-projects](https://github.com/LupasteanRaoul/my-css-projects)** repository, which contains multiple CSS-focused projects.

## 🎨 **CSS Features & Techniques**

### **🎯 Core CSS Concepts Demonstrated**

| Feature | Implementation | Purpose |
|---------|---------------|---------|
| **CSS Grid** | `.menu-container`, `.item-grid` | Advanced two-dimensional layouts |
| **Flexbox** | `.header`, `.item`, `.footer-content` | One-dimensional alignment and distribution |
| **CSS Variables** | `:root` custom properties | Consistent theming and easy customization |
| **Modern Selectors** | Attribute, pseudo-classes | Precise element targeting |
| **Animations & Transitions** | `@keyframes`, `transition` | Smooth user interactions |

### **📱 Responsive Design System**
- **Mobile-first approach** with progressive enhancement
- **Four breakpoints**: 480px, 768px, 1100px, 1400px
- **Fluid typography** using `clamp()` and relative units
- **Responsive images** with `object-fit` and flexible dimensions
- **Adaptive layouts** using CSS Grid and Flexbox

### **🎨 Advanced Styling Techniques**
- **Complex gradients** for backgrounds and buttons
- **Box-shadow layers** for depth and elevation
- **Backdrop-filter blur** for glass-morphism effects
- **CSS transforms** for hover animations
- **Custom scrollbar** styling
- **Print styles** for physical menu printing

## ✨ **Key Features**

### **Interactive Components**
- **Category filtering** - Show/hide menu sections with CSS and JavaScript
- **Digital loyalty card** - Track purchases with visual stamps
- **Hover effects** - Elevate cards and buttons on interaction
- **Click feedback** - Visual feedback for user actions

### **User Experience**
- **Responsive navigation** - Adapts to all screen sizes
- **Accessible design** - Proper contrast and semantic HTML
- **Loading animations** - Fade-in effects for content
- **Smooth scrolling** - Enhanced navigation experience

### **Business Features**
- **Real menu structure** - Categorized items with descriptions
- **Pricing display** - Clear, prominent pricing
- **Contact information** - Complete business details
- **Social media integration** - Links to social platforms

## 🛠️ **Technologies Used**

| Technology | Purpose | CSS Features Demonstrated |
|------------|---------|----------------------------|
| **HTML5** | Semantic structure | Semantic tags, accessibility |
| **CSS3** | Styling and layout | Grid, Flexbox, Variables, Animations |
| **JavaScript** | Interactivity | DOM manipulation, event handling |
| **Font Awesome** | Icons | Icon integration and styling |
| **Google Fonts** | Typography | Custom font loading and pairing |

## 🚀 **How to View/Run**

### **Option 1: View Live (Easiest)**
1. Visit: [https://lupasteanraoul.github.io/my-css-projects/cafe-delight/](https://lupasteanraoul.github.io/my-css-projects/cafe-delight/)
2. No installation required

### **Option 2: Run Locally**
1. Clone the repository:
   ```bash
   git clone https://github.com/LupasteanRaoul/my-css-projects.git
   ```
2. Navigate to the project:
   ```bash
   cd my-css-projects/cafe-delight
   ```
3. Open `index.html` in your browser

### **Option 3: VS Code Live Server**
1. Open the project in VS Code
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

## 📁 **Project Structure**

```
cafe-delight/
├── index.html          # Main HTML file (semantic structure)
├── styles.css          # All CSS styles (1,000+ lines of CSS)
└── README.md          # This documentation file
```

## 🎯 **CSS File Breakdown**

The `styles.css` file is organized into sections:

### **1. Base Styles**
- CSS Custom Properties (variables)
- CSS Reset and global styles
- Typography system
- Color palette definitions

### **2. Layout System**
- CSS Grid containers and items
- Flexbox alignment utilities
- Positioning strategies
- Spacing system

### **3. Component Styles**
- Navigation and header
- Menu cards and items
- Sidebar components
- Footer sections

### **4. Interactive States**
- Hover and focus states
- Active and disabled states
- Animation keyframes
- Transition timing functions

### **5. Responsive Design**
- Mobile-first breakpoints
- Adaptive layouts
- Responsive typography
- Touch-friendly targets

### **6. Utility Classes**
- Visibility helpers
- Spacing utilities
- Color utilities
- Display utilities

## 📱 **Responsive Design Details**

### **Breakpoint Strategy**
- **Mobile**: 0-480px (portrait phones)
- **Tablet**: 481px-768px (landscape phones, small tablets)
- **Desktop**: 769px-1200px (tablets, small desktops)
- **Large Desktop**: 1201px+ (large screens)

### **Adaptive Components**
- **Navigation**: Hamburger menu on mobile, full nav on desktop
- **Grid Layout**: Single column on mobile, multi-column on desktop
- **Typography**: Fluid scaling based on viewport width
- **Images**: Responsive sizing and art direction

## 🎨 **Design System**

### **Color Palette**
```css
:root {
    --primary-brown: #8B4513;    /* Main brand color */
    --light-brown: #D2691E;      /* Secondary color */
    --cream: #FFF8DC;            /* Background color */
    --dark-cream: #F5E6D3;       /* Card backgrounds */
    --accent-gold: #D4AF37;      /* Accent color */
    --dark-chocolate: #3C2A21;   /* Text color */
}
```

### **Typography Scale**
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Scale**: Modular scale with 1.25 ratio
- **Line heights**: 1.2 for headings, 1.6 for body

### **Spacing System**
- **Base unit**: 8px
- **Scale**: 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
- **Container widths**: 100%, 540px, 720px, 960px, 1140px, 1400px

## 🔧 **Customization Guide**

### **Change Colors**
```css
/* In styles.css, update these variables */
:root {
    --primary-brown: #your-color;
    --cream: #your-background;
    --accent-gold: #your-accent;
}
```

### **Modify Layout**
```css
/* Adjust grid columns */
.item-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

/* Change spacing */
.menu-container {
    gap: 40px; /* Increase/decrease gap */
}
```

### **Add New Menu Items**
1. Copy an existing `.item` article
2. Update the content inside
3. The CSS will automatically style it consistently

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 **Author**

**Raul Lupastean** - Front-End Developer

- GitHub: [@LupasteanRaoul](https://github.com/LupasteanRaoul)
- Portfolio: [Coming Soon]
- LinkedIn: [Raul Lupastean](https://www.linkedin.com/in/raul-lupastean-a66705244/)

## 🙏 **Acknowledgments**

- [Unsplash](https://unsplash.com) for high-quality images
- [Font Awesome](https://fontawesome.com) for the comprehensive icon set
- [Google Fonts](https://fonts.google.com) for excellent typography
- [GitHub](https://github.com) for free hosting via GitHub Pages
- The CSS-Tricks community for layout inspiration

## 📚 **Learning Resources**

This project demonstrates concepts from:
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

## 🔗 **Project Links**

- **Live Demo**: [https://lupasteanraoul.github.io/my-css-projects/cafe-delight/](https://lupasteanraoul.github.io/my-css-projects/cafe-delight/)
- **Source Code**: [https://github.com/LupasteanRaoul/my-css-projects/tree/main/cafe-delight](https://github.com/LupasteanRaoul/my-css-projects/tree/main/cafe-delight)
- **All CSS Projects**: [https://github.com/LupasteanRaoul/my-css-projects](https://github.com/LupasteanRaoul/my-css-projects)

---

<div align="center">
  <sub>Built with ❤️ and advanced CSS techniques</sub><br>
  <sub>Part of the my-css-projects portfolio | View all projects in the repository</sub>
</div>
```

**Copy the entire block above and paste it into a file called `README.md` in your cafe-delight folder.**