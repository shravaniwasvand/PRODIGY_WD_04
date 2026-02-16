window.onload = function()
{
showSection('home');
};


function showSection(sectionId)
{

document.getElementById("home").style.display = "none";
document.getElementById("about").style.display = "none";
document.getElementById("skills").style.display = "none";
document.getElementById("projects").style.display = "none";
document.getElementById("education").style.display = "none";
document.getElementById("contact").style.display = "none";

document.getElementById(sectionId).style.display = "block";

}

function downloadResume()
{
alert("Resume is downloading...");
}

function sendMessage(event)
{
event.preventDefault();
alert("Message sent successfully!");
}


