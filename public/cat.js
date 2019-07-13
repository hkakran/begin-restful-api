export default function cat({key, url, selector}) {
  
  return `<li>
    ${key}
    ${url}
    ${selector}
    <button 
      data-action=destroy 
      data-key=${key}>destroy</button>
  </li>`
}
