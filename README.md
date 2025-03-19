

    <h1>🌐 Understanding the DOM (Document Object Model)</h1>

    <h2>📌 What is the DOM?</h2>
    <p>The <strong>Document Object Model (DOM)</strong> is a programming interface for web documents. It represents the page structure as a tree of objects that can be manipulated using JavaScript.</p>

    <h2>🛠️ Key Concepts</h2>
    <ul>
        <li><strong>Nodes and Elements:</strong> Everything in the DOM is a node (HTML elements, attributes, text).</li>
        <li><strong>DOM Manipulation:</strong> JavaScript allows you to dynamically update content, structure, and styles.</li>
        <li><strong>Event Handling:</strong> Add interactivity using event listeners.</li>
    </ul>

    <h2>💻 Basic DOM Methods</h2>
    <ul>
        <li><code>document.getElementById("id")</code> - Selects an element by ID.</li>
        <li><code>document.querySelector("selector")</code> - Selects the first matching element.</li>
        <li><code>document.querySelectorAll("selector")</code> - Selects all matching elements.</li>
        <li><code>element.innerHTML</code> - Modifies the HTML content inside an element.</li>
        <li><code>element.style.property</code> - Changes the CSS styling dynamically.</li>
        <li><code>element.addEventListener("event", function)</code> - Attaches an event listener to an element.</li>
    </ul>

    <h2>🚀 Example: Changing Text Using JavaScript</h2>
    <pre>
    &lt;button onclick="changeText()"&gt;Click Me&lt;/button&gt;
    &lt;p id="demo"&gt;Hello, World!&lt;/p&gt;
    &lt;script&gt;
        function changeText() {
            document.getElementById("demo").innerHTML = "Text Changed!";
        }
    &lt;/script&gt;
    </pre>

    <h2>🌱 Learn More</h2>
    <p>Mastering the DOM is essential for creating dynamic web applications. Keep exploring and experimenting! 🚀</p>

