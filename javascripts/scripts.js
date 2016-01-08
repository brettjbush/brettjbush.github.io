function hamburgerToggle()
{
  var hamburgerIcon = document.getElementById('hamburger-dropdown');

  if( hamburgerIcon.display == block )
  {
    hamburgerIcon.display = none;
  }
  else {
    hamburgerIcon.display = block;
  }

}
