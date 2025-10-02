"use client";

// This script runs before React hydration to prevent theme flash
export function ThemeScript() {
  const themeScript = `
    (function() {
      function getInitialTheme() {
        try {
          const savedTheme = localStorage.getItem('theme');
          if (savedTheme === 'light' || savedTheme === 'dark') {
            return savedTheme;
          }
        } catch (error) {
          // Handle localStorage access errors
          console.warn('Could not access localStorage:', error);
        }
        
        // Fall back to system preference
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
          ? 'dark' 
          : 'light';
      }
      
      const theme = getInitialTheme();
      const root = document.documentElement;
      
      if (theme === 'dark') {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
      
      // Set a data attribute to help with SSR consistency
      root.setAttribute('data-theme', theme);
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      suppressHydrationWarning
    />
  );
}
