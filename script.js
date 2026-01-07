<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Resume Builder</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<nav>
<h2>Smart Resume Builder</h2>
<ul>
<li><a href="index.html">Home</a></li>
<li><a href="resume.html">Build Resume</a></li>
<li><a href="assistant.html">AI Assistant</a></li>
</ul>
</nav>


<div class="container">
<h2>Build Your Resume</h2>
<p>
This page helps you create a professional resume in a simple and guided way.
Enter your basic details, skills, and experience, and our smart system will
generate a clean resume preview instantly.
</p>


<h3>How It Works</h3>
<ul>
<li>Enter your personal details</li>
<li>Add your key skills (technical & soft skills)</li>
<li>Describe your experience or projects</li>
<li>Click on <b>Generate Resume</b> to preview</li>
</ul>


<h3>Enter Your Details</h3>


<input type="text" id="name" placeholder="Full Name">
<input type="text" id="skills" placeholder="Skills (comma separated)">
<textarea id="experience" placeholder="Experience"></textarea>


<button onclick="generateResume()">Generate Resume</button>


<div id="output" class="resume-output"></div>
</div>


<script src="script.js"></script>
</body>
</html>