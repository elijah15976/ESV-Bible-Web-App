let menuOpen = false;

function toggleSideMenu(){
  let rotation = menuOpen ? "0deg" : "180deg";
  let menuStyle = menuOpen ? "-1 * (300px + 2vw)" : "0px";
  document.getElementById("call-menu").setAttribute("style", `transform: rotate(${rotation})`);
  document.getElementById("entire-sideMenu").setAttribute("style", `margin-left:calc(${menuStyle}) !important`);
  menuOpen = !menuOpen;
}