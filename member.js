function skillsMember() {
    var skills = document.getElementById('skills');
    var skillsMember = document.getElementById('skills-member');
    var skillsMemberClose = document.getElementById('skills-member-close');

    skills.addEventListener('click', function() {
        skillsMember.style.display = 'block';
    });

    skillsMemberClose.addEventListener('click', function() {
        skillsMember.style.display = 'none';
    });
}