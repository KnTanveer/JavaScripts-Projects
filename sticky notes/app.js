const notes = document.querySelectorAll('.note');

notes.forEach((note, index) => {
  note.addEventListener('input', () => {
    localStorage.setItem(`note-${index}`, note.innerText);
  });

  note.innerText = localStorage.getItem(`note-${index}`) || '';
});
