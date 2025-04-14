// Predefined word sets
const pronouns = ['i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them', 'my', 'your', 'his', 'its', 'our', 'their'];
const prepositions = ['in', 'on', 'at', 'by', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'for', 'of', 'off', 'over', 'under'];
const articles = ['a', 'an'];


function analyzeText() {
  const text = document.getElementById('textInput').value;
  const outputDiv = document.getElementById('output');

  const letters = (text.match(/[a-zA-Z]/g) || []).length;
  const words = (text.trim().match(/\b\w+\b/g) || []).length;
  const spaces = (text.match(/ /g) || []).length;
  const newlines = (text.match(/\n/g) || []).length;
  const specialSymbols = (text.match(/[^\w\s]/g) || []).length;

  const tokens = text.toLowerCase().match(/\b\w+\b/g) || [];

  const countGrouped = (groupList) => {
    const count = {};
    tokens.forEach(token => {
      if (groupList.includes(token)) {
        count[token] = (count[token] || 0) + 1;
      }
    });
    return count;
  };

  const pronounCount = countGrouped(pronouns);
  const prepositionCount = countGrouped(prepositions);
  const articleCount = countGrouped(articles);

  const formatCount = (countObj) => {
    return Object.entries(countObj)
      .map(([k, v]) => `<li>${k}: ${v}</li>`)
      .join('') || '<li>None</li>';
  };

  // Output HTML
  let html = `
    <h3>Character & Symbol Counts:</h3>
    <ul>
      <li><strong>Letters:</strong> ${letters}</li>
      <li><strong>Words:</strong> ${words}</li>
      <li><strong>Spaces:</strong> ${spaces}</li>
      <li><strong>Newlines:</strong> ${newlines}</li>
      <li><strong>Special Symbols:</strong> ${specialSymbols}</li>
    </ul>

    <br>

    <h3>Pronouns Used:</h3>
    <ul>${formatCount(pronounCount)}</ul>

    <br>

    <h3>Prepositions Used:</h3>
    <ul>${formatCount(prepositionCount)}</ul>

    <br>

    <h3>Indefinite Articles Used:</h3>
    <ul>${formatCount(articleCount)}</ul>
  `;

  outputDiv.innerHTML = html;
}

