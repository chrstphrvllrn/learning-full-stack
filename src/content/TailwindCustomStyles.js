import React from 'react'
import CodeBlock from '../components/CodeBlock'

 
function TailwindCustomStyles() {
  return (
    <div>
        
<CodeBlock>{`/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    }
  }`}</CodeBlock>
        
<h1>Adding component classes</h1>        
<CodeBlock language="css">{`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .card {
    background-color: theme('colors.white');
    border-radius: theme('borderRadius.lg');
    padding: theme('spacing.6');
    box-shadow: theme('boxShadow.xl');
  }
  /* ... */
}`}</CodeBlock>
<p>Usage</p>
<CodeBlock>{`<!-- Will look like a card, but with square corners -->
<div class="card rounded-none">
  <!-- ... -->
</div>`}</CodeBlock>

    </div>
  )
}

export default TailwindCustomStyles